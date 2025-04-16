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
  Briefcase,
  AlertTriangle,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { WebPageSchema, FAQSchema } from "@/app/components/schema-org"
import { allPracticeAreas } from "@/lib/practice-areas"
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Work Accident Attorneys | TOP USA LAW",
  description:
    "TOP USA LAW provides expert work accident representation nationwide. Our attorneys help injured workers secure maximum compensation and navigate complex workers' compensation claims.",
}

export default function WorkAccidentsPage() {
  // Find the work accidents practice area data
  const practiceArea = allPracticeAreas.find((area) => area.id === 5)

  if (!practiceArea) {
    return <div>Practice area not found</div>
  }

  // Case results data
  const caseResults = [
    {
      amount: "$3.2 Million",
      title: "Construction Site Fall",
      description: "Recovery for a worker who suffered spinal injuries after falling from scaffolding.",
    },
    {
      amount: "$1.8 Million",
      title: "Machinery Malfunction",
      description: "Settlement for a factory worker who lost partial use of their hand in an industrial accident.",
    },
    {
      amount: "$950,000",
      title: "Toxic Exposure",
      description: "Recovery for a worker who developed respiratory illness due to workplace chemical exposure.",
    },
  ]

  // Testimonials data
  const testimonials = [
    {
      quote:
        "After my workplace injury, I was worried about supporting my family while I couldn't work. TOP USA LAW not only helped me navigate the workers' compensation system but also identified a third-party claim that significantly increased my recovery.",
      name: "Robert M.",
      case: "Construction Site Injury",
    },
    {
      quote:
        "The attorneys at TOP USA LAW understood the complexities of my work injury case and fought for me when my claim was initially denied. Their knowledge of both workers' compensation and personal injury law made all the difference.",
      name: "Sarah T.",
      case: "Manufacturing Accident Victim",
    },
  ]

  // Statistics data
  const statistics = [
    { value: "95%", label: "Success Rate" },
    { value: "$250M+", label: "Recovered for Work Accident Victims" },
    { value: "2,800+", label: "Work Injury Cases Won" },
    { value: "25+", label: "Years of Experience" },
  ]

  // Common workplace injuries
  const workplaceInjuries = [
    {
      title: "Falls from Heights",
      description: "Injuries from falling from ladders, scaffolding, roofs, or other elevated work areas.",
    },
    {
      title: "Machinery Accidents",
      description: "Injuries caused by unguarded moving parts, malfunctioning equipment, or improper training.",
    },
    {
      title: "Repetitive Stress Injuries",
      description: "Gradual damage to muscles, nerves, and tendons from repetitive motions or overuse.",
    },
    {
      title: "Toxic Exposure",
      description:
        "Illnesses and injuries from exposure to harmful chemicals, asbestos, silica, or other toxic substances.",
    },
    {
      title: "Vehicle-Related Accidents",
      description: "Injuries involving forklifts, trucks, or other vehicles in the workplace.",
    },
    {
      title: "Struck-by Injuries",
      description: "Injuries from being hit by falling objects, moving equipment, or flying debris.",
    },
  ]

  // Enhanced FAQs
  const faqs = [
    {
      question: "What should I do immediately after a workplace injury?",
      answer:
        "First, seek medical attention for your injuries, even if they seem minor. Report the injury to your supervisor or employer as soon as possible—many states have strict deadlines for reporting workplace injuries. Document everything related to the accident and your injuries, including photos if possible. Follow your doctor's treatment plan carefully. Then contact our attorneys to understand your legal options beyond workers' compensation, as you may be entitled to additional compensation through third-party claims.",
    },
    {
      question: "What's the difference between workers' compensation and a personal injury claim?",
      answer:
        "Workers' compensation is a no-fault insurance system that provides benefits regardless of who caused the workplace accident. It typically covers medical expenses and partial wage replacement but doesn't compensate for pain and suffering. Personal injury claims, which may be available against third parties (not your employer), require proving negligence but can provide fuller compensation including pain and suffering, full lost wages, and other damages not covered by workers' comp.",
    },
    {
      question: "Can I sue my employer for a workplace injury?",
      answer:
        "In most states, workers' compensation is the 'exclusive remedy' against employers, meaning you generally cannot sue your employer for a workplace injury. However, there are exceptions, such as cases involving intentional harm, gross negligence in some states, or situations where the employer doesn't carry required workers' compensation insurance. Additionally, you may have claims against third parties (equipment manufacturers, contractors, property owners) whose negligence contributed to your injury.",
    },
    {
      question: "What benefits am I entitled to after a work injury?",
      answer:
        "Through workers' compensation, you're typically entitled to medical treatment coverage, temporary disability benefits (partial wage replacement while you recover), permanent disability benefits (if your injury causes lasting impairment), and vocational rehabilitation if you cannot return to your previous job. Through third-party claims, you may be entitled to additional compensation for pain and suffering, full lost wages and earning capacity, and other damages not covered by workers' compensation.",
    },
    {
      question: "What if my workers' compensation claim is denied?",
      answer:
        "If your claim is denied, you have the right to appeal the decision. Common reasons for denial include missed deadlines, disputes about whether the injury is work-related, or disagreements about the severity of the injury. Our attorneys can help you navigate the appeals process, gather additional evidence to support your claim, represent you at hearings, and explore alternative avenues for compensation such as third-party claims.",
    },
    {
      question: "How much does it cost to hire a work accident attorney?",
      answer:
        "We handle work accident cases on a contingency fee basis, meaning you pay nothing unless we recover compensation for you. Initial consultations are free, and we advance all costs associated with investigating and pursuing your claim. This arrangement ensures everyone has access to quality legal representation regardless of their financial situation.",
    },
  ]

  return (
    <>
      {/* Hero Section with Gradient Overlay */}
      <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ClientShutterstockImage
            query="workplace"
            alt="Work accident legal representation"
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
                Work Accident <span className="text-yellow-500">Attorneys</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Dedicated advocates helping injured workers secure the compensation they deserve beyond standard
                workers' compensation benefits.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-800">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-white">5.0 Client Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-800">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="text-white">Top-Rated Work Injury Lawyers</span>
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
                query="workplace injury"
                alt="Work accident attorney consulting with injured worker"
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
                query="injured worker"
                alt="Injured worker receiving legal support"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">How We Help Work Accident Victims</h2>
              <p className="text-lg text-gray-700 mb-6">
                At TOP USA LAW, we understand the physical, emotional, and financial challenges that workplace injuries
                create. Our experienced work accident attorneys provide comprehensive legal representation that goes
                beyond standard workers' compensation claims.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                While workers' compensation provides limited benefits, many injured workers don't realize they may be
                entitled to additional compensation through third-party claims against equipment manufacturers,
                contractors, property owners, or other parties whose negligence contributed to their injuries.
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
              <h2 className="text-3xl font-bold mb-6">Common Workplace Injuries We Handle</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our attorneys have extensive experience representing workers injured in all types of workplace accidents
                across various industries, from construction and manufacturing to healthcare and office environments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {workplaceInjuries.map((injury, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">{injury.title}</h3>
                    <p className="text-gray-600">{injury.description}</p>
                  </div>
                ))}
              </div>

              <Button className="mt-4" asChild>
                <Link href="/contact">
                  Discuss Your Work Injury Case <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <ClientShutterstockImage
                query="construction safety"
                alt="Workplace safety equipment"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work Accident Case Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to build strong cases and maximize compensation for our work accident
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
                    "We begin with a thorough evaluation of your work accident case, discussing the circumstances, injuries, and potential avenues for compensation beyond workers' compensation.",
                  icon: <Phone className="h-6 w-6" />,
                },
                {
                  title: "Investigation & Evidence Collection",
                  description:
                    "Our team conducts a comprehensive investigation, gathering evidence such as accident reports, witness statements, safety records, and expert opinions to establish liability for third-party claims.",
                  icon: <Briefcase className="h-6 w-6" />,
                },
                {
                  title: "Workers' Compensation Guidance",
                  description:
                    "We help you navigate the workers' compensation system, ensuring you receive all benefits you're entitled to while simultaneously exploring additional avenues for recovery.",
                  icon: <AlertTriangle className="h-6 w-6" />,
                },
                {
                  title: "Third-Party Liability Assessment",
                  description:
                    "We identify all potentially liable third parties, such as equipment manufacturers, contractors, or property owners, whose negligence may have contributed to your workplace injury.",
                  icon: <FileText className="h-6 w-6" />,
                },
                {
                  title: "Comprehensive Damages Calculation",
                  description:
                    "We calculate the full extent of your damages, including those not covered by workers' compensation, such as pain and suffering, full lost wages, and loss of quality of life.",
                  icon: <Award className="h-6 w-6" />,
                },
                {
                  title: "Resolution & Recovery",
                  description:
                    "We pursue maximum compensation through skilled negotiation or, when necessary, litigation against all responsible parties, while coordinating with your workers' compensation claim.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Work Accident Case Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our track record speaks for itself. Here are some of our recent successes for work accident victims.
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
              Don't just take our word for it. Here's what our work accident clients have to say about their experience
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
              Get answers to common questions about work accident cases and how our attorneys can help.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss Your Work Accident Case?</h2>
              <p className="text-xl mb-8">
                Our experienced work accident attorneys are ready to help you navigate the complex legal process and
                fight for the full compensation you deserve beyond workers' compensation. Contact us today for a free,
                no-obligation consultation.
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
                query="legal team workplace"
                alt="Our work accident legal team"
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
        url={`https://www.topusalaw.com/practice-areas/work-accidents`}
      />
      <FAQSchema questions={faqs} />
    </>
  )
}
