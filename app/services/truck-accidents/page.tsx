import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WebPageSchema, FAQSchema } from "@/app/components/schema-org"

export const metadata: Metadata = {
  title: "Truck Accident Legal Services | TOP USA LAW",
  description:
    "Expert truck accident representation from TOP USA LAW. Our attorneys help victims of commercial truck and 18-wheeler accidents secure maximum compensation for catastrophic injuries.",
}

export default function TruckAccidentsServicePage() {
  // Service-specific content
  const serviceContent = {
    title: "Truck Accidents",
    icon: <Truck className="h-10 w-10 text-yellow-500" />,
    summary:
      "Specialized legal support for victims of commercial truck and 18-wheeler accidents, addressing the unique complexities of these devastating collisions.",
    description:
      "Truck accident cases involve unique challenges and complexities that require specialized legal knowledge. Our truck accident attorneys understand the federal regulations governing the trucking industry, the multiple parties that may share liability, and the catastrophic nature of injuries that often result from these collisions. We have the experience and resources to take on powerful trucking companies and their insurers.",
    benefits: [
      "Immediate investigation and evidence preservation",
      "Analysis of driver logs, black box data, and maintenance records",
      "Identification of federal regulation violations",
      "Determination of all liable parties (driver, trucking company, etc.)",
      "Consultation with accident reconstruction experts",
      "Calculation of substantial damages often involved in truck accidents",
    ],
    process: [
      {
        title: "Rapid Response Investigation",
        description:
          "We immediately deploy resources to preserve critical evidence before it can be lost or destroyed, including electronic logging devices, black box data, and physical evidence from the accident scene.",
      },
      {
        title: "Comprehensive Liability Analysis",
        description:
          "We identify all potentially responsible parties, which may include the truck driver, trucking company, vehicle manufacturer, maintenance provider, cargo loader, and others who may share liability for the accident.",
      },
      {
        title: "Regulatory Compliance Review",
        description:
          "We thoroughly examine compliance with Federal Motor Carrier Safety Administration regulations, including hours-of-service rules, maintenance requirements, and driver qualification standards.",
      },
      {
        title: "Expert Consultation",
        description:
          "We work with specialized experts including accident reconstructionists, trucking safety specialists, medical professionals, and economic analysts to build a compelling case for maximum compensation.",
      },
      {
        title: "Strategic Case Resolution",
        description:
          "We pursue maximum compensation through skilled negotiation or, when necessary, aggressive litigation against trucking companies and their insurers, who often have substantial resources to fight claims.",
      },
    ],
    faqs: [
      {
        question: "Who can be held liable in a truck accident case?",
        answer:
          "Multiple parties may share liability in truck accident cases, including the truck driver, trucking company, vehicle manufacturer, maintenance provider, cargo loader, and even government entities responsible for road conditions. Our attorneys conduct thorough investigations to identify all potentially liable parties and their insurance coverage to maximize your compensation.",
      },
      {
        question: "What makes truck accident cases different from car accidents?",
        answer:
          "Truck accident cases involve unique factors including federal regulations, industry standards, complex ownership and employment relationships, multiple insurance policies, and typically more severe injuries. These cases often require specialized knowledge of the trucking industry, access to experts familiar with commercial vehicles, and the resources to take on large trucking companies and their insurers.",
      },
      {
        question: "What evidence is important in truck accident cases?",
        answer:
          "Critical evidence includes the truck's black box data (ECM), driver logs, inspection and maintenance records, driver qualification files, drug and alcohol testing results, trucking company policies, freight documentation, and witness statements. Much of this evidence is controlled by the trucking company and can be lost or destroyed if not promptly preserved through legal action.",
      },
      {
        question: "How soon should I contact an attorney after a truck accident?",
        answer:
          "You should contact an attorney as soon as possible after a truck accident. Trucking companies often dispatch rapid response teams to accident scenes immediately to gather evidence and build their defense. Early attorney involvement allows for preservation of critical evidence through legal holds and independent investigation before evidence can be altered or destroyed.",
      },
    ],
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/90 to-primary py-16 md:py-24 text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 text-yellow-500">{serviceContent.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{serviceContent.title}</h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">{serviceContent.summary}</p>
              <Button size="lg" variant="secondary" className="text-lg" asChild>
                <Link href="/contact">
                  Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Truck accident attorney consulting with client"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Truck accident attorney reviewing case documents"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">How We Can Help</h2>
              <p className="text-lg text-muted-foreground mb-6">{serviceContent.description}</p>
              <ul className="space-y-3">
                {serviceContent.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Truck Accident Case Process</h2>
          <div className="space-y-12">
            {serviceContent.process.map((step, index) => (
              <div key={index} className="grid md:grid-cols-[100px_1fr] gap-6 items-start">
                <div className="bg-primary text-primary-foreground text-4xl font-bold rounded-full h-20 w-20 flex items-center justify-center">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-lg text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {serviceContent.faqs.map((faq, index) => (
              <div key={index} className="bg-muted rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Truck Accident Case?</h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Our experienced truck accident attorneys are ready to help you navigate the complex legal process and fight
            for the substantial compensation you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg" asChild>
              <Link href="/contact">
                Schedule a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="tel:+15551234567">Call (555) 123-4567</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Schema.org markup for SEO */}
      <WebPageSchema
        title={serviceContent.title}
        description={serviceContent.summary}
        url="https://www.topusalaw.com/services/truck-accidents"
      />
      <FAQSchema questions={serviceContent.faqs} />
    </>
  )
}
