import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Star, Award, Clock, Phone, MapPin, Shield, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WebPageSchema, FAQSchema } from "@/app/components/schema-org"
import { allPracticeAreas } from "@/lib/practice-areas"
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Personal Injury Attorneys | TOP USA LAW",
  description:
    "TOP USA LAW provides expert personal injury representation nationwide. Our attorneys help victims of negligence secure maximum compensation for their injuries.",
}

export default function PersonalInjuryPage() {
  // Find the personal injury practice area data
  const practiceArea = allPracticeAreas.find((area) => area.id === 1)

  if (!practiceArea) {
    return <div>Practice area not found</div>
  }

  // Case results data
  const caseResults = [
    {
      amount: "$4.2 Million",
      title: "Car Accident Settlement",
      description: "Recovery for a client who suffered severe spinal injuries in a multi-vehicle collision.",
    },
    {
      amount: "$2.8 Million",
      title: "Medical Malpractice Verdict",
      description: "Jury award for a patient who experienced surgical complications due to doctor negligence.",
    },
    {
      amount: "$1.5 Million",
      title: "Premises Liability Settlement",
      description: "Recovery for a client who suffered traumatic brain injury from a fall at a commercial property.",
    },
  ]

  // Testimonials data
  const testimonials = [
    {
      quote:
        "After my accident, I was overwhelmed with medical bills and unable to work. TOP USA LAW fought tirelessly for me and secured a settlement that covered all my expenses and more.",
      name: "Michael R.",
      case: "Car Accident Victim",
    },
    {
      quote:
        "The personal injury attorneys at TOP USA LAW were compassionate, professional, and most importantly, effective. They handled everything while I focused on recovery.",
      name: "Sarah T.",
      case: "Slip and Fall Injury",
    },
  ]

  // Statistics data
  const statistics = [
    { value: "98%", label: "Success Rate" },
    { value: "$500M+", label: "Recovered for Clients" },
    { value: "24/7", label: "Client Availability" },
    { value: "5,000+", label: "Cases Handled" },
  ]

  // Enhanced FAQs
  const faqs = [
    {
      question: "How much is my personal injury case worth?",
      answer:
        "The value of your case depends on several factors, including the severity of your injuries, medical expenses (current and future), lost wages, property damage, pain and suffering, and impact on quality of life. Our attorneys will provide a realistic assessment based on our experience with similar cases and ensure all current and future damages are accounted for in your claim.",
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
      question: "What types of damages can I recover in a personal injury case?",
      answer:
        "You may be entitled to economic damages (medical expenses, lost wages, property damage), non-economic damages (pain and suffering, emotional distress, loss of enjoyment of life), and in some cases involving extreme negligence or intentional misconduct, punitive damages. Our attorneys work to identify and document all applicable damages to maximize your recovery.",
    },
    {
      question: "How much does it cost to hire a personal injury lawyer?",
      answer:
        "We handle personal injury cases on a contingency fee basis, meaning you pay no attorney fees unless we recover compensation for you. Initial consultations are free, and we advance costs for investigating and pursuing your claim. This arrangement makes quality legal representation accessible regardless of your financial situation.",
    },
    {
      question: "What should I do immediately after suffering a personal injury?",
      answer:
        "First, seek medical attention, even if injuries seem minor. Document everything related to the accident and your injuries, including photos, witness information, and medical records. Report the incident to appropriate parties (property owner, police, etc.) but avoid giving recorded statements to insurance companies before consulting with an attorney. Then contact our firm for a free consultation to understand your legal options.",
    },
  ]

  return (
    <>
      {/* Hero Section with Gradient Overlay */}
      <section className="relative bg-black text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ClientShutterstockImage
            query="injury lawyer"
            alt="Personal injury legal representation"
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
                Personal Injury <span className="text-yellow-500">Attorneys</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Dedicated advocates fighting for the compensation you deserve after suffering injuries due to someone
                else's negligence.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-800">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-white">5.0 Client Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-800">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="text-white">Top 1% of Law Firms</span>
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
                query="injury attorney consultation"
                alt="Personal injury attorney consulting with client"
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
                query="injury victim"
                alt="Personal injury victim receiving legal support"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">How We Can Help After Your Injury</h2>
              <p className="text-lg text-gray-700 mb-6">
                At TOP USA LAW, we understand the physical, emotional, and financial toll that personal injuries can
                take on victims and their families. Our experienced attorneys are dedicated to helping you navigate the
                complex legal process while you focus on recovery.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We handle all types of personal injury cases, from car accidents and slip and falls to medical
                malpractice and product liability. Our team works tirelessly to secure the compensation you deserve for
                medical bills, lost wages, pain and suffering, and more.
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
              <h2 className="text-3xl font-bold mb-6">Our Personal Injury Expertise</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our attorneys have decades of combined experience representing personal injury victims across the
                country. We've successfully handled thousands of cases and recovered millions of dollars for our
                clients.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Car & Vehicle Accidents</h3>
                  <p className="text-gray-600">
                    Expert representation for victims of automobile, truck, motorcycle, and rideshare accidents.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Slip & Fall Injuries</h3>
                  <p className="text-gray-600">
                    Holding property owners accountable for dangerous conditions that cause injuries.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Medical Malpractice</h3>
                  <p className="text-gray-600">
                    Representation for victims of healthcare provider negligence and errors.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Workplace Accidents</h3>
                  <p className="text-gray-600">
                    Helping injured workers navigate workers' compensation and third-party claims.
                  </p>
                </div>
              </div>

              <Button className="mt-4" asChild>
                <Link href="/contact">
                  Discuss Your Case With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <ClientShutterstockImage
                query="legal consultation"
                alt="Personal injury attorneys in consultation"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Personal Injury Case Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to build strong cases and maximize compensation for our clients.
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
                    "We begin with a thorough evaluation of your case, discussing the circumstances of your injury, potential liability, and your legal options. This consultation is completely free and comes with no obligation.",
                  icon: <Phone className="h-6 w-6" />,
                },
                {
                  title: "Investigation & Evidence Collection",
                  description:
                    "Our team conducts a comprehensive investigation, gathering evidence such as accident reports, witness statements, medical records, surveillance footage, and expert opinions to build a strong foundation for your case.",
                  icon: <Shield className="h-6 w-6" />,
                },
                {
                  title: "Medical Treatment Coordination",
                  description:
                    "We help ensure you receive proper medical care for your injuries, connecting you with appropriate specialists if needed and documenting all treatment to establish the full extent of your injuries and related expenses.",
                  icon: <AlertTriangle className="h-6 w-6" />,
                },
                {
                  title: "Case Evaluation & Demand",
                  description:
                    "After assessing the full extent of your damages, including current and future medical expenses, lost income, and pain and suffering, we prepare and submit a demand to the responsible parties and their insurers.",
                  icon: <Award className="h-6 w-6" />,
                },
                {
                  title: "Negotiation & Settlement",
                  description:
                    "We engage in strategic negotiations with insurance companies and defense attorneys to secure a fair settlement that fully compensates you for your injuries and losses, keeping you informed throughout the process.",
                  icon: <Star className="h-6 w-6" />,
                },
                {
                  title: "Litigation When Necessary",
                  description:
                    "If a fair settlement cannot be reached, our experienced trial attorneys will file a lawsuit and aggressively represent your interests in court, presenting a compelling case to the judge and jury to secure the compensation you deserve.",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Personal Injury Case Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our track record speaks for itself. Here are some of our recent successes for personal injury clients.
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
              Don't just take our word for it. Here's what our personal injury clients have to say about their
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
              Get answers to common questions about personal injury cases and how our attorneys can help.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss Your Personal Injury Case?</h2>
              <p className="text-xl mb-8">
                Our experienced personal injury attorneys are ready to help you navigate the legal process and fight for
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
                query="legal team"
                alt="Our personal injury legal team"
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
        url={`https://www.topusalaw.com/practice-areas/personal-injury`}
      />
      <FAQSchema questions={faqs} />
    </>
  )
}
