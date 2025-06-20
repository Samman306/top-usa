import type { MetadataRoute } from "next"
import { statesList, getTopCitiesByState } from "@/lib/states-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.topusalaw.com"

  // Main routes
  const routes = ["", "/about", "/practice-areas", "/team", "/contact", "/locations"]

  // Practice areas
  const practiceAreas = [
    "personal-injury",
    "car-accidents",
    "truck-accidents",
    "uber-lyft-accidents",
    "work-accidents",
    "construction-accidents",
    "slip-fall-injuries",
    "white-collar-crimes",
    "immigration-law",
    "class-actions",
  ]

  // Generate main routes
  const routeEntries = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Generate practice area routes
  const practiceAreaEntries = practiceAreas.map((area) => ({
    url: `${baseUrl}/practice-areas/${area}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Generate state routes
  const stateEntries = statesList.map((state) => ({
    url: `${baseUrl}/locations/states/${state.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Generate city routes
  let cityEntries: MetadataRoute.Sitemap = []
  statesList.forEach((state) => {
    const cities = getTopCitiesByState(state.abbreviation)
    const stateCityEntries = cities.map((city) => ({
      url: `${baseUrl}/locations/cities/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }))
    cityEntries = [...cityEntries, ...stateCityEntries]
  })

  // Generate city-service routes (using the SEO-friendly format)
  const cityServiceEntries: MetadataRoute.Sitemap = []
  statesList.forEach((state) => {
    const cities = getTopCitiesByState(state.abbreviation)
    cities.forEach((city) => {
      practiceAreas.forEach((service) => {
        cityServiceEntries.push({
          url: `${baseUrl}/${city.slug}-${service}`,
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.7,
        })
      })
    })
  })

  return [...routeEntries, ...practiceAreaEntries, ...stateEntries, ...cityEntries, ...cityServiceEntries]
}

