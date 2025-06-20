import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { statesList, getTopCitiesByState } from "@/lib/states-data"

// This function handles redirects for SEO-optimized URLs
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const { pathname } = url

  // Handle location/service redirects to location-service format
  // Example: /los-angeles/car-accident/ → /los-angeles-car-accident/
  const locationServicePattern = /^\/([a-z-]+)\/([a-z-]+)\/?$/
  if (pathname.match(locationServicePattern)) {
    const [, location, service] = pathname.split("/")

    // Validate if this is a service we support
    const isValidService = [
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
    ].includes(service)

    // Check if the location exists in our database
    let locationExists = false
    for (const state of statesList) {
      const cities = getTopCitiesByState(state.abbreviation)
      if (cities.some((c) => c.slug === location)) {
        locationExists = true
        break
      }
    }

    // If both location and service are valid, redirect to the SEO-friendly URL
    if (isValidService && locationExists) {
      return NextResponse.redirect(new URL(`/${location}-${service}`, request.url), 301)
    }
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // Match all paths that look like location/service
    "/:location/:service",
  ],
}

