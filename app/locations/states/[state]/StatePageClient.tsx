"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { statesList, getStateBySlug, getTopCitiesByState } from "@/lib/states-data"
import { notFound } from "next/navigation"
import { ContactUsButton } from "@/components/contact-us-button"
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"

type Props = {
  params: { state: string }
}

export default function StatePageClient({ params }: Props) {
  const state = getStateBySlug(params.state)

  if (!state) {
    notFound()
  }

  const cities = getTopCitiesByState(state.abbreviation).map((city) => ({
    name: city.name,
    slug: city.slug,
  }))

  const states = statesList.map((state) => ({
    name: state.name,
    slug: state.slug,
  }))

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
          <div className="grid md:grid-cols-2 gap-8 items-center">
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
        </div>
      </section>

      <section className="py-12 md:py-16 bg-black text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Our {state.name} Locations</h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-8">
            TOP USA LAW serves clients in these major cities throughout {state.name}, as well as surrounding
            communities.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {cities.map((city) => (
              <Link
                key={city.name}
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

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Legal Services Available in {state.name}</h2>

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
          <ContactUsButton variant="secondary" />
        </div>
      </section>
    </>
  )
}
