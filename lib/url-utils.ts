/**
 * Utility functions for URL handling
 */

/**
 * Safely generates a URL for a city page
 */
export function getCityUrl(citySlug: string): string {
  if (!citySlug) return "/locations"

  // Normalize the slug
  const normalizedSlug = citySlug.toLowerCase().trim().replace(/\s+/g, "-")

  return `/locations/cities/${normalizedSlug}`
}

/**
 * Safely generates a URL for a state page
 */
export function getStateUrl(stateSlug: string): string {
  if (!stateSlug) return "/locations"

  // Normalize the slug
  const normalizedSlug = stateSlug.toLowerCase().trim().replace(/\s+/g, "-")

  return `/locations/states/${normalizedSlug}`
}

/**
 * Safely generates a URL for a city-service page (SEO-optimized format)
 */
export function getCityServiceUrl(citySlug: string, serviceSlug: string): string {
  if (!citySlug || !serviceSlug) return "/locations"

  // Normalize the slugs
  const normalizedCitySlug = citySlug.toLowerCase().trim().replace(/\s+/g, "-")
  const normalizedServiceSlug = serviceSlug.toLowerCase().trim().replace(/\s+/g, "-")

  // Use the SEO-optimized format with hyphens instead of slashes
  return `/${normalizedCitySlug}-${normalizedServiceSlug}`
}

/**
 * Validates if a service slug is valid
 */
export function isValidService(serviceSlug: string): boolean {
  const validServices = [
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

  return validServices.includes(serviceSlug.toLowerCase().trim())
}

/**
 * Gets a formatted service name from a slug
 */
export function getServiceNameFromSlug(slug: string): string {
  if (!slug) return ""

  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

