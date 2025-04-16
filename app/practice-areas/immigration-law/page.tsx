import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WebPageSchema, FAQSchema } from "@/app/components/schema-org"
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"

export const metadata: Metadata = {
  title: "Immigration Law Attorneys | TOP USA LAW",
  description:
    "Expert immigration legal services from TOP USA LAW. Our attorneys provide comprehensive assistance with visas, green cards, citizenship, and deportation defense.",
}

export default function ImmigrationLawPage() {
  // Service-specific content
  const serviceContent = {
    title: "Immigration Law",
    icon: <Scale className="h-10 w-10 text-yellow-500" />,
    summary:
      "Comprehensive immigration services including visas, green cards, citizenship applications, and deportation defense.",
    description:
      "Our immigration attorneys provide expert guidance through the complex U.S. immigration system. Whether you're seeking family-based immigration, employment opportunities, asylum protection, or fighting deportation, our team offers personalized legal strategies and dedicated representation to help you achieve your immigration goals.",
    benefits: [
      "Personalized immigration strategies tailored to your specific situation",
      "Thorough preparation of all required documentation and applications",
      "Representation at USCIS interviews and immigration court hearings",
      "Assistance with family-based and employment-based immigration",
      "Defense against removal and deportation proceedings",
      "Guidance through the naturalization and citizenship process",
    ],
    process: [
      {
        title: "Initial Consultation",
        description:
          "We begin with a comprehensive assessment of your immigration status, goals, and potential pathways, explaining your options and developing a personalized strategy.",
      },
      {
        title: "Case Preparation",
        description:
          "We gather and prepare all necessary documentation, complete required forms with meticulous attention to detail, and ensure compliance with all USCIS requirements.",
      },
      {
        title: "Application Filing",
        description:
          "We submit your application with supporting evidence, ensuring proper filing procedures are followed and all deadlines are met to avoid unnecessary delays.",
      },
      {
        title: "Interview Preparation",
        description:
          "We thoroughly prepare you for any required interviews with USCIS officers or court appearances, conducting mock interviews and addressing potential questions or concerns.",
      },
      {
        title: "Case Resolution",
        description:
          "We follow your case through to resolution, responding to any requests for additional evidence, representing you at hearings when necessary, and guiding you through the final steps of your immigration journey.",
      },
    ],
    faqs: [
      {
        question: "How long does the immigration process take?",
        answer:
          "Immigration timelines vary significantly based on the type of application, current processing backlogs, and your specific circumstances. Family-based petitions can take 1-5+ years depending on the relationship and country of origin. Employment-based cases typically take 1-3 years. Naturalization usually takes 6-18 months. Our attorneys can provide more specific estimates based on your situation and current USCIS processing times.",
      },
      {
        question: "What's the difference between a green card and citizenship?",
        answer:
          "A green card (permanent residency) allows you to live and work permanently in the United States but doesn't grant voting rights or a U.S. passport. You must maintain residency requirements and renew your card periodically. Citizenship, obtained through naturalization after typically 3-5 years as a permanent resident, provides full rights including voting, a U.S. passport, protection from deportation, and the ability to petition for more family members.",
      },
      {
        question: "What should I do if I receive a notice to appear in immigration court?",
        answer:
          "A Notice to Appear (NTA) initiates removal proceedings and should be taken very seriously. Contact an immigration attorney immediately—do not miss your court date as this could result in an automatic deportation order. Our attorneys can help you understand the charges against you, explore potential relief options such as asylum, cancellation of removal, or adjustment of status, and represent you throughout the proceedings.",
      },
      {
        question: "Can criminal convictions affect my immigration status?",
        answer:
          "Yes, criminal convictions can significantly impact your immigration status, potentially leading to inadmissibility, deportation, or denial of naturalization. The severity depends on the type of crime, when it occurred, and your current status. Even minor offenses or those expunged from your record may have immigration consequences. If you have any criminal history, consult with an immigration attorney before filing any applications or traveling internationally.",
      },
    ],
    cta: {
      title: "Need Immigration Assistance?",
      description:
        "Our experienced immigration attorneys are ready to help you navigate the complex U.S. immigration system and work toward achieving your immigration goals.",
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
                query="immigration"
                alt="Immigration attorney consulting with client"
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
                  query="passport"
                  alt="Immigration attorney reviewing case documents"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Immigration Case Process</h2>
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
        url="https://www.topusalaw.com/practice-areas/immigration-law"
      />
      <FAQSchema questions={serviceContent.faqs} />
    </>
  )
}
