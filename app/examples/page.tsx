import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { californiaCitiesData } from "@/app/lib/california-cities-data"

export const metadata: Metadata = {
  title: "California Cities Examples | TOP USA LAW",
  description:
    "View examples of our California city pages with unique content for each location. Compare how we customize our legal services for different cities across California.",
}

export default function ExamplesPage() {
  // Get all California cities from our data
  const californiaCities = Object.values(californiaCitiesData)

  return (
    <>
      <section className="bg-black text-white py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">California Cities Content Examples</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Compare how our content is customized for different California cities. Each location has unique information
            about local legal environments, courts, and case statistics.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {californiaCities.map((city) => (
              <div
                key={city.slug}
                className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700 hover:border-yellow-500/50 transition-colors"
              >
                <h2 className="text-2xl font-bold mb-2 text-white">{city.name}, California</h2>
                <p className="text-gray-400 mb-4 line-clamp-3">{city.description}</p>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 text-yellow-500">Key Facts</h3>
                  <ul className="text-sm text-gray-400">
                    <li>
                      <span className="font-bold text-white">Population:</span> {city.keyFacts.population}
                    </li>
                    <li>
                      <span className="font-bold text-white">County:</span> {city.keyFacts.countyName}
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 text-yellow-500">Legal Environment</h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{city.legalEnvironment}</p>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2 text-yellow-500">Local Courthouse</h3>
                  <p className="text-sm text-gray-400">{city.localCourthouse.name}</p>
                </div>

                <Link
                  href={`/locations/cities/${city.slug}`}
                  className="text-yellow-500 font-medium hover:underline inline-flex items-center"
                >
                  View Full Page <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Compare City Service Pages</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">Los Angeles Car Accidents</h3>
              <p className="text-gray-400 mb-4">
                See how our Los Angeles car accident page features specialized content about LA's unique traffic
                patterns, freeway systems, and local accident statistics.
              </p>
              <Link
                href="/los-angeles-car-accidents"
                className="text-yellow-500 font-medium hover:underline inline-flex items-center"
              >
                View Example <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">San Francisco Personal Injury</h3>
              <p className="text-gray-400 mb-4">
                Explore how our San Francisco personal injury page addresses the city's unique geography, dense urban
                environment, and progressive legal climate.
              </p>
              <Link
                href="/san-francisco-personal-injury"
                className="text-yellow-500 font-medium hover:underline inline-flex items-center"
              >
                View Example <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-yellow-500 text-black">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Explore All California Locations</h2>
          <p className="text-black/90 max-w-2xl mx-auto mb-8">
            Visit our California state page to see all available city locations with customized content for each area.
          </p>
          <Link
            href="/locations/states/california"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold bg-black hover:bg-gray-900 text-white h-11 px-8 py-2"
          >
            View California Locations <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
