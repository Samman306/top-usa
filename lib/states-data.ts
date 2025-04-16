export interface State {
  name: string
  abbreviation: string
  slug: string
}

export interface City {
  name: string
  slug: string
  zipCode: string
}

export const statesList: State[] = [
  { name: "Alabama", abbreviation: "AL", slug: "alabama" },
  { name: "Alaska", abbreviation: "AK", slug: "alaska" },
  { name: "Arizona", abbreviation: "AZ", slug: "arizona" },
  { name: "Arkansas", abbreviation: "AR", slug: "arkansas" },
  { name: "California", abbreviation: "CA", slug: "california" },
  { name: "Colorado", abbreviation: "CO", slug: "colorado" },
  { name: "Connecticut", abbreviation: "CT", slug: "connecticut" },
  { name: "Delaware", abbreviation: "DE", slug: "delaware" },
  { name: "Florida", abbreviation: "FL", slug: "florida" },
  { name: "Georgia", abbreviation: "GA", slug: "georgia" },
  { name: "Hawaii", abbreviation: "HI", slug: "hawaii" },
  { name: "Idaho", abbreviation: "ID", slug: "idaho" },
  { name: "Illinois", abbreviation: "IL", slug: "illinois" },
  { name: "Indiana", abbreviation: "IN", slug: "indiana" },
  { name: "Iowa", abbreviation: "IA", slug: "iowa" },
  { name: "Kansas", abbreviation: "KS", slug: "kansas" },
  { name: "Kentucky", abbreviation: "KY", slug: "kentucky" },
  { name: "Louisiana", abbreviation: "LA", slug: "louisiana" },
  { name: "Maine", abbreviation: "ME", slug: "maine" },
  { name: "Maryland", abbreviation: "MD", slug: "maryland" },
  { name: "Massachusetts", abbreviation: "MA", slug: "massachusetts" },
  { name: "Michigan", abbreviation: "MI", slug: "michigan" },
  { name: "Minnesota", abbreviation: "MN", slug: "minnesota" },
  { name: "Mississippi", abbreviation: "MS", slug: "mississippi" },
  { name: "Missouri", abbreviation: "MO", slug: "missouri" },
  { name: "Montana", abbreviation: "MT", slug: "montana" },
  { name: "Nebraska", abbreviation: "NE", slug: "nebraska" },
  { name: "Nevada", abbreviation: "NV", slug: "nevada" },
  { name: "New Hampshire", abbreviation: "NH", slug: "new-hampshire" },
  { name: "New Jersey", abbreviation: "NJ", slug: "new-jersey" },
  { name: "New Mexico", abbreviation: "NM", slug: "new-mexico" },
  { name: "New York", abbreviation: "NY", slug: "new-york" },
  { name: "North Carolina", abbreviation: "NC", slug: "north-carolina" },
  { name: "North Dakota", abbreviation: "ND", slug: "north-dakota" },
  { name: "Ohio", abbreviation: "OH", slug: "ohio" },
  { name: "Oklahoma", abbreviation: "OK", slug: "oklahoma" },
  { name: "Oregon", abbreviation: "OR", slug: "oregon" },
  { name: "Pennsylvania", abbreviation: "PA", slug: "pennsylvania" },
  { name: "Rhode Island", abbreviation: "RI", slug: "rhode-island" },
  { name: "South Carolina", abbreviation: "SC", slug: "south-carolina" },
  { name: "South Dakota", abbreviation: "SD", slug: "south-dakota" },
  { name: "Tennessee", abbreviation: "TN", slug: "tennessee" },
  { name: "Texas", abbreviation: "TX", slug: "texas" },
  { name: "Utah", abbreviation: "UT", slug: "utah" },
  { name: "Vermont", abbreviation: "VT", slug: "vermont" },
  { name: "Virginia", abbreviation: "VA", slug: "virginia" },
  { name: "Washington", abbreviation: "WA", slug: "washington" },
  { name: "West Virginia", abbreviation: "WV", slug: "west-virginia" },
  { name: "Wisconsin", abbreviation: "WI", slug: "wisconsin" },
  { name: "Wyoming", abbreviation: "WY", slug: "wyoming" },
]

