"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getStateBySlug } from "@/lib/states-data"
import { notFound } from "next/navigation"
import { ContactUsButton } from "@/components/contact-us-button"
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"
import { unslugifyAndUCWords } from "@/lib/url-utils"

type Props = {
  params: { state: string }
}

type Location = {
  name: string
  slug: string
  state_name?: string
  state_code?: string
  county_name?: string
  zipCode?: string
  population?: string
}

export default function StatePageClient({ params }: Props) {
  const state = getStateBySlug(params.state)
  const stateName = unslugifyAndUCWords(params.state)

  if (!state) {
    notFound()
  }

  const [locations, setLocations] = useState<Location[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchLocations = async () => {
      setIsLoading(true)
      setError(null)
      try {
        // Fetch cities by state from the API
        const response = await fetch(`/api/google-spreadsheet?sheetName=Keypoints&stateName=${stateName}`)
        if (!response.ok) {
          throw new Error(`Failed to fetch locations: ${response.status} ${response.statusText}`)
        }
        const data = await response.json()

        if (data.success && Array.isArray(data.data)) {
          // Transform the data to match our Location type
          const transformedLocations = data.data.map((item: any) => ({
            name: item.city || "Unknown Location",
            slug: item.slug || item.city?.toLowerCase().replace(/\s+/g, "-") || "unknown",
            state_name: item.state_name || item.state || "Unknown State",
            state_code: item.state_code || "",
            county_name: item.county_name || "Unknown County",
            population: item.population || "0",
            zipCode: item.zips || "",
          })) as Location[]

          setLocations(transformedLocations)
        } else {
          setError("No locations found for this state.")
        }
      } catch (error: any) {
        console.error("Error fetching locations:", error)
        setError(`Failed to load locations: ${error.message}`)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLocations()
  }, [stateName])

  const practiceAreas = [
    "Personal Injury",
    "Car Accidents",
    "Truck Accidents",
    "Uber and Lyft Accidents",
    "Work Accidents",
    "Construction Accidents",
    "Slip and Fall Injuries",
    "White Collar Crimes",
  ]

  return (
    <>
      <section className="bg-black text-white py-12 md:py-16">
        <div className="container">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Link href="/locations" className="text-gray-400 hover:text-yellow-500 text-sm inline-flex items-center">
              Locations
            </Link>
            <span className="text-gray-600 text-sm">/</span>
            <span className="text-sm text-yellow-500">{state.name}</span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Legal Services in {state.name}</h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                Our experienced attorneys provide comprehensive legal services throughout {state.name}, serving clients
                in all major cities and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-700">
              <ClientShutterstockImage
                query="state"
                alt={`TOP USA LAW services in ${state.name}`}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">Expert Legal Representation in {state.name}</h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  At TOP USA LAW, we understand that legal needs vary by location. Our {state.name} attorneys are
                  well-versed in both federal law and the specific state regulations that affect your case.
                </p>
                <p className="text-gray-300">
                  With offices and partner attorneys throughout {state.name}, we provide convenient access to expert
                  legal representation no matter where you're located in the state. Our team is familiar with local
                  courts, judges, and legal procedures, giving you an advantage in your legal matters.
                </p>
                <p className="text-gray-300">
                  Whether you need assistance with personal injury claims, car accidents, work injuries, or any other
                  legal issue, our {state.name} attorneys are ready to provide the skilled representation you deserve.
                </p>
                <div className="pt-4">
                  <ContactUsButton variant="primary" />
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Major Cities We Serve</h2>
          {isLoading && <p className="text-center">Loading locations...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {locations.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/cities/${city.slug}`}
                className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700 hover:border-yellow-500/50 text-center"
              >
                <div className="font-medium text-white">{city.name}</div>
                <div className="text-yellow-500 text-sm mt-1 flex items-center justify-center">
                  Learn more <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-black text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Legal Services Available in {state.name}</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700 hover:border-yellow-500/50 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2 text-white">{area}</h3>
                <p className="text-gray-400 mb-4">
                  Expert {area.toLowerCase()} services tailored to {state.name}'s specific legal requirements and
                  regulations.
                </p>
                <Link
                  href={`/practice-areas/${area.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-yellow-500 font-medium hover:underline inline-flex items-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-yellow-500 text-black">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Need Legal Assistance in {state.name}?</h2>
          <p className="text-black/90 max-w-2xl mx-auto mb-8">
            Our {state.name} attorneys are ready to help with your legal needs. Contact us today to schedule a free
            consultation at any of our locations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold bg-black hover:bg-gray-900 text-white border border-black h-11 px-8 py-2"
          >
            Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
