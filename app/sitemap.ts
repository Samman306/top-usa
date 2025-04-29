import type { MetadataRoute } from "next"
import { allStates } from "@/lib/allstates"

// Simple function to get the last modified date
const getLastModified = () => new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL from environment variable or default
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"

  // Core pages
  const corePages = [
    {
      url: `${baseUrl}`,
      lastModified: getLastModified(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: getLastModified(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: getLastModified(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/practice-areas`,
      lastModified: getLastModified(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: getLastModified(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: getLastModified(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: getLastModified(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/success-stories`,
      lastModified: getLastModified(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nationwide-coverage`,
      lastModified: getLastModified(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]

  // Practice areas
  const practiceAreas = [
    "personal-injury",
    "car-accidents",
    "truck-accidents",
    "uber-lyft-accidents",
    "work-accidents",
    "slip-fall-injuries",
    "construction-accidents",
    "white-collar-crimes",
    "immigration-law",
    "class-actions",
  ].map((area) => ({
    url: `${baseUrl}/practice-areas/${area}`,
    lastModified: getLastModified(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  // Services
  const services = ["personal-injury", "car-accidents", "truck-accidents", "uber-lyft-accidents"].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: getLastModified(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  // State pages - limit to a reasonable number to avoid build issues
  const statePages = allStates.slice(0, 10).map((state) => ({
    url: `${baseUrl}/locations/state/${state.code.toLowerCase()}`,
    lastModified: getLastModified(),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  // Combine all URLs
  return [...corePages, ...practiceAreas, ...services, ...statePages]
}
