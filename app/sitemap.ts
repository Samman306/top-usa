import type { MetadataRoute } from "next"
import { statesList, getTopCitiesByState } from "@/lib/states-data"
import { allPracticeAreas } from "@/lib/practice-areas"

// Limit the number of locations to prevent build timeouts
const MAX_LOCATIONS = 500

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://topusalaw.com"

  // Static routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/success-stories`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/practice-areas`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nationwide-coverage`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]

  // Practice area routes
  const practiceAreaRoutes = allPracticeAreas.map((area) => ({
    url: `${baseUrl}${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // State routes - these are important but not too numerous
  const stateRoutes = statesList.map((state) => ({
    url: `${baseUrl}/locations/states/${state.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // City routes - potentially many, so we'll limit them
  const cityRoutes: MetadataRoute.Sitemap = []
  let cityCount = 0

  // Only include cities for the most important states to avoid build timeouts
  const priorityStates = ["CA", "TX", "FL", "NY", "IL", "PA", "OH", "GA", "NC", "MI"]

  for (const stateAbbr of priorityStates) {
    if (cityCount >= MAX_LOCATIONS) break

    const cities = getTopCitiesByState(stateAbbr)
    const state = statesList.find((s) => s.abbreviation === stateAbbr)

    if (!state || !cities.length) continue

    for (const city of cities) {
      if (cityCount >= MAX_LOCATIONS) break

      cityRoutes.push({
        url: `${baseUrl}/locations/cities/${state.slug}.${city.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })

      cityCount++
    }
  }

  // Combine all routes
  return [...staticRoutes, ...practiceAreaRoutes, ...stateRoutes, ...cityRoutes]
}
