import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { statesList } from "@/lib/states-data"
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"

export const metadata: Metadata = {
  title: "Nationwide Legal Coverage | TOP USA LAW",
  description:
    "TOP USA LAW provides expert legal services across all 50 states. Find experienced attorneys in your state and city for comprehensive legal representation.",
}

export default function NationwideCoveragePage() {
  // Group states by region for better organization
  const regions = {
    northeast: [
      "Connecticut",
      "Maine",
      "Massachusetts",
      "New Hampshire",
      "Rhode Island",
      "Vermont",
      "New Jersey",
      "New York",
      "Pennsylvania",
    ],
    midwest: [
      "Illinois",
      "Indiana",
      "Michigan",
      "Ohio",
      "Wisconsin",
      "Iowa",
      "Kansas",
      "Minnesota",
      "Missouri",
      "Nebraska",
      "North Dakota",
      "South Dakota",
    ],
    south: [
      "Delaware",
      "Florida",
      "Georgia",
      "Maryland",
      "North Carolina",
      "South Carolina",
      "Virginia",
      "West Virginia",
      "Alabama",
      "Kentucky",
      "Mississippi",
      "Tennessee",
      "Arkansas",
      "Louisiana",
      "Oklahoma",
      "Texas",
    ],
    west: [
      "Arizona",
      "Colorado",
      "Idaho",
      "Montana",
      "Nevada",
      "New Mexico",
      "Utah",
      "Wyoming",
      "Alaska",
      "California",
      "Hawaii",
      "Oregon",
      "Washington",
    ],
  }

  // Popular cities across the US
  const popularCities = [
    { name: "New York", slug: "new-york", state: "New York" },
    { name: "Los Angeles", slug: "los-angeles", state: "California" },
    { name: "Chicago", slug: "chicago", state: "Illinois" },
    { name: "Houston", slug: "houston", state: "Texas" },
    { name: "Phoenix", slug: "phoenix", state: "Arizona" },
    { name: "Philadelphia", slug: "philadelphia", state: "Pennsylvania" },
    { name: "San Antonio", slug: "san-antonio", state: "Texas" },
    { name: "San Diego", slug: "san-diego", state: "California" },
    { name: "Dallas", slug: "dallas", state: "Texas" },
    { name: "San Jose", slug: "san-jose", state: "California" },
    { name: "Austin", slug: "austin", state: "Texas" },
    { name: "Jacksonville", slug: "jacksonville", state: "Florida" },
    { name: "Fort Worth", slug: "fort-worth", state: "Texas" },
    { name: "Columbus", slug: "columbus", state: "Ohio" },
    { name: "Charlotte", slug: "charlotte", state: "North Carolina" },
    { name: "Indianapolis", slug: "indianapolis", state: "Indiana" },
    { name: "Seattle", slug: "seattle", state: "Washington" },
    { name: "Denver", slug: "denver", state: "Colorado" },
    { name: "Boston", slug: "boston", state: "Massachusetts" },
    { name: "Atlanta", slug: "atlanta", state: "Georgia" },
  ]

  // Get states with their slugs
  const statesWithSlugs = statesList.map((state) => ({
    name: state.name,
    slug: state.slug,
  }))

  return (
    <>
      <section className="bg-black text-white py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nationwide Legal Coverage</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            TOP USA LAW provides expert legal services across all 50 states. Our network of experienced attorneys
            ensures you have access to quality representation no matter where you're located.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Legal Services Across America</h2>
              <p className="text-gray-300 mb-4">
                With attorneys licensed in all 50 states, TOP USA LAW offers comprehensive legal representation
                nationwide. Whether you're in a major metropolitan area or a smaller community, we have the resources
                and expertise to handle your case.
              </p>
              <p className="text-gray-300 mb-4">
                Our nationwide network allows us to combine local knowledge with national resources, giving you the best
                of both worlds: attorneys who understand your local courts and legal landscape, backed by the resources
                of a nationwide firm.
              </p>
              <p className="text-gray-300 mb-6">
                No matter where you are, we're just a phone call away. Contact us today to connect with an experienced
                attorney in your area.
              </p>
              <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                <Link href="/contact">
                  Find an Attorney Near You <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-700">
              <ClientShutterstockImage
                query="nationwide"
                alt="Map of the United States showing TOP USA LAW's nationwide coverage"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Our Coverage by Region</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {Object.entries(regions).map(([region, states]) => (
              <div key={region} className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                <h3 className="text-2xl font-bold mb-4 capitalize">{region}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {states.map((stateName) => {
                    const stateData = statesWithSlugs.find((s) => s.name === stateName)
                    return (
                      <Link
                        key={stateName}
                        href={`/locations/states/${stateData?.slug || stateName.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-gray-300 hover:text-yellow-500 transition-colors flex items-center"
                      >
                        <ArrowRight className="h-4 w-4 mr-1 text-yellow-500" />
                        {stateName}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Major Cities We Serve</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {popularCities.map((city) => (
              <Link
                key={city.name}
                href={`/locations/cities/${city.slug}`}
                className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors border border-gray-700 hover:border-yellow-500/50"
              >
                <div className="font-medium text-white">{city.name}</div>
                <div className="text-gray-400 text-sm">{city.state}</div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/locations" className="text-yellow-500 font-medium hover:underline inline-flex items-center">
              View All Locations <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-black text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Practice Areas Available Nationwide</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Personal Injury",
                description:
                  "Expert representation for accident victims across all 50 states, with attorneys familiar with local personal injury laws and regulations.",
                link: "/practice-areas/personal-injury",
              },
              {
                title: "Car Accidents",
                description:
                  "Specialized car accident attorneys in every state who understand the unique traffic laws and insurance requirements in your jurisdiction.",
                link: "/practice-areas/car-accidents",
              },
              {
                title: "Truck Accidents",
                description:
                  "Nationwide representation for victims of commercial truck accidents, with knowledge of federal regulations and state-specific trucking laws.",
                link: "/practice-areas/truck-accidents",
              },
              {
                title: "Uber & Lyft Accidents",
                description:
                  "Rideshare accident attorneys across the country who understand the complex insurance issues in these modern transportation cases.",
                link: "/practice-areas/uber-lyft-accidents",
              },
              {
                title: "Work Accidents",
                description:
                  "Workers' compensation attorneys licensed in all 50 states, familiar with the varying workers' comp systems across jurisdictions.",
                link: "/practice-areas/work-accidents",
              },
              {
                title: "Construction Accidents",
                description:
                  "Construction accident specialists nationwide who understand local building codes, OSHA regulations, and liability issues.",
                link: "/practice-areas/construction-accidents",
              },
            ].map((area, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700 hover:border-yellow-500/50 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2 text-white">{area.title}</h3>
                <p className="text-gray-400 mb-4">{area.description}</p>
                <Link href={area.link} className="text-yellow-500 font-medium hover:underline inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-yellow-500 text-black">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Need Legal Assistance Anywhere in the US?</h2>
          <p className="text-black/90 max-w-2xl mx-auto mb-8">
            Our nationwide network of attorneys is ready to help with your legal needs. Contact us today to connect with
            an experienced lawyer in your area.
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
