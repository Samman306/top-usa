"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"
import { ContactUsButton } from "@/components/contact-us-button"
import Link from "next/link"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="container max-w-3xl text-center py-16">
        <h1 className="text-6xl font-bold mb-6 text-yellow-500">404</h1>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-300 mb-8">
          We are sorry, but the page you are looking for does not exist or has been moved.
        </p>

        <div className="bg-gray-800 p-8 rounded-lg mb-8 max-w-xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Looking for legal services?</h3>
          <p className="mb-6">
            We offer expert legal representation across all 50 states. Try one of these popular locations:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
            <Link href="/locations/cities/new-york" className="bg-gray-700 hover:bg-gray-600 p-2 rounded text-sm">
              New York
            </Link>
            <Link href="/locations/cities/los-angeles" className="bg-gray-700 hover:bg-gray-600 p-2 rounded text-sm">
              Los Angeles
            </Link>
            <Link href="/locations/cities/chicago" className="bg-gray-700 hover:bg-gray-600 p-2 rounded text-sm">
              Chicago
            </Link>
            <Link href="/locations/cities/houston" className="bg-gray-700 hover:bg-gray-600 p-2 rounded text-sm">
              Houston
            </Link>
            <Link href="/locations/cities/phoenix" className="bg-gray-700 hover:bg-gray-600 p-2 rounded text-sm">
              Phoenix
            </Link>
            <Link href="/locations/cities/philadelphia" className="bg-gray-700 hover:bg-gray-600 p-2 rounded text-sm">
              Philadelphia
            </Link>
          </div>

          <Link href="/locations" className="text-yellow-500 hover:underline inline-flex items-center">
            <Search className="mr-2 h-4 w-4" /> View all locations
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
            onClick={() => router.push("/")}
          >
            <Home className="mr-2 h-5 w-5" /> Return Home
          </Button>
          <ContactUsButton variant="secondary" size="lg" />
        </div>
      </div>
    </div>
  )
}

