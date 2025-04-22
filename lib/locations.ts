export type Location = {
  state_name: any
  city: string
  state_id: string
  county_fips: string
  county_name: string
  population?: string
  zips: string
  avg_commute_time_minutes: string
  estimated_annual_accidents: string
  nearby_hospitals: string
  secondary_keyword: string
  traffic_congestion_level: string
  main_courthouse: string
  most_dangerous_road: string
  main_hospital: string
  top_dangerous_intersections: string
  fatal_crashes_last_year: string
  peak_accident_times: string
  ambulance_response_time_min: string
  closest_trauma_center: string
  uninsured_driver_pct: string
  personal_injury_case_filings: string
  slug: string
}

// Cache for location data to prevent repeated API calls
let locationCache: {
  data: Location[] | null
  timestamp: number
  expiresIn: number // Cache expiration in milliseconds
} = {
  data: null,
  timestamp: 0,
  expiresIn: 5 * 60 * 1000, // 5 minutes cache
}

// Fallback location data in case API completely fails
const fallbackLocation: Location = {
  city: "Prairie Ridge",
  state_name: "Washington",
  state_id: "WA",
  county_fips: "53053",
  county_name: "Pierce",
  population: "9836098391",
  zips: "21",
  avg_commute_time_minutes: "35",
  estimated_annual_accidents: "1",
  nearby_hospitals: "Low",
  secondary_keyword: "Pierce County Superior Court",
  traffic_congestion_level: "SR-20",
  main_courthouse: "Prairie Ridge General Hospital",
  top_dangerous_intersections: "Prairie Ridge Main & 1st St, Central Ave, and Oak Blvd",
  fatal_crashes_last_year: "2",
  peak_accident_times: "Evening Rush (4-7PM)",
  ambulance_response_time_min: "14",
  closest_trauma_center: "Prairie Ridge Trauma Center",
  uninsured_driver_pct: "11.4",
  personal_injury_case_filings: "83",
  most_dangerous_road: "",
  main_hospital: "",
  slug: "prairie-ridge",
}

