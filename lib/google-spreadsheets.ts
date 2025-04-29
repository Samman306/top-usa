import jwt from "jsonwebtoken"
import fetch from "node-fetch"

const GOOGLE_SHEET_SCOPE = "https://www.googleapis.com/auth/spreadsheets"

const getEnvVar = (key: string): string => {
  const value = process.env[key]
  if (!value) throw new Error(`Environment variable ${key} is missing.`)
  return value
}

async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000)
  const privateKey = getEnvVar("GOOGLE_PRIVATE_KEY").replace(/\\n/g, "\n")
  const clientEmail = getEnvVar("GOOGLE_CLIENT_EMAIL")

  const payload = {
    iss: clientEmail,
    scope: GOOGLE_SHEET_SCOPE,
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
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
  if (!data.access_token) throw new Error("Failed to get access token")
  return data.access_token
}

export function createGoogleSheetsService() {
  const spreadsheetId = getEnvVar("GOOGLE_SPREADSHEET_ID")

  const service = {
    getStatesData: async () => {
      try {
        try {
          const statesData = await service.fetchSheet("States")
          if (statesData?.length > 0) return statesData
        } catch (error) {
          console.log("No dedicated States sheet found, falling back to locations data")
        }

        const locationsData = await service.fetchSheet("Locations")
        const stateMap = new Map()
        locationsData.forEach((location: any) => {
          if (location.state_id && location.state_name) {
            stateMap.set(location.state_id, {
              id: location.state_id,
              name: location.state_name,
              abbreviation: location.state_id,
            })
          }
        })

        return Array.from(stateMap.values())
      } catch (error) {
        console.error("Error in getStatesData:", error)
        return []
      }
    },

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

        if (!res.ok) throw new Error("Failed to append to Google Sheet")
        return await res.json()
      } catch (error) {
        throw error
      }
    },

    fetchSheet: async (sheetName: string, stateName?: string) => {
      try {
        const accessToken = await getAccessToken()
        const range = `${sheetName}!A1:D1000000`
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}`

        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        const data = await res.json()
        if ((data as any).error) {
          throw new Error(`Google Sheets API error: ${(data as any).error.message}`)
        }

        const rows = (data as any).values || []
        if (rows.length === 0) return []

        const headers = rows[0]
        return rows.slice(1).map((row: string[]) => {
          return headers.reduce((acc: any, header: string, i: number) => {
            acc[header] = row[i] ?? ""
            return acc
          }, {})
        })
      } catch (error) {
        throw error
      }
    },

    getRowsByCityName: async (sheetName: string, cityName: string) => {
      try {
        const allRows = await service.fetchSheet(sheetName)
        return allRows.filter((row: any) => row.City === cityName)
      } catch (error) {
        throw error
      }
    },

    getKeypoints: async ({ citySlug, city }: { citySlug: string; city: string }) => {
      try {
        const allRows = await service.fetchSheet("Keypoints")
        return allRows.filter(
          (row: any) =>
            row.CitySlug?.toLowerCase() === citySlug.toLowerCase() || row.City?.toLowerCase() === city.toLowerCase(),
        )
      } catch (error) {
        console.error("Error fetching keypoints:", error)
        return []
      }
    },

    getAllPracticeAreas: async () => {
      try {
        return await service.fetchSheet("PracticeAreas")
      } catch (error) {
        console.error("Error fetching practice areas:", error)
        return []
      }
    },

    getStateData: async (stateSlug: string) => {
      try {
        const allStates = await service.fetchSheet("States")
        return allStates.find((s: any) => s.slug === stateSlug)
      } catch (error) {
        console.error("Error fetching state data:", error)
        return null
      }
    },
  }
  return service
}

interface City {
  stateCode?: string
}

export interface KeypointItem {
  Title?: string
  Content: string
  Section?: string
}

export async function getLocationsByState(stateCode: string): Promise<City[]> {
  try {
    const service = createGoogleSheetsService()
    const allLocations = await service.fetchSheet("Locations")
    return allLocations.filter((city: City) => city.stateCode?.toLowerCase() === stateCode.toLowerCase())
  } catch (error) {
    throw error
  }
}

export async function getCitiesByState(stateCode: string): Promise<any[]> {
  try {
    const service = createGoogleSheetsService()
    const allLocations = await service.fetchSheet("Locations")
    return allLocations
      .filter((location: any) => location.state_id?.toLowerCase() === stateCode.toLowerCase())
      .map((location: any) => ({
        id: location.city_id || location.id,
        name: location.city_name || location.name,
        state: location.state_name || location.state,
        stateCode: location.state_id || location.stateCode,
        description: location.description || "",
        population: location.population || "",
        imageUrl: location.image_url || location.imageUrl || "",
      }))
  } catch (error) {
    console.error("Error in getCitiesByState:", error)
    return []
  }
}

export async function getSheetData(sheetName: string) {
  try {
    const service = createGoogleSheetsService()
    return await service.fetchSheet(sheetName)
  } catch (error) {
    console.error(`Error fetching sheet ${sheetName}:`, error)
    return []
  }
}
