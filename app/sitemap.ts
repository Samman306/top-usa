import type { MetadataRoute } from "next"
import { statesList, getTopCitiesByState } from "@/lib/states-data"
import { getAllServiceSlugs } from "@/app/lib/services-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.topusalaw.com"
  const currentDate = new Date()

  // Main routes
  const mainRoutes = [
    "",
    "/about-us",
    "/team",
    "/contact",
    "/locations",
    "/nationwide-coverage",
    "/practice-areas",
    "/services",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }))

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
  ].map((area) => ({
    url: `${baseUrl}/practice-areas/${area}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Services pages
  const servicePages = getAllServiceSlugs().map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // State pages
  const statePages = statesList.map((state) => ({
    url: `${baseUrl}/locations/states/${state.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // City pages
  let cityPages: MetadataRoute.Sitemap = []
  statesList.forEach((state) => {
    const cities = getTopCitiesByState(state.abbreviation)
    const stateCityPages = cities.map((city) => ({
      url: `${baseUrl}/locations/cities/${city.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }))
    cityPages = [...cityPages, ...stateCityPages]
  })

  // City-service pages (using the SEO-friendly format)
  const cityServicePages: MetadataRoute.Sitemap = []
  const services = [
    "personal-injury",
    "car-accidents",
    "truck-accidents",
    "uber-lyft-accidents",
    "work-accidents",
    "construction-accidents",
  ]

  // Add specific city-service pages for major cities
  const majorCities = [
    "los-angeles",
    "san-francisco",
    "new-york",
    "chicago",
    "houston",
    "miami",
    "dallas",
    "phoenix",
    "philadelphia",
    "san-antonio",
  ]

  majorCities.forEach((city) => {
    services.forEach((service) => {
      cityServicePages.push({
        url: `${baseUrl}/${city}-${service}`,
        lastModified: currentDate,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      })
    })
  })

  // Example attorney pages
  const attorneyPages = [
    "alexander-sterling",
    "victoria-chase",
    "jackson-wolf",
    "sophia-rodriguez",
    "marcus-king",
    "olivia-bennett",
    "ethan-drake",
    "isabella-chen",
  ].map((slug) => ({
    url: `${baseUrl}/attorneys/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Success stories
  const successStoryPages = [
    "contract-negotiation-success",
    "intellectual-property-protection",
    "favorable-settlement",
    "business-contract-review",
    "online-defamation-resolution",
    "entertainment-contract-negotiation",
  ].map((slug) => ({
    url: `${baseUrl}/success-stories/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  return [
    ...mainRoutes,
    ...practiceAreas,
    ...servicePages,
    ...statePages,
    ...cityPages,
    ...cityServicePages,
    ...attorneyPages,
    ...successStoryPages,
  ]
}
