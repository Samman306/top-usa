import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WebPageSchema, FAQSchema } from "@/app/components/schema-org"

export const metadata: Metadata = {
  title: "Car Accident Legal Services | TOP USA LAW",
  description:
    "Expert car accident representation from TOP USA LAW. Our attorneys help victims secure maximum compensation for injuries, medical bills, lost wages, and more.",
}

export default function CarAccidentsServicePage() {
  // Service-specific content
  const serviceContent = {
    title: "Car Accidents",
    icon: <Car className="h-10 w-10 text-yellow-500" />,
    summary:
      "Expert representation for victims of automobile accidents to secure maximum compensation for injuries and damages.",
    description:
      "Our car accident attorneys provide comprehensive legal representation to individuals injured in automobile collisions. We handle all aspects of your claim, from investigation and evidence gathering to negotiation with insurance companies and litigation when necessary, allowing you to focus on recovery while we pursue the compensation you deserve.",
    benefits: [
      "Thorough accident investigation and evidence preservation",
      "Identification of all liable parties and insurance coverage",
      "Documentation of injuries and property damage",
      "Calculation of all economic and non-economic damages",
      "Aggressive negotiation with insurance companies",
      "Strategic litigation when fair settlements aren't offered",
    ],
    process: [
      {
        title: "Free Case Evaluation",
        description:
          "We begin with a comprehensive review of your accident, discussing the circumstances, injuries, and potential liability. This consultation is completely free and comes with no obligation.",
      },
      {
        title: "Investigation & Evidence Collection",
        description:
          "Our team conducts a thorough investigation, gathering evidence such as accident reports, witness statements, photos, video footage, and expert opinions to establish liability and damages.",
      },
      {
        title: "Medical Treatment Coordination",
        description:
          "We help ensure you receive proper medical care for your injuries, connecting you with appropriate specialists if needed and documenting all treatment for your claim.",
      },
      {
        title: "Damage Assessment",
        description:
          "We calculate the full extent of your damages, including current and future medical expenses, lost income, property damage, pain and suffering, and other impacts to maximize your recovery.",
      },
      {
        title: "Negotiation & Resolution",
        description:
          "We engage with insurance companies to pursue a fair settlement, using our negotiation expertise to maximize your compensation. If necessary, we're fully prepared to take your case to court to secure the best possible outcome.",
      },
    ],
    faqs: [
      {
        question: "What should I do immediately after a car accident?",
        answer:
          "First, ensure everyone's safety and call 911 for any injuries. Move vehicles out of traffic if possible and safe to do so. Exchange information with other drivers (license, registration, insurance) and collect contact information from witnesses. Take photos of the accident scene, vehicle damage, and any visible injuries. Report the accident to the police and your insurance company, but avoid discussing fault or giving recorded statements until you've consulted with an attorney.",
      },
      {
        question: "How long do I have to file a car accident claim?",
        answer:
          "Statutes of limitations for car accident claims vary by state, typically ranging from 1-4 years. However, it's important to begin the legal process as soon as possible while evidence is fresh and witnesses' memories are clear. Additionally, insurance policies often require prompt notification of accidents, sometimes within days of the incident.",
      },
      {
        question: "What compensation can I recover after a car accident?",
        answer:
          "Potential compensation includes medical expenses (current and future), lost wages and diminished earning capacity, vehicle repair or replacement costs, rental car expenses, pain and suffering, emotional distress, and loss of enjoyment of life. In cases involving serious misconduct like drunk driving, punitive damages may also be available.",
      },
      {
        question: "Should I accept the insurance company's settlement offer?",
        answer:
          "Insurance companies typically offer low initial settlements hoping you'll accept before understanding the full extent of your damages. It's advisable to consult with our attorneys before accepting any offer. We can evaluate whether the offer adequately compensates you for all current and future damages and negotiate for a fair settlement that truly reflects your losses.",
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
                alt="Car accident attorney consulting with client"
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
                  alt="Car accident attorney reviewing case documents"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Car Accident Case Process</h2>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Car Accident Case?</h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Our experienced car accident attorneys are ready to help you navigate the legal process and fight for the
            compensation you deserve.
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
        url="https://www.topusalaw.com/services/car-accidents"
      />
      <FAQSchema questions={serviceContent.faqs} />
    </>
  )
}
