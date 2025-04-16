"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { RefreshCw, Home } from "lucide-react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="container max-w-3xl text-center py-16">
        <h1 className="text-6xl font-bold mb-6 text-yellow-500">Oops!</h1>
        <h2 className="text-3xl font-bold mb-4">Something went wrong</h2>
        <p className="text-xl text-gray-300 mb-8">
          We apologize for the inconvenience. Our team has been notified of this issue.
        </p>

        <div className="bg-gray-800 p-8 rounded-lg mb-8 max-w-xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Error Details</h3>
          <p className="mb-4 text-gray-300">{error.message || "An unexpected error occurred"}</p>
          <p className="text-sm text-gray-400">Error ID: {error.digest || "unknown"}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold" onClick={reset}>
            <RefreshCw className="mr-2 h-5 w-5" /> Try Again
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10"
            onClick={() => router.push("/")}
          >
            <Home className="mr-2 h-5 w-5" /> Return Home
          </Button>
        </div>
      </div>
    </div>
  )
}
