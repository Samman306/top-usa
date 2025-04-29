import { NextRequest, NextResponse } from "next/server"
import { createGoogleSheetsService, getCitiesByState } from "@/lib/google-spreadsheets"

type City = {
  name: string
  slug: string
  state?: string
  stateCode?: string
  population?: number
  countyName?: string
}

type CitiesResponse = {
  data: City[]
  message?: string
  error?: string
}

export async function GET(request: NextRequest): Promise<NextResponse<CitiesResponse>> {
  try {
    const sheetsService = createGoogleSheetsService()
    const searchParams = request.nextUrl.searchParams
    const state = searchParams.get("state")
    const stateSlug = searchParams.get("stateSlug")

    // If neither state code nor state slug provided, return all cities
    if (!state && !stateSlug) {
      try {
        // Try to get cities from Google Sheets first
        const citiesData = await sheetsService.fetchSheet("Cities")
        return NextResponse.json({ data: citiesData })
      } catch (error) {
        console.error("Error fetching cities from Google Sheets:", error)

        // Fall back to our local data
        return NextResponse.json({
          data: [],
          message: "Unable to fetch cities from Google Sheets. Please provide a state parameter.",
        })
      }
    }

    // If state param provided, use that to filter cities
    if (state) {
      try {
        // Try to get cities from Google Sheets filtered by state
        const cities = await getCitiesByState(state)

        if (cities.length > 0) {
          return NextResponse.json({ data: cities })
        }

        // No cities found in Google Sheets for this state
        return NextResponse.json({
          data: [],
          message: `No cities found for state: ${state}`,
        })
      } catch (error) {
        console.error("Error filtering cities by state:", error)

        // No local data fallback, return empty array with a message
        return NextResponse.json({
          data: [],
          message: "No cities found for the specified state.",
        })
      }
    }

    // If state slug provided, get state data first, then cities
    if (stateSlug) {
      const stateData = await sheetsService.getStateData(stateSlug)

      if (!stateData) {
        return NextResponse.json({ data: [], error: "State not found" }, { status: 404 })
      }

      // Use state abbreviation to get cities
      // Create a new NextRequest with the state parameter
      const stateUrl = new URL(request.url)
      stateUrl.searchParams.set("state", stateData.abbreviation)
      const stateRequest = new NextRequest(stateUrl, {
        headers: request.headers,
      })

      return await GET(stateRequest)
    }

    // Should never reach here due to prior conditionals
    return NextResponse.json({ data: [], error: "Invalid request" }, { status: 400 })
  } catch (error) {
    console.error("Error in cities API:", error)
    return NextResponse.json({ data: [], error: "Failed to fetch cities data" }, { status: 500 })
  }
}
