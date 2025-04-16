import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Shield, Car, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"
import { getServiceBySlug, getAllServiceSlugs } from "@/app/lib/services-data"
import { WebPageSchema, FAQSchema } from "@/app/components/schema-org"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.title} | TOP USA LAW`,
    description: service.shortDescription,
  }
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Helper function to get the appropriate icon component
function getIconComponent(iconName: string) {
  switch (iconName) {
    case "Shield":
      return <Shield className="h-16 w-16 text-yellow-500" aria-label="Personal Injury services icon" />
    case "Car":
      return <Car className="h-16 w-16 text-yellow-500" aria-label="Car Accidents services icon" />
    case "Truck":
      return <Truck className="h-16 w-16 text-yellow-500" aria-label="Truck Accidents services icon" />
    default:
      return <Shield className="h-16 w-16 text-yellow-500" aria-label="Legal services icon" />
  }
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <section className="bg-black text-white py-12 md:py-16">
        <div className="container">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Link href="/services" className="text-gray-400 hover:text-yellow-500 text-sm inline-flex items-center">
              Services
            </Link>
            <span className="text-gray-600 text-sm">/</span>
            <span className="text-sm text-yellow-500">{service.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{service.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl">{service.shortDescription}</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg border border-yellow-500/20">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt={`${service.title} services at TOP USA LAW`}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="mb-6">{getIconComponent(service.icon)}</div>
              <h2 className="text-3xl font-bold mb-4 text-white">How We Can Help</h2>
              <div className="space-y-4">
                <p className="text-gray-300">{service.longDescription}</p>
                <div className="space-y-2 pt-2">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Our {service.title} Process</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {service.process.map((step, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                <div className="bg-yellow-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {service.faqs && (
        <section className="py-12 md:py-16 bg-black text-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid gap-6 max-w-3xl mx-auto">
              {service.faqs.map((faq, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                  <h3 className="text-lg font-bold mb-2 text-white">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 md:py-16 bg-yellow-500 text-black">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">{service.cta.title}</h2>
          <p className="text-black/90 max-w-2xl mx-auto mb-8">{service.cta.description}</p>
          <Button variant="outline" size="lg" className="bg-black text-white hover:bg-gray-900 border-black" asChild>
            <Link href="/contact">
              Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <WebPageSchema
        title={service.title}
        description={service.shortDescription}
        url={`https://www.topusalaw.com/services/${params.slug}`}
      />

      {service.faqs && <FAQSchema questions={service.faqs} />}
    </>
  )
}
