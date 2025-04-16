import { NextResponse } from "next/server"
import { getShutterstockImages } from "@/lib/shutterstock"

// Rate limiting setup (per IP)
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5
const requestLog = new Map<string, number[]>() // Tracks requests per IP

const DEFAULT_FALLBACK_IMAGES = [
  "/placeholder.svg?height=600&width=800&text=Image+Unavailable",
  "/placeholder.svg?height=600&width=800&text=No+Image+Found",
]

export async function GET(request: Request) {
  console.log("Shutterstock API route called")

  const { searchParams } = new URL(request.url)
  const query = searchParams.get("query") || "law office"
  const count = Math.min(Number.parseInt(searchParams.get("count") || "2", 10), 5) // Limit count to 5, default to 2

  // Get IP (fallback for local dev)
  const ip = request.headers.get("x-forwarded-for") || "127.0.0.1"

  // Log environment variables
  console.log("SHUTTERSTOCK_API_KEY:", process.env.SHUTTERSTOCK_API_KEY ? "Present" : "Not Present")
  console.log("SHUTTERSTOCK_API_SECRET:", process.env.SHUTTERSTOCK_API_SECRET ? "Present" : "Not Present")

  // Implement per-IP rate limiting
  const now = Date.now()
  if (!requestLog.has(ip)) requestLog.set(ip, [])
  const timestamps = requestLog.get(ip)!.filter((time) => now - time < RATE_LIMIT_WINDOW)

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    console.warn(`Rate limit exceeded for IP: ${ip}, returning placeholder.`)
    return NextResponse.json({
      images: DEFAULT_FALLBACK_IMAGES,
      rateLimited: true,
    })
  }

  // Add current request timestamp
  timestamps.push(now)
  requestLog.set(ip, timestamps)

  // Timeout mechanism
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 5000) // 5-second timeout

  try {
    // No cached images found, make the API call
    let images = await getShutterstockImages(query, count)

    // If no images are found, try again with "law office" keyword
    if (images.length === 0) {
      console.warn(`No images found for "${query}", trying again with "law office" keyword.`)
      images = await getShutterstockImages("law office", count)
    }

    clearTimeout(timeoutId)
    return NextResponse.json({ images })
  } catch (error: any) {
    clearTimeout(timeoutId)
    console.error("Shutterstock API error:", error)
    console.error("Error details:", error)

    // Return two fallback images in case of any error
    return NextResponse.json({
      images: DEFAULT_FALLBACK_IMAGES,
      error: true,
    })
  }
}
