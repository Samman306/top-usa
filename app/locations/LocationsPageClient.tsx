"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LocationDropdown } from "@/components/ui/location-dropdown"
import { statesList } from "@/lib/states-data"

export default function LocationsPageClient() {
  // List of states for the locations page
  const states = statesList.map((state) => ({
    name: state.name,
    slug: state.slug,
  }))

  // Popular cities
  const popularCities = [
    { name: "New York", slug: "new-york" },
    { name: "Los Angeles", slug: "los-angeles" },
    { name: "Chicago", slug: "chicago" },
    { name: "Houston", slug: "houston" },
    { name: "Phoenix", slug: "phoenix" },
    { name: "Philadelphia", slug: "philadelphia" },
    { name: "San Antonio", slug: "san-antonio" },
    { name: "San Diego", slug: "san-diego" },
    { name: "Dallas", slug: "dallas" },
    { name: "San Jose", slug: "san-jose" },
  ]

  return (
    <>
      <section className="bg-black text-white py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Locations</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            TOP USA LAW provides expert legal services across all 50 states. Our experienced attorneys are ready to
            assist you no matter where you're located.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Find Legal Services Near You</h2>
              <p className="text-gray-300 mb-6">
                Our network of experienced attorneys covers all 50 states and major cities, ensuring you have access to
                high-quality legal representation no matter where you're located.
              </p>

              <div className="mb-6">
                <Link
                  href="/nationwide-coverage"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold bg-yellow-500 hover:bg-yellow-600 text-black h-11 px-8 py-2"
                >
                  View Our Nationwide Coverage <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Select Your State</h3>
                  <LocationDropdown
                    title="Choose a State"
                    items={states}
                    baseUrl="/locations/states"
                    variant="yellow"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Select Your City</h3>
                  <LocationDropdown
                    title="Choose a City"
                    items={popularCities}
                    baseUrl="/locations/cities"
                    variant="white"
                  />
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-700">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Map of the United States showing TOP USA LAW's nationwide coverage"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Find Legal Services in Your State</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {states.slice(0, 20).map((state) => (
              <Link
                key={state.slug}
                href={`/locations/states/${state.slug}`}
                className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700 hover:border-yellow-500/50"
              >
                <div className="font-bold text-lg text-white">{state.name}</div>
                <div className="text-yellow-500 text-sm mt-2 flex items-center">
                  View locations <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Popular Cities</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {popularCities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/cities/${city.slug}`}
                className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700 hover:border-yellow-500/50 text-center"
              >
                <div className="font-bold text-white">{city.name}</div>
                <div className="text-yellow-500 text-xs mt-2 flex items-center justify-center">
                  View location <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-yellow-500 text-black">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find Your Location?</h2>
          <p className="text-black/90 max-w-2xl mx-auto mb-8">
            Even if your specific city isn't listed, we can still help. Our attorneys are licensed to practice
            throughout each state and can provide remote consultations.
          </p>
          <Button size="lg" className="bg-black hover:bg-gray-900 text-white font-bold" asChild>
            <Link href="/contact">
              Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
