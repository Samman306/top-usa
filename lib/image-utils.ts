import { imagePaths } from "@/app/lib/image-paths"

export function getStateImage(stateSlug: string): string {
  // Remove any hyphens and convert to lowercase
  const normalizedSlug = stateSlug.replace(/-/g, "").toLowerCase()

  // Check if we have a specific image for this state
  if (normalizedSlug in imagePaths.locations.states) {
    return imagePaths.locations.states[normalizedSlug as keyof typeof imagePaths.locations.states]
  }

  // Return default state image if no specific image exists
  return imagePaths.locations.states.default
}

export function getCityImage(citySlug: string): string {
  // Remove any hyphens and convert to lowercase
  const normalizedSlug = citySlug.replace(/-/g, "").toLowerCase()

  // Check if we have a specific image for this city
  if (normalizedSlug in imagePaths.locations.cities) {
    return imagePaths.locations.cities[normalizedSlug as keyof typeof imagePaths.locations.cities]
  }

  // Return default city image if no specific image exists
  return imagePaths.locations.cities.default
}

export function getMapImage(locationSlug: string): string {
  // For now, we'll just return the default map image
  // In a real implementation, you might have different maps for different locations
  return imagePaths.locations.maps.default
}

