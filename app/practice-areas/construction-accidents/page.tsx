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
  HardHat,
  AlertTriangle,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { WebPageSchema, FAQSchema } from "@/app/components/schema-org"
import { allPracticeAreas } from "@/lib/practice-areas"
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Construction Accident Attorneys | TOP USA LAW",
  description:
    "TOP USA LAW provides specialized construction accident representation nationwide. Our attorneys help injured workers secure maximum compensation for construction site injuries.",
}

export default function ConstructionAccidentsPage() {
  // Find the construction accidents practice area data
  const practiceArea = allPracticeAreas.find((area) => area.id === 6)

  if (!practiceArea) {
    return <div>Practice area not found</div>
  }

  // Case results data
  const caseResults = [
    {
      amount: "$4.5 Million",
      title: "Scaffolding Collapse",
      description:
        "Recovery for a worker who suffered traumatic brain injury and multiple fractures in a scaffolding collapse.",
    },
    {
      amount: "$3.2 Million",
      title: "Crane Accident",
      description: "Settlement for a construction worker severely injured when a crane malfunctioned on site.",
    },
    {
      amount: "$2.8 Million",
      title: "Electrical Injury",
      description: "Recovery for an electrician who suffered severe burns from exposed wiring on a construction site.",
    },
  ]

  // Testimonials data
  const testimonials = [
    {
      quote:
        "After my construction site accident, I was facing mounting medical bills and couldn't return to work. TOP USA LAW fought for me against the general contractor and equipment manufacturer, securing compensation that covered all my expenses and provided for my family's future.",
      name: "Carlos R.",
      case: "Scaffolding Accident Victim",
    },
    {
      quote:
        "The attorneys at TOP USA LAW understood the complex safety regulations that were violated in my case. Their knowledge of OSHA standards and construction practices helped prove negligence and win my case when other lawyers said it would be too difficult.",
      name: "Michael T.",
      case: "Construction Site Fall Victim",
    },
  ]

  // Statistics data
  const statistics = [
    { value: "95%", label: "Success Rate" },
    { value: "$300M+", label: "Recovered for Construction Accident Victims" },
    { value: "1,800+", label: "Construction Cases Won" },
    { value: "25+", label: "Years of Experience" },
  ]

  // Common construction accident types
  const accidentTypes = [
    {
      title: "Falls from Heights",
      description:
        "Accidents involving falls from scaffolding, roofs, ladders, or other elevated work areas, often resulting in severe injuries.",
    },
    {
      title: "Struck-by Accidents",
      description: "Injuries caused by falling objects, swinging equipment, or vehicles on construction sites.",
    },
    {
      title: "Caught-in/Between",
      description:
        "Workers caught in or compressed by equipment, objects, or collapsing structures, often causing crushing injuries.",
    },
    {
      title: "Electrical Accidents",
      description:
        "Electrocutions, burns, and shocks from contact with power lines, exposed wiring, or defective equipment.",
    },
    {
      title: "Trench Collapses",
      description:
        "Catastrophic accidents when unsupported trenches collapse, often resulting in suffocation or crushing injuries.",
    },
    {
      title: "Equipment Malfunctions",
      description:
        "Injuries caused by defective or improperly maintained construction equipment, tools, and machinery.",
    },
  ]

  // Enhanced FAQs
  const faqs = [
    {
      question: "What should I do immediately after a construction accident?",
      answer:
        "First, seek medical attention for your injuries, even if they seem minor. Report the accident to your supervisor and ensure an incident report is filed. If possible, document the accident scene with photos and collect contact information from witnesses. Keep all evidence related to the accident. Then contact our attorneys before speaking with insurance companies or accepting any settlement offers.",
    },
    {
      question: "Who can be held liable for construction accidents?",
      answer:
        "Multiple parties may be liable for construction accidents, including general contractors, subcontractors, property owners, equipment manufacturers, architects, and engineers. Construction sites involve complex relationships between various entities, each with different responsibilities for safety. Our attorneys investigate all potentially responsible parties to maximize your compensation beyond workers' compensation benefits.",
    },
    {
      question: "What compensation can I recover after a construction accident?",
      answer:
        "While workers' compensation provides limited benefits regardless of fault, third-party claims against entities other than your employer can provide additional compensation for pain and suffering, full lost wages, loss of earning capacity, emotional distress, and other damages not covered by workers' comp. Our attorneys pursue all available sources of compensation to ensure your full recovery needs are met.",
    },
    {
      question: "Can I sue my employer for a construction accident?",
      answer:
        "In most states, workers' compensation laws prevent employees from suing their direct employers for workplace injuries. However, you may be able to file third-party claims against other entities responsible for your accident, such as general contractors, subcontractors, equipment manufacturers, or property owners. Our attorneys can identify all potential claims beyond workers' compensation.",
    },
    {
      question: "What if safety regulations were violated in my construction accident?",
      answer:
        "OSHA and state safety regulation violations can provide strong evidence of negligence in construction accident cases. Our attorneys thoroughly investigate whether safety standards were violated, including proper training, equipment maintenance, fall protection, trench safety, and other regulations. Documented violations strengthen your case and may lead to higher compensation.",
    },
    {
      question: "How long do I have to file a construction accident claim?",
      answer:
        "Deadlines vary by state and claim type. Workers' compensation claims typically must be reported within days and formally filed within 1-2 years. Third-party personal injury claims generally have statutes of limitations of 1-3 years. Product liability claims may have different deadlines. It's crucial to consult with an attorney as soon as possible after your accident to ensure you don't miss any critical deadlines.",
    },
  ]

  return (
    <>
      {/* Hero Section with Gradient Overlay */}
      <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ClientShutterstockImage
            query="construction"
            alt="Construction accident legal representation"
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
                Construction Accident <span className="text-yellow-500">Attorneys</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Dedicated advocates fighting for workers injured on construction sites and building-related accidents
                nationwide.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-800">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-white">5.0 Client Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-800">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="text-white">Top-Rated Construction Accident Lawyers</span>
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
                query="construction accident"
                alt="Construction accident attorney consulting with injured worker"
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
                query="construction worker injury"
                alt="Injured construction worker receiving legal support"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">How We Help Construction Accident Victims</h2>
              <p className="text-lg text-gray-700 mb-6">
                At TOP USA LAW, we understand the devastating impact that construction accidents can have on workers and
                their families. Our experienced construction accident attorneys provide comprehensive legal
                representation to help you secure the compensation you deserve.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Construction sites are governed by complex safety regulations and involve multiple parties with
                different responsibilities. Our attorneys have specialized knowledge of OSHA standards, building codes,
                and industry practices to identify all liable parties and pursue maximum compensation beyond workers'
                compensation benefits.
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
              <h2 className="text-3xl font-bold mb-6">Types of Construction Accidents We Handle</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our attorneys have extensive experience representing workers injured in all types of construction
                accidents. We understand the unique challenges and legal issues associated with each type of
                construction injury.
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
                  Discuss Your Construction Accident Case <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <ClientShutterstockImage
                query="construction safety"
                alt="Construction site safety scene"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Construction Accident Case Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to build strong cases and maximize compensation for our construction
              accident clients.
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
                    "We begin with a thorough evaluation of your construction accident case, discussing the circumstances, injuries, and potential liability of various parties involved in the project.",
                  icon: <Phone className="h-6 w-6" />,
                },
                {
                  title: "Accident Investigation",
                  description:
                    "We conduct a comprehensive investigation of the accident site, gathering evidence such as photos, witness statements, safety records, and OSHA reports to establish liability.",
                  icon: <HardHat className="h-6 w-6" />,
                },
                {
                  title: "Liability Analysis",
                  description:
                    "We identify all potentially responsible parties, including general contractors, subcontractors, equipment manufacturers, property owners, and others who may share liability for your injuries.",
                  icon: <AlertTriangle className="h-6 w-6" />,
                },
                {
                  title: "Damage Assessment",
                  description:
                    "We document all your injuries and losses, working with medical experts to establish the full extent of your current and future damages, including specialized care needs for serious construction injuries.",
                  icon: <FileText className="h-6 w-6" />,
                },
                {
                  title: "Strategic Negotiation",
                  description:
                    "We engage in negotiations with insurance companies and responsible parties to secure fair compensation through both workers' compensation and third-party claims.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Construction Accident Case Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our track record speaks for itself. Here are some of our recent successes for construction accident
              victims.
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
              Don't just take our word for it. Here's what our construction accident clients have to say about their
              experience with TOP USA LAW.
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
              Get answers to common questions about construction accident cases and how our attorneys can help.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss Your Construction Accident Case?</h2>
              <p className="text-xl mb-8">
                Our experienced construction accident attorneys are ready to help you navigate the complex legal process
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
                query="construction lawyer"
                alt="Our construction accident legal team"
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
        url={`https://www.topusalaw.com/practice-areas/construction-accidents`}
      />
      <FAQSchema questions={faqs} />
    </>
  )
}
