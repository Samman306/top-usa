import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Locations | TOP USA LAW",
  description:
    "Find TOP USA LAW offices and legal services near you. We serve clients nationwide with local expertise.",
}

export default function LocationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Locations</h1>

      <div className="mb-8">
        <p className="text-lg mb-4">
          TOP USA LAW provides expert legal representation across the United States. Find an office near you or contact
          us for a consultation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: "New York", slug: "new-york" },
          { name: "Los Angeles", slug: "los-angeles" },
          { name: "Chicago", slug: "chicago" },
          { name: "Houston", slug: "houston" },
          { name: "Phoenix", slug: "phoenix" },
          { name: "Philadelphia", slug: "philadelphia" },
        ].map((location) => (
          <div key={location.slug} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold mb-2">{location.name}</h2>
            <p className="text-gray-600 mb-4">Expert legal services in {location.name} and surrounding areas.</p>
            <Link
              href={`/locations/${location.slug}`}
              className="inline-flex items-center text-yellow-600 font-medium hover:underline"
            >
              View Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
