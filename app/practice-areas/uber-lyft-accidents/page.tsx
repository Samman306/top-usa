import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Car, Shield, Clock, FileText, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WebPageSchema, FAQSchema } from "@/app/components/schema-org"
import { allPracticeAreas } from "@/lib/practice-areas"
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"

export const metadata: Metadata = {
  title: "Uber & Lyft Accident Attorneys | TOP USA LAW",
  description:
    "TOP USA LAW provides specialized rideshare accident representation nationwide. Our attorneys help victims of Uber and Lyft accidents secure maximum compensation for their injuries.",
}

export default function UberLyftAccidentsPage() {
  // Find the Uber and Lyft accidents practice area data
  const practiceArea = allPracticeAreas.find((area) => area.id === 4)

  if (!practiceArea) {
    return <div>Practice area not found</div>
  }

  // Rideshare accident statistics
  const rideshareStats = [
    { value: "1.4 Billion", label: "Rideshare trips annually in the U.S." },
    { value: "24%", label: "Increase in traffic accidents since rideshare introduction" },
    { value: "$1 Million", label: "Maximum insurance coverage during active trips" },
    { value: "3-5x", label: "Higher accident rate than regular drivers" },
  ]

  // Case results
  const caseResults = [
    {
      amount: "$1.2 Million",
      title: "Uber Passenger Injury",
      description: "Settlement for a passenger severely injured when their Uber driver ran a red light.",
    },
    {
      amount: "$875,000",
      title: "Lyft Driver Negligence",
      description: "Recovery for a pedestrian struck by a distracted Lyft driver who was checking the app.",
    },
    {
      amount: "$950,000",
      title: "Rideshare Insurance Dispute",
      description:
        "Settlement after successfully proving the rideshare company's insurance applied despite initial denial.",
    },
  ]

  // Insurance coverage phases
  const insurancePhases = [
    {
      phase: "App Off",
      coverage: "Driver's Personal Insurance",
      description:
        "When the app is off, only the driver's personal auto insurance applies. Many personal policies exclude commercial activity.",
    },
    {
      phase: "App On, No Ride Accepted",
      coverage: "Limited Liability Coverage",
      description:
        "When the app is on but no ride is accepted, rideshare companies provide limited liability coverage (typically $50,000/$100,000).",
    },
    {
      phase: "En Route to Pickup",
      coverage: "$1 Million Liability",
      description:
        "Once a ride is accepted and the driver is en route to pickup, $1 million in liability coverage applies.",
    },
    {
      phase: "During Trip",
      coverage: "$1 Million + Uninsured/Underinsured",
      description:
        "During the trip, $1 million liability coverage plus uninsured/underinsured motorist coverage applies.",
    },
  ]

  // Additional FAQs
  const faqs = [
    {
      question: "Who can file a claim after a rideshare accident?",
      answer:
        "Multiple parties may have claims after a rideshare accident, including rideshare passengers, rideshare drivers, occupants of other vehicles, pedestrians, cyclists, and property owners. Each party's claim may involve different insurance policies and liability issues, requiring specialized legal knowledge to navigate properly.",
    },
    {
      question: "How does insurance work in Uber and Lyft accidents?",
      answer:
        "Insurance coverage in rideshare accidents depends on the driver's status at the time of the accident. If the app was off, the driver's personal insurance applies. If the app was on but no ride was accepted, rideshare companies provide limited liability coverage. Once a ride is accepted and during trips, rideshare companies typically provide $1 million in liability coverage. Our attorneys can determine which insurance policies apply to your specific situation.",
    },
    {
      question: "What if I was injured as a rideshare driver?",
      answer:
        "As a rideshare driver, your recovery options depend on your status at the time of the accident and the available insurance coverage. You may be eligible to file claims against at-fault drivers, through the rideshare company's insurance, or through your own insurance policies. Our attorneys can help determine all available sources of compensation for your injuries.",
    },
    {
      question: "Can I sue Uber or Lyft directly after an accident?",
      answer:
        "Rideshare companies typically classify drivers as independent contractors rather than employees, which can limit direct company liability. However, there may be circumstances where the company shares responsibility, such as negligent hiring or inadequate safety policies. Our attorneys can evaluate whether a direct claim against the rideshare company is viable in your case.",
    },
    {
      question: "What compensation can I recover after a rideshare accident?",
      answer:
        "Potential compensation includes medical expenses (current and future), lost wages and diminished earning capacity, pain and suffering, emotional distress, property damage, and in some cases, punitive damages. The specific compensation available depends on the circumstances of your accident, the severity of your injuries, and the applicable insurance coverage.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-900 py-16 md:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ClientShutterstockImage
            query="rideshare car accident"
            alt="Rideshare accident scene"
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
                query="rideshare"
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
          <h2 className="text-3xl font-bold mb-12 text-center">Rideshare Accident Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {rideshareStats.map((stat, index) => (
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
                query="rideshare accident lawyer"
                alt="Rideshare accident attorney consulting with client"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">How We Can Help After a Rideshare Accident</h2>
              <p className="text-lg text-gray-700 mb-6">
                Rideshare accident cases present unique legal challenges due to the complex insurance coverage issues
                and questions of liability that arise when Uber, Lyft, and other rideshare companies are involved.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our attorneys have specific experience handling these modern transportation cases and can help you
                navigate the complicated process of determining which insurance policies apply based on the driver's
                status at the time of the accident.
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

      {/* Insurance Coverage Section */}
      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Understanding Rideshare Insurance Coverage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insurancePhases.map((phase, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 hover:border-yellow-500/50 transition-colors"
              >
                <div className="bg-yellow-500 text-black rounded-full h-10 w-10 flex items-center justify-center text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{phase.phase}</h3>
                <p className="text-yellow-500 font-medium mb-3">{phase.coverage}</p>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Understanding which insurance coverage applies is critical to maximizing your recovery. Our attorneys can
              help determine the driver's status at the time of your accident and identify all available insurance
              policies.
            </p>
          </div>
        </div>
      </section>

      {/* Case Results Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Rideshare Accident Case Results</h2>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Rideshare Accident Legal Process</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex gap-6 items-start">
              <div className="bg-yellow-500 text-black rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Initial Case Assessment</h3>
                <p className="text-gray-700">
                  We determine the rideshare driver's status at the time of the accident (offline, available, en route
                  to pickup, or during trip), which is crucial for identifying applicable insurance coverage.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex gap-6 items-start">
              <div className="bg-yellow-500 text-black rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Insurance Coverage Analysis</h3>
                <p className="text-gray-700">
                  We identify all potential sources of insurance coverage, including the rideshare company's commercial
                  policy, the driver's personal policy, your own insurance, and any other applicable coverage.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex gap-6 items-start">
              <div className="bg-yellow-500 text-black rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Evidence Collection</h3>
                <p className="text-gray-700">
                  We gather critical evidence including the rideshare app data, trip information, screenshots,
                  communications, witness statements, police reports, and medical records to build a strong case.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex gap-6 items-start">
              <div className="bg-yellow-500 text-black rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Liability Determination</h3>
                <p className="text-gray-700">
                  We establish liability by analyzing the actions of all involved parties, including the rideshare
                  driver, other motorists, and potentially the rideshare company itself for issues like negligent hiring
                  or inadequate safety policies.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md flex gap-6 items-start">
              <div className="bg-yellow-500 text-black rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Claim Resolution</h3>
                <p className="text-gray-700">
                  We pursue maximum compensation through skilled negotiation with all relevant insurance carriers or,
                  when necessary, litigation against the responsible parties, navigating the complex web of rideshare
                  liability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 bg-black text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Rideshare Accident Attorneys</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <Car className="h-16 w-16 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Rideshare Expertise</h3>
              <p className="text-gray-300">
                Our attorneys understand the unique legal challenges of rideshare accident cases and the complex
                insurance issues involved.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Shield className="h-16 w-16 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Insurance Knowledge</h3>
              <p className="text-gray-300">
                We know how to navigate the complicated web of insurance policies that may apply to your rideshare
                accident case.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <Clock className="h-16 w-16 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Timely Action</h3>
              <p className="text-gray-300">
                We act quickly to preserve critical evidence from the rideshare app and other sources before it can be
                lost or deleted.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <FileText className="h-16 w-16 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Thorough Investigation</h3>
              <p className="text-gray-300">
                We conduct comprehensive investigations to determine the driver's status and identify all potentially
                liable parties.
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
              <MapPin className="h-16 w-16 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Nationwide Coverage</h3>
              <p className="text-gray-300">
                We handle rideshare accident cases across all 50 states, with knowledge of local laws and regulations.
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
                I was a passenger in an Uber when another driver ran a red light and hit us. The Uber driver's insurance
                denied my claim, saying the other driver was at fault, while the other driver's insurance offered a
                settlement that wouldn't even cover my medical bills. TOP USA LAW stepped in and navigated the complex
                insurance situation, ultimately securing coverage from Uber's $1 million policy. Their knowledge of
                rideshare insurance policies made all the difference in my case.
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-bold">Jennifer P.</p>
                  <p className="text-gray-500">Rideshare Accident Victim</p>
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
          <h2 className="text-3xl font-bold mb-4">Injured in a Rideshare Accident?</h2>
          <p className="text-black/90 max-w-2xl mx-auto mb-8">
            Don't let complex insurance issues prevent you from getting the compensation you deserve. Our experienced
            rideshare accident attorneys can help navigate these challenging cases.
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
        url={`https://www.topusalaw.com/practice-areas/uber-lyft-accidents`}
      />
      <FAQSchema questions={faqs} />
    </>
  )
}
