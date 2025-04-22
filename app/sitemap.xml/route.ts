import { MetadataRoute } from 'next'

// Generate sitemap for the site
export async function GET(): Promise<Response> {
  const sitemap = await generateSitemap();
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap
  .map(
    (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${new Date(item.lastModified).toISOString()}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
}

// Generate sitemap.xml content
async function generateSitemap(): Promise<Array<{
  url: string;
  lastModified: Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}>> {
  const baseUrl = 'https://www.topusalaw.com';
  const currentDate = new Date();
  
  // Main routes
  const mainRoutes = [
    "",
    "/about-us",
    "/team",
    "/contact", 
    "/locations",
    "/nationwide-coverage",
    "/practice-areas",
    "/services",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Practice areas
  const practiceAreas = [
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
  ].map((area) => ({
    url: `${baseUrl}/practice-areas/${area}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // State pages - using top priority states first
  const stateUrls = [
    // Top priority states
    'california', 'texas', 'florida', 'new-york', 'pennsylvania', 
    'illinois', 'ohio', 'georgia', 'north-carolina', 'michigan',
    'new-jersey', 'virginia', 'washington', 'arizona', 'massachusetts'
    // Uncomment for all states if needed
    /*
    'alabama', 'alaska', 'arkansas', 'colorado', 'connecticut', 'delaware', 
    'hawaii', 'idaho', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana',
    'maine', 'maryland', 'minnesota', 'mississippi', 'missouri', 'montana', 
    'nebraska', 'nevada', 'new-hampshire', 'new-mexico', 'north-dakota', 
    'oklahoma', 'oregon', 'rhode-island', 'south-carolina', 'south-dakota',
    'tennessee', 'utah', 'vermont', 'west-virginia', 'wisconsin', 'wyoming'
    */
  ].map(state => ({
    url: `${baseUrl}/locations/state/${state}`, // Corrected path - singular 'state'
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // City pages - using top cities list
  const majorCities = [
    "los-angeles",
    "san-francisco",
    "new-york",
    "chicago",
    "houston",
    "miami",
    "dallas",
    "phoenix",
    "philadelphia",
    "san-antonio",
  ];
  
  const cityPages = majorCities.map(city => ({
    url: `${baseUrl}/locations/${city}`, // Corrected path based on actual routes
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  // City-service pages - limited to top cities and services
  const services = [
    "personal-injury",
    "car-accidents",
    "truck-accidents"
    // Reduced service list to minimize total URL count
    // "uber-lyft-accidents",
    // "work-accidents",
    // "construction-accidents",
  ];
  
  // Limit to just the most important cities to reduce URL count
  const topCities = majorCities.slice(0, 5); // Just use top 5 cities
  
  const cityServicePages = [];
  
  for (const city of topCities) {
    for (const service of services) {
      cityServicePages.push({
        url: `${baseUrl}/locations/${city}/${service}`, // Corrected path format based on actual routes
        lastModified: currentDate,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      });
    }
  }

  // Attorney pages - using /team/{slug} format
  const attorneyPages = [
    "alexander-sterling",
    "victoria-chase",
    "jackson-wolf",
    "sophia-rodriguez",
    // Reduced list to minimize URLs
    // "marcus-king",
    // "olivia-bennett",
    // "ethan-drake",
    // "isabella-chen",
  ].map((slug) => ({
    url: `${baseUrl}/team/${slug}`, // Corrected path based on actual routes
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Success story pages
  const successStoryPages = [
    "contract-negotiation-success",
    "intellectual-property-protection",
    "favorable-settlement",
    "business-contract-review",
    "online-defamation-resolution",
    "entertainment-contract-negotiation",
  ].map((slug) => ({
    url: `${baseUrl}/success-stories/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Combine all URLs
  return [
    ...mainRoutes,
    ...practiceAreas,
    ...stateUrls,
    ...cityPages,
    ...cityServicePages,
    ...attorneyPages,
    ...successStoryPages,
  ];
}

// Helper function to slugify text
function slugify(text: string | undefined | null): string {
  if (!text) return ''
  return text
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric chars with hyphen
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}
