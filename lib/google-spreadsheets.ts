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

  const data = (await res.json()) as any
  if (!data.access_token) {
    throw new Error("Failed to get access token")
  }
  return data.access_token
}

// Function to create Google Sheets service (focused on GET and POST)
export function createGoogleSheetsService() {
  const spreadsheetId = getEnvVar("GOOGLE_SPREADSHEET_ID")

  return {
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
          console.error("Failed to append rows:", errorData)
          throw new Error("Failed to append to Google Sheet")
        }

        console.log("Successfully appended rows")
        return await res.json()
      } catch (error) {
        console.error(`Error appending to Google Sheet "${sheetName}":`, error)
        throw error
      }
    },

    // GET: Fetch data from a sheet
    fetchSheet: async (sheetName: string) => {
      try {
        const accessToken = await getAccessToken()
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(`${sheetName}!A:Z`)}`

        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })

        const data = (await res.json()) as any

        if (data.error) {
          console.error("Google Sheets API error:", data.error)
          throw new Error(`Google Sheets API error: ${data.error.message}`)
        }

        const rows = data.values || []
        if (rows.length === 0) {
          console.warn("No data found in sheet.")
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
        console.error(`Error fetching from Google Sheet "${sheetName}":`, error)
        throw error
      }
    },
  }
}