// Helper function to get state by slug
export function getStateBySlug(slug: string): State | undefined {
  // Normalize the slug for comparison
  const normalizedSlug = slug?.toLowerCase().trim() || ""

  // Direct match
  const directMatch = statesList.find((state) => state.slug === normalizedSlug)
  if (directMatch) return directMatch

  // Try to match by name
  const nameMatch = statesList.find(
    (state) =>
      state.name.toLowerCase() === normalizedSlug || state.name.toLowerCase().replace(/\s+/g, "-") === normalizedSlug,
  )
  if (nameMatch) return nameMatch

  // Try to match by abbreviation
  const abbrMatch = statesList.find((state) => state.abbreviation.toLowerCase() === normalizedSlug)
  if (abbrMatch) return abbrMatch

  // Default state for testing/development
  return { name: "California", abbreviation: "CA", slug: "california" }
}

// Helper function to get city by slug
export function getCityBySlug(cities: City[], slug: string): City | undefined {
  // Normalize the slug
  const normalizedSlug = slug?.toLowerCase().trim() || ""

  return cities.find((city) => city.slug === normalizedSlug)
}

// Improved findCityState function with better fallbacks
export function findCityState(citySlug: string): { city: City | undefined; state: State | undefined } {
  // Special case for Los Angeles to ensure consistent data
  if (citySlug === "los-angeles" || citySlug === "los-angeles-ca") {
    const defaultState = getStateBySlug("california")
    const defaultCity = {
      name: "Los Angeles",
      slug: "los-angeles",
      zipCode: "90001",
    }
    return { city: defaultCity, state: defaultState }
  }

  // Rest of the function remains the same...
  const normalizedSlug = citySlug?.toLowerCase().trim() || ""

  if (!normalizedSlug) {
    // Default for empty input
    const defaultState = getStateBySlug("california")
    const defaultCity = {
      name: "Los Angeles",
      slug: "los-angeles",
      zipCode: "90001",
    }
    return { city: defaultCity, state: defaultState }
  }

  // First check all states
  for (const state of statesList) {
    const cities = getTopCitiesByState(state.abbreviation)
    const city = cities.find((c) => c.slug === normalizedSlug)
    if (city) {
      return { city, state }
    }
  }

  // If not found, try some common cities with default states
  const commonCities: Record<string, { cityName: string; stateAbbr: string; zipCode: string }> = {
    miami: { cityName: "Miami", stateAbbr: "FL", zipCode: "33101" },
    "los-angeles": { cityName: "Los Angeles", stateAbbr: "CA", zipCode: "90001" },
    "new-york": { cityName: "New York", stateAbbr: "NY", zipCode: "10001" },
    chicago: { cityName: "Chicago", stateAbbr: "IL", zipCode: "60601" },
    houston: { cityName: "Houston", stateAbbr: "TX", zipCode: "77001" },
    "las-vegas": { cityName: "Las Vegas", stateAbbr: "NV", zipCode: "89101" },
    atlanta: { cityName: "Atlanta", stateAbbr: "GA", zipCode: "30301" },
    nashville: { cityName: "Nashville", stateAbbr: "TN", zipCode: "37201" },
    dallas: { cityName: "Dallas", stateAbbr: "TX", zipCode: "75201" },
    "san-francisco": { cityName: "San Francisco", stateAbbr: "CA", zipCode: "94101" },
    seattle: { cityName: "Seattle", stateAbbr: "WA", zipCode: "98101" },
    "washington-dc": { cityName: "Washington DC", stateAbbr: "DC", zipCode: "20001" },
    "beverly-hills": { cityName: "Beverly Hills", stateAbbr: "CA", zipCode: "90210" },
    manhattan: { cityName: "Manhattan", stateAbbr: "NY", zipCode: "10001" },
    "miami-beach": { cityName: "Miami Beach", stateAbbr: "FL", zipCode: "33139" },
    hollywood: { cityName: "Hollywood", stateAbbr: "CA", zipCode: "90028" },
    phoenix: { cityName: "Phoenix", stateAbbr: "AZ", zipCode: "85001" },
    philadelphia: { cityName: "Philadelphia", stateAbbr: "PA", zipCode: "19101" },
    "san-antonio": { cityName: "San Antonio", stateAbbr: "TX", zipCode: "78201" },
    "san-diego": { cityName: "San Diego", stateAbbr: "CA", zipCode: "92101" },
    "san-jose": { cityName: "San Jose", stateAbbr: "CA", zipCode: "95101" },
    austin: { cityName: "Austin", stateAbbr: "TX", zipCode: "78701" },
    jacksonville: { cityName: "Jacksonville", stateAbbr: "FL", zipCode: "32201" },
    "fort-worth": { cityName: "Fort Worth", stateAbbr: "TX", zipCode: "76101" },
    columbus: { cityName: "Columbus", stateAbbr: "OH", zipCode: "43201" },
    charlotte: { cityName: "Charlotte", stateAbbr: "NC", zipCode: "28201" },
    indianapolis: { cityName: "Indianapolis", stateAbbr: "IN", zipCode: "46201" },
    denver: { cityName: "Denver", stateAbbr: "CO", zipCode: "80201" },
    boston: { cityName: "Boston", stateAbbr: "MA", zipCode: "02201" },
    detroit: { cityName: "Detroit", stateAbbr: "MI", zipCode: "48201" },
  }

  if (commonCities[normalizedSlug]) {
    const cityInfo = commonCities[normalizedSlug]
    const state = statesList.find((s) => s.abbreviation === cityInfo.stateAbbr)
    if (state) {
      const city: City = {
        name: cityInfo.cityName,
        slug: normalizedSlug,
        zipCode: cityInfo.zipCode,
      }
      return { city, state }
    }
  }

  // Last resort: create a default city and state
  const defaultState = getStateBySlug("california")
  const defaultCity = {
    name: normalizedSlug.charAt(0).toUpperCase() + normalizedSlug.slice(1).replace(/-/g, " "),
    slug: normalizedSlug,
    zipCode: "00000",
  }

  return { city: defaultCity, state: defaultState }
}

