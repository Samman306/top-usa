export type Location = {
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
  data: Location[] | null;
  timestamp: number;
  expiresIn: number; // Cache expiration in milliseconds
} = {
  data: null,
  timestamp: 0,
  expiresIn: 5 * 60 * 1000, // 5 minutes cache
};

// Fallback location data in case API completely fails
const fallbackLocation: Location = {
  city: "Prairie Ridge",
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
  slug: "prairie-ridge"
};

// Function to fetch locations from the Google Spreadsheet API with caching
export async function fetchLocationsFromAPI(forceRefresh = false): Promise<Location[]> {
  // Check if we have valid cached data
  const now = Date.now();
  if (
    !forceRefresh && 
    locationCache.data && 
    locationCache.data.length > 0 && 
    now - locationCache.timestamp < locationCache.expiresIn
  ) {
    console.log(`Using cached location data (${locationCache.data.length} locations)`)
    return locationCache.data;
  }

  // During static generation (build time), we need to use the API directly
  const isServer = typeof window === 'undefined';
  const isBuildTime = process.env.NODE_ENV === 'production' && isServer;
  
  if (isBuildTime) {
    console.log('Build time detected, fetching from API directly');
    const apiUrl = 'https://v0-lighthouse-law-clone.vercel.app';
    const apiEndpoint = `${apiUrl}/api/google-spreadsheet?sheetName=Cities`;
    
    try {
      const response = await fetch(apiEndpoint);
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }
      const data = await response.json();
      if (data.success && Array.isArray(data.data)) {
        return data.data.map((loc: any) => ({
          city: loc.city || '',
          state_id: loc.state_id || '',
          county_fips: loc.county_fips || '',
          county_name: loc.county_name || '',
          population: loc.population || '',
          zips: loc.zips || '',
          avg_commute_time_minutes: loc.avg_commute_time_minutes || '',
          estimated_annual_accidents: loc.estimated_annual_accidents || '',
          nearby_hospitals: loc.nearby_hospitals || '',
          secondary_keyword: loc.secondary_keyword || '',
          traffic_congestion_level: loc.traffic_congestion_level || '',
          main_courthouse: loc.main_courthouse || '',
          most_dangerous_road: loc.most_dangerous_road || '',
          main_hospital: loc.main_hospital || '',
          top_dangerous_intersections: loc.top_dangerous_intersections || '',
          fatal_crashes_last_year: loc.fatal_crashes_last_year || '',
          peak_accident_times: loc.peak_accident_times || '',
          ambulance_response_time_min: loc.ambulance_response_time_min || '',
          closest_trauma_center: loc.closest_trauma_center || '',
          uninsured_driver_pct: loc.uninsured_driver_pct || '',
          personal_injury_case_filings: loc.personal_injury_case_filings || '',
        }));
      }
    } catch (error) {
      console.error('Error fetching from API during build:', error);
      return [fallbackLocation];
    }
    return [fallbackLocation];
  }

  try {
    console.log('Fetching fresh location data from API')
    // In browser or dev environment, we can make API requests
    // Use absolute URL to prevent 'Invalid URL' errors during static generation
    let apiUrl: string;
    
    // Handle different environments
    if (typeof window !== 'undefined') {
      // Browser environment - use window.location.origin
      apiUrl = `${window.location.origin}/api/google-spreadsheet?sheetName=Keypoints`;
    } else {
      // Server environment - use absolute URL with a fallback
      // During static generation, this might be skipped due to the isBuildTime check above
      apiUrl = 'https://v0-lighthouse-law-clone.vercel.app/api/google-spreadsheet?sheetName=Keypoints';
    }
    
    console.log(`Fetching from API URL: ${apiUrl}`);
    const response = await fetch(apiUrl)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch locations from API: ${response.status} ${response.statusText}`)
    }
    
    const data = await response.json()
    
    if (data.success && data.data && data.data.length > 0) {
      // Map the API response to our Location type
      const locations = data.data.map((loc: any) => ({
        city: loc.city || '',
        state_id: loc.state_id || '',
        county_fips: loc.county_fips || '',
        county_name: loc.county_name || '',
        population: loc.population || '',
        zips: loc.zips || '',
        avg_commute_time_minutes: loc.avg_commute_time_minutes || '',
        estimated_annual_accidents: loc.estimated_annual_accidents || '',
        nearby_hospitals: loc.nearby_hospitals || '',
        secondary_keyword: loc.secondary_keyword || '',
        traffic_congestion_level: loc.traffic_congestion_level || '',
        main_courthouse: loc.main_courthouse || '',
        most_dangerous_road: loc.most_dangerous_road || '',
        main_hospital: loc.main_hospital || '',
        top_dangerous_intersections: loc.top_dangerous_intersections || '',
        fatal_crashes_last_year: loc.fatal_crashes_last_year || '',
        peak_accident_times: loc.peak_accident_times || '',
        ambulance_response_time_min: loc.ambulance_response_time_min || '',
        closest_trauma_center: loc.closest_trauma_center || '',
        uninsured_driver_pct: loc.uninsured_driver_pct || '',
        personal_injury_case_filings: loc.personal_injury_case_filings || '',
      }));
      
      // Update cache
      locationCache = {
        data: locations,
        timestamp: now,
        expiresIn: locationCache.expiresIn
      };
      
      console.log(`Fetched and cached ${locations.length} locations from API`)
      return locations;
    }
    
    throw new Error('No location data found in API response')
  } catch (error) {
    console.error('Error fetching locations from API:', error)
    
    // If we have cached data, use it even if it's expired
    if (locationCache.data && locationCache.data.length > 0) {
      console.log('Using expired cached location data as fallback')
      return locationCache.data;
    }
    
    // Last resort fallback - return a single fallback location
    console.log('No cached data available, using single fallback location')
    return [fallbackLocation];
  }
}

// Get all locations from API with caching
export async function getAllLocations(forceRefresh = false): Promise<Location[]> {
  return fetchLocationsFromAPI(forceRefresh);
}

// Get location by slug directly from API with caching
export async function getLocationBySlugFromAPI(slug: string): Promise<Location | null> {
  if (!slug) {
    console.error("No slug provided to getLocationBySlugFromAPI")
    return null
  }  

  // Normalize the input slug
  const normalizedSlug = decodeURIComponent(slug).toLowerCase().replace(/\s+/g, "-")
  
  // During static generation (build time), we can't make API requests to our own endpoints
  const isServer = typeof window === 'undefined';
  const isBuildTime = process.env.NODE_ENV === 'production' && isServer;
  
  // Special handling for build time to prevent 404s
  if (isBuildTime) {
    console.log(`Build time detected in getLocationBySlugFromAPI for slug: ${normalizedSlug}`)
    // If the slug matches our fallback location, return it
    if (normalizedSlug === fallbackLocation.slug) {
      return fallbackLocation;
    }
    // For other slugs during build time, return a modified version of the fallback
    // This ensures pages are generated for all potential routes
    return {
      ...fallbackLocation,
      city: normalizedSlug.charAt(0).toUpperCase() + normalizedSlug.slice(1).replace(/-/g, ' '),
      slug: normalizedSlug
    };
  }
  
  // For runtime or development, use cached data if available
  try {
    const apiLocations = await getAllLocations()
    
    if (apiLocations && apiLocations.length > 0) {
      // Find location with matching slug
      const location = apiLocations.find(location => location.slug === normalizedSlug);
      if (location) {
        return location;
      }
    }
    
    // If we reach here, no location was found
    console.error(`No location found for slug: ${normalizedSlug}`)
    return null;
  } catch (error) {
    console.error(`Error in getLocationBySlugFromAPI for slug ${normalizedSlug}:`, error);
    return null;
  }
}

// Get locations by county from API with caching
export async function getLocationsByCountyFromAPI(county: string): Promise<Location[]> {
  try {
    if (!county) {
      console.error("No county provided to getLocationsByCountyFromAPI")
      return []
    }

    // Normalize the county name - convert to lowercase
    const normalizedCounty = county.toLowerCase()
    
    // Use cached locations if available
    const apiLocations = await getAllLocations()
    
    if (apiLocations && apiLocations.length > 0) {
      // Filter locations by county (case-insensitive)
      return apiLocations.filter(
        (location) => location.county_name.toLowerCase() === normalizedCounty
      )
    }
    
    return []
  } catch (error) {
    console.error(`Error fetching locations by county '${county}' from API:`, error)
    return []
  }
}

// Get locations by county using cached data
export async function getLocationsByCounty(county: string): Promise<Location[]> {
  return getLocationsByCountyFromAPI(county)
}

// Get all unique counties from cached data
export async function getAllCounties(): Promise<string[]> {
  try {
    const locations = await getAllLocations()
    const counties = [...new Set(locations.map((location) => location.county_name))]
    return counties.filter(county => county && county.trim() !== '')
  } catch (error) {
    console.error("Error fetching counties:", error)
    return []
  }
}
