import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Phone, Scale, Shield, FileText, Clock, MapPin, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { allPracticeAreas } from "@/lib/practice-areas"
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"
import { Card, CardContent } from "@/components/ui/card"
import { WebPageSchema } from "@/components/schema-org"
import { FAQSchema } from "@/components/schema-org"

export const metadata: Metadata = {
  title: "White Collar Crime Defense Attorneys | TOP USA LAW",
  description:
    "TOP USA LAW provides strategic defense against fraud, embezzlement, and other financial and business-related criminal charges. Our experienced attorneys protect your rights, reputation, and freedom.",
}

export default function WhiteCollarCrimesPage() {
  // Find the white collar crimes practice area data
  const practiceArea = allPracticeAreas.find((area) => area.id === 8)

  if (!practiceArea) {
    return <div>Practice area not found</div>
  }

  // Case results data
  const caseResults = [
    {
      amount: "All Charges Dismissed",
      title: "Securities Fraud Case",
      description:
        "Successfully defended a financial executive against allegations of securities fraud and insider trading.",
    },
    {
      amount: "Reduced to Misdemeanor",
      title: "Tax Evasion Defense",
      description:
        "Negotiated reduction of felony tax evasion charges to a misdemeanor with no jail time for a business owner.",
    },
    {
      amount: "Case Dismissed",
      title: "Healthcare Fraud Defense",
      description: "Secured dismissal of all charges for a physician accused of Medicare billing fraud.",
    },
  ]

  // Testimonials data
  const testimonials = [
    {
      quote:
        "When I faced serious securities fraud allegations, TOP USA LAW provided the sophisticated defense I needed. Their strategic approach and deep understanding of financial regulations resulted in all charges being dismissed.",
      name: "Former Financial Executive",
      case: "Securities Fraud Defense",
    },
    {
      quote:
        "The white collar defense team at TOP USA LAW navigated my complex tax case with remarkable skill. They negotiated a favorable resolution that avoided criminal charges and allowed me to maintain my professional license.",
      name: "Healthcare Professional",
      case: "Tax Fraud Investigation",
    },
  ]

  // Statistics data
  const statistics = [
    { value: "92%", label: "Favorable Outcomes" },
    { value: "85%", label: "Cases Resolved Without Trial" },
    { value: "75%", label: "Charges Reduced or Dismissed" },
    { value: "25+", label: "Years of Experience" },
  ]

  // Common white collar crime types
  const crimeTypes = [
    {
      title: "Securities Fraud",
      description:
        "Defense against allegations of insider trading, market manipulation, and misrepresentation in securities offerings.",
    },
    {
      title: "Tax Fraud & Evasion",
      description:
        "Representation in cases involving alleged tax fraud, evasion, failure to file, and other tax-related offenses.",
    },
    {
      title: "Healthcare Fraud",
      description: "Defense for healthcare providers facing allegations of billing fraud, kickbacks, and false claims.",
    },
    {
      title: "Embezzlement",
      description:
        "Strategic defense against charges of theft or misappropriation of funds by employees or fiduciaries.",
    },
    {
      title: "Money Laundering",
      description:
        "Representation in cases involving allegations of concealing the origins of illegally obtained money.",
    },
    {
      title: "Bank & Wire Fraud",
      description:
        "Defense against charges of defrauding financial institutions or using electronic communications in fraudulent schemes.",
    },
  ]

  // Enhanced FAQs
  const faqs = [
    {
      question: "What are white collar crimes?",
      answer:
        "White collar crimes are non-violent offenses typically committed in business or professional settings for financial gain. Common examples include fraud (securities, mail, wire, healthcare, insurance), embezzlement, money laundering, tax evasion, insider trading, bribery, identity theft, forgery, and antitrust violations. These cases often involve complex financial transactions and can be prosecuted at both state and federal levels.",
    },
    {
      question: "What should I do if I'm under investigation for a white collar crime?",
      answer:
        "If you suspect you're under investigation, contact an attorney immediately—before speaking with investigators or prosecutors. Do not discuss the matter with colleagues or destroy any documents, as this could lead to additional charges like obstruction of justice. Your attorney can help protect your rights, advise you on how to respond to investigation requests, and potentially negotiate with authorities before charges are filed.",
    },
    {
      question: "What penalties can result from white collar criminal convictions?",
      answer:
        "Penalties vary widely depending on the specific offense, amount of financial loss, number of victims, and other factors. They may include substantial prison time (sometimes decades for serious cases), significant fines and restitution, asset forfeiture, probation, and community service. Convictions can also result in professional license revocation, career devastation, and permanent reputational damage.",
    },
    {
      question: "Is it possible to resolve white collar criminal charges without going to trial?",
      answer:
        "Yes, many white collar cases are resolved without trial through negotiated plea agreements, deferred prosecution agreements, or non-prosecution agreements. Early intervention by experienced defense counsel can sometimes prevent charges from being filed at all. Alternative resolutions might include restitution, compliance programs, or other remedial measures. Our attorneys evaluate all options to achieve the most favorable outcome for your specific situation.",
    },
    {
      question: "How do I choose the right white collar criminal defense attorney?",
      answer:
        "Look for attorneys with specific experience in white collar criminal defense, particularly in cases similar to yours. Consider their track record, resources to handle complex investigations, relationships with prosecutors, and trial experience. The best white collar defense attorneys combine technical knowledge of financial regulations with strategic criminal defense skills. Our firm offers all these qualities along with a commitment to personalized, discreet representation.",
    },
    {
      question: "Will my case be handled confidentially?",
      answer:
        "We understand the sensitive nature of white collar criminal allegations and the potential impact on your reputation and career. Our firm prioritizes client confidentiality and discretion throughout the legal process. We take measures to minimize publicity and protect your privacy while vigorously defending your rights and interests.",
    },
  ]

  return (
    <>
      {/* Hero Section with Gradient Overlay */}
      <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ClientShutterstockImage
            query="corporate"
            alt="White collar crime defense representation"
            fill
            fallbackSrc="/placeholder.svg?height=800&width=1200&text=Corporate+Image"
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/80"></div>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Link
              href="/practice-areas"
              className="text-gray-400 hover:text-yellow-500 text-sm inline-flex items-center"
            >
              Practice Areas
            </Link>
            <span className="text-gray-600 text-sm">/</span>
            <span className="text-sm text-yellow-500">{practiceArea.title}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-yellow-500/10 px-3 py-1 rounded-full text-yellow-500 text-sm font-medium mb-4">
                STRATEGIC LEGAL DEFENSE
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                White Collar Crime <span className="text-yellow-500">Defense</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Sophisticated legal representation for professionals and executives facing financial and
                business-related criminal allegations.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-800">
                  <Shield className="h-5 w-5 text-yellow-500" />
                  <span className="text-white">Discreet Representation</span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-800">
                  <Scale className="h-5 w-5 text-yellow-500" />
                  <span className="text-white">Strategic Defense</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="text-lg" asChild>
                  <Link href="/contact">
                    Confidential Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg bg-transparent border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="tel:+15551234567">
                    <Phone className="mr-2 h-5 w-5" /> Call (555) 123-4567
                  </Link>
                </Button>
              </div>
            </div>

            <div className="hidden md:block relative h-[500px] rounded-lg overflow-hidden shadow-2xl border border-gray-800">
              <ClientShutterstockImage
                query="fraud"
                alt="White collar crime defense attorney consulting with client"
                fill
                fallbackSrc="/placeholder.svg?height=800&width=600&text=Legal+Consultation"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-amber-500 py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-transform"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm md:text-base font-medium text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <ClientShutterstockImage
                query="business man in court"
                alt="White collar crime legal representation"
                fill
                fallbackSrc="/placeholder.svg?height=800&width=600&text=Courtroom"
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Strategic Defense for Complex Allegations</h2>
              <p className="text-lg text-gray-700 mb-6">
                At TOP USA LAW, we provide a sophisticated and strategic defense for individuals and businesses facing
                white collar criminal allegations. We understand the complexities of financial regulations and the
                severe consequences that can result from these charges.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our experienced attorneys work tirelessly to protect your rights, reputation, and freedom. We conduct
                thorough investigations, analyze financial records, and develop innovative defense strategies tailored
                to your specific situation.
              </p>

              <div className="space-y-4">
                {practiceArea.details.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Types of White Collar Crimes We Defend</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our attorneys have extensive experience defending clients against a wide range of white collar criminal
                charges, including:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {crimeTypes.map((type, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                ))}
              </div>

              <Button className="mt-4" asChild>
                <Link href="/contact">
                  Discuss Your Case With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <ClientShutterstockImage
                query="financial documents"
                alt="Financial documents and legal files"
                fill
                fallbackSrc="/placeholder.svg?height=800&width=600&text=Financial+Files"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section with Timeline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our White Collar Crime Defense Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a strategic and discreet process to protect your rights, reputation, and freedom.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

            <div className="space-y-12 relative">
              {[
                {
                  title: "Confidential Consultation",
                  description:
                    "We begin with a confidential consultation to understand the allegations against you, assess the potential exposure, and explain your legal options.",
                  icon: <Phone className="h-6 w-6" />,
                },
                {
                  title: "Independent Investigation",
                  description:
                    "Our team conducts a thorough independent investigation, analyzing financial records, interviewing witnesses, and identifying potential defenses.",
                  icon: <Shield className="h-6 w-6" />,
                },
                {
                  title: "Strategic Defense Development",
                  description:
                    "We develop a strategic defense tailored to your specific circumstances, leveraging our knowledge of financial regulations and criminal law.",
                  icon: <Scale className="h-6 w-6" />,
                },
                {
                  title: "Negotiation with Authorities",
                  description:
                    "We engage with prosecutors and investigators to present mitigating evidence, challenge the government's case, and negotiate for reduced charges or alternative resolutions.",
                  icon: <FileText className="h-6 w-6" />,
                },
                {
                  title: "Trial Preparation & Litigation",
                  description:
                    "If a favorable resolution cannot be reached, our experienced trial attorneys are fully prepared to defend you in court, presenting a compelling case to the judge and jury.",
                  icon: <Clock className="h-6 w-6" />,
                },
              ].map((step, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  <div
                    className={`md:w-1/2 mb-8 md:mb-0 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:order-3 md:pl-12"
                    }`}
                  >
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>

                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-primary text-white rounded-full p-4 z-10 shadow-lg">
                    {step.icon}
                  </div>

                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:order-3 md:pl-12" : "md:pr-12 md:text-right"}`}>
                    {index % 2 === 0 ? <div className="hidden md:block"></div> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Results Section */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent White Collar Crime Case Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our track record speaks for itself. Here are some of our recent successes in defending clients against
              white collar criminal charges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseResults.map((result, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-700"
              >
                <div className="p-6">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-3">{result.amount}</div>
                  <h3 className="text-xl font-bold mb-3">{result.title}</h3>
                  <p className="text-gray-400">{result.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10" asChild>
              <Link href="/success-stories">
                View More Case Results <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our white collar crime defense clients have to say about
              their experience with TOP USA LAW.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-50 border-none shadow-md">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <svg className="h-8 w-8 text-primary/30" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8v12H6v-8c0-2.21 1.79-4 4-4zm12 0v12h-4v-8c0-2.21 1.79-4 4-4z" />
                    </svg>
                  </div>
                  <p className="text-lg italic mb-6 text-gray-700">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.case}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about white collar crime defense and how our attorneys can help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Confidential Consultation?</h2>
              <p className="text-xl mb-8">
                Our experienced white collar crime defense attorneys are ready to protect your rights, reputation, and
                freedom. Contact us today for a confidential, no-obligation consultation.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-yellow-500 mr-4 mt-1" />
                  <div>
                    <p className="font-bold text-lg">Our Offices</p>
                    <p>With locations nationwide, we're ready to assist you wherever you are.</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-yellow-500 mr-4" />
                  <div>
                    <p className="font-bold text-lg">Call Us 24/7</p>
                    <p>(555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="text-lg" asChild>
                  <Link href="/contact">
                    Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg bg-transparent border-white text-white hover:bg-white/10"
                  asChild
                >
                  <Link href="tel:+15551234567">
                    <Phone className="mr-2 h-5 w-5" /> Call (555) 123-4567
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl border border-white/20">
              <ClientShutterstockImage
                query="legal team workplace"
                alt="Our white collar crime defense legal team"
                fill
                fallbackSrc="/placeholder.svg?height=800&width=600&text=Legal+Team"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org markup for SEO */}
      <WebPageSchema
        title={practiceArea.title}
        description={practiceArea.description}
        url={`https://www.topusalaw.com/practice-areas/white-collar-crimes`}
      />
      <FAQSchema questions={faqs} />
    </>
  )
}
