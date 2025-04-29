import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Shield, Scale, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { allPracticeAreas } from "@/lib/practice-areas"
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"

export const metadata: Metadata = {
  title: "Practice Areas | TOP USA LAW",
  description:
    "Explore TOP USA LAW's comprehensive legal services including personal injury, car accidents, truck accidents, work injuries, and more across all 50 states.",
}

export default function PracticeAreasPage() {
  return (
    <>
      <section className="bg-black text-white py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Practice Areas</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            TOP USA LAW offers comprehensive legal services across all 50 states. Our experienced attorneys provide
            tailored solutions for your specific legal needs.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPracticeAreas.map((area) => (
              <Card
                key={area.id}
                className="h-full bg-gray-800 border-gray-700 hover:border-yellow-500/50 transition-colors"
              >
                <CardHeader>
                  <div className="mb-2">{area.icon}</div>
                  <CardTitle className="text-2xl text-white">{area.title}</CardTitle>
                  <CardDescription className="text-base text-gray-400">{area.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {area.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link
                      href={area.slug}
                      className="text-yellow-500 font-medium hover:underline inline-flex items-center"
                    >
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nationwide Legal Representation</h2>
              <p className="text-gray-300 mb-4">
                TOP USA LAW provides expert legal services across all 50 states, with specialized knowledge of local
                laws and regulations in each jurisdiction.
              </p>
              <p className="text-gray-300 mb-4">
                Our network of experienced attorneys covers the top 100 cities in each state, ensuring you have access
                to high-quality legal representation no matter where you're located.
              </p>
              <p className="text-gray-300 mb-4">
                Each location page features unique content with specific data points about local accident statistics,
                legal regulations, court systems, and recovery outcomes to help you understand the legal landscape in
                your area.
              </p>
              <Link href="/locations" className="text-yellow-500 font-medium hover:underline inline-flex items-center">
                Find Your Location <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-700">
              <ClientShutterstockImage
                query="nationwide legal representation"
                alt="Map of the United States showing TOP USA LAW's nationwide coverage"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 bg-black text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose TOP USA LAW</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-6">
              <Shield className="h-16 w-16 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Experienced Attorneys</h3>
              <p className="text-gray-300">
                Our team of attorneys has decades of combined experience in various legal fields.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Scale className="h-16 w-16 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Client-Centered Approach</h3>
              <p className="text-gray-300">
                We prioritize our clients' needs and provide personalized attention to every case.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Clock className="h-16 w-16 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
              <p className="text-gray-300">We are available around the clock to provide assistance and support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Commitment</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-yellow-500 mr-4" />
              <div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-300">
                  We uphold the highest standards of ethics and integrity in all our legal services.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-yellow-500 mr-4" />
              <div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-300">
                  We strive for excellence in every aspect of our legal practice, from research to representation.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-yellow-500 mr-4" />
              <div>
                <h3 className="text-xl font-bold mb-2">Advocacy</h3>
                <p className="text-gray-300">
                  We are dedicated to advocating for our clients' rights and interests, providing strong and effective
                  representation.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-yellow-500 mr-4" />
              <div>
                <h3 className="text-xl font-bold mb-2">Results-Driven</h3>
                <p className="text-gray-300">
                  We are committed to achieving the best possible outcomes for our clients, securing favorable
                  settlements and verdicts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-yellow-500 text-black">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Need Legal Assistance?</h2>
          <p className="text-black/90 max-w-2xl mx-auto mb-8">
            Our team can help determine the best legal approach for your situation. Contact us for a free consultation
            and we'll guide you in the right direction.
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
