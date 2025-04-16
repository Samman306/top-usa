/**
 * Utility functions for URL handling
 */
import { allPracticeAreas } from "./practice-areas"

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
  // Extract slugs from allPracticeAreas and format them properly
  const validServices = allPracticeAreas.map((area) => {
    // Extract the last part of the slug path which is the actual service slug
    const slug = area.slug.split("/").pop() || ""
    return slug
  })

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

export function unslugifyAndUCWords(slug: string): string {
  if (!slug) return ""
  const words = slug.split("-")
  const ucWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  return ucWords.join(" ")
}
