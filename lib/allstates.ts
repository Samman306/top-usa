/**
 * Contains centralized information about all US states
 * Used for consistent state data across the application
 */

export type StateInfo = {
  id: string;          // Two-letter state code (e.g., CA)
  name: string;        // Full state name (e.g., California)
  slug: string;        // URL-friendly name (e.g., california)
  counties: string[];  // Major counties in the state
  mainCities: string[]; // Major cities in the state
  mainCourthouse?: string; // Main courthouse in the state
};

// Full list of US states with their information
export const allStates: Record<string, StateInfo> = {
  'AL': {
    id: 'AL',
    name: 'Alabama',
    slug: 'alabama',
    counties: ['Jefferson', 'Mobile', 'Madison'],
    mainCities: ['Birmingham', 'Montgomery', 'Mobile', 'Huntsville'],
  },
  'AK': {
    id: 'AK',
    name: 'Alaska',
    slug: 'alaska',
    counties: ['Anchorage', 'Fairbanks North Star', 'Matanuska-Susitna'],
    mainCities: ['Anchorage', 'Fairbanks', 'Juneau'],
  },
  'AZ': {
    id: 'AZ',
    name: 'Arizona',
    slug: 'arizona',
    counties: ['Maricopa', 'Pima', 'Pinal'],
    mainCities: ['Phoenix', 'Tucson', 'Mesa', 'Chandler'],
  },
  'AR': {
    id: 'AR',
    name: 'Arkansas',
    slug: 'arkansas',
    counties: ['Pulaski', 'Benton', 'Washington'],
    mainCities: ['Little Rock', 'Fort Smith', 'Fayetteville'],
  },
  'CA': {
    id: 'CA',
    name: 'California',
    slug: 'california',
    counties: ['Los Angeles', 'San Diego', 'Orange', 'Riverside', 'San Bernardino', 'Santa Clara', 'Alameda', 'Sacramento'],
    mainCities: ['Los Angeles', 'San Diego', 'San Francisco', 'San Jose', 'Fresno', 'Sacramento', 'Long Beach', 'Oakland'],
    mainCourthouse: 'Superior Court of California',
  },
  'CO': {
    id: 'CO',
    name: 'Colorado',
    slug: 'colorado',
    counties: ['Denver', 'El Paso', 'Arapahoe'],
    mainCities: ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins'],
  },
  'CT': {
    id: 'CT',
    name: 'Connecticut',
    slug: 'connecticut',
    counties: ['Fairfield', 'Hartford', 'New Haven'],
    mainCities: ['Bridgeport', 'New Haven', 'Hartford', 'Stamford'],
  },
  'DE': {
    id: 'DE',
    name: 'Delaware',
    slug: 'delaware',
    counties: ['New Castle', 'Kent', 'Sussex'],
    mainCities: ['Wilmington', 'Dover', 'Newark'],
  },
  'FL': {
    id: 'FL',
    name: 'Florida',
    slug: 'florida',
    counties: ['Miami-Dade', 'Broward', 'Palm Beach', 'Hillsborough', 'Orange', 'Pinellas', 'Duval'],
    mainCities: ['Jacksonville', 'Miami', 'Tampa', 'Orlando', 'St. Petersburg'],
  },
  'GA': {
    id: 'GA',
    name: 'Georgia',
    slug: 'georgia',
    counties: ['Fulton', 'Gwinnett', 'Cobb', 'DeKalb'],
    mainCities: ['Atlanta', 'Augusta', 'Columbus', 'Macon', 'Savannah'],
  },
  'HI': {
    id: 'HI',
    name: 'Hawaii',
    slug: 'hawaii',
    counties: ['Honolulu', 'Hawaii', 'Maui'],
    mainCities: ['Honolulu', 'Hilo', 'Kailua', 'Kaneohe', 'Waipahu'],
  },
  'ID': {
    id: 'ID',
    name: 'Idaho',
    slug: 'idaho',
    counties: ['Ada', 'Canyon', 'Kootenai'],
    mainCities: ['Boise', 'Meridian', 'Nampa', 'Idaho Falls'],
  },
  'IL': {
    id: 'IL',
    name: 'Illinois',
    slug: 'illinois',
    counties: ['Cook', 'DuPage', 'Lake', 'Will'],
    mainCities: ['Chicago', 'Aurora', 'Rockford', 'Joliet', 'Naperville'],
  },
  'IN': {
    id: 'IN',
    name: 'Indiana',
    slug: 'indiana',
    counties: ['Marion', 'Lake', 'Allen', 'Hamilton'],
    mainCities: ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend'],
  },
  'IA': {
    id: 'IA',
    name: 'Iowa',
    slug: 'iowa',
    counties: ['Polk', 'Linn', 'Scott', 'Johnson'],
    mainCities: ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City'],
  },
  'KS': {
    id: 'KS',
    name: 'Kansas',
    slug: 'kansas',
    counties: ['Johnson', 'Sedgwick', 'Shawnee', 'Wyandotte'],
    mainCities: ['Wichita', 'Overland Park', 'Kansas City', 'Olathe'],
  },
  'KY': {
    id: 'KY',
    name: 'Kentucky',
    slug: 'kentucky',
    counties: ['Jefferson', 'Fayette', 'Kenton', 'Boone'],
    mainCities: ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro'],
  },
  'LA': {
    id: 'LA',
    name: 'Louisiana',
    slug: 'louisiana',
    counties: ['Orleans', 'Jefferson', 'East Baton Rouge', 'Caddo'],
    mainCities: ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette'],
  },
  'ME': {
    id: 'ME',
    name: 'Maine',
    slug: 'maine',
    counties: ['Cumberland', 'York', 'Penobscot'],
    mainCities: ['Portland', 'Lewiston', 'Bangor', 'South Portland'],
  },
  'MD': {
    id: 'MD',
    name: 'Maryland',
    slug: 'maryland',
    counties: ['Montgomery', 'Prince George\'s', 'Baltimore County', 'Anne Arundel'],
    mainCities: ['Baltimore', 'Frederick', 'Rockville', 'Gaithersburg'],
  },
  'MA': {
    id: 'MA',
    name: 'Massachusetts',
    slug: 'massachusetts',
    counties: ['Middlesex', 'Worcester', 'Essex', 'Suffolk'],
    mainCities: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge'],
  },
  'MI': {
    id: 'MI',
    name: 'Michigan',
    slug: 'michigan',
    counties: ['Wayne', 'Oakland', 'Macomb', 'Kent'],
    mainCities: ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights'],
  },
  'MN': {
    id: 'MN',
    name: 'Minnesota',
    slug: 'minnesota',
    counties: ['Hennepin', 'Ramsey', 'Dakota', 'Anoka'],
    mainCities: ['Minneapolis', 'St. Paul', 'Rochester', 'Duluth'],
  },
  'MS': {
    id: 'MS',
    name: 'Mississippi',
    slug: 'mississippi',
    counties: ['Hinds', 'Harrison', 'DeSoto', 'Rankin'],
    mainCities: ['Jackson', 'Gulfport', 'Southaven', 'Hattiesburg'],
  },
  'MO': {
    id: 'MO',
    name: 'Missouri',
    slug: 'missouri',
    counties: ['St. Louis', 'Jackson', 'St. Charles', 'Greene'],
    mainCities: ['Kansas City', 'St. Louis', 'Springfield', 'Columbia'],
  },
  'MT': {
    id: 'MT',
    name: 'Montana',
    slug: 'montana',
    counties: ['Yellowstone', 'Missoula', 'Gallatin', 'Flathead'],
    mainCities: ['Billings', 'Missoula', 'Great Falls', 'Bozeman'],
  },
  'NE': {
    id: 'NE',
    name: 'Nebraska',
    slug: 'nebraska',
    counties: ['Douglas', 'Lancaster', 'Sarpy', 'Hall'],
    mainCities: ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island'],
  },
  'NV': {
    id: 'NV',
    name: 'Nevada',
    slug: 'nevada',
    counties: ['Clark', 'Washoe', 'Elko', 'Carson City'],
    mainCities: ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas'],
  },
  'NH': {
    id: 'NH',
    name: 'New Hampshire',
    slug: 'new-hampshire',
    counties: ['Hillsborough', 'Rockingham', 'Merrimack', 'Strafford'],
    mainCities: ['Manchester', 'Nashua', 'Concord', 'Derry'],
  },
  'NJ': {
    id: 'NJ',
    name: 'New Jersey',
    slug: 'new-jersey',
    counties: ['Bergen', 'Middlesex', 'Essex', 'Hudson'],
    mainCities: ['Newark', 'Jersey City', 'Paterson', 'Elizabeth'],
  },
  'NM': {
    id: 'NM',
    name: 'New Mexico',
    slug: 'new-mexico',
    counties: ['Bernalillo', 'Doña Ana', 'Santa Fe', 'Sandoval'],
    mainCities: ['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Santa Fe'],
  },
  'NY': {
    id: 'NY',
    name: 'New York',
    slug: 'new-york',
    counties: ['Kings', 'Queens', 'New York', 'Suffolk', 'Bronx'],
    mainCities: ['New York City', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse'],
  },
  'NC': {
    id: 'NC',
    name: 'North Carolina',
    slug: 'north-carolina',
    counties: ['Mecklenburg', 'Wake', 'Guilford', 'Forsyth'],
    mainCities: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham'],
  },
  'ND': {
    id: 'ND',
    name: 'North Dakota',
    slug: 'north-dakota',
    counties: ['Cass', 'Burleigh', 'Grand Forks', 'Ward'],
    mainCities: ['Fargo', 'Bismarck', 'Grand Forks', 'Minot'],
  },
  'OH': {
    id: 'OH',
    name: 'Ohio',
    slug: 'ohio',
    counties: ['Cuyahoga', 'Franklin', 'Hamilton', 'Summit'],
    mainCities: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo'],
  },
  'OK': {
    id: 'OK',
    name: 'Oklahoma',
    slug: 'oklahoma',
    counties: ['Oklahoma', 'Tulsa', 'Cleveland', 'Canadian'],
    mainCities: ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow'],
  },
  'OR': {
    id: 'OR',
    name: 'Oregon',
    slug: 'oregon',
    counties: ['Multnomah', 'Washington', 'Clackamas', 'Lane'],
    mainCities: ['Portland', 'Salem', 'Eugene', 'Gresham'],
  },
  'PA': {
    id: 'PA',
    name: 'Pennsylvania',
    slug: 'pennsylvania',
    counties: ['Philadelphia', 'Allegheny', 'Montgomery', 'Bucks'],
    mainCities: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie'],
  },
  'RI': {
    id: 'RI',
    name: 'Rhode Island',
    slug: 'rhode-island',
    counties: ['Providence', 'Kent', 'Washington', 'Newport'],
    mainCities: ['Providence', 'Warwick', 'Cranston', 'Pawtucket'],
  },
  'SC': {
    id: 'SC',
    name: 'South Carolina',
    slug: 'south-carolina',
    counties: ['Greenville', 'Richland', 'Charleston', 'Horry'],
    mainCities: ['Columbia', 'Charleston', 'North Charleston', 'Mount Pleasant'],
  },
  'SD': {
    id: 'SD',
    name: 'South Dakota',
    slug: 'south-dakota',
    counties: ['Minnehaha', 'Pennington', 'Lincoln', 'Brown'],
    mainCities: ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings'],
  },
  'TN': {
    id: 'TN',
    name: 'Tennessee',
    slug: 'tennessee',
    counties: ['Shelby', 'Davidson', 'Knox', 'Hamilton'],
    mainCities: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga'],
  },
  'TX': {
    id: 'TX',
    name: 'Texas',
    slug: 'texas',
    counties: ['Harris', 'Dallas', 'Tarrant', 'Bexar', 'Travis'],
    mainCities: ['Houston', 'San Antonio', 'Dallas', 'Austin', 'Fort Worth'],
  },
  'UT': {
    id: 'UT',
    name: 'Utah',
    slug: 'utah',
    counties: ['Salt Lake', 'Utah', 'Davis', 'Weber'],
    mainCities: ['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan'],
  },
  'VT': {
    id: 'VT',
    name: 'Vermont',
    slug: 'vermont',
    counties: ['Chittenden', 'Rutland', 'Washington', 'Windsor'],
    mainCities: ['Burlington', 'South Burlington', 'Rutland', 'Barre'],
  },
  'VA': {
    id: 'VA',
    name: 'Virginia',
    slug: 'virginia',
    counties: ['Fairfax', 'Prince William', 'Loudoun', 'Chesterfield'],
    mainCities: ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Richmond'],
  },
  'WA': {
    id: 'WA',
    name: 'Washington',
    slug: 'washington',
    counties: ['King', 'Pierce', 'Snohomish', 'Spokane'],
    mainCities: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver'],
  },
  'WV': {
    id: 'WV',
    name: 'West Virginia',
    slug: 'west-virginia',
    counties: ['Kanawha', 'Berkeley', 'Cabell', 'Wood'],
    mainCities: ['Charleston', 'Huntington', 'Parkersburg', 'Wheeling'],
  },
  'WI': {
    id: 'WI',
    name: 'Wisconsin',
    slug: 'wisconsin',
    counties: ['Milwaukee', 'Dane', 'Waukesha', 'Brown'],
    mainCities: ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha'],
  },
  'WY': {
    id: 'WY',
    name: 'Wyoming',
    slug: 'wyoming',
    counties: ['Laramie', 'Natrona', 'Campbell', 'Sweetwater'],
    mainCities: ['Cheyenne', 'Casper', 'Laramie', 'Gillette'],
  },
  'DC': {
    id: 'DC',
    name: 'District of Columbia',
    slug: 'district-of-columbia',
    counties: ['District of Columbia'],
    mainCities: ['Washington'],
  }
};

/**
 * Get state information by state ID (two-letter code)
 */
export function getStateById(stateId: string): StateInfo | undefined {
  return allStates[stateId.toUpperCase()];
}

/**
 * Get state information by state slug
 */
export function getStateBySlug(stateSlug: string): StateInfo | undefined {
  return Object.values(allStates).find(state => state.slug === stateSlug);
}

/**
 * Get state information by full state name
 */
export function getStateByName(stateName: string): StateInfo | undefined {
  return Object.values(allStates).find(
    state => state.name.toLowerCase() === stateName.toLowerCase()
  );
}

/**
 * Try to determine which state a city belongs to
 * This is a fallback method when API data is not available
 */
export function guessStateForCity(citySlug: string): StateInfo | undefined {
  // Map of common cities to their states for quick lookup
  const commonCities: Record<string, string> = {
    'new-york': 'NY',
    'los-angeles': 'CA',
    'chicago': 'IL',
    'houston': 'TX',
    'phoenix': 'AZ',
    'philadelphia': 'PA',
    'san-antonio': 'TX',
    'san-diego': 'CA',
    'dallas': 'TX',
    'san-jose': 'CA',
    'austin': 'TX',
    'jacksonville': 'FL',
    'fort-worth': 'TX',
    'columbus': 'OH',
    'san-francisco': 'CA',
    'charlotte': 'NC',
    'indianapolis': 'IN',
    'seattle': 'WA',
    'denver': 'CO',
    'washington': 'DC',
    'boston': 'MA',
    'nashville': 'TN',
    'el-paso': 'TX',
    'portland': 'OR',
    'las-vegas': 'NV',
    'detroit': 'MI',
    'memphis': 'TN',
    'louisville': 'KY',
    'milwaukee': 'WI',
    'baltimore': 'MD',
    'albuquerque': 'NM',
    'tucson': 'AZ',
    'fresno': 'CA',
    'sacramento': 'CA',
    'atlanta': 'GA',
    'oakland': 'CA',
    'miami': 'FL',
    'tulsa': 'OK',
    'minneapolis': 'MN',
    'cleveland': 'OH',
    'new-orleans': 'LA',
    'tampa': 'FL',
    'pittsburgh': 'PA',
    'st-louis': 'MO',
    'cincinnati': 'OH',
    'orlando': 'FL'
  };

  // Check direct match in common cities
  if (commonCities[citySlug]) {
    return getStateById(commonCities[citySlug]);
  }

  // Check if the slug contains state information like "new-york-ny" or "los-angeles-ca"
  for (const [stateId, stateInfo] of Object.entries(allStates)) {
    // Check for state code in slug (e.g., '-ny' or '-ca')
    if (citySlug.includes(`-${stateId.toLowerCase()}`)) {
      return stateInfo;
    }
    
    // Try to find state name as part of the slug
    const stateSlugParts = stateInfo.slug.split('-');
    for (const part of stateSlugParts) {
      // Only consider parts with length >= 3 to avoid false positives
      if (part.length >= 3 && (citySlug.includes(`-${part}-`) || citySlug.endsWith(`-${part}`))) {
        return stateInfo;
      }
    }
  }

  // Last resort: check if city name is in any state's mainCities list
  const cityName = citySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  for (const stateInfo of Object.values(allStates)) {
    if (stateInfo.mainCities.includes(cityName)) {
      return stateInfo;
    }
  }
  
  // Default to California if we can't determine the state
  // This ensures we always have a valid state in the breadcrumb
  return allStates['CA'];
}