// Function to fetch locations from the Google Spreadsheet API with caching
export async function fetchLocationsFromAPI(forceRefresh = false) {
  // Check if we have valid cached data
  const now = Date.now()
  if (
    !forceRefresh &&
    locationCache.data &&
    locationCache.data.length > 0 &&
    now - locationCache.timestamp < locationCache.expiresIn
  ) {
    console.log(`Using cached location data (${locationCache.data.length} locations)`)
    return locationCache.data
  }

  // During static generation (build time), we need to use the API directly
  const isServer = typeof window === "undefined"
  const isBuildTime = process.env.NODE_ENV === "production" && isServer

  if (isBuildTime) {
    const apiUrl = "https://v0-lighthouse-law-clone.vercel.app"
    const apiEndpoint = `${apiUrl}/api/google-spreadsheet?sheet=keypoints`

    try {
      const response = await fetch(apiEndpoint)
      
      let data: any = {};
      try {
        // Check if the content type is JSON before trying to parse
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          data = await response.json();
        } else {
          console.error('API returned non-JSON response. Content-Type:', contentType);
          const textContent = await response.text();
          console.error('Response starts with:', textContent.substring(0, 100));
          throw new Error('API returned non-JSON response');
        }
      } catch (parseError) {
        console.error('Error parsing API response:', parseError);
        throw new Error('Failed to parse API response');
      }
      
      // Different API endpoints might return data in different formats
      // Try to handle both {data: [...]} and direct array format
      const locationsData = Array.isArray(data) ? data : 
                          (data.data && Array.isArray(data.data)) ? data.data : 
                          [];
                          
      if (locationsData.length > 0) {
        return locationsData.map((loc: any) => {
          // Generate slug if not provided
          const cityName = loc.city || "";
          const slug = loc.slug || cityName.toLowerCase().replace(/\s+/g, '-');
          
          return {
          city: loc.city || "",
          state_id: loc.state_id || "",
          county_fips: loc.county_fips || "",
          county_name: loc.county_name || "",
          population: loc.population || "",
          zips: loc.zips || "",
          avg_commute_time_minutes: loc.avg_commute_time_minutes || "",
          estimated_annual_accidents: loc.estimated_annual_accidents || "",
          nearby_hospitals: loc.nearby_hospitals || "",
          secondary_keyword: loc.secondary_keyword || "",
          traffic_congestion_level: loc.traffic_congestion_level || "",
          main_courthouse: loc.main_courthouse || "",
          most_dangerous_road: loc.most_dangerous_road || "",
          main_hospital: loc.main_hospital || "",
          top_dangerous_intersections: loc.top_dangerous_intersections || "",
          fatal_crashes_last_year: loc.fatal_crashes_last_year || "",
          peak_accident_times: loc.peak_accident_times || "",
          ambulance_response_time_min: loc.ambulance_response_time_min || "",
          closest_trauma_center: loc.closest_trauma_center || "",
          uninsured_driver_pct: loc.uninsured_driver_pct || "",
          personal_injury_case_filings: loc.personal_injury_case_filings || "",
          slug: slug
        };
        })
      }
    } catch (error) {
      return [fallbackLocation]
    }
    return [fallbackLocation]
  }

  try {
    // In browser or dev environment, we can make API requests
    // Use absolute URL to prevent 'Invalid URL' errors during static generation
    let apiUrl: string

    // Handle different environments
    if (typeof window !== "undefined") {
      // Browser environment - use window.location.origin
      apiUrl = `${window.location.origin}/api/google-spreadsheet?sheet=keypoints`
    } else {
      // Server environment - use absolute URL with a fallback
      // During static generation, this might be skipped due to the isBuildTime check above
      apiUrl = "https://v0-lighthouse-law-clone.vercel.app/api/google-spreadsheet?sheet=keypoints"
    }

    const response = await fetch(apiUrl)
    
    let data: any = {};
    try {
      // Check if the content type is JSON before trying to parse
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      }
    } catch (error) {
      console.error('Error parsing API response:', error);
      throw new Error('Failed to parse API response');
    }

    // Different API endpoints might return data in different formats
    // Try to handle both {data: [...]} and direct array format
    const locationsData = Array.isArray(data) ? data : 
                        (data.data && Array.isArray(data.data)) ? data.data : 
                        [];
    
    if (locationsData.length > 0) {
      // Map the API response to our Location type
      const locations = locationsData.map((loc: any) => {
        // Generate slug if not provided
        const cityName = loc.city || "";
        const slug = loc.slug || cityName.toLowerCase().replace(/\s+/g, '-');
        
        return {
        city: loc.city || "",
        state_id: loc.state_id || "",
        county_fips: loc.county_fips || "",
        county_name: loc.county_name || "",
        population: loc.population || "",
        zips: loc.zips || "",
        avg_commute_time_minutes: loc.avg_commute_time_minutes || "",
        estimated_annual_accidents: loc.estimated_annual_accidents || "",
        nearby_hospitals: loc.nearby_hospitals || "",
        secondary_keyword: loc.secondary_keyword || "",
        traffic_congestion_level: loc.traffic_congestion_level || "",
        main_courthouse: loc.main_courthouse || "",
        most_dangerous_road: loc.most_dangerous_road || "",
        main_hospital: loc.main_hospital || "",
        top_dangerous_intersections: loc.top_dangerous_intersections || "",
        fatal_crashes_last_year: loc.fatal_crashes_last_year || "",
        peak_accident_times: loc.peak_accident_times || "",
        ambulance_response_time_min: loc.ambulance_response_time_min || "",
        closest_trauma_center: loc.closest_trauma_center || "",
        uninsured_driver_pct: loc.uninsured_driver_pct || "",
        personal_injury_case_filings: loc.personal_injury_case_filings || "",
        slug: slug
      };
      })

      // Update cache
      locationCache = {
        data: locations,
        timestamp: now,
        expiresIn: locationCache.expiresIn,
      }

      return locations
    }

  } catch (error) {
    console.error("Error fetching locations from API:", error)

    // If we have cached data, use it even if it's expired
    if (locationCache.data && locationCache.data.length > 0) {
      return locationCache.data
    }

    // Last resort fallback - return a single fallback location
    return [fallbackLocation]
  }
}

// Get all locations from API with caching
export async function getAllLocations(forceRefresh = false): Promise<Location[]> {
  return fetchLocationsFromAPI(forceRefresh)
}

// Get location by slug directly from API with caching
export async function getLocationBySlugFromAPI(slug: string): Promise<Location | null> {
  if (!slug) {
    return null;
  }

  try {
    const locations = await fetchLocationsFromAPI()
    
    // Create a normalized slug for comparison
    const normalizedSlug = slug.toLowerCase().trim()
    
    // Find the location by slug
    const location = locations.find((loc: any) => {
      // Ensure we have a slug to compare
      const locSlug = loc.slug || (loc.city ? loc.city.toLowerCase().replace(/\s+/g, "-") : "");
      return locSlug === normalizedSlug;
    })
    
    if (location) {
      // Ensure location has a slug property
      return {
        ...location,
        slug: location.slug || location.city.toLowerCase().replace(/\s+/g, "-")
      }
    }
    
    return null
  } catch (error) {
    return null
  }
}

// Get locations by county from API with caching
export async function getLocationsByCountyFromAPI(county: string): Promise<Location[]> {
  try {
    const locations = await fetchLocationsFromAPI()
    
    // Normalize the county name
    const normalizedCounty = county.toLowerCase().trim()
    
    // Filter locations by county
    return locations.filter((loc: any) => 
      loc.county_name.toLowerCase().includes(normalizedCounty)
    )
  } catch (error) {
    return []
  }
}

// Get locations by county using cached data
export async function getLocationsByCounty(county: string): Promise<Location[]> {
  return getLocationsByCountyFromAPI(county)
}
