import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

import { createGoogleSheetsService, type KeypointItem } from "@/lib/google-spreadsheets"

const cityResponseSchema = z.object({
  city: z.object({
    name: z.string(),
    slug: z.string(),
    countyName: z.string().optional(),
    population: z.number().optional(),
    yearFounded: z.number().optional(),
    majorLandmarks: z.array(z.string()).optional(),
  }),
  state: z.object({
    name: z.string(),
    slug: z.string(),
    abbreviation: z.string(),
  }),
  keypoints: z.array(
    z.object({
      title: z.string().optional(),
      content: z.string(),
      section: z.string().optional(),
    })
  ).optional(),
  practiceAreas: z.array(
    z.object({
      title: z.string(),
      slug: z.string(),
      description: z.string().optional(),
      icon: z.string().optional(),
    })
  ),
})

export type CityResponse = z.infer<typeof cityResponseSchema>

export async function GET(
  request: NextRequest,
  { params }: { params: { city: string } }
) {
  try {
    // Get city slug from params
    const citySlug = params.city
    
    // Use our Google Sheets service to get city data
    const sheetsService = createGoogleSheetsService()
    
    // Get city data from the Cities sheet by slug
    const citiesData = await sheetsService.fetchSheet("Cities")
    const cityData = citiesData.find((c: any) => 
      c.slug?.toLowerCase() === citySlug.toLowerCase() ||
      c.name?.toLowerCase().replace(/\s+/g, '-') === citySlug.toLowerCase()
    )
    
    if (!cityData) {
      return NextResponse.json(
        { error: "City not found" },
        { status: 404 }
      )
    }
    
    // Get state data using stateCode from city
    const stateCode = cityData.stateCode
    const statesData = await sheetsService.getAllStates()
    const state = statesData.find(s => s.abbreviation === stateCode)
    
    if (!state) {
      return NextResponse.json(
        { error: "State not found for this city" },
        { status: 404 }
      )
    }

    // Get keypoints for this city
    let keypoints = await sheetsService.getKeypoints({
      citySlug: citySlug,
      city: cityData.name
    })
    
    // Format keypoints for the API response according to our response schema
    const formattedKeypoints = keypoints.map((row: KeypointItem) => ({
      title: row.Title || undefined,
      content: row.Content || "",
      section: row.Section || "General",
    }))

    // Group keypoints by section
    const keypointsBySection: Record<string, Array<{ title?: string, content: string, section?: string }>> = {}
    formattedKeypoints.forEach((keypoint) => {
      const section = keypoint.section || "General"
      if (!keypointsBySection[section]) {
        keypointsBySection[section] = []
      }
      keypointsBySection[section].push(keypoint)
    })

    // Get practice areas from Google Sheets
    const practiceAreas = await sheetsService.getAllPracticeAreas()

    // Construct the response
    const response: CityResponse = {
      city: {
        name: cityData.name,
        slug: cityData.slug || citySlug,
        countyName: cityData.countyName,
        population: cityData.population ? Number(cityData.population) : undefined,
        yearFounded: cityData.yearFounded ? Number(cityData.yearFounded) : undefined,
        majorLandmarks: cityData.majorLandmarks ? JSON.parse(cityData.majorLandmarks) : undefined,
      },
      state: {
        name: state.name,
        slug: state.slug,
        abbreviation: state.abbreviation,
      },
      keypoints: formattedKeypoints,
      practiceAreas,
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error("Error processing city data:", error)
    return NextResponse.json(
      { error: "Failed to process city data" },
      { status: 500 }
    )
  }
}
