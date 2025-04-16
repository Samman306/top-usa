import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, AlertTriangle, Award, Scale, Clock, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WebPageSchema, FAQSchema } from "@/app/components/schema-org"
import { allPracticeAreas } from "@/lib/practice-areas"
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"

export const metadata: Metadata = {
  title: "Truck Accident Attorneys | TOP USA LAW",
  description:
    "TOP USA LAW provides specialized truck accident representation nationwide. Our attorneys help victims of commercial truck and 18-wheeler accidents secure maximum compensation for catastrophic injuries.",
}

export default function TruckAccidentsPage() {
  // Find the truck accidents practice area data
  const practiceArea = allPracticeAreas.find((area) => area.id === 3)

  if (!practiceArea) {
    return <div>Practice area not found</div>
  }

  // Statistics about truck accidents
  const truckAccidentStats = [
    { value: "4,000+", label: "Fatal truck accidents annually in the U.S." },
    { value: "87%", label: "Of truck accidents caused by driver error" },
    { value: "$200,000+", label: "Average settlement for serious truck accident injuries" },
    { value: "30%", label: "Higher fatality rate than car accidents" },
  ]

  // Case results
  const caseResults = [
    {
      amount: "$4.8 Million",
      title: "Commercial Truck Collision",
      description: "Settlement for a family who lost their father in a collision with an overloaded commercial truck.",
    },
    {
      amount: "$3.2 Million",
      title: "Trucking Company Negligence",
      description:
        "Verdict against a trucking company that failed to properly maintain their fleet, resulting in brake failure.",
    },
    {
      amount: "$2.5 Million",
      title: "Hours of Service Violation",
      description:
        "Settlement for a client injured by a truck driver who falsified logbooks and drove beyond legal hours.",
    },
  ]

  // Common causes of truck accidents
  const commonCauses = [
    {
      title: "Driver Fatigue",
      description:
        "Truck drivers often face pressure to meet delivery deadlines, leading to excessive hours on the road and dangerous fatigue.",
    },
    {
      title: "Improper Loading",
      description:
        "Improperly secured or overloaded cargo can shift during transport, causing trucks to jackknife or roll over.",
    },
    {
      title: "Inadequate Training",
      description:
        "Some trucking companies fail to properly train their drivers on safety protocols and handling of commercial vehicles.",
    },
    {
      title: "Poor Maintenance",
      description:
        "Neglected maintenance can lead to tire blowouts, brake failures, and other mechanical issues that cause accidents.",
    },
    {
      title: "Distracted Driving",
      description:
        "Using mobile devices, adjusting GPS systems, or other distractions can be catastrophic when operating a commercial truck.",
    },
    {
      title: "Speeding & Reckless Driving",
      description:
        "Excessive speed reduces reaction time and increases stopping distance, especially dangerous with heavy commercial vehicles.",
    },
  ]

  // Additional FAQs
  const faqs = [
    {
      question: "Who can be held liable in a truck accident case?",
      answer:
        "Multiple parties may be liable in truck accident cases, including the truck driver, trucking company, vehicle manufacturer, maintenance provider, cargo loading company, and even government entities responsible for road conditions. Our attorneys conduct thorough investigations to identify all potentially responsible parties to maximize your compensation.",
    },
    {
      question: "What makes truck accident cases different from car accidents?",
      answer:
        "Truck accidents typically involve more severe injuries, complex federal regulations, multiple liable parties, sophisticated insurance issues, and higher damage amounts. Commercial trucks can weigh up to 80,000 pounds, making collisions with passenger vehicles catastrophic. These cases require specialized knowledge of the trucking industry and its regulations.",
    },
    {
      question: "What evidence is important in truck accident cases?",
      answer:
        "Critical evidence includes the truck's black box data (ECM), driver logs, inspection records, maintenance history, driver qualification files, drug and alcohol testing results, trucking company policies, freight documentation, and witness statements. Much of this evidence is controlled by the trucking company and can be lost or destroyed if not promptly preserved through legal action.",
    },
    {
      question: "How soon should I contact an attorney after a truck accident?",
      answer:
        "You should contact an attorney immediately after a truck accident. Trucking companies often dispatch rapid response teams to accident scenes to gather evidence and build their defense. Early attorney involvement allows for preservation of critical evidence through legal holds and independent investigation before evidence can be altered or destroyed.",
    },
    {
      question: "What compensation can I recover in a truck accident case?",
      answer:
        "Victims of truck accidents may be entitled to compensation for medical expenses (past and future), lost wages and diminished earning capacity, property damage, pain and suffering, emotional distress, permanent disability or disfigurement, loss of enjoyment of life, and in some cases, punitive damages when the conduct was particularly reckless or egregious.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 py-16 md:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ClientShutterstockImage
            query="truck accident highway"
            alt="Truck accident scene"
            fill
            className="object-cover"
          />
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
              <div className="flex items-center gap-4 mb-4">
                {practiceArea.icon}
                <h1 className="text-4xl md:text-5xl font-bold text-white">{practiceArea.title}</h1>
              </div>
              <p className="text-xl text-gray-300 mb-8">{practiceArea.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold" asChild>
                  <Link href="/contact">
                    Free Case Review <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href="tel:+15551234567">Call (555) 123-4567</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl border border-gray-700">
              <ClientShutterstockImage
                query="truck"
                alt={`${practiceArea.title} services at TOP USA LAW`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Truck Accident Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {truckAccidentStats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">{stat.value}</p>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <ClientShutterstockImage
                query="truck accident lawyer"
                alt="Truck accident attorney reviewing evidence"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">How We Can Help After a Truck Accident</h2>
              <p className="text-lg text-gray-700 mb-6">
                Truck accidents often result in catastrophic injuries and complex legal cases involving multiple
                parties. Our specialized truck accident attorneys understand the federal regulations governing the
                trucking industry and have the resources to thoroughly investigate your case.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We immediately deploy investigators to preserve critical evidence like black box data, driver logs, and
                maintenance records before they can be altered or destroyed. Our team works with accident reconstruction
                experts, medical professionals, and economic analysts to build a compelling case for maximum
                compensation.
              </p>
              <div className="space-y-4">
                {practiceArea.details.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Causes Section */}
      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Common Causes of Truck Accidents</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {commonCauses.map((cause, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 hover:border-yellow-500/50 transition-colors"
              >
                <AlertTriangle className="h-8 w-8 text-yellow-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">{cause.title}</h3>
                <p className="text-gray-300">{cause.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Results Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Truck Accident Case Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caseResults.map((result, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-yellow-500 p-4 text-center">
                  <p className="text-3xl font-bold text-black">{result.amount}</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{result.title}</h3>
                  <p className="text-gray-700">{result.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-500 italic">Results may vary depending on the facts of your case.</p>
          </div>
        </div>
      </section>

      {/* Legal Process Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Truck Accident Legal Process</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex gap-6 items-start">
              <div className="bg-yellow-500 text-black rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Immediate Investigation</h3>
                <p className="text-gray-700">
                  We deploy investigators to the accident scene to document evidence and secure the truck's black box
                  data, driver logs, and maintenance records before they can be altered or destroyed.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex gap-6 items-start">
              <div className="bg-yellow-500 text-black rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Comprehensive Liability Analysis</h3>
                <p className="text-gray-700">
                  We identify all potentially responsible parties, including the truck driver, trucking company, vehicle
                  manufacturer, maintenance provider, and cargo loaders to maximize your potential compensation.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex gap-6 items-start">
              <div className="bg-yellow-500 text-black rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Expert Consultation</h3>
                <p className="text-gray-700">
                  We work with accident reconstruction specialists, medical experts, and economic analysts to build a
                  compelling case that demonstrates the full extent of your damages and the impact on your life.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex gap-6 items-start">
              <div className="bg-yellow-500 text-black rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Aggressive Negotiation</h3>
                <p className="text-gray-700">
                  We leverage our evidence and expertise to negotiate with insurance companies and defense attorneys,
                  fighting for the maximum compensation you deserve for your injuries and losses.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex gap-6 items-start">
              <div className="bg-yellow-500 text-black rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Trial Preparation & Litigation</h3>
                <p className="text-gray-700">
                  If a fair settlement cannot be reached, our experienced trial attorneys are fully prepared to take
                  your case to court and present a compelling argument to the judge and jury.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 bg-black text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Truck Accident Attorneys</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <Award className="h-16 w-16 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Specialized Experience</h3>
              <p className="text-gray-300">
                Our attorneys focus specifically on truck accident cases and understand the complex federal regulations
                governing the trucking industry.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Scale className="h-16 w-16 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-gray-300">
                We've recovered millions of dollars for truck accident victims through aggressive negotiation and
                skilled litigation.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Clock className="h-16 w-16 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Rapid Response</h3>
              <p className="text-gray-300">
                Our team acts quickly to preserve critical evidence before it can be altered or destroyed by trucking
                companies.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <FileText className="h-16 w-16 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Thorough Investigation</h3>
              <p className="text-gray-300">
                We leave no stone unturned in investigating your case, identifying all liable parties and insurance
                policies.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <CheckCircle className="h-16 w-16 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">No Fee Unless We Win</h3>
              <p className="text-gray-300">
                We work on a contingency fee basis, meaning you pay nothing unless we recover compensation for you.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <AlertTriangle className="h-16 w-16 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Resources to Win</h3>
              <p className="text-gray-300">
                We have the financial resources to take on powerful trucking companies and their insurers, including
                hiring top experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg relative">
            <div className="text-6xl text-yellow-500 opacity-20 absolute top-4 left-4">"</div>
            <div className="relative z-10">
              <p className="text-xl italic text-gray-700 mb-6">
                After my accident with an 18-wheeler left me with severe injuries and unable to work, I didn't know
                where to turn. TOP USA LAW stepped in and handled everything. They secured the truck's black box data
                and driver logs that proved the driver had exceeded his legal hours. Their thorough investigation and
                aggressive negotiation resulted in a settlement that covered all my medical bills, lost wages, and
                provided for my family's future. I couldn't have gotten through this without them.
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-bold">Michael R.</p>
                  <p className="text-gray-500">Truck Accident Survivor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-yellow-500 text-black">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Injured in a Truck Accident?</h2>
          <p className="text-black/90 max-w-2xl mx-auto mb-8">
            Don't face the trucking companies and their insurers alone. Our experienced truck accident attorneys are
            ready to fight for the compensation you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-900 font-bold" asChild>
              <Link href="/contact">
                Free Case Evaluation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-black/10" asChild>
              <Link href="tel:+15551234567">Call (555) 123-4567</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Schema.org markup for SEO */}
      <WebPageSchema
        title={practiceArea.title}
        description={practiceArea.description}
        url={`https://www.topusalaw.com/practice-areas/truck-accidents`}
      />
      <FAQSchema questions={faqs} />
    </>
  )
}
