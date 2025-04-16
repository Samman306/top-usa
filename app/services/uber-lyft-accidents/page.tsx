import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WebPageSchema, FAQSchema } from "@/app/components/schema-org"

export const metadata: Metadata = {
  title: "Uber & Lyft Accident Legal Services | TOP USA LAW",
  description:
    "Expert rideshare accident representation from TOP USA LAW. Our attorneys help victims of Uber and Lyft accidents navigate complex insurance issues and secure maximum compensation.",
}

export default function UberLyftAccidentsServicePage() {
  // Service-specific content
  const serviceContent = {
    title: "Uber and Lyft Accidents",
    icon: <Car className="h-10 w-10 text-yellow-500" />,
    summary:
      "Dedicated representation for passengers, drivers, and others injured in rideshare accidents, navigating the complex insurance coverage issues unique to these cases.",
    description:
      "Rideshare accident cases present unique legal challenges due to the complex insurance coverage issues and questions of liability that arise when Uber, Lyft, and other rideshare companies are involved. Our attorneys have specific experience handling these modern transportation cases and can help you navigate the complicated process of securing fair compensation.",
    benefits: [
      "Determination of driver status at time of accident (app on/off)",
      "Identification of all applicable insurance coverage",
      "Representation of passengers, drivers, and third parties",
      "Navigation of rideshare companies' claims processes",
      "Negotiation with multiple insurance carriers",
      "Litigation against rideshare companies when necessary",
    ],
    process: [
      {
        title: "Initial Case Assessment",
        description:
          "We begin by determining the rideshare driver's status at the time of the accident (offline, available, en route to pickup, or during trip), which is crucial for identifying applicable insurance coverage.",
      },
      {
        title: "Insurance Coverage Analysis",
        description:
          "We identify all potential sources of insurance coverage, including the rideshare company's commercial policy, the driver's personal policy, your own insurance, and any other applicable coverage.",
      },
      {
        title: "Evidence Collection",
        description:
          "We gather critical evidence including the rideshare app data, trip information, screenshots, communications, witness statements, police reports, and medical records to build a strong case.",
      },
      {
        title: "Liability Determination",
        description:
          "We establish liability by analyzing the actions of all involved parties, including the rideshare driver, other motorists, and potentially the rideshare company itself for issues like negligent hiring or inadequate safety policies.",
      },
      {
        title: "Claim Resolution",
        description:
          "We pursue maximum compensation through skilled negotiation with all relevant insurance carriers or, when necessary, litigation against the responsible parties, navigating the complex web of rideshare liability.",
      },
    ],
    faqs: [
      {
        question: "How does insurance work in Uber and Lyft accidents?",
        answer:
          "Insurance coverage in rideshare accidents depends on the driver's status at the time of the accident. If the app was off, the driver's personal insurance applies. If the app was on but no ride was accepted, rideshare companies provide limited liability coverage. Once a ride is accepted and during trips, rideshare companies typically provide $1 million in liability coverage. Our attorneys can determine which insurance policies apply to your specific situation.",
      },
      {
        question: "Who can file a claim after a rideshare accident?",
        answer:
          "Multiple parties may have claims after a rideshare accident, including rideshare passengers, rideshare drivers, occupants of other vehicles, pedestrians, cyclists, and property owners. Each party's claim may involve different insurance policies and liability issues, requiring specialized legal knowledge to navigate properly.",
      },
      {
        question: "What if I was injured as a rideshare driver?",
        answer:
          "As a rideshare driver, your recovery options depend on your status at the time of the accident and the available insurance coverage. You may be eligible to file claims against at-fault drivers, through the rideshare company's insurance, or through your own insurance policies. Our attorneys can help determine all available sources of compensation for your injuries.",
      },
      {
        question: "Can I sue Uber or Lyft directly after an accident?",
        answer:
          "Rideshare companies typically classify drivers as independent contractors rather than employees, which can limit direct company liability. However, there may be circumstances where the company shares responsibility, such as negligent hiring or inadequate safety policies. Our attorneys can evaluate whether a direct claim against the rideshare company is viable in your case.",
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
                alt="Rideshare accident attorney consulting with client"
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
                  alt="Rideshare accident attorney reviewing case documents"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Rideshare Accident Case Process</h2>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Rideshare Accident Case?</h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Our experienced rideshare accident attorneys are ready to help you navigate the complex legal process and
            fight for the compensation you deserve.
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
        url="https://www.topusalaw.com/services/uber-lyft-accidents"
      />
      <FAQSchema questions={serviceContent.faqs} />
    </>
  )
}
