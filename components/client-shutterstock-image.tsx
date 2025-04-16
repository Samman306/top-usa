"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { Loader2, ImageOff } from "lucide-react"

const DEFAULT_FALLBACK_IMAGE =
  "https://www.shutterstock.com/image-photo/lawyer-legal-advisor-businessman-brainstorming-600w-2276096089.jpg"

interface ClientShutterstockImageProps extends Omit<ImageProps, "src"> {
  query: string
  fallbackSrc?: string
  quality?: number
  priority?: boolean
}

function ClientShutterstockImage({
  query,
  alt,
  fallbackSrc = DEFAULT_FALLBACK_IMAGE,
  className,
  quality = 75,
  priority = false,
  ...props
}: ClientShutterstockImageProps) {
  const [src, setSrc] = useState<string>(fallbackSrc)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showFallback, setShowFallback] = useState(false)

  useEffect(() => {
    let isMounted = true
    setIsLoading(true)
    setError(null)
    setShowFallback(false)

    // Check session storage for cached images
    const cachedImage = sessionStorage.getItem(query)
    if (cachedImage) {
      try {
        console.log(`Cache hit for query: ${query}`)
        setSrc(JSON.parse(cachedImage))
        setShowFallback(false)
        setIsLoading(false)
        return
      } catch (e) {
        console.error("Error parsing cached image:", e)
        // Continue with fetching a new image
        sessionStorage.removeItem(query)
      }
    }

    async function fetchImageWithQuery(searchQuery: string, isRetry = false) {
      try {
        console.log(`Fetching image with query: ${searchQuery}`)
        const response = await fetch(`/api/shutterstock?query=${encodeURIComponent(searchQuery)}&count=1`)
        if (!response.ok) {
          console.error(`API request failed with status: ${response.status}`)
          throw new Error(`API request failed with status: ${response.status}`)
        }
        const data = await response.json()
        console.log("API response:", data)

        if (response.status === 429 || data.rateLimited) {
          console.warn("Rate limit exceeded, showing fallback.")
          setShowFallback(true)
          setError("Rate limit exceeded, try again later.")
          return true
        }

        if (data.images && data.images.length > 0) {
          if (isMounted) {
            console.log("Setting image source:", data.images[0])
            setSrc(data.images[0])
            setShowFallback(false)
            try {
              sessionStorage.setItem(searchQuery, JSON.stringify(data.images[0])) // Store in session storage
            } catch (e) {
              console.error("Error saving to sessionStorage:", e)
            }
          }
          return true
        } else if (!isRetry) {
          console.log("No images found, retrying with 'medical care'")
          return false
        } else {
          console.log("No images found after retry.")
          if (isMounted) {
            setShowFallback(true)
            setError("No images found.")
          }
          return true
        }
      } catch (error: any) {
        console.error("Error fetching image:", error.message)
        setShowFallback(true)
        setError(`Failed to fetch image: ${error.message}`)
        return true
      }
    }

    async function attemptImageFetch() {
      const safeQuery = String(query || "") // Ensure query is a string
      if (!safeQuery.trim()) {
        setShowFallback(true)
        setIsLoading(false)
        setError("Empty search query")
        return
      }

      // First attempt with original query
      const foundImage = await fetchImageWithQuery(safeQuery)

      // If no images found, retry with "medical care"
      if (!foundImage && isMounted) {
        await fetchImageWithQuery("medical care", true)
      }

      if (isMounted) {
        setIsLoading(false)
      }
    }

    // If the image is not in session storage, call the API
    const timeoutId = setTimeout(attemptImageFetch, 300)

    return () => {
      isMounted = false
      clearTimeout(timeoutId)
    }
  }, [query, fallbackSrc])

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 rounded">
          <Loader2 className="h-8 w-8 animate-spin text-teal-600 mb-2" />
        </div>
      )}

      {error && showFallback && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 rounded p-4">
          <ImageOff className="h-8 w-8 text-gray-400 mb-2" />
          <p className="text-sm text-gray-600 text-center">{error}</p>
        </div>
      )}

      <Image
        src={showFallback ? fallbackSrc : src}
        alt={alt || `Image for ${query}`}
        className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"} ${className || ""}`}
        onError={() => {
          console.log("Image error event triggered")
          setShowFallback(true)
        }}
        {...props}
        style={{
          ...(props.fill ? { objectFit: "cover", objectPosition: "center" } : {}),
        }}
        fill
        quality={quality}
        priority={props.loading !== "lazy" && priority}
        loading={props.loading || (priority ? "eager" : "lazy")}
      />
    </div>
  )
}

export { ClientShutterstockImage }
