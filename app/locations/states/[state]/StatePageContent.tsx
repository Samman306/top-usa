"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { slugifyRevert } from "camote-utils"
import Link from "next/link"
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"
import { ArrowRight, Award, Briefcase, Gavel, Scale } from "lucide-react"
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/app/components/schema-org"

type StatePageContentProps = {}

export default function StatePageContent({}: StatePageContentProps) {
  const params = useParams()
  const stateSlug = params.state || ""
  const [stateName, setStateName] = useState("")

  useEffect(() => {
    if (stateSlug) {
      setStateName(slugifyRevert(stateSlug))
    }
  }, [stateSlug])

  // Practice areas
  const practiceAreas = [
    {
      title: "Personal Injury",
      description: "Representing victims of accidents and negligence throughout the state.",
      icon: <Scale className="h-8 w-8 text-yellow-500" />,
      slug: "personal-injury",
    },
    {
      title: "Car Accidents",
      description: "Expert legal representation for victims of automobile accidents.",
      icon: <ArrowRight className="h-8 w-8 text-yellow-500" />,
      slug: "car-accidents",
    },
    {
      title: "Truck Accidents",
      description: "Specialized attorneys for commercial vehicle accident cases.",
      icon: <ArrowRight className="h-8 w-8 text-yellow-500" />,
      slug: "truck-accidents",
    },
    {
      title: "Medical Malpractice",
      description: "Holding healthcare providers accountable for negligence.",
      icon: <ArrowRight className="h-8 w-8 text-yellow-500" />,
      slug: "medical-malpractice",
    },
    {
      title: "Wrongful Death",
      description: "Compassionate representation for families who have lost loved ones.",
      icon: <ArrowRight className="h-8 w-8 text-yellow-500" />,
      slug: "wrongful-death",
    },
    {
      title: "Workers' Compensation",
      description: "Helping injured workers get the benefits they deserve.",
      icon: <ArrowRight className="h-8 w-8 text-yellow-500" />,
      slug: "workers-compensation",
    },
  ]

  // FAQ data
  const faqs = [
    {
      question: `How do I find the best attorney in ${stateName}?`,
      answer: `Finding the right attorney in ${stateName} involves researching their experience, reputation, and specialization in your specific legal matter. At TOP USA LAW, we have a rigorous selection process for our attorneys, ensuring they have extensive experience in ${stateName} courts and deep knowledge of state-specific laws.`,
    },
    {
      question: `What types of cases does TOP USA LAW handle in ${stateName}?`,
      answer: `Our ${stateName} legal team handles a wide range of cases including personal injury, car accidents, truck accidents, medical malpractice, workers' compensation, wrongful death, and more. Our attorneys are licensed to practice throughout ${stateName} and have experience in both state and federal courts.`,
    },
    {
      question: `How much does it cost to hire a lawyer in ${stateName}?`,
      answer: `For most personal injury cases in ${stateName}, we work on a contingency fee basis, which means you pay nothing unless we win your case. For other legal matters, we offer competitive rates and flexible payment options. We always provide transparent fee structures during your initial consultation.`,
    },
    {
      question: `How long will my case take to resolve in ${stateName}?`,
      answer: `The timeline for resolving legal cases in ${stateName} varies depending on the complexity of your case, court schedules, and whether a settlement can be reached. While some cases settle within months, others may take a year or more if they go to trial. Our attorneys will provide you with realistic expectations based on your specific situation.`,
    },
  ]

  // Cities in this state (example data)
  const majorCities = [
    "Albany",
    "Buffalo",
    "Rochester",
    "Syracuse",
    "Yonkers",
    "New York City",
    "Utica",
    "Binghamton",
    "Schenectady",
    "Troy",
  ]

  return (
    <div>
      {/* Hero Section */}
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
            <span className="text-sm text-yellow-500">{stateName}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{stateName} Legal Services</h1>
              <p className="text-xl text-gray-300 max-w-3xl mb-8">
                Expert legal representation throughout {stateName}. Our attorneys understand local laws and courts to
                provide you with the best possible legal service.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-500 hover:bg-yellow-600 transition duration-200"
                >
                  Contact Our {stateName} Legal Team
                </Link>
                <Link
                  href="/practice-areas"
                  className="inline-flex items-center justify-center px-5 py-3 border border-gray-700 text-base font-medium rounded-md text-white bg-gray-800/70 hover:bg-gray-700 transition duration-200"
                >
                  Our Practice Areas
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-700">
              <ClientShutterstockImage
                query={`${stateName} courthouse law`}
                alt={`${stateName} legal services`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* State Overview */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Legal Services in {stateName}</h2>
            <p className="text-gray-300 mb-6">
              TOP USA LAW provides comprehensive legal services throughout {stateName}. Our team of experienced
              attorneys is dedicated to protecting your rights and interests in all legal matters. With deep knowledge
              of {stateName} state laws and local court systems, we offer personalized legal strategies tailored to your
              specific situation.
            </p>
            <p className="text-gray-300 mb-6">
              Whether you're dealing with a personal injury case, need assistance with business law, or require
              representation in criminal matters, our {stateName} legal team has the expertise and resources to help you
              achieve the best possible outcome.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="bg-gray-700/50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Gavel className="h-7 w-7 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
              <p className="text-gray-400">
                Our attorneys have extensive experience in {stateName} courts and deep knowledge of state-specific laws
                and regulations.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="bg-gray-700/50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Award className="h-7 w-7 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Award-Winning Team</h3>
              <p className="text-gray-400">
                Our {stateName} legal team has been recognized for excellence in legal representation and client
                satisfaction.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <div className="bg-gray-700/50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Briefcase className="h-7 w-7 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Comprehensive Services</h3>
              <p className="text-gray-400">
                From personal injury to business law, our {stateName} attorneys provide a full range of legal services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-12 md:py-16 bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">Our Practice Areas in {stateName}</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-center mb-10">
            Our {stateName} attorneys specialize in a wide range of legal practice areas, providing expert
            representation tailored to your specific needs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 p-6 rounded-xl border border-gray-700 group"
              >
                <div className="mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                  {area.title}
                </h3>
                <p className="text-gray-400 mb-4">{area.description}</p>
                <div className="flex items-center text-yellow-500 group-hover:text-yellow-400">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">Serving Major Cities in {stateName}</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-center mb-10">
            Our legal team provides services throughout {stateName}, with particular focus on these major metropolitan
            areas.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {majorCities.map((city, index) => (
              <Link
                key={index}
                href={`/locations/${stateName.toLowerCase().replace(/\s+/g, "-")}.${city.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-gray-900 hover:bg-gray-800 transition-all duration-300 p-4 rounded-lg border border-gray-800 text-center"
              >
                <span className="text-white hover:text-yellow-500 transition-colors">{city}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 md:py-16 bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
              <div className="text-4xl font-bold mb-2 text-yellow-500">20+</div>
              <div className="text-gray-400">Years in {stateName}</div>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
              <div className="text-4xl font-bold mb-2 text-yellow-500">1,000+</div>
              <div className="text-gray-400">Cases Won</div>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
              <div className="text-4xl font-bold mb-2 text-yellow-500">$100M+</div>
              <div className="text-gray-400">Recovered</div>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
              <div className="text-4xl font-bold mb-2 text-yellow-500">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            Frequently Asked Questions About Legal Services in {stateName}
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-yellow-500 text-black">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Need Legal Assistance in {stateName}?</h2>
          <p className="text-black/90 max-w-2xl mx-auto mb-8">
            Our {stateName} legal team is ready to help with your case. Contact us today for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold bg-black hover:bg-gray-900 text-white border border-black h-11 px-8 py-2"
          >
            Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Schema.org structured data for SEO */}
      <LocalBusinessSchema city={stateName} state={stateName} />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://topusalaw.com/" },
          { name: "Locations", url: "https://topusalaw.com/locations/" },
          { name: stateName, url: `https://topusalaw.com/locations/states/${stateSlug}` },
        ]}
      />

      <FAQSchema questions={faqs} />
    </div>
  )
}
