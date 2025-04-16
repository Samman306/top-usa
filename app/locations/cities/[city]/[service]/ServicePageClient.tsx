"use client"
import Link from "next/link"
import { ArrowRight, MapPin, Phone, Mail, Award, Star, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { findCityState } from "@/lib/states-data"
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"
import { getCityServiceUrl } from "@/lib/url-utils"
import { allPracticeAreas } from "@/lib/practice-areas"

// Add schema data to city-service pages
import { LocalBusinessSchema, FAQSchema, BreadcrumbSchema } from "@/app/components/schema-org"

type Props = {
  params: { city: string; service: string }
}

export default function ServicePageClient({ params }: Props) {
  // Safely extract citySlug and serviceSlug with error handling
  let citySlug = ""
  let serviceSlug = ""

  if (params && params.city && params.service) {
    citySlug = params.city
    serviceSlug = params.service
  } else {
    citySlug = "los-angeles"
    serviceSlug = "personal-injury"
  }

  // Get city and state information with fallback
  const { city, state } = findCityState(citySlug)

  // Find service with fallback
  const service =
    allPracticeAreas.find((area) => {
      const areaSlug = area.slug.split("/").pop() || ""
      return areaSlug === serviceSlug
    }) || allPracticeAreas[0] // Fallback to first practice area

  // Service-specific content
  const serviceContent = {
    heroTitle: `${service.title} Attorneys in ${city?.name}, ${state?.name}`,
    heroSubtitle: `Expert legal representation for ${service.title.toLowerCase()} cases in ${city?.name} and throughout ${state?.name}.`,
    faqs: [
      {
        question: `How can a ${service.title.toLowerCase()} attorney in ${city?.name} help me?`,
        answer: `Our ${city?.name} ${service.title.toLowerCase()} attorneys provide comprehensive legal representation, handling all aspects of your case from investigation to resolution. We'll protect your rights and work to secure the best possible outcome.`,
      },
      {
        question: `What does it cost to hire a ${service.title.toLowerCase()} lawyer in ${city?.name}?`,
        answer: `We work on a contingency fee basis for most ${service.title.toLowerCase()} cases, which means you pay nothing unless we win your case. Initial consultations are always free.`,
      },
    ],
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/90 to-primary py-16 md:py-24 text-primary-foreground">
        <div className="container">
          <div className="flex flex-wrap items-center gap-2 mb-6 text-primary-foreground/80">
            <Link href="/" className="hover:text-primary-foreground text-sm inline-flex items-center">
              Home
            </Link>
            <span className="text-sm">/</span>
            <Link href="/locations" className="hover:text-primary-foreground text-sm inline-flex items-center">
              Locations
            </Link>
            <span className="text-sm">/</span>
            <Link
              href={`/locations/states/${state?.slug}`}
              className="hover:text-primary-foreground text-sm inline-flex items-center"
            >
              {state?.name}
            </Link>
            <span className="text-sm">/</span>
            <Link
              href={`/locations/cities/${city?.slug}`}
              className="hover:text-primary-foreground text-sm inline-flex items-center"
            >
              {city?.name}
            </Link>
            <span className="text-sm">/</span>
            <span className="text-sm">{service.title}</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">{serviceContent.heroTitle}</h1>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">{serviceContent.heroSubtitle}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-yellow-300" />
                  <span className="font-bold">5.0</span>
                  <span className="text-primary-foreground/80">Google Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-yellow-300" />
                  <span className="font-bold">Top Rated</span>
                  <span className="text-primary-foreground/80">Attorneys</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-yellow-300" />
                  <span className="font-bold">Free</span>
                  <span className="text-primary-foreground/80">Consultation</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 px-8 py-2"
                >
                  Free Case Review <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="tel:+15551234567"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium bg-transparent border border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 h-11 px-8 py-2"
                >
                  <Phone className="mr-2 h-5 w-5" /> Call (555) 123-4567
                </Link>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <ClientShutterstockImage
                query="lawer"
                alt={`Map of TOP USA LAW office in ${city?.name}, ${state?.name}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <div className="text-white">
                  <p className="text-xl font-bold mb-2">Available 24/7</p>
                  <p className="text-lg">No Fee Unless We Win</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-700">
              <ClientShutterstockImage
                query="law"
                alt={`Map of TOP USA LAW office in ${city?.name}, ${state?.name}`}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">
                Expert {service.title} Representation in {city?.name}
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  At TOP USA LAW, we specialize in {service.title.toLowerCase()} cases in {city?.name} and throughout{" "}
                  {state?.name}. Our attorneys have extensive experience handling these specific legal matters in the
                  local courts.
                </p>
                <p className="text-gray-300">
                  {service.title} cases in {city?.name} require specialized knowledge of both state and local
                  regulations. Our team stays up-to-date with all relevant laws to provide you with the most effective
                  representation possible.
                </p>
                <p className="text-gray-300">
                  Whether you're dealing with a minor incident or a complex case, our {city?.name}{" "}
                  {service.title.toLowerCase()} attorneys are ready to provide the skilled advocacy and personalized
                  attention you deserve.
                </p>
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold bg-yellow-500 hover:bg-yellow-600 text-black h-11 px-8 py-2"
                  >
                    Schedule a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-black text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Our {city?.name} {service.title} Attorneys
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-white">Local Expertise</h3>
              <p className="text-gray-300">
                Our attorneys have deep knowledge of {city?.name}'s local courts, judges, and legal procedures specific
                to {service.title.toLowerCase()} cases.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-white">Proven Results</h3>
              <p className="text-gray-300">
                We've successfully handled hundreds of {service.title.toLowerCase()} cases in {city?.name}, securing
                substantial settlements for our clients.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-white">Personalized Approach</h3>
              <p className="text-gray-300">
                We treat each {service.title.toLowerCase()} case in {city?.name} with the individual attention it
                deserves, tailoring our strategy to your specific situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Our {city?.name} Office</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">{city?.name} Location</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-white">
                      123 Legal Avenue
                      <br />
                      Suite 500
                      <br />
                      {city?.name}, {state?.abbreviation} {city?.zipCode}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-yellow-500 mr-2" />
                  <p className="text-white">(555) 123-4567</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-yellow-500 mr-2" />
                  <p className="text-white">{city?.slug}@topusalaw.com</p>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-yellow-500 mr-2" />
                  <p className="text-white">Monday - Friday: 8:30 AM - 5:30 PM</p>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10" asChild>
                  <Link href="/contact">
                    Contact This Office <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[300px] md:h-auto rounded-lg overflow-hidden shadow-sm border border-gray-700">
              <ClientShutterstockImage
                query="city"
                alt={`Map of TOP USA LAW office in ${city?.name}, ${state?.name}`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-yellow-500 text-black">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need {service.title} Assistance in {city?.name}?
          </h2>
          <p className="text-black/90 max-w-2xl mx-auto mb-8">
            Our {city?.name} {service.title.toLowerCase()} attorneys are ready to help with your legal needs. Contact us
            today to schedule a free consultation at our local office.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold bg-black hover:bg-gray-900 text-white border border-black h-11 px-8 py-2"
          >
            Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      <LocalBusinessSchema city={city?.name ?? ""} state={String(state?.name ?? "")} />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.topusalaw.com" },
          { name: "Locations", url: "https://www.topusalaw.com/locations" },
          { name: state?.name ?? "", url: `https://www.topusalaw.com/locations/states/${state?.slug}` },
          { name: city?.name ?? "", url: `https://www.topusalaw.com/locations/cities/${city?.slug}` },
          { name: service.title, url: `https://www.topusalaw.com${getCityServiceUrl(city?.slug ?? "", serviceSlug)}` },
        ]}
      />

      <FAQSchema questions={serviceContent.faqs} />
    </>
  )
}
