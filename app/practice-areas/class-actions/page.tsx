import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WebPageSchema, FAQSchema } from "@/app/components/schema-org"
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"

export const metadata: Metadata = {
  title: "Class Action Lawsuit Attorneys | TOP USA LAW",
  description:
    "Expert class action representation from TOP USA LAW. Our attorneys help groups of individuals harmed by the same corporate misconduct or defective products secure justice.",
}

export default function ClassActionsPage() {
  // Service-specific content
  const serviceContent = {
    title: "Class Actions",
    icon: <Users className="h-10 w-10 text-yellow-500" />,
    summary:
      "Representing groups of individuals harmed by the same corporate misconduct or defective products to secure justice and compensation.",
    description:
      "Class action lawsuits allow groups of people who have suffered similar harm to join together in a single legal action against corporations, manufacturers, or other entities. Our class action attorneys have the experience and resources to take on powerful defendants and secure meaningful compensation and changes in corporate behavior for the benefit of all class members.",
    benefits: [
      "Strength in numbers against powerful corporate defendants",
      "Ability to pursue cases that would be impractical individually",
      "Experienced attorneys with resources to handle complex litigation",
      "No upfront costs to participate in a class action",
      "Potential for both financial recovery and corporate policy changes",
      "Efficient resolution of similar claims in a single proceeding",
    ],
    process: [
      {
        title: "Case Evaluation",
        description:
          "We thoroughly investigate potential class actions, analyzing patterns of misconduct, identifying affected individuals, and determining if the case meets the legal requirements for class certification.",
      },
      {
        title: "Class Certification",
        description:
          "We petition the court to certify the class, demonstrating that the group meets requirements for numerosity, commonality, typicality, and adequate representation to proceed as a class action.",
      },
      {
        title: "Discovery & Case Building",
        description:
          "We conduct extensive discovery, often reviewing millions of documents, taking depositions, and consulting with experts to build a compelling case against the defendant.",
      },
      {
        title: "Settlement Negotiations",
        description:
          "We negotiate with defendants to secure fair compensation and meaningful changes in corporate practices, always with the goal of maximizing benefits for all class members.",
      },
      {
        title: "Trial & Distribution",
        description:
          "If a fair settlement cannot be reached, we're prepared to take the case to trial. After resolution, we oversee the fair distribution of compensation to all eligible class members.",
      },
    ],
    faqs: [
      {
        question: "How do I know if I qualify for a class action lawsuit?",
        answer:
          "You may qualify for a class action if you've suffered harm similar to a large group of other people due to the same product, service, or corporate misconduct. Common examples include defective products, false advertising, privacy violations, employment discrimination, or securities fraud. Our attorneys can evaluate your situation and determine if you might be part of an existing class action or if your case warrants starting a new one.",
      },
      {
        question: "What does it cost to participate in a class action?",
        answer:
          "Class members typically pay nothing out of pocket to participate in a class action lawsuit. Attorneys' fees are usually paid from the settlement or verdict amount as approved by the court, often as a percentage of the recovery. This arrangement allows individuals to pursue justice against powerful corporations without financial risk.",
      },
      {
        question: "What's the difference between a class action and a mass tort?",
        answer:
          "While both involve multiple plaintiffs, class actions treat all class members as one plaintiff with identical or very similar damages. Mass torts recognize that each plaintiff has unique damages, even if caused by the same product or action. Class actions typically result in equal compensation for all class members, while mass torts allow for individualized damage assessments and compensation based on specific harm suffered.",
      },
      {
        question: "How long do class action lawsuits take to resolve?",
        answer:
          "Class actions typically take 2-5 years to resolve, though complex cases can take longer. The process includes investigation, class certification, discovery, potential settlement negotiations, possible trial, appeals, and finally the claims administration process. While this timeline may seem long, it often represents the most efficient path to justice for large groups of affected individuals.",
      },
    ],
    cta: {
      title: "Affected by Corporate Misconduct?",
      description:
        "Our experienced class action attorneys are ready to evaluate your case and determine if you qualify for an existing class action or if your situation warrants a new legal action.",
    },
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
              <ClientShutterstockImage
                query="lawsuit"
                alt="Class action attorneys representing a group of plaintiffs"
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
                <ClientShutterstockImage
                  query="courtroom"
                  alt="Class action attorneys reviewing case documents"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Class Action Process</h2>
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
          <h2 className="text-3xl font-bold mb-6">{serviceContent.cta.title}</h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">{serviceContent.cta.description}</p>
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
        url="https://www.topusalaw.com/practice-areas/class-actions"
      />
      <FAQSchema questions={serviceContent.faqs} />
    </>
  )
}
