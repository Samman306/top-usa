import type { Metadata } from "next"

import { getLocationBySlugFromAPI, getAllLocations, fetchLocationsFromAPI, type Location } from "@/lib/locations"
import { explode, slugify, slugifyRevert } from 'camote-utils'
import { guessStateForCity } from "@/lib/allstates"
import CityPageClient from "./CityPageClient"

// Fallback location data if API fails
const createFallbackLocation = (slug: string): Location => {
  // Convert slug to city name (e.g., "new-york" to "New York")
  const cityName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
  
  // Try to guess which state this city belongs to using our centralized states system
  const stateInfo = guessStateForCity(slug)
  
  // Default values if we can't determine the state
  const stateId = stateInfo?.id || 'US'
  const stateName = stateInfo?.name || 'United States'
  const countyName = stateInfo?.counties?.[0] || 'County'

  return {
    city: cityName,
    state_id: stateId,
    state_name: stateName,
    county_fips: "00000",
    county_name: countyName,
    population: "100,000",
    zips: "00000",
    avg_commute_time_minutes: "25",
    estimated_annual_accidents: "2,000",
    nearby_hospitals: "Local Hospital",
    secondary_keyword: "legal services",
    traffic_congestion_level: "Moderate",
    main_courthouse: "County Courthouse",
    most_dangerous_road: "Main Highway",
    main_hospital: "Regional Medical Center",
    top_dangerous_intersections: "Main St & Broadway",
    fatal_crashes_last_year: "75",
    peak_accident_times: "4-6 PM",
    ambulance_response_time_min: "8",
    closest_trauma_center: "Regional Hospital",
    uninsured_driver_pct: "15%",
    personal_injury_case_filings: "1,500",
    slug: slug
  }
}

// Generate static params for all cities
export async function generateStaticParams() {
  // Try to get locations from API first
  try {
    const apiLocations = await fetchLocationsFromAPI()
    
    if (apiLocations && apiLocations.length > 0) {
      return apiLocations.map((location: { slug: any }) => ({
        city: location.slug,
      }))
    }
  } catch (error) {
    console.error('Error fetching locations from API for static params:', error)
  }
  
  // Fall back to getAllLocations which includes the fallback mechanism
  const locations = await getAllLocations()
  return locations?.length ? locations.map((location) => ({
    city: location.slug,
  })) : []
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = explode(params?.city, '.')[1]

  if(!city) {
    return {}
  }

  const decodedCity = decodeURIComponent(city)
  
  // Initialize with fallback data to ensure location is always defined
  let location: Location = createFallbackLocation(decodedCity);
  
  try {
    // Use getLocationBySlug which now prioritizes API data
    const apiLocation = await getLocationBySlugFromAPI(decodedCity)
    
    // Use API data if available
    if (apiLocation) {
      location = apiLocation;
    } else {
      console.log(`No location found for ${decodedCity}, using fallback data for metadata`)
    }
  } catch (error) {
    console.error(`Error fetching location for metadata: ${decodedCity}`, error)
    // Already using fallback data initialized above
  }

  // Create a more descriptive meta title and description using location data
  return {
    title: `${location.city} Legal Services | TOP USA LAW`,
    description: `Professional legal services in ${location.city}, ${location.state_name}. Serving ${location.county_name} county with personalized legal representation.`,
    alternates: {
      canonical: `https://topusalaw.com/locations/${location.slug}`,
    },
  }
}

// Type definition for component props
type Props = {
  params: { city: string }
}

// Loading component for fallback state
function CityLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Loading location data...</h2>
        <div className="animate-spin h-10 w-10 border-4 border-yellow-500 border-t-transparent rounded-full mx-auto"></div>
      </div>
    </div>
  );
}

export default async function CityPage({ params }: Props) {
  const city = explode(params?.city, '.')
  const decodedCity = decodeURIComponent(city[1] || '')
  const stateInfo = slugifyRevert(city[0]) || ''
  
  // Initialize with fallback data to ensure location is always defined
  let location: Location = createFallbackLocation(decodedCity);
  
  try {
    // Attempt to fetch location data from API
    const apiLocation = await getLocationBySlugFromAPI(decodedCity);
    
    // Use API data if available
    if (apiLocation) {
      location = apiLocation;
    } 
  } catch (error) {
    console.error(`Error fetching location data for ${decodedCity}`, error)
  }

  if(!location) {
    return <CityLoading />
  }

  return <CityPageClient 
    location={location} 
    citySlug={decodedCity} 
    stateInfo={{
      name: stateInfo,
      slug: slugify(stateInfo)
    }} 
  />
}
