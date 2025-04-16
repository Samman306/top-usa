export type State = {
  name: string
  abbreviation: string
  slug: string
}

export type City = {
  name: string
  slug: string
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

export const getTopCitiesByState = (stateAbbreviation: string): City[] => {
  switch (stateAbbreviation) {
    case "CA":
      return [
        { name: "Los Angeles", slug: "los-angeles" },
        { name: "San Francisco", slug: "san-francisco" },
        { name: "San Diego", slug: "san-diego" },
        { name: "San Jose", slug: "san-jose" },
        { name: "Fresno", slug: "fresno" },
        { name: "Sacramento", slug: "sacramento" },
        { name: "Long Beach", slug: "long-beach" },
        { name: "Oakland", slug: "oakland" },
        { name: "Bakersfield", slug: "bakersfield" },
        { name: "Anaheim", slug: "anaheim" },
        { name: "Santa Ana", slug: "santa-ana" },
      ]
    case "TX":
      return [
        { name: "Houston", slug: "houston" },
        { name: "San Antonio", slug: "san-antonio" },
        { name: "Dallas", slug: "dallas" },
        { name: "Austin", slug: "austin" },
        { name: "Fort Worth", slug: "fort-worth" },
        { name: "El Paso", slug: "el-paso" },
        { name: "Arlington", slug: "arlington" },
        { name: "Corpus Christi", slug: "corpus-christi" },
        { name: "Plano", slug: "plano" },
        { name: "Laredo", slug: "laredo" },
      ]
    case "FL":
      return [
        { name: "Jacksonville", slug: "jacksonville" },
        { name: "Miami", slug: "miami" },
        { name: "Tampa", slug: "tampa" },
        { name: "Orlando", slug: "orlando" },
        { name: "St. Petersburg", slug: "st-petersburg" },
        { name: "Hialeah", slug: "hialeah" },
        { name: "Tallahassee", slug: "tallahassee" },
        { name: "Cape Coral", slug: "cape-coral" },
        { name: "Fort Lauderdale", slug: "fort-lauderdale" },
        { name: "Pembroke Pines", slug: "pembroke-pines" },
      ]
    case "NY":
      return [
        { name: "New York", slug: "new-york" },
        { name: "Buffalo", slug: "buffalo" },
        { name: "Rochester", slug: "rochester" },
        { name: "Yonkers", slug: "yonkers" },
        { name: "Syracuse", slug: "syracuse" },
        { name: "Albany", slug: "albany" },
        { name: "New Rochelle", slug: "new-rochelle" },
        { name: "Mount Vernon", slug: "mount-vernon" },
        { name: "Schenectady", slug: "schenectady" },
        { name: "Utica", slug: "utica" },
      ]
    case "IL":
      return [
        { name: "Chicago", slug: "chicago" },
        { name: "Aurora", slug: "aurora" },
        { name: "Naperville", slug: "naperville" },
        { name: "Joliet", slug: "joliet" },
        { name: "Rockford", slug: "rockford" },
        { name: "Springfield", slug: "springfield" },
        { name: "Elgin", slug: "elgin" },
        { name: "Peoria", slug: "peoria" },
        { name: "Champaign", slug: "champaign" },
        { name: "Waukegan", slug: "waukegan" },
      ]
    case "PA":
      return [
        { name: "Philadelphia", slug: "philadelphia" },
        { name: "Pittsburgh", slug: "pittsburgh" },
        { name: "Allentown", slug: "allentown" },
        { name: "Erie", slug: "erie" },
        { name: "Reading", slug: "reading" },
        { name: "Scranton", slug: "scranton" },
        { name: "Bethlehem", slug: "bethlehem" },
        { name: "Lancaster", slug: "lancaster" },
        { name: "Harrisburg", slug: "harrisburg" },
        { name: "York", slug: "york" },
      ]
    case "OH":
      return [
        { name: "Columbus", slug: "columbus" },
        { name: "Cleveland", slug: "cleveland" },
        { name: "Cincinnati", slug: "cincinnati" },
        { name: "Toledo", slug: "toledo" },
        { name: "Akron", slug: "akron" },
        { name: "Dayton", slug: "dayton" },
        { name: "Parma", slug: "parma" },
        { name: "Canton", slug: "canton" },
        { name: "Youngstown", slug: "youngstown" },
        { name: "Lorain", slug: "lorain" },
      ]
    case "GA":
      return [
        { name: "Atlanta", slug: "atlanta" },
        { name: "Columbus", slug: "columbus" },
        { name: "Augusta", slug: "augusta" },
        { name: "Macon", slug: "macon" },
        { name: "Savannah", slug: "savannah" },
        { name: "Athens", slug: "athens" },
        { name: "Sandy Springs", slug: "sandy-springs" },
        { name: "Roswell", slug: "roswell" },
        { name: "Johns Creek", slug: "johns-creek" },
        { name: "Warner Robins", slug: "warner-robins" },
      ]
    case "NC":
      return [
        { name: "Charlotte", slug: "charlotte" },
        { name: "Raleigh", slug: "raleigh" },
        { name: "Greensboro", slug: "greensboro" },
        { name: "Durham", slug: "durham" },
        { name: "Winston-Salem", slug: "winston-salem" },
        { name: "Fayetteville", slug: "fayetteville" },
        { name: "Cary", slug: "cary" },
        { name: "Wilmington", slug: "wilmington" },
        { name: "High Point", slug: "high-point" },
        { name: "Greenville", slug: "greenville" },
      ]
    case "MI":
      return [
        { name: "Detroit", slug: "detroit" },
        { name: "Grand Rapids", slug: "grand-rapids" },
        { name: "Warren", slug: "warren" },
        { name: "Sterling Heights", slug: "sterling-heights" },
        { name: "Ann Arbor", slug: "ann-arbor" },
        { name: "Lansing", slug: "lansing" },
        { name: "Dearborn", slug: "dearborn" },
        { name: "Livonia", slug: "livonia" },
        { name: "Canton", slug: "canton" },
        { name: "Westland", slug: "westland" },
      ]
    default:
      return []
  }
}

export const findCityState = (citySlug: string): { city: City | null; state: State | null } => {
  let foundCity: City | null = null
  let foundState: State | null = null

  for (const state of statesList) {
    const cities = getTopCitiesByState(state.abbreviation)
    const city = cities.find((city) => city.slug === citySlug)
    if (city) {
      foundCity = city
      foundState = state
      break
    }
  }

  return { city: foundCity, state: foundState }
}

export const getStateBySlug = (stateSlug: string): State | undefined => {
  return statesList.find((state) => state.slug === stateSlug)
}