// Function to generate top cities for each state
export function getTopCitiesByState(stateAbbr: string): City[] {
  // This is a simplified version - in a real application, you would have a more comprehensive database
  // of cities for each state. This function returns mock data for demonstration purposes.

  const citiesMap: Record<string, City[]> = {
    AL: [
      { name: "Birmingham", slug: "birmingham", zipCode: "35201" },
      { name: "Montgomery", slug: "montgomery", zipCode: "36101" },
      { name: "Mobile", slug: "mobile", zipCode: "36601" },
      { name: "Huntsville", slug: "huntsville", zipCode: "35801" },
      { name: "Tuscaloosa", slug: "tuscaloosa", zipCode: "35401" },
      { name: "Auburn", slug: "auburn", zipCode: "36830" },
      { name: "Hoover", slug: "hoover", zipCode: "35216" },
      { name: "Dothan", slug: "dothan", zipCode: "36301" },
      { name: "Decatur", slug: "decatur", zipCode: "35601" },
      { name: "Madison", slug: "madison", zipCode: "35758" },
      { name: "Florence", slug: "florence", zipCode: "35630" },
      { name: "Gadsden", slug: "gadsden", zipCode: "35901" },
      { name: "Vestavia Hills", slug: "vestavia-hills", zipCode: "35216" },
      { name: "Phenix City", slug: "phenix-city", zipCode: "36867" },
      { name: "Prattville", slug: "prattville", zipCode: "36066" },
      { name: "Alabaster", slug: "alabaster", zipCode: "35007" },
      { name: "Bessemer", slug: "bessemer", zipCode: "35020" },
      { name: "Enterprise", slug: "enterprise", zipCode: "36330" },
      { name: "Opelika", slug: "opelika", zipCode: "36801" },
      { name: "Homewood", slug: "homewood", zipCode: "35209" },
    ],
    AK: [
      { name: "Anchorage", slug: "anchorage", zipCode: "99501" },
      { name: "Fairbanks", slug: "fairbanks", zipCode: "99701" },
      { name: "Juneau", slug: "juneau", zipCode: "99801" },
      { name: "Wasilla", slug: "wasilla", zipCode: "99654" },
      { name: "Sitka", slug: "sitka", zipCode: "99835" },
      { name: "Ketchikan", slug: "ketchikan", zipCode: "99901" },
      { name: "Kenai", slug: "kenai", zipCode: "99611" },
      { name: "Kodiak", slug: "kodiak", zipCode: "99615" },
      { name: "Bethel", slug: "bethel", zipCode: "99559" },
      { name: "Palmer", slug: "palmer", zipCode: "99645" },
      { name: "Homer", slug: "homer", zipCode: "99603" },
      { name: "Unalaska", slug: "unalaska", zipCode: "99685" },
      { name: "Barrow", slug: "barrow", zipCode: "99723" },
      { name: "Soldotna", slug: "soldotna", zipCode: "99669" },
      { name: "Valdez", slug: "valdez", zipCode: "99686" },
      { name: "Nome", slug: "nome", zipCode: "99762" },
      { name: "Kotzebue", slug: "kotzebue", zipCode: "99752" },
      { name: "Seward", slug: "seward", zipCode: "99664" },
      { name: "Wrangell", slug: "wrangell", zipCode: "99929" },
      { name: "Dillingham", slug: "dillingham", zipCode: "99576" },
    ],
    AZ: [
      { name: "Phoenix", slug: "phoenix", zipCode: "85001" },
      { name: "Tucson", slug: "tucson", zipCode: "85701" },
      { name: "Mesa", slug: "mesa", zipCode: "85201" },
      { name: "Chandler", slug: "chandler", zipCode: "85225" },
      { name: "Scottsdale", slug: "scottsdale", zipCode: "85251" },
      { name: "Glendale", slug: "glendale", zipCode: "85301" },
      { name: "Gilbert", slug: "gilbert", zipCode: "85296" },
      { name: "Tempe", slug: "tempe", zipCode: "85281" },
      { name: "Peoria", slug: "peoria", zipCode: "85345" },
      { name: "Surprise", slug: "surprise", zipCode: "85374" },
      { name: "Yuma", slug: "yuma", zipCode: "85364" },
      { name: "Avondale", slug: "avondale", zipCode: "85323" },
      { name: "Flagstaff", slug: "flagstaff", zipCode: "86001" },
      { name: "Goodyear", slug: "goodyear", zipCode: "85338" },
      { name: "Buckeye", slug: "buckeye", zipCode: "85326" },
      { name: "Lake Havasu City", slug: "lake-havasu-city", zipCode: "86403" },
      { name: "Casa Grande", slug: "casa-grande", zipCode: "85122" },
      { name: "Sierra Vista", slug: "sierra-vista", zipCode: "85635" },
      { name: "Maricopa", slug: "maricopa", zipCode: "85138" },
      { name: "Oro Valley", slug: "oro-valley", zipCode: "85737" },
    ],
    CA: [
      { name: "Los Angeles", slug: "los-angeles", zipCode: "90001" },
      { name: "San Diego", slug: "san-diego", zipCode: "92101" },
      { name: "San Jose", slug: "san-jose", zipCode: "95101" },
      { name: "San Francisco", slug: "san-francisco", zipCode: "94101" },
      { name: "Fresno", slug: "fresno", zipCode: "93701" },
      { name: "Sacramento", slug: "sacramento", zipCode: "95801" },
      { name: "Long Beach", slug: "long-beach", zipCode: "90801" },
      { name: "Oakland", slug: "oakland", zipCode: "94601" },
      { name: "Bakersfield", slug: "bakersfield", zipCode: "93301" },
      { name: "Anaheim", slug: "anaheim", zipCode: "92801" },
      { name: "Santa Ana", slug: "santa-ana", zipCode: "92701" },
      { name: "Riverside", slug: "riverside", zipCode: "92501" },
      { name: "Stockton", slug: "stockton", zipCode: "95201" },
      { name: "Irvine", slug: "irvine", zipCode: "92601" },
      { name: "Chula Vista", slug: "chula-vista", zipCode: "91910" },
      { name: "Fremont", slug: "fremont", zipCode: "94536" },
      { name: "San Bernardino", slug: "san-bernardino", zipCode: "92401" },
      { name: "Modesto", slug: "modesto", zipCode: "95351" },
      { name: "Fontana", slug: "fontana", zipCode: "92335" },
      { name: "Oxnard", slug: "oxnard", zipCode: "93030" },
    ],
    TX: [
      { name: "Houston", slug: "houston", zipCode: "77001" },
      { name: "San Antonio", slug: "san-antonio", zipCode: "78201" },
      { name: "Dallas", slug: "dallas", zipCode: "75201" },
      { name: "Austin", slug: "austin", zipCode: "78701" },
      { name: "Fort Worth", slug: "fort-worth", zipCode: "76101" },
      { name: "El Paso", slug: "el-paso", zipCode: "79901" },
      { name: "Arlington", slug: "arlington", zipCode: "76001" },
      { name: "Corpus Christi", slug: "corpus-christi", zipCode: "78401" },
      { name: "Plano", slug: "plano", zipCode: "75023" },
      { name: "Laredo", slug: "laredo", zipCode: "78040" },
      { name: "Lubbock", slug: "lubbock", zipCode: "79401" },
      { name: "Garland", slug: "garland", zipCode: "75040" },
      { name: "Irving", slug: "irving", zipCode: "75060" },
      { name: "Amarillo", slug: "amarillo", zipCode: "79101" },
      { name: "Grand Prairie", slug: "grand-prairie", zipCode: "75050" },
      { name: "Brownsville", slug: "brownsville", zipCode: "78520" },
      { name: "McKinney", slug: "mckinney", zipCode: "75069" },
      { name: "Frisco", slug: "frisco", zipCode: "75033" },
      { name: "Pasadena", slug: "pasadena", zipCode: "77501" },
      { name: "Killeen", slug: "killeen", zipCode: "76540" },
    ],
    NY: [
      { name: "New York City", slug: "new-york-city", zipCode: "10001" },
      { name: "Buffalo", slug: "buffalo", zipCode: "14201" },
      { name: "Rochester", slug: "rochester", zipCode: "14601" },
      { name: "Yonkers", slug: "yonkers", zipCode: "10701" },
      { name: "Syracuse", slug: "syracuse", zipCode: "13201" },
      { name: "Albany", slug: "albany", zipCode: "12201" },
      { name: "New Rochelle", slug: "new-rochelle", zipCode: "10801" },
      { name: "Mount Vernon", slug: "mount-vernon", zipCode: "10550" },
      { name: "Schenectady", slug: "schenectady", zipCode: "12301" },
      { name: "Utica", slug: "utica", zipCode: "13501" },
      { name: "White Plains", slug: "white-plains", zipCode: "10601" },
      { name: "Hempstead", slug: "hempstead", zipCode: "11550" },
      { name: "Troy", slug: "troy", zipCode: "12180" },
      { name: "Niagara Falls", slug: "niagara-falls", zipCode: "14301" },
      { name: "Binghamton", slug: "binghamton", zipCode: "13901" },
      { name: "Freeport", slug: "freeport", zipCode: "11520" },
      { name: "Valley Stream", slug: "valley-stream", zipCode: "11580" },
      { name: "Long Beach", slug: "long-beach-ny", zipCode: "11561" },
      { name: "Rome", slug: "rome", zipCode: "13440" },
      { name: "Ithaca", slug: "ithaca", zipCode: "14850" },
    ],
  }

  // Return cities for the given state, or a default set if not found
  return (
    citiesMap[stateAbbr] || [
      { name: "Major City 1", slug: "major-city-1", zipCode: "10001" },
      { name: "Major City 2", slug: "major-city-2", zipCode: "10002" },
      { name: "Major City 3", slug: "major-city-3", zipCode: "10003" },
      { name: "Major City 4", slug: "major-city-4", zipCode: "10004" },
      { name: "Major City 5", slug: "major-city-5", zipCode: "10005" },
      { name: "Major City 6", slug: "major-city-6", zipCode: "10006" },
      { name: "Major City 7", slug: "major-city-7", zipCode: "10007" },
      { name: "Major City 8", slug: "major-city-8", zipCode: "10008" },
      { name: "Major City 9", slug: "major-city-9", zipCode: "10009" },
      { name: "Major City 10", slug: "major-city-10", zipCode: "10010" },
      { name: "Major City 11", slug: "major-city-11", zipCode: "10011" },
      { name: "Major City 12", slug: "major-city-12", zipCode: "10012" },
      { name: "Major City 13", slug: "major-city-13", zipCode: "10013" },
      { name: "Major City 14", slug: "major-city-14", zipCode: "10014" },
      { name: "Major City 15", slug: "major-city-15", zipCode: "10015" },
      { name: "Major City 16", slug: "major-city-16", zipCode: "10016" },
      { name: "Major City 17", slug: "major-city-17", zipCode: "10017" },
      { name: "Major City 18", slug: "major-city-18", zipCode: "10018" },
      { name: "Major City 19", slug: "major-city-19", zipCode: "10019" },
      { name: "Major City 20", slug: "major-city-20", zipCode: "10020" },
    ]
  )
}
