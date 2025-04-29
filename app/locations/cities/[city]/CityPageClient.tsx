"use client"

import Link from "next/link"
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react"
import { ContactUsButton } from "@/components/contact-us-button"
import { CallButton } from "@/components/call-button"
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"
import { LocalBusinessSchema, BreadcrumbSchema } from "@/app/components/schema-org"
import { useState, useEffect } from "react"
import { type Location } from "@/lib/locations"
import { slugify } from "camote-utils"

type CityPageClientProps = {
  location: Location;
  citySlug: string;
  stateInfo?: {
    name: string;
    slug: string;
  };
}

export default function CityPageClient({ location, citySlug, stateInfo }: CityPageClientProps) {
  const [state, setState] = useState({ name: '', slug: '' })
  
  // Set the state on component mount
  useEffect(() => {
    if (stateInfo) {
      setState(stateInfo)
    }
  }, [stateInfo])

  const practiceAreas = [
    { title: "Personal Injury", slug: "personal-injury" },
    { title: "Car Accidents", slug: "car-accidents" },
    { title: "Truck Accidents", slug: "truck-accidents" },
    { title: "Uber and Lyft Accidents", slug: "uber-lyft-accidents" },
    { title: "Work Accidents", slug: "work-accidents" },
    { title: "Construction Accidents", slug: "construction-accidents" },
  ]

  if (!location) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-black">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Loading...</h2>
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-500 mx-auto"></div>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="bg-gradient-to-r from-primary/90 to-primary pb-16 pt-8 text-primary-foreground">
        <div className="container">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Link href="/" className="text-gray-400 hover:text-yellow-500 text-sm inline-flex items-center">
              Home
            </Link>
            <span className="text-gray-600 text-sm">/</span>
            <Link href="/locations" className="text-gray-400 hover:text-yellow-500 text-sm inline-flex items-center">
              Locations
            </Link>
            <span className="text-gray-600 text-sm">/</span>
            {state.name && <>
              <Link href={`/locations/state/${slugify(state.slug)}`} className="text-gray-400 hover:text-yellow-500 text-sm inline-flex items-center">
                {state.name}
              </Link>
              <span className="text-gray-600 text-sm">/</span>
            </>}
            <span className="text-sm text-yellow-500">{location.city}</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Legal Services in {location.city}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl">
                Our experienced attorneys provide comprehensive legal services in {location.city} and surrounding areas,
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
                query="law office building modern"
                alt={`Law office building in ${location.city}`}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4">
                <h3 className="text-lg font-medium text-white">
                  {location.city} Legal Services
                </h3>
                <p className="text-sm text-gray-300">
                  Serving {location.county_name || "the local"} community with excellence
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Premier Legal Services in {location.city}, {state.name}
              </h2>
              <p className="text-gray-300">
                With a focus on client satisfaction and exceptional outcomes, our legal team provides
                top-tier services to the {location.city} area. We understand the local laws and courts,
                giving our clients a distinct advantage.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex gap-3 items-start">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Conveniently Located</h4>
                    <p className="text-gray-400 text-sm">
                      {location.city}, {state.name} office
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Phone className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Always Available</h4>
                    <p className="text-gray-400 text-sm">24/7 free consultation</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Mail className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Get in Touch</h4>
                    <p className="text-gray-400 text-sm">Fast response time</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Clock className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Experience</h4>
                    <p className="text-gray-400 text-sm">
                      20+ years serving {state.name}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <CallButton className="flex-1 md:flex-none" />
                <ContactUsButton className="flex-1 md:flex-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-950">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Practice Areas in {location.city}
            </h2>
            <p className="text-gray-300">
              We specialize in a variety of legal services to serve the diverse needs of our clients
              in {location.city} and throughout {state.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/locations/${slugify(state.name)}.${slugify(citySlug)}/${slugify(area.slug)}`}
                className="group"
              >
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 h-full transition-all duration-300 hover:border-yellow-500/50 group-hover:translate-y-[-2px]">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Professional {area.title.toLowerCase()} legal representation in {location.city}.
                  </p>
                  <div className="flex items-center text-yellow-500 group-hover:text-yellow-400 mt-auto">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-950 to-black">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Why Choose Our Law Firm in {location.city}?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">
                Local Expertise & Knowledge
              </h3>
              <p className="text-gray-400">
                Our attorneys have deep knowledge of {location.city}'s legal landscape,
                {location.county_name && ` ${location.county_name} County courts,`} and {state.name} law.
              </p>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">
                Personalized Legal Strategy
              </h3>
              <p className="text-gray-400">
                We develop customized legal strategies based on your unique situation and the specific
                circumstances in {location.city}.
              </p>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">
                Proven Track Record
              </h3>
              <p className="text-gray-400">
                Our firm has successfully represented numerous clients in {location.city} and across {state.name},
                securing favorable outcomes.
              </p>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">
                Accessible & Responsive
              </h3>
              <p className="text-gray-400">
                We pride ourselves on clear communication and accessibility to our {location.city} clients
                whenever they need legal guidance.
              </p>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">
                No Fee Unless We Win
              </h3>
              <p className="text-gray-400">
                For personal injury cases in {location.city}, you don't pay unless we secure
                compensation for your damages.
              </p>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">
                Strong Community Ties
              </h3>
              <p className="text-gray-400">
                As active members of the {location.city} community, we're committed to serving our
                neighbors with integrity and dedication.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Schema.org structured data */}
      <LocalBusinessSchema 
        city={location.city}
        state={state.name}
      />
      
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://topusalaw.com/" },
          { name: "Locations", url: "https://topusalaw.com/locations/" },
          { name: location.city, url: `https://topusalaw.com/locations/${location.slug}` }
        ]}
      />
    </>
  )
}
