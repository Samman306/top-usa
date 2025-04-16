"use server"

// Cache for Shutterstock images to avoid hitting rate limits
const imageCache: Record<string, { urls: string[]; timestamp: number }> = {}
const CACHE_TTL = 24 * 60 * 60 * 1000 // 24 hours in milliseconds
const MAX_RETRIES = 3 // Maximum number of retries
const RETRY_DELAY = 2000 // Delay between retries in milliseconds (increased to 2 seconds)
const FETCH_TIMEOUT = 15000 // Increased timeout to 15 seconds

interface ShutterstockImage {
  id: string
  description: string
  assets: {
    preview: {
      url: string
    }
    preview_1000: {
      url: string
    }
    preview_1500: {
      url: string
    }
  }
}

interface ShutterstockResponse {
  data: ShutterstockImage[]
}

/**
 * Fetches images from Shutterstock API with caching and retry mechanism to avoid rate limits
 */
export async function getShutterstockImages(query: string, count = 1, retry = 0): Promise<string[]> {
  // Check cache first
  const cacheKey = `${query}_${count}`
  const now = Date.now()

  // If we have a valid cache entry, return it
  if (imageCache[cacheKey] && now - imageCache[cacheKey].timestamp < CACHE_TTL) {
    console.log(`Using cached images for query: ${query}`)
    return imageCache[cacheKey].urls
  }

  // If we're hitting rate limits, use placeholder images
  try {
    const apiKey = process.env.SHUTTERSTOCK_API_KEY
    const apiSecret = process.env.SHUTTERSTOCK_API_SECRET

    if (!apiKey || !apiSecret) {
      console.error("Shutterstock API credentials not found")
      return generatePlaceholders(query, count)
    }

    // Check if API key and secret are valid (not empty strings)
    if (apiKey.trim() === "" || apiSecret.trim() === "") {
      console.error("Shutterstock API key or secret is empty")
      return generatePlaceholders(query, count)
    }

    // Create Basic Auth header
    const authHeader = "Basic " + Buffer.from(`${apiKey}:${apiSecret}`).toString("base64")

    // Prepare search parameters
    const params = new URLSearchParams({
      query,
      per_page: count.toString(),
      view: "full",
      sort: "popular",
      orientation: "horizontal",
      people_model_released: "true",
    })

    // Make API request with timeout
    let controller: AbortController | null = null
    let timeoutId: NodeJS.Timeout | null = null

    if (typeof AbortSignal !== "undefined" && typeof AbortController !== "undefined") {
      controller = new AbortController()
      // Capture the non-null controller in a local constant to satisfy TypeScript
      const safeController = controller
      timeoutId = setTimeout(() => safeController.abort(), FETCH_TIMEOUT)
    } else {
      console.warn("AbortController is not supported in this environment. Using a fallback.")
    }

    try {
      const fetchOptions: RequestInit = {
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        cache: "force-cache", // Use cache to reduce API calls
        next: { revalidate: 86400 }, // Cache for 24 hours
      }

      if (controller) {
        fetchOptions.signal = controller.signal
      }

      const response = await fetch(`https://api.shutterstock.com/v2/images/search?${params.toString()}`, fetchOptions)

      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      // If we hit rate limits, use placeholders
      if (response.status === 429) {
        console.warn("Shutterstock API rate limit reached, using placeholders")
        return generatePlaceholders(query, count)
      }

      if (!response.ok) {
        console.error(`Shutterstock API error: ${response.status} - ${response.statusText}, retry count: ${retry}`)
        console.error("Response headers:", response.headers)
        throw new Error(`Shutterstock API error: ${response.status} - ${response.statusText}`)
      }

      const data: ShutterstockResponse = await response.json()

      // Extract image URLs with fallbacks - no Sharp processing
      const urls = data.data.map(
        (image) => image.assets.preview_1500?.url || image.assets.preview_1000?.url || image.assets.preview.url || "",
      )

      // Cache the results
      imageCache[cacheKey] = {
        urls,
        timestamp: now,
      }

      return urls
    } catch (error: any) {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      console.error(`Error fetching images from Shutterstock API: ${error.message}, retry count: ${retry}`)
      console.error("Error details:", error) // Added error logging

      if (error.name === "AbortError") {
        console.warn("Fetch aborted due to timeout.")
      }

      if (retry < MAX_RETRIES) {
        // Retry the request after a delay
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY))
        console.log(`Retrying Shutterstock API request, attempt ${retry + 1}`)
        return getShutterstockImages(query, count, retry + 1) // Recursive call
      } else {
        console.warn(`Max retries reached for Shutterstock API, using placeholders`)
        return generatePlaceholders(query, count)
      }
    }
  } catch (error: any) {
    console.error("Error fetching Shutterstock images:", error.message)
    console.error("Error details:", error) // Added error logging
    return generatePlaceholders(query, count)
  }
}

// Generate placeholder image URLs
function generatePlaceholders(query: string, count: number): string[] {
  return Array(count)
    .fill("")
    .map((_, i) => `/placeholder.svg?height=600&width=800&text=${encodeURIComponent(query.replace(/\s+/g, "+"))}`)
}

// Helper function to get healthcare-related images
export async function getHealthcareImages(category: string, count = 1): Promise<string[]> {
  try {
    const categoryQueries: Record<string, string> = {
      caregiver: "healthcare caregiver elderly",
      nurse: "professional nurse healthcare",
      "memory-care": "elderly memory care dementia",
      "home-care": "home healthcare service",
      executive: "executive healthcare professional",
      compassionate: "compassionate healthcare elderly",
      "professional-caregiver": "professional caregiver with patient",
      "healthcare-professional": "healthcare professional service",
      "private-nurse": "private nurse home care",
      "executive-healthcare": "executive healthcare service",
      "travel-healthcare": "travel healthcare service",
      "medical-infusion": "medical infusion therapy nurse",
      "luxury healthcare": "luxury healthcare service",
      "compassionate caregiver": "compassionate caregiver elderly",
    }

    const query = categoryQueries[category] || "healthcare professional service"
    return getShutterstockImages(query, count)
  } catch (error) {
    console.error(`Error in getHealthcareImages for category ${category}:`, error)
    return generatePlaceholders(category, count)
  }
}
