import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Star, Award, Clock, Phone, MapPin, Car, AlertTriangle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WebPageSchema, FAQSchema } from "@/app/components/schema-org"
import { allPracticeAreas } from "@/lib/practice-areas"
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Car Accident Attorneys | TOP USA LAW",
  description:
    "TOP USA LAW provides expert car accident representation nationwide. Our attorneys help victims secure maximum compensation for injuries, medical bills, lost wages, and more.",
}

export default function CarAccidentsPage() {
  // Find the car accidents practice area data
  const practiceArea = allPracticeAreas.find((area) => area.id === 2)

  if (!practiceArea) {
    return <div>Practice area not found</div>
  }

  // Case results data
  const caseResults = [
    {
      amount: "$3.7 Million",
      title: "Multi-Vehicle Collision",
      description: "Settlement for a client who suffered traumatic brain injury in a highway pileup accident.",
    },
    {
      amount: "$2.1 Million",
      title: "Drunk Driving Accident",
      description: "Recovery for a family whose loved one was severely injured by an intoxicated driver.",
    },
    {
      amount: "$950,000",
      title: "Rear-End Collision",
      description: "Settlement for a client who required spinal surgery after being rear-ended at high speed.",
    },
  ]

  // Testimonials data
  const testimonials = [
    {
      quote:
        "After my car accident, I was facing mounting medical bills and couldn't return to work. TOP USA LAW handled everything, from dealing with insurance companies to ensuring I received proper medical care. They secured a settlement that changed my life.",
      name: "David L.",
      case: "T-Bone Collision Victim",
    },
    {
      quote:
        "The attorneys at TOP USA LAW were incredible advocates during the most difficult time of my life. They were always available to answer my questions and fought tirelessly to get me the compensation I deserved after my car accident.",
      name: "Jennifer M.",
      case: "Highway Accident Victim",
    },
  ]

  // Statistics data
  const statistics = [
    { value: "96%", label: "Success Rate" },
    { value: "$350M+", label: "Recovered for Car Accident Victims" },
    { value: "3,500+", label: "Car Accident Cases Won" },
    { value: "30+", label: "Years of Experience" },
  ]

  // Common car accident types
  const accidentTypes = [
    {
      title: "Rear-End Collisions",
      description:
        "Occur when one vehicle crashes into the back of another, often due to tailgating or distracted driving.",
    },
    {
      title: "T-Bone Accidents",
      description: "Side-impact collisions that typically happen at intersections when one driver fails to yield.",
    },
    {
      title: "Head-On Collisions",
      description:
        "Among the most dangerous accidents, often resulting from wrong-way driving or crossing centerlines.",
    },
    {
      title: "Multi-Vehicle Pileups",
      description:
        "Complex accidents involving multiple vehicles, typically on highways or in poor weather conditions.",
    },
    {
      title: "Rollover Accidents",
      description:
        "Vehicles that flip onto their side or roof, often involving SUVs or trucks with high centers of gravity.",
    },
    {
      title: "Hit and Run Accidents",
      description: "When a driver flees the scene after causing an accident, creating additional legal complications.",
    },
  ]

  // Enhanced FAQs
  const faqs = [
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
    {
      question: "What if the accident was partially my fault?",
      answer:
        "Many states follow comparative negligence laws, which allow you to recover damages even if you were partially at fault, though your compensation may be reduced by your percentage of fault. Some states follow contributory negligence rules, which can prevent recovery if you were even slightly at fault. Our attorneys understand these complex rules and can help maximize your recovery regardless of partial fault.",
    },
    {
      question: "How much does it cost to hire a car accident lawyer?",
      answer:
        "We handle car accident cases on a contingency fee basis, meaning you pay nothing unless we win your case. Initial consultations are free, and we advance all costs associated with investigating and litigating your claim. This arrangement ensures everyone has access to quality legal representation regardless of their financial situation.",
    },
  ]

  return (
    <>
      {/* Hero Section with Gradient Overlay */}
      <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ClientShutterstockImage
            query="car accident lawyer"
            alt="Car accident legal representation"
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
                Car Accident <span className="text-yellow-500">Attorneys</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Experienced advocates fighting for maximum compensation for victims of automobile accidents nationwide.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-800">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-white">5.0 Client Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-800">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="text-white">Top-Rated Car Accident Lawyers</span>
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
                query="car crash attorney"
                alt="Car accident attorney consulting with client"
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
                query="car accident victim"
                alt="Car accident victim receiving legal support"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">How We Help Car Accident Victims</h2>
              <p className="text-lg text-gray-700 mb-6">
                At TOP USA LAW, we understand the devastating impact that car accidents can have on victims and their
                families. Our experienced car accident attorneys provide comprehensive legal representation to help you
                recover physically, emotionally, and financially.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We handle all aspects of your claim, from investigation and evidence gathering to negotiation with
                insurance companies and litigation when necessary, allowing you to focus on recovery while we pursue the
                compensation you deserve.
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
              <h2 className="text-3xl font-bold mb-6">Types of Car Accidents We Handle</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our attorneys have extensive experience representing victims in all types of car accident cases, from
                minor fender benders to catastrophic collisions. We understand the unique challenges and legal issues
                associated with each type of accident.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {accidentTypes.map((type, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                ))}
              </div>

              <Button className="mt-4" asChild>
                <Link href="/contact">
                  Discuss Your Accident Case <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <ClientShutterstockImage query="car collision" alt="Car accident scene" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section with Timeline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Car Accident Case Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to build strong cases and maximize compensation for our car accident
              clients.
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
                    "We begin with a thorough evaluation of your accident case, discussing the circumstances, injuries, and potential liability. This consultation is completely free and comes with no obligation.",
                  icon: <Phone className="h-6 w-6" />,
                },
                {
                  title: "Accident Investigation",
                  description:
                    "Our team conducts a comprehensive investigation, gathering evidence such as police reports, witness statements, photos, video footage, and expert opinions to establish liability and damages.",
                  icon: <Car className="h-6 w-6" />,
                },
                {
                  title: "Medical Treatment Coordination",
                  description:
                    "We help ensure you receive proper medical care for your injuries, connecting you with appropriate specialists if needed and documenting all treatment for your claim.",
                  icon: <AlertTriangle className="h-6 w-6" />,
                },
                {
                  title: "Damage Assessment",
                  description:
                    "We calculate the full extent of your damages, including current and future medical expenses, lost income, property damage, pain and suffering, and other impacts to maximize your recovery.",
                  icon: <FileText className="h-6 w-6" />,
                },
                {
                  title: "Insurance Negotiation",
                  description:
                    "We engage in strategic negotiations with insurance companies, using our knowledge and experience to counter lowball offers and fight for a fair settlement that fully compensates you.",
                  icon: <Award className="h-6 w-6" />,
                },
                {
                  title: "Litigation When Necessary",
                  description:
                    "If a fair settlement cannot be reached, our experienced trial attorneys will file a lawsuit and aggressively represent your interests in court to secure the compensation you deserve.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Car Accident Case Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our track record speaks for itself. Here are some of our recent successes for car accident victims.
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
              Don't just take our word for it. Here's what our car accident clients have to say about their experience
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
              Get answers to common questions about car accident cases and how our attorneys can help.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss Your Car Accident Case?</h2>
              <p className="text-xl mb-8">
                Our experienced car accident attorneys are ready to help you navigate the legal process and fight for
                the compensation you deserve. Contact us today for a free, no-obligation consultation.
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
                query="car accident lawyer team"
                alt="Our car accident legal team"
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
        url={`https://www.topusalaw.com/practice-areas/car-accidents`}
      />
      <FAQSchema questions={faqs} />
    </>
  )
}
