import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Phone,
  MapPin,
  Building,
  AlertTriangle,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { WebPageSchema, FAQSchema } from "@/app/components/schema-org"
import { allPracticeAreas } from "@/lib/practice-areas"
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Slip and Fall Injury Attorneys | TOP USA LAW",
  description:
    "TOP USA LAW provides expert slip and fall injury representation nationwide. Our attorneys help victims secure maximum compensation from negligent property owners.",
}

export default function SlipFallInjuriesPage() {
  // Find the slip and fall injuries practice area data
  const practiceArea = allPracticeAreas.find((area) => area.id === 7)

  if (!practiceArea) {
    return <div>Practice area not found</div>
  }

  // Case results data
  const caseResults = [
    {
      amount: "$2.7 Million",
      title: "Retail Store Fall",
      description:
        "Recovery for a client who suffered traumatic brain injury after slipping on a wet floor with no warning signs.",
    },
    {
      amount: "$1.5 Million",
      title: "Apartment Complex Accident",
      description: "Settlement for a tenant who fell down poorly maintained stairs in their apartment building.",
    },
    {
      amount: "$875,000",
      title: "Restaurant Slip and Fall",
      description: "Recovery for a customer who fractured their hip after slipping on food debris in a dining area.",
    },
  ]

  // Testimonials data
  const testimonials = [
    {
      quote:
        "After my slip and fall accident at a grocery store, TOP USA LAW helped me prove the store's negligence and secure compensation for my medical bills, lost wages, and pain and suffering. They were thorough in gathering evidence and aggressive in negotiations.",
      name: "Patricia L.",
      case: "Grocery Store Fall Victim",
    },
    {
      quote:
        "I slipped on ice outside my apartment building that should have been cleared. TOP USA LAW took on my case when other firms wouldn't, and they proved the property management company's negligence. Their expertise in premises liability law made all the difference.",
      name: "Michael R.",
      case: "Residential Property Fall Victim",
    },
  ]

  // Statistics data
  const statistics = [
    { value: "94%", label: "Success Rate" },
    { value: "$175M+", label: "Recovered for Slip & Fall Victims" },
    { value: "2,200+", label: "Premises Liability Cases Won" },
    { value: "20+", label: "Years of Experience" },
  ]

  // Common slip and fall locations
  const fallLocations = [
    {
      title: "Retail Stores & Supermarkets",
      description: "Falls due to spills, fallen merchandise, or poorly maintained floors.",
    },
    {
      title: "Restaurants & Bars",
      description: "Slips on food debris, spilled drinks, or greasy floors.",
    },
    {
      title: "Office Buildings",
      description: "Falls in lobbies, stairwells, or common areas due to poor maintenance.",
    },
    {
      title: "Apartment Complexes",
      description: "Accidents on walkways, stairs, or common areas with inadequate maintenance.",
    },
    {
      title: "Hotels & Resorts",
      description: "Falls in lobbies, bathrooms, or around swimming pools.",
    },
    {
      title: "Public Sidewalks & Parking Lots",
      description: "Trips on uneven surfaces, potholes, or ice and snow accumulation.",
    },
  ]

  // Enhanced FAQs
  const faqs = [
    {
      question: "What should I do immediately after a slip and fall accident?",
      answer:
        "First, seek medical attention for your injuries, even if they seem minor. Report the accident to the property owner, manager, or staff and ensure an incident report is filed. If possible, take photos of the hazardous condition that caused your fall and get contact information from any witnesses. Keep all evidence including the shoes and clothing you were wearing. Then contact our attorneys as soon as possible to discuss your legal options before speaking with insurance companies.",
    },
    {
      question: "How do I prove the property owner was negligent in my slip and fall case?",
      answer:
        "To prove negligence, you must establish that: 1) The property owner had a duty to maintain safe premises; 2) A dangerous condition existed; 3) The owner knew or should have known about the condition; 4) They failed to fix it or warn about it; and 5) This negligence directly caused your injuries. Our attorneys gather evidence such as surveillance footage, maintenance records, witness statements, and expert testimony to build a strong case establishing these elements.",
    },
    {
      question: "What if I was partially at fault for my slip and fall accident?",
      answer:
        "Many states follow comparative negligence laws, which allow you to recover damages even if you were partially at fault, though your compensation may be reduced by your percentage of fault. For example, if you're found 20% responsible, your recovery would be reduced by 20%. Some states follow contributory negligence rules, which can prevent recovery if you were even slightly at fault. Our attorneys understand these complex rules and can help maximize your recovery regardless of partial fault.",
    },
    {
      question: "How long do I have to file a slip and fall lawsuit?",
      answer:
        "Statutes of limitations for slip and fall cases vary by state, typically ranging from 1-3 years from the date of injury. However, there are exceptions that might shorten this timeframe, such as when the property owner is a government entity. It's crucial to consult with an attorney as soon as possible after your accident to ensure you don't miss important deadlines that could bar your claim permanently.",
    },
    {
      question: "What compensation can I recover in a slip and fall case?",
      answer:
        "Potential compensation includes medical expenses (current and future), lost wages and diminished earning capacity, pain and suffering, emotional distress, and loss of enjoyment of life. In cases involving particularly egregious negligence, punitive damages may also be available. Our attorneys work to identify and document all applicable damages to maximize your recovery.",
    },
    {
      question: "How much does it cost to hire a slip and fall attorney?",
      answer:
        "We handle slip and fall cases on a contingency fee basis, meaning you pay nothing unless we recover compensation for you. Initial consultations are free, and we advance all costs associated with investigating and pursuing your claim. This arrangement ensures everyone has access to quality legal representation regardless of their financial situation.",
    },
  ]

  return (
    <>
      {/* Hero Section with Gradient Overlay */}
      <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ClientShutterstockImage
            query="fall"
            alt="Slip and fall legal representation"
            fill
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
                EXPERT LEGAL REPRESENTATION
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Slip and Fall <span className="text-yellow-500">Attorneys</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Dedicated advocates holding property owners accountable for dangerous conditions that cause slip, trip,
                and fall injuries.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-800">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-white">5.0 Client Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-800">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="text-white">Top-Rated Premises Liability Lawyers</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="text-lg" asChild>
                  <Link href="/contact">
                    Free Case Evaluation <ArrowRight className="ml-2 h-5 w-5" />
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
                query="slip and fall"
                alt="Slip and fall attorney consulting with injured client"
                fill
                className="object-cover"
                priority
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
                query="slip and fall victim"
                alt="Slip and fall victim receiving legal support"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">How We Help Slip and Fall Victims</h2>
              <p className="text-lg text-gray-700 mb-6">
                At TOP USA LAW, we understand the serious injuries that can result from slip and fall accidents, from
                broken bones and sprains to traumatic brain injuries and spinal cord damage. Our experienced premises
                liability attorneys help victims hold negligent property owners accountable.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Property owners have a legal duty to maintain safe premises and warn visitors of known hazards. When
                they fail in this duty and someone is injured as a result, we help victims navigate the complex legal
                process to secure the compensation they deserve.
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
              <h2 className="text-3xl font-bold mb-6">Common Slip and Fall Locations</h2>
              <p className="text-lg text-gray-700 mb-6">
                Slip and fall accidents can happen anywhere, but they're particularly common in certain locations where
                property owners fail to maintain safe conditions or warn about hazards. Our attorneys have extensive
                experience with cases in all these environments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {fallLocations.map((location, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">{location.title}</h3>
                    <p className="text-gray-600">{location.description}</p>
                  </div>
                ))}
              </div>

              <Button className="mt-4" asChild>
                <Link href="/contact">
                  Discuss Your Slip and Fall Case <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <ClientShutterstockImage
                query="wet floor sign"
                alt="Wet floor warning sign"
                fill
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Slip and Fall Case Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to build strong premises liability cases and maximize compensation for our
              slip and fall clients.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

            <div className="space-y-12 relative">
              {[
                {
                  title: "Free Initial Consultation",
                  description:
                    "We begin with a thorough evaluation of your slip and fall case, discussing the circumstances, injuries, and potential liability of the property owner or occupier.",
                  icon: <Phone className="h-6 w-6" />,
                },
                {
                  title: "Immediate Investigation",
                  description:
                    "We act quickly to preserve critical evidence, including surveillance footage, incident reports, maintenance records, and witness statements before they can be altered or destroyed.",
                  icon: <Building className="h-6 w-6" />,
                },
                {
                  title: "Hazard Documentation",
                  description:
                    "We thoroughly document the dangerous condition that caused your fall, whether it was a wet floor, uneven surface, poor lighting, or other hazard, often using expert analysis.",
                  icon: <AlertTriangle className="h-6 w-6" />,
                },
                {
                  title: "Liability Determination",
                  description:
                    "We establish the property owner's knowledge of the hazard (actual or constructive notice) and their failure to address it or provide adequate warnings.",
                  icon: <FileText className="h-6 w-6" />,
                },
                {
                  title: "Damages Assessment",
                  description:
                    "We calculate the full extent of your damages, including medical expenses, lost income, pain and suffering, and any long-term impacts of your injuries.",
                  icon: <Award className="h-6 w-6" />,
                },
                {
                  title: "Resolution & Recovery",
                  description:
                    "We pursue maximum compensation through skilled negotiation with insurance companies or, when necessary, litigation against the property owner or other responsible parties.",
                  icon: <Clock className="h-6 w-6" />,
                },
              ].map((step, index) => (
                <div key={index} className="relative flex flex-col md:flex-row items-center">
                  <div
                    className={`md:w-1/2 mb-8 md:mb-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:order-3 md:pl-12"}`}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Slip and Fall Case Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our track record speaks for itself. Here are some of our recent successes for slip and fall victims.
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
              Don't just take our word for it. Here's what our slip and fall clients have to say about their experience
              with TOP USA LAW.
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
              Get answers to common questions about slip and fall cases and how our attorneys can help.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss Your Slip and Fall Case?</h2>
              <p className="text-xl mb-8">
                Our experienced slip and fall attorneys are ready to help you hold negligent property owners accountable
                and fight for the compensation you deserve. Contact us today for a free, no-obligation consultation.
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
                    <Phone className="mr-2 h-5 w-5" /> Call Now
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl border border-white/20">
              <ClientShutterstockImage
                query="legal team premises"
                alt="Our slip and fall legal team"
                fill
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
        url={`https://www.topusalaw.com/practice-areas/slip-fall-injuries`}
      />
      <FAQSchema questions={faqs} />
    </>
  )
}
