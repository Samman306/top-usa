import jwt from "jsonwebtoken"
import fetch from "node-fetch"

const GOOGLE_SHEET_SCOPE = "https://www.googleapis.com/auth/spreadsheets"

// Utility function to load environment variables
const getEnvVar = (key: string): string => {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Environment variable ${key} is missing.`)
  }
  return value
}

// Function to generate an access token using JWT for authentication
async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000)
  const privateKey = getEnvVar("GOOGLE_PRIVATE_KEY").replace(/\\n/g, "\n")
  const clientEmail = getEnvVar("GOOGLE_CLIENT_EMAIL")

  const payload = {
    iss: clientEmail,
    scope: GOOGLE_SHEET_SCOPE,
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600, // Token valid for 1 hour
    iat: now,
  }

  const token = jwt.sign(payload, privateKey, { algorithm: "RS256" })

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: token,
    }),
  })

  const data = (await res.json()) as { access_token?: string }
  if (!data.access_token) {
    throw new Error("Failed to get access token")
  }
  return data.access_token
}

// Add a timeout to the fetch requests to prevent hanging
async function fetchWithTimeout(url, options, timeout = 10000) {
  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)

  const response = await fetch(url, {
    ...options,
    signal: controller.signal,
  })

  clearTimeout(id)
  return response
}

// Function to create Google Sheets service (focused on GET and POST)
export function createGoogleSheetsService() {
  const spreadsheetId = getEnvVar("GOOGLE_SPREADSHEET_ID")

  const service = {
    // POST: Append data to a sheet
    appendSheet: async (sheetName: string, values: any[]) => {
      try {
        const accessToken = await getAccessToken()
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}!A1:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`

        const rows = values.map((value) => [
          value.firstName,
          value.lastName,
          value.email,
          value.phone,
          value.service,
          value.message,
          value.submissionDate,
        ])

        const res = await fetch(url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ values: rows }),
        })

        if (!res.ok) {
          const errorData = await res.json()
          throw new Error("Failed to append to Google Sheet")
        }

        return await res.json()
      } catch (error) {
        throw error
      }
    },

    // GET: Fetch data from a sheet
    fetchSheet: async (sheetName: string, stateName?: string) => {
      try {
        const accessToken = await getAccessToken()

        // First, get list of all available sheets to help with debugging and error handling
        let availableSheets: string[] = []
        try {
          const sheetsListUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}`
          const sheetsListRes = await fetchWithTimeout(
            sheetsListUrl,
            { headers: { Authorization: `Bearer ${accessToken}` } },
            5000, // 5 second timeout
          )

          if (sheetsListRes.ok) {
            const sheetsData = (await sheetsListRes.json()) as any
            availableSheets = (sheetsData.sheets || []).map((s: any) => s.properties?.title).filter(Boolean)
          }
        } catch (error) {
          console.warn(`Could not list available sheets: ${error}`)
          // Continue with the process even if this fails
        }

        // Check if the requested sheet exists in the spreadsheet
        if (availableSheets.length > 0 && !availableSheets.includes(sheetName)) {
          console.warn(`Requested sheet "${sheetName}" is not available in this spreadsheet.`)

          // If the requested sheet doesn't exist but we have other sheets, throw a more helpful error
          if (sheetName === "Cities") {
            // If the user is requesting the Cities sheet but it doesn't exist and we have 'Locations'
            if (availableSheets.includes("Locations")) {
              console.log(`The 'Cities' sheet doesn't exist, but 'Locations' does - try that instead`)
              // Continue with 'Locations' instead
            }
          }
        }

        // Use standard Google Sheets API format with proper encoding
        // Fetch only columns A-D with no row limit
        const range = `${sheetName}!A1:D1000000` // Using only columns A-D instead of A-Z
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}`

        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        const data = await res.json()
        if ((data as any).error) {
          throw new Error(`Google Sheets API error: ${(data as any).error.message}`)
        }

        const rows = (data as any).values || []
        if (rows.length === 0) {
          return []
        }
        const headers = rows[0]
        const result = rows.slice(1).map((row: string[]) => {
          return headers.reduce((acc: any, header: string, i: number) => {
            acc[header] = row[i] ?? ""
            return acc
          }, {})
        })
        return result
      } catch (error) {
        throw error
      }
    },

    // GET: Fetch rows from a sheet by city name
    getRowsByCityName: async (sheetName: string, cityName: string) => {
      try {
        const allRows = await service.fetchSheet(sheetName)
        const filteredRows = allRows.filter((row: any) => row.City === cityName)
        return filteredRows
      } catch (error) {
        throw error
      }
    },
  }
  return service
}

// Define the City interface
interface City {
  stateCode?: string
}

// Function to fetch cities by state from Google Sheets
export async function getCitiesByState(stateCode: string): Promise<City[]> {
  try {
    const service = await createGoogleSheetsService()
    const allCities = await service.fetchSheet("Cities")
    return allCities.filter((city: City) => city.stateCode?.toLowerCase() === stateCode.toLowerCase())
  } catch (error) {
    throw error
  }
}
