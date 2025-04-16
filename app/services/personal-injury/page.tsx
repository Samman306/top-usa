import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WebPageSchema, FAQSchema } from "@/app/components/schema-org"

export const metadata: Metadata = {
  title: "Personal Injury Legal Services | TOP USA LAW",
  description:
    "Expert personal injury representation from TOP USA LAW. Our attorneys help victims of negligence secure maximum compensation for their injuries.",
}

export default function PersonalInjuryServicePage() {
  // Service-specific content
  const serviceContent = {
    title: "Personal Injury",
    icon: <Shield className="h-10 w-10 text-yellow-500" />,
    summary: "Comprehensive legal representation for victims of accidents and injuries caused by negligence.",
    description:
      "At TOP USA LAW, we provide dedicated legal representation to individuals who have suffered injuries due to the negligence or wrongful actions of others. Our personal injury attorneys have the experience and resources to handle cases of all sizes and complexity, from minor injuries to catastrophic harm and wrongful death claims.",
    benefits: [
      "Thorough investigation of accident causes and liability",
      "Documentation and valuation of all damages and losses",
      "Consultation with medical experts to understand injury impacts",
      "Aggressive negotiation with insurance companies",
      "Strategic litigation when fair settlements aren't offered",
      "Comprehensive support throughout the legal process",
    ],
    process: [
      {
        title: "Free Initial Consultation",
        description:
          "We begin with a comprehensive review of your case, discussing the circumstances of your injury, potential liability, and your legal options. This consultation is completely free and comes with no obligation.",
      },
      {
        title: "Investigation & Evidence Collection",
        description:
          "Our team conducts a thorough investigation, gathering evidence such as accident reports, witness statements, medical records, and expert opinions to build a strong foundation for your case.",
      },
      {
        title: "Case Evaluation & Strategy Development",
        description:
          "We assess the full extent of your damages, including current and future medical expenses, lost income, pain and suffering, and other impacts. Then we develop a customized legal strategy tailored to your specific situation.",
      },
      {
        title: "Negotiation & Settlement Discussions",
        description:
          "We engage with insurance companies and opposing parties to pursue a fair settlement that fully compensates you for your injuries and losses, using our negotiation expertise to maximize your recovery.",
      },
      {
        title: "Litigation When Necessary",
        description:
          "If a fair settlement cannot be reached, our experienced trial attorneys are fully prepared to take your case to court, presenting a compelling case to the judge and jury to secure the compensation you deserve.",
      },
    ],
    faqs: [
      {
        question: "How much is my personal injury case worth?",
        answer:
          "The value of your case depends on several factors, including the severity of your injuries, medical expenses, lost wages, property damage, pain and suffering, and the impact on your quality of life. Our attorneys will provide a realistic assessment based on our experience with similar cases and ensure all current and future damages are accounted for in your claim.",
      },
      {
        question: "How long do I have to file a personal injury claim?",
        answer:
          "Statutes of limitations vary by state, typically ranging from 1-3 years from the date of injury. Certain claims, such as those against government entities, may have even shorter deadlines. It's crucial to consult an attorney promptly after an injury to ensure your rights are protected before time limits expire.",
      },
      {
        question: "Will my personal injury case go to trial?",
        answer:
          "Most personal injury cases settle before trial, but we prepare every case as if it will go to court. This thorough approach often results in better settlement offers. If the insurance company refuses to offer fair compensation, our experienced trial attorneys are fully prepared to advocate for you in court.",
      },
      {
        question: "How much does it cost to hire a personal injury lawyer?",
        answer:
          "We handle personal injury cases on a contingency fee basis, meaning you pay no attorney fees unless we recover compensation for you. Initial consultations are free, and we advance costs for investigating and pursuing your claim. This arrangement makes quality legal representation accessible regardless of your financial situation.",
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
                alt="Personal injury attorney consulting with client"
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
                  alt="Personal injury attorney reviewing case documents"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Personal Injury Process</h2>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Personal Injury Case?</h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Our experienced personal injury attorneys are ready to help you navigate the legal process and fight for the
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
        url="https://www.topusalaw.com/services/personal-injury"
      />
      <FAQSchema questions={serviceContent.faqs} />
    </>
  )
}
