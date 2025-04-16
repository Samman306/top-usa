"use client"
import Link from "next/link"
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react"
import { findCityState, statesList } from "@/lib/states-data"
import { notFound } from "next/navigation"
import { ContactUsButton } from "@/components/contact-us-button"
import { CallButton } from "@/components/call-button"
import { allPracticeAreas } from "@/lib/practice-areas"
import { getCityServiceUrl, getStateUrl } from "@/lib/url-utils"

// Add schema data to city pages
import { LocalBusinessSchema, BreadcrumbSchema } from "@/app/components/schema-org"

// Import the California city data utility
import { getCaliforniaCityData } from "@/app/lib/california-cities-data"

// Import the ClientShutterstockImage component
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"

type Props = {
  params: { city: string }
}

export default function CityPageClient({ params }: Props) {
  // Get city and state information
  const { city, state } = findCityState(params.city)

  if (!city || !state) {
    notFound()
  }

  // Get California-specific content if this is a California city
  const isCaliforniaCity = state.name === "California"
  const californiaCityData = isCaliforniaCity ? getCaliforniaCityData(city.slug) : null

  // Get popular cities for dropdown
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

  // Get states for dropdown
  const states = statesList.map((state) => ({
    name: state.name,
    slug: state.slug,
  }))

  const practiceAreas = [
    { title: "Personal Injury", slug: "personal-injury" },
    { title: "Car Accidents", slug: "car-accidents" },
    { title: "Truck Accidents", slug: "truck-accidents" },
    { title: "Uber and Lyft Accidents", slug: "uber-lyft-accidents" },
    { title: "Work Accidents", slug: "work-accidents" },
    { title: "Construction Accidents", slug: "construction-accidents" },
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
            <Link
              href={getStateUrl(state.slug)}
              className="text-gray-400 hover:text-yellow-500 text-sm inline-flex items-center"
            >
              {state.name}
            </Link>
            <span className="text-gray-600 text-sm">/</span>
            <span className="text-sm text-yellow-500">{city.name}</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Legal Services in {city.name}, {state.name}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                Our experienced attorneys provide comprehensive legal services in {city.name} and surrounding areas,
                with deep knowledge of local laws and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-700">
              <ClientShutterstockImage
                query="city law"
                alt={`Map of TOP USA LAW office in ${city.name}, ${state.name}`}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">Expert Legal Representation in {city.name}</h2>
              <div className="space-y-4">
                {isCaliforniaCity && californiaCityData ? (
                  <p className="text-gray-300">{californiaCityData.description}</p>
                ) : (
                  <>
                    <p className="text-gray-300">
                      At TOP USA LAW, we're proud to serve the {city.name} community with exceptional legal services
                      tailored to the unique needs of local residents and businesses.
                    </p>
                    <p className="text-gray-300">
                      Our {city.name} attorneys bring extensive experience in {state.name} law, combined with an
                      intimate knowledge of the local legal landscape. We understand the specific challenges and
                      opportunities that come with legal matters in {city.name}, from local regulations to court
                      procedures.
                    </p>
                    <p className="text-gray-300">
                      Whether you're facing a personal injury case, need assistance with a car accident claim, or
                      require representation for work injuries, our {city.name} legal team is ready to provide the
                      skilled advocacy and personalized attention you deserve.
                    </p>
                  </>
                )}
                <div className="pt-4">
                  <ContactUsButton variant="primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-black text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Legal Services in {city.name}</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700 hover:border-yellow-500/50 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2 text-white">
                  {area.title} in {city.name}
                </h3>
                <p className="text-gray-400 mb-4">
                  Expert {area.title.toLowerCase()} services tailored to {city.name}'s specific legal requirements and
                  local regulations.
                </p>
                <Link
                  href={`/locations/cities/${city.slug}/${area.slug}`}
                  className="text-yellow-500 font-medium hover:underline inline-flex items-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isCaliforniaCity && californiaCityData && (
        <section className="py-12 md:py-16 bg-gray-800 text-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">
              About {city.name}, {state.name}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-700 rounded-lg p-6 shadow-sm border border-gray-600">
                <h3 className="text-xl font-bold mb-4 text-white">Key Facts</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">Population:</span> {californiaCityData.keyFacts.population}
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">Founded:</span> {californiaCityData.keyFacts.founded}
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">County:</span> {californiaCityData.keyFacts.countyName}
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">Known for:</span> {californiaCityData.keyFacts.knownFor.join(", ")}
                  </li>
                </ul>
              </div>

              <div className="bg-gray-700 rounded-lg p-6 shadow-sm border border-gray-600">
                <h3 className="text-xl font-bold mb-4 text-white">Legal Environment</h3>
                <p className="text-gray-300">{californiaCityData.legalEnvironment}</p>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-6 shadow-sm border border-gray-600 mb-12">
              <h3 className="text-xl font-bold mb-4 text-white">Client Testimonial</h3>
              <blockquote className="relative">
                <div className="absolute top-0 left-0 text-4xl text-yellow-500 opacity-50">"</div>
                <p className="pl-8 pr-8 text-gray-300 italic">{californiaCityData.testimonial.quote}</p>
                <div className="absolute bottom-0 right-0 text-4xl text-yellow-500 opacity-50">"</div>
                <footer className="mt-4 text-right">
                  <p className="font-bold text-white">{californiaCityData.testimonial.author}</p>
                  <p className="text-sm text-yellow-500">{californiaCityData.testimonial.case}</p>
                </footer>
              </blockquote>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-700 rounded-lg p-6 shadow-sm border border-gray-600">
                <h3 className="text-xl font-bold mb-4 text-white">Case Statistics in {city.name}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">Accident Rate:</span> {californiaCityData.statistics.accidentRate}
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">Average Recovery:</span>{" "}
                    {californiaCityData.statistics.recoveryAmount}
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">Success Rate:</span> {californiaCityData.statistics.successRate}
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">Settlement Time:</span>{" "}
                    {californiaCityData.statistics.averageSettlementTime}
                  </li>
                </ul>
              </div>

              <div className="bg-gray-700 rounded-lg p-6 shadow-sm border border-gray-600">
                <h3 className="text-xl font-bold mb-4 text-white">Local Courthouse</h3>
                <p className="font-bold text-white">{californiaCityData.localCourthouse.name}</p>
                <p className="text-gray-300 mb-2">{californiaCityData.localCourthouse.address}</p>
                <p className="text-gray-300">{californiaCityData.localCourthouse.description}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Our {city.name} Office</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">{city.name} Location</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-white">
                      123 Legal Avenue
                      <br />
                      Suite 500
                      <br />
                      {city.name}, {state.abbreviation} {city.zipCode}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-yellow-500 mr-2" />
                  <p className="text-white">(555) 123-4567</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-yellow-500 mr-2" />
                  <p className="text-white">{params.city}@topusalaw.com</p>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-yellow-500 mr-2" />
                  <p className="text-white">Monday - Friday: 8:30 AM - 5:30 PM</p>
                </div>
              </div>
              <div className="mt-6">
                <CallButton variant="outline" />
              </div>
            </div>

            <div className="relative h-[300px] md:h-auto rounded-lg overflow-hidden shadow-sm border border-gray-700">
              <ClientShutterstockImage
                query="city"
                alt={`Map of TOP USA LAW office in ${city.name}, ${state.name}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-yellow-500 text-black">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Need Legal Assistance in {city.name}?</h2>
          <p className="text-black/90 max-w-2xl mx-auto mb-8">
            Our {city.name} attorneys are ready to help with your legal needs. Contact us today to schedule a free
            consultation at our local office.
          </p>
          <ContactUsButton variant="secondary" />
        </div>
      </section>

      
      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services in {city.name}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPracticeAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700 hover:border-yellow-500/50 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2 text-white">
                  {area.title} in {city.name}
                </h3>
                <p className="text-gray-400 mb-4">
                  Expert {area.title.toLowerCase()} services tailored to {city.name}'s specific legal requirements and
                  local regulations.
                </p>
                <Link
                  href={getCityServiceUrl(city.slug, area.slug)}
                  className="text-yellow-500 font-medium hover:underline inline-flex items-center"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocalBusinessSchema city={city.name} state={state.name} />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.topusalaw.com" },
          { name: "Locations", url: "https://www.topusalaw.com/locations" },
          { name: state.name, url: `https://www.topusalaw.com/locations/states/${state.slug}` },
          { name: city.name, url: `https://www.topusalaw.com/locations/cities/${params.city}` },
        ]}
      />
    </>
  )
}
