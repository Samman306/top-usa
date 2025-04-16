import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { allPracticeAreas } from "@/lib/practice-areas"

export const metadata: Metadata = {
  title: "Legal Services | TOP USA LAW",
  description:
    "Explore TOP USA LAW's comprehensive legal services including personal injury, car accidents, truck accidents, work injuries, and more across all 50 states.",
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-black text-white py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Legal Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            TOP USA LAW offers comprehensive legal services across all 50 states. Our experienced attorneys provide
            tailored solutions for your specific legal needs.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPracticeAreas.map((service, index) => (
              <Card
                key={index}
                className="h-full bg-gray-800 border-gray-700 hover:border-yellow-500/50 transition-colors"
              >
                <CardHeader>
                  <div className="mb-2">{service.icon}</div>
                  <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-base text-gray-400">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`/practice-areas/${service.slug}`}
                    className="text-yellow-500 font-medium hover:underline inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
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
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Map of the United States showing TOP USA LAW's nationwide coverage"
                fill
                className="object-cover"
              />
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
