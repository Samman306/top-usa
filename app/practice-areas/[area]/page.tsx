import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

// Add schema data to practice area pages
import { WebPageSchema, FAQSchema } from "@/app/components/schema-org"

type Props = {
  params: { area: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const practiceArea = getPracticeAreaData(params.area)

  if (!practiceArea) {
    return {
      title: "Practice Area Not Found",
    }
  }

  return {
    title: `${practiceArea.title} | TOP USA LAW`,
    description: practiceArea.metaDescription,
  }
}

export async function generateStaticParams() {
  return [
    { area: "personal-injury" },
    { area: "car-accidents" },
    { area: "truck-accidents" },
    { area: "uber-lyft-accidents" },
    { area: "work-accidents" },
    { area: "construction-accidents" },
    { area: "slip-fall-injuries" },
    { area: "white-collar-crimes" },
    { area: "immigration-law" },
    { area: "class-actions" },
  ]
}

export default function PracticeAreaPage({ params }: Props) {
  const practiceArea = getPracticeAreaData(params.area)

  if (!practiceArea) {
    notFound()
  }

  return (
    <>
      <section className="bg-black text-white py-12 md:py-16">
        <div className="container">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{practiceArea.title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl">{practiceArea.summary}</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg border border-yellow-500/20">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt={`${practiceArea.title} services at TOP USA LAW`}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">How We Can Help</h2>
              <div className="space-y-4">
                <p className="text-gray-300">{practiceArea.description}</p>
                <p className="text-gray-300">
                  Our team of experienced {practiceArea.title.toLowerCase()} attorneys has helped numerous clients
                  navigate complex legal challenges and achieve favorable outcomes. We understand that each case is
                  unique, and we tailor our approach to your specific needs and objectives.
                </p>
                <div className="space-y-2 pt-2">
                  {practiceArea.services.map((service, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Why Choose TOP USA LAW</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Nationwide Expertise",
                description: `Our ${practiceArea.title.toLowerCase()} attorneys have specialized training and extensive experience representing clients across all 50 states.`,
              },
              {
                title: "Personalized Attention",
                description:
                  "We focus on your specific needs and goals, developing legal strategies tailored to your unique situation with 24/7 access to your attorney.",
              },
              {
                title: "Proven Results",
                description: `We have a strong track record of successful outcomes in ${practiceArea.title.toLowerCase()} cases with millions recovered for our clients.`,
              },
              {
                title: "No Fee Unless We Win",
                description:
                  "We work on a contingency fee basis, meaning you pay nothing unless we recover compensation for you.",
              },
              {
                title: "Efficient Resolution",
                description:
                  "We work diligently to resolve your matter efficiently while maximizing your compensation.",
              },
              {
                title: "Comprehensive Support",
                description:
                  "We understand the stress that legal issues can cause and provide supportive guidance throughout the process.",
              },
            ].map((reason, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700 hover:border-yellow-500/50 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2 text-white">{reason.title}</h3>
                <p className="text-gray-400">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {practiceArea.faqs && (
        <section className="py-12 md:py-16 bg-black text-white">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Frequently Asked Questions</h2>
            <div className="grid gap-6 max-w-3xl mx-auto">
              {practiceArea.faqs.map((faq, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
                  <h3 className="text-lg font-bold mb-2 text-white">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Nationwide Coverage</h2>
          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-8">
            We provide expert {practiceArea.title.toLowerCase()} legal services across all 50 states, with specialized
            knowledge of local laws and regulations in each jurisdiction.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
            {[
              "California",
              "Texas",
              "Florida",
              "New York",
              "Illinois",
              "Pennsylvania",
              "Ohio",
              "Georgia",
              "North Carolina",
              "Michigan",
            ].map((state) => (
              <Link
                key={state}
                href={`/locations/${state.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-gray-800 p-3 rounded-lg text-center hover:bg-gray-700 transition-colors"
              >
                <span className="text-white">{state}</span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/locations" className="text-yellow-500 font-medium hover:underline inline-flex items-center">
              View All Locations <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-yellow-500 text-black">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Case?</h2>
          <p className="text-black/90 max-w-2xl mx-auto mb-8">
            Our experienced {practiceArea.title.toLowerCase()} attorneys are ready to help you navigate your legal
            challenges.
          </p>
          <Button variant="outline" size="lg" className="bg-black text-white hover:bg-gray-900 border-black" asChild>
            <Link href="/contact">
              Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <WebPageSchema
        title={practiceArea.title}
        description={practiceArea.metaDescription}
        url={`https://www.topusalaw.com/practice-areas/${params.area}`}
      />

      {practiceArea.faqs && <FAQSchema questions={practiceArea.faqs} />}
    </>
  )
}

function getPracticeAreaData(slug: string) {
  const practiceAreas = {
    "personal-injury": {
      title: "Personal Injury",
      summary: "Comprehensive legal representation for victims of accidents and injuries caused by negligence.",
      description:
        "At TOP USA LAW, we provide dedicated legal representation to individuals who have suffered injuries due to the negligence or wrongful actions of others. Our personal injury attorneys have the experience and resources to handle cases of all sizes and complexity, from minor injuries to catastrophic harm and wrongful death claims.",
      metaDescription:
        "TOP USA LAW provides expert personal injury representation nationwide. Our attorneys help victims of negligence secure maximum compensation for their injuries.",
      services: [
        "Thorough investigation of accident causes and liability",
        "Documentation and valuation of all damages and losses",
        "Consultation with medical experts to understand injury impacts",
        "Aggressive negotiation with insurance companies",
        "Strategic litigation when fair settlements aren't offered",
        "Comprehensive support throughout the legal process",
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
        {
          question: "What should I do immediately after an injury?",
          answer:
            "After an injury, prioritize your safety and health by seeking medical attention, even for seemingly minor injuries. Report the incident to appropriate parties (police, property owners, etc.), and document the scene with photos if possible. Collect contact information from witnesses and involved parties, but avoid discussing fault or giving recorded statements to insurance companies before consulting with our attorneys.",
        },
        {
          question: "Can I still recover compensation if I was partially at fault?",
          answer:
            "Many states follow comparative negligence rules, which allow you to recover compensation even if you were partially at fault, though your recovery may be reduced by your percentage of fault. Some states use modified comparative negligence with a 50% or 51% threshold, while others follow contributory negligence rules. Our attorneys understand the specific rules in your jurisdiction and will work to minimize your assigned fault to maximize your recovery.",
        },
      ],
    },
    "car-accidents": {
      title: "Car Accidents",
      summary:
        "Expert representation for victims of automobile accidents to secure maximum compensation for injuries and damages.",
      description:
        "Our car accident attorneys provide comprehensive legal representation to individuals injured in automobile collisions. We handle all aspects of your claim, from investigation and evidence gathering to negotiation with insurance companies and litigation when necessary, allowing you to focus on recovery while we pursue the compensation you deserve.",
      metaDescription:
        "TOP USA LAW provides expert car accident representation nationwide. Our attorneys help victims secure maximum compensation for injuries, medical bills, lost wages, and more.",
      services: [
        "Thorough accident investigation and evidence preservation",
        "Identification of all liable parties and insurance coverage",
        "Documentation of injuries and property damage",
        "Calculation of all economic and non-economic damages",
        "Aggressive negotiation with insurance companies",
        "Strategic litigation when fair settlements aren't offered",
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
        {
          question: "What if the other driver doesn't have insurance?",
          answer:
            "If you're hit by an uninsured or underinsured driver, you may still have options for recovery. These include filing a claim under your own uninsured/underinsured motorist coverage, medical payments coverage, or personal injury protection. Our attorneys can review all potential sources of compensation, including third-party liability claims against vehicle manufacturers, government entities responsible for road conditions, or businesses in dram shop liability cases.",
        },
        {
          question: "How much does it cost to hire a car accident lawyer?",
          answer:
            "We handle car accident cases on a contingency fee basis, meaning you pay no attorney fees unless we recover compensation for you. Initial consultations are free, and we advance costs for investigating and pursuing your claim. This arrangement ensures everyone has access to quality legal representation regardless of their financial situation.",
        },
      ],
    },
    "truck-accidents": {
      title: "Truck Accidents",
      summary:
        "Specialized legal support for victims of commercial truck and 18-wheeler accidents, addressing the unique complexities of these devastating collisions.",
      description:
        "Truck accident cases involve unique challenges and complexities that require specialized legal knowledge. Our truck accident attorneys understand the federal regulations governing the trucking industry, the multiple parties that may share liability, and the catastrophic nature of injuries that often result from these collisions. We have the experience and resources to take on powerful trucking companies and their insurers.",
      metaDescription:
        "TOP USA LAW provides specialized truck accident representation nationwide. Our attorneys help victims of commercial truck and 18-wheeler accidents secure maximum compensation for catastrophic injuries.",
      services: [
        "Immediate investigation and evidence preservation",
        "Analysis of driver logs, black box data, and maintenance records",
        "Identification of federal regulation violations",
        "Determination of all liable parties (driver, trucking company, etc.)",
        "Consultation with accident reconstruction experts",
        "Calculation of substantial damages often involved in truck accidents",
      ],
      faqs: [
        {
          question: "Who can be held liable in a truck accident case?",
          answer:
            "Multiple parties may share liability in truck accident cases, including the truck driver, trucking company, vehicle manufacturer, maintenance provider, cargo loader, and even government entities responsible for road conditions. Our attorneys conduct thorough investigations to identify all potentially liable parties and their insurance coverage to maximize your compensation.",
        },
        {
          question: "What makes truck accident cases different from car accidents?",
          answer:
            "Truck accident cases involve unique factors including federal regulations, industry standards, complex ownership and employment relationships, multiple insurance policies, and typically more severe injuries. These cases often require specialized knowledge of the trucking industry, access to experts familiar with commercial vehicles, and the resources to take on large trucking companies and their insurers.",
        },
        {
          question: "What evidence is important in truck accident cases?",
          answer:
            "Critical evidence includes the truck's black box data (ECM), driver logs, inspection and maintenance records, driver qualification files, drug and alcohol testing results, trucking company policies, freight documentation, and witness statements. Much of this evidence is controlled by the trucking company and can be lost or destroyed if not promptly preserved through legal action.",
        },
        {
          question: "How soon should I contact an attorney after a truck accident?",
          answer:
            "You should contact an attorney as soon as possible after a truck accident. Trucking companies often dispatch rapid response teams to accident scenes immediately to gather evidence and build their defense. Early attorney involvement allows for preservation of critical evidence through legal holds and independent investigation before evidence can be altered or destroyed.",
        },
        {
          question: "What compensation is available in truck accident cases?",
          answer:
            "Truck accidents often result in catastrophic injuries requiring substantial compensation. Available damages typically include current and future medical expenses, rehabilitation costs, lost income and earning capacity, pain and suffering, emotional distress, disfigurement, loss of enjoyment of life, and in some cases, punitive damages. Commercial trucks typically carry higher insurance policy limits than passenger vehicles, which can be important when catastrophic injuries occur.",
        },
        {
          question: "How long do truck accident cases typically take to resolve?",
          answer:
            "Truck accident cases are often complex and can take longer to resolve than typical car accident cases, ranging from several months to years depending on case complexity, severity of injuries, and whether the case settles or goes to trial. While we work efficiently to resolve your case, we never sacrifice fair compensation for a quick resolution and will take the time needed to secure the best possible outcome.",
        },
      ],
    },
    "uber-lyft-accidents": {
      title: "Uber and Lyft Accidents",
      summary:
        "Dedicated representation for passengers, drivers, and others injured in rideshare accidents, navigating the complex insurance coverage issues unique to these cases.",
      description:
        "Rideshare accident cases present unique legal challenges due to the complex insurance coverage issues and questions of liability that arise when Uber, Lyft, and other rideshare companies are involved. Our attorneys have specific experience handling these modern transportation cases and can help you navigate the complicated process of securing fair compensation.",
      metaDescription:
        "TOP USA LAW provides specialized Uber and Lyft accident representation nationwide. Our attorneys help rideshare accident victims navigate complex insurance issues and secure maximum compensation.",
      services: [
        "Determination of driver status at time of accident (app on/off)",
        "Identification of all applicable insurance coverage",
        "Representation of passengers, drivers, and third parties",
        "Navigation of rideshare companies' claims processes",
        "Negotiation with multiple insurance carriers",
        "Litigation against rideshare companies when necessary",
      ],
      faqs: [
        {
          question: "How does insurance work in Uber and Lyft accidents?",
          answer:
            "Insurance coverage in rideshare accidents depends on the driver's status at the time of the accident. If the app was off, the driver's personal insurance applies. If the app was on but no ride was accepted, rideshare companies provide limited liability coverage. Once a ride is accepted and during trips, rideshare companies typically provide $1 million in liability coverage. Our attorneys can determine which insurance policies apply to your specific situation.",
        },
        {
          question: "Who can file a claim after a rideshare accident?",
          answer:
            "Multiple parties may have claims after a rideshare accident, including rideshare passengers, rideshare drivers, occupants of other vehicles, pedestrians, cyclists, and property owners. Each party's claim may involve different insurance policies and liability issues, requiring specialized legal knowledge to navigate properly.",
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
          question: "What evidence is important in rideshare accident cases?",
          answer:
            "Critical evidence includes the rideshare app data showing the driver's status, trip information, and location data; screenshots of the ride request; communication with the driver; witness statements; police reports; medical records; and dashcam footage if available. Our attorneys work quickly to preserve this electronic evidence before it can be lost or altered.",
        },
        {
          question: "How long do I have to file a claim after a rideshare accident?",
          answer:
            "Statutes of limitations vary by state, typically ranging from 1-3 years for personal injury claims. However, rideshare companies often have additional notification requirements in their terms of service. It's important to consult with an attorney promptly after a rideshare accident to ensure all deadlines are met and critical evidence is preserved.",
        },
      ],
    },
    "work-accidents": {
      title: "Work Accidents",
      summary:
        "Helping injured workers navigate workers' compensation claims and third-party liability cases to secure the benefits and compensation they deserve.",
      description:
        "When you're injured on the job, you need an advocate who understands both workers' compensation systems and potential third-party claims. Our work accident attorneys help injured workers secure the full range of benefits they're entitled to while identifying additional sources of compensation that may be available outside the workers' compensation system.",
      metaDescription:
        "TOP USA LAW provides expert work accident representation nationwide. Our attorneys help injured workers navigate workers' compensation claims and third-party liability cases.",
      services: [
        "Filing and management of workers' compensation claims",
        "Appeals of denied workers' compensation benefits",
        "Identification of third-party liability claims",
        "Coordination of workers' compensation and third-party cases",
        "Negotiation of lump-sum settlements",
        "Protection against employer retaliation",
      ],
      faqs: [
        {
          question: "What benefits are available through workers' compensation?",
          answer:
            "Workers' compensation typically provides medical benefits (covering all reasonable and necessary treatment), temporary disability benefits (partial wage replacement while you recover), permanent disability benefits (compensation for lasting impairments), vocational rehabilitation (training for new employment if you cannot return to your previous job), and death benefits for families of workers killed on the job. The specific benefits and amounts vary by state.",
        },
        {
          question: "Can I sue my employer for a workplace injury?",
          answer:
            "In most cases, workers' compensation is the exclusive remedy against employers, meaning you cannot sue your employer for a workplace injury even if they were negligent. However, exceptions exist for cases involving intentional harm, gross negligence in some states, lack of workers' compensation insurance, or injuries caused by toxic substances. Our attorneys can evaluate whether your case qualifies for an exception to this rule.",
        },
        {
          question: "What is a third-party liability claim?",
          answer:
            "A third-party liability claim is a personal injury lawsuit against someone other than your employer who contributed to your workplace injury. Potential third parties include equipment manufacturers, subcontractors, property owners, or drivers in work-related auto accidents. These claims allow you to seek compensation beyond workers' compensation benefits, including full lost wages and pain and suffering damages.",
        },
        {
          question: "What should I do if my workers' compensation claim is denied?",
          answer:
            "If your claim is denied, you have the right to appeal the decision. The appeals process varies by state but typically involves filing a formal appeal, attending hearings, and presenting evidence supporting your claim. Our attorneys can guide you through this process, gather necessary medical and vocational evidence, and advocate for your rights before administrative judges and review boards.",
        },
        {
          question: "Can I be fired for filing a workers' compensation claim?",
          answer:
            "It is illegal for employers to terminate employees in retaliation for filing workers' compensation claims. However, employers may still attempt to find other reasons for termination. If you believe you've been fired or faced other adverse actions because of your workers' compensation claim, our attorneys can help you pursue additional claims for wrongful termination or retaliation.",
        },
        {
          question: "How are workers' compensation attorneys paid?",
          answer:
            "Workers' compensation attorneys typically work on a contingency fee basis, with fees regulated by state law (usually between 10-25% of your recovery). In many states, attorney fees are paid from the settlement or award and must be approved by the workers' compensation board. Initial consultations are free, allowing you to understand your rights and options without financial risk.",
        },
      ],
    },
    "construction-accidents": {
      title: "Construction Accidents",
      summary:
        "Specialized representation for workers injured on construction sites, addressing the unique hazards and complex liability issues in the construction industry.",
      description:
        "Construction sites present numerous hazards and involve multiple parties, creating complex liability scenarios when accidents occur. Our construction accident attorneys understand the industry-specific regulations, safety standards, and insurance issues involved in these cases. We help injured construction workers navigate both workers' compensation claims and potential third-party liability suits to maximize their recovery.",
      metaDescription:
        "TOP USA LAW provides specialized construction accident representation nationwide. Our attorneys help injured workers secure maximum compensation for falls, equipment accidents, and other construction injuries.",
      services: [
        "Investigation of OSHA violations and safety failures",
        "Identification of all liable parties beyond the employer",
        "Coordination of workers' compensation benefits",
        "Pursuit of third-party liability claims",
        "Consultation with construction safety experts",
        "Calculation of full lifetime costs of serious injuries",
      ],
      faqs: [
        {
          question: "Who can be held liable for construction accidents?",
          answer:
            "Multiple parties may share liability in construction accidents, including general contractors, subcontractors, property owners, equipment manufacturers, architects, engineers, and material suppliers. While workers' compensation typically limits claims against your direct employer, these other parties may be held liable through third-party claims when their negligence contributes to accidents.",
        },
        {
          question: "What are the 'Fatal Four' construction accidents?",
          answer:
            "OSHA identifies the 'Fatal Four' as the most common causes of construction fatalities: falls (from heights, scaffolding, roofs, ladders), struck-by accidents (involving falling objects, vehicles, or equipment), caught-in/between accidents (trench collapses, equipment, materials), and electrocutions. These accidents account for over half of construction worker deaths and are often preventable through proper safety measures.",
        },
        {
          question: "What is the Scaffold Law and how does it affect my case?",
          answer:
            "Some states have specific laws, like New York's Scaffold Law (Labor Law 240), that provide special protections for workers injured in height-related accidents. These laws may impose absolute or strict liability on property owners and contractors for gravity-related injuries, making it easier to establish liability. Our attorneys can determine whether similar laws in your state may strengthen your construction accident claim.",
        },
        {
          question: "Can undocumented workers file construction accident claims?",
          answer:
            "Yes, undocumented workers generally have the right to file workers' compensation claims and third-party liability lawsuits after construction accidents. Courts in most states have ruled that immigration status does not bar recovery for workplace injuries. Our attorneys provide confidential consultations and understand the unique concerns undocumented workers may have when pursuing their legal rights.",
        },
        {
          question: "What compensation is available for construction accident victims?",
          answer:
            "Construction accidents often cause serious injuries requiring substantial compensation. Available recovery may include workers' compensation benefits (medical expenses, partial wage replacement, disability benefits) and, through third-party claims, additional damages such as full lost wages, pain and suffering, emotional distress, loss of quality of life, and in some cases, punitive damages against particularly negligent parties.",
        },
        {
          question: "How do OSHA violations affect my construction accident case?",
          answer:
            "OSHA violations can significantly strengthen your case by establishing negligence through the concept of 'negligence per se,' which means the violation of a safety regulation designed to prevent the type of injury that occurred creates a presumption of negligence. Our attorneys work with OSHA investigators and independent safety experts to identify and document all safety violations that contributed to your accident.",
        },
      ],
    },
    "slip-fall-injuries": {
      title: "Slip and Fall Injuries",
      summary:
        "Holding property owners accountable for dangerous conditions that cause slip, trip, and fall injuries through premises liability claims.",
      description:
        "Property owners have a legal obligation to maintain safe premises for visitors and warn of known hazards. When they fail to meet this duty, serious injuries can result. Our slip and fall attorneys help injured victims establish liability, document damages, and secure fair compensation from negligent property owners and their insurance companies.",
      metaDescription:
        "TOP USA LAW provides expert slip and fall injury representation nationwide. Our attorneys help victims of dangerous property conditions secure maximum compensation for their injuries.",
      services: [
        "Prompt investigation and documentation of dangerous conditions",
        "Identification of property ownership and management",
        "Determination of notice and liability issues",
        "Collection of maintenance records and incident reports",
        "Consultation with safety experts and medical professionals",
        "Negotiation with property insurance carriers",
      ],
      faqs: [
        {
          question: "How do I prove the property owner was responsible for my fall?",
          answer:
            "To establish liability, you generally need to prove the property owner knew or should have known about the dangerous condition, failed to fix it or warn about it, and that this negligence caused your injury. Evidence may include incident reports, surveillance footage, maintenance records, witness statements, and expert testimony about industry safety standards. Our attorneys know how to investigate and document these critical elements.",
        },
        {
          question: "What if I was partially at fault for my slip and fall?",
          answer:
            "Many states follow comparative negligence rules, allowing you to recover compensation even if you were partially at fault, though your recovery may be reduced by your percentage of fault. Some states use modified comparative negligence with a 50% or 51% threshold, while others follow contributory negligence rules. Our attorneys understand the specific rules in your jurisdiction and will work to minimize your assigned fault.",
        },
        {
          question: "What are common causes of slip and fall accidents?",
          answer:
            "Common causes include wet or slippery floors, uneven surfaces, poor lighting, missing handrails, code violations, weather-related hazards (ice and snow), spilled liquids, recently waxed floors, loose carpeting or floorboards, cluttered walkways, potholes, and cracked sidewalks. Our attorneys work with safety experts to identify all hazardous conditions that contributed to your accident.",
        },
        {
          question: "How long do I have to file a slip and fall claim?",
          answer:
            "Statutes of limitations vary by state, typically ranging from 1-3 years for personal injury claims. However, claims against government entities (for falls on public property) often have much shorter notice requirements, sometimes as little as 60-90 days. It's crucial to consult with an attorney promptly after a slip and fall to ensure all deadlines are met.",
        },
        {
          question: "What damages can I recover in a slip and fall case?",
          answer:
            "Potential compensation includes medical expenses (current and future), lost wages and diminished earning capacity, pain and suffering, emotional distress, and costs of household services you can no longer perform. In cases involving particularly egregious negligence, punitive damages may also be available. Our attorneys work with medical and economic experts to ensure all your damages are properly documented and valued.",
        },
        {
          question: "What should I do immediately after a slip and fall accident?",
          answer:
            "If possible, document the hazardous condition with photos before it's corrected, report the incident to the property owner or manager, collect contact information from witnesses, seek medical attention promptly (even for seemingly minor injuries), preserve the footwear you were wearing, and avoid giving recorded statements to insurance companies before consulting with our attorneys. These steps help preserve critical evidence for your claim.",
        },
      ],
    },
    "white-collar-crimes": {
      title: "White Collar Crimes",
      summary:
        "Strategic defense against fraud, embezzlement, and other financial and business-related criminal charges, protecting your rights, reputation, and future.",
      description:
        "White collar criminal charges carry serious consequences including imprisonment, substantial fines, and lasting damage to your professional reputation. Our white collar crime defense attorneys provide strategic, discreet representation for individuals and businesses facing investigation or prosecution for financial and business-related offenses.",
      metaDescription:
        "TOP USA LAW provides expert white collar crime defense nationwide. Our attorneys defend against fraud, embezzlement, and other financial criminal charges with strategic, discreet representation.",
      services: [
        "Early intervention during investigations",
        "Strategic negotiation with prosecutors",
        "Thorough analysis of financial evidence",
        "Challenge to search and seizure procedures",
        "Development of effective defense strategies",
        "Representation throughout trial and sentencing",
      ],
      faqs: [
        {
          question: "What are common types of white collar criminal charges?",
          answer:
            "Common white collar charges include fraud (mail, wire, securities, healthcare, insurance, mortgage), embezzlement, money laundering, tax evasion, insider trading, bribery and corruption, identity theft, forgery, counterfeiting, RICO violations, and computer/internet crimes. Each charge involves specific elements that prosecutors must prove, creating opportunities for strategic defense.",
        },
        {
          question: "What should I do if I'm under investigation for a white collar crime?",
          answer:
            "If you suspect you're under investigation, it's crucial to consult with an attorney before speaking with investigators or prosecutors. Do not destroy documents or electronic data, as this could lead to additional obstruction charges. Your attorney can help you understand your rights, evaluate the allegations, communicate with authorities on your behalf, and develop a proactive defense strategy.",
        },
        {
          question: "What penalties do white collar crimes carry?",
          answer:
            "Penalties vary based on the specific offense, amount of alleged loss, defendant's role and criminal history, and jurisdiction (state vs. federal). They may include substantial prison time (sometimes decades for serious offenses), heavy fines, restitution, asset forfeiture, probation, and collateral consequences like professional license revocation and reputation damage. Federal sentencing guidelines often recommend significant incarceration for financial crimes.",
        },
        {
          question: "How can an attorney help in a white collar criminal case?",
          answer:
            "Our attorneys can intervene early in investigations to potentially prevent charges, challenge the admissibility of evidence obtained through improper searches or seizures, identify weaknesses in the prosecution's case, negotiate favorable plea agreements when appropriate, develop compelling defense narratives, work with forensic accountants and other experts, and advocate for minimal penalties if conviction occurs.",
        },
        {
          question: "Are white collar cases typically tried in state or federal court?",
          answer:
            "While both state and federal prosecutors handle white collar cases, many financial crimes are prosecuted federally, especially those involving interstate commerce, federal programs, or financial institutions. Federal cases typically involve more resources, sophisticated prosecution teams, and potentially harsher penalties, making experienced federal defense representation essential.",
        },
        {
          question: "What defenses are available in white collar criminal cases?",
          answer:
            "Potential defenses include lack of intent (good faith mistake rather than criminal intent), absence of knowledge about the illegal activity, authorization (belief that actions were approved), entrapment, duress, statute of limitations expiration, constitutional violations in evidence gathering, and procedural defenses. Our attorneys evaluate your specific circumstances to identify the most effective defense strategies.",
        },
      ],
    },
    "immigration-law": {
      title: "Immigration Law",
      summary:
        "Comprehensive immigration services including visas, green cards, citizenship, and deportation defense, helping individuals and families navigate the complex U.S. immigration system.",
      description:
        "The U.S. immigration system is notoriously complex and constantly changing. Our immigration attorneys provide knowledgeable guidance through all types of immigration matters, from family-based petitions and employment visas to deportation defense and citizenship applications. We help clients understand their options and pursue the most appropriate path to achieve their immigration goals.",
      metaDescription:
        "TOP USA LAW provides comprehensive immigration law services nationwide. Our attorneys help with visas, green cards, citizenship, deportation defense, and all immigration matters.",
      services: [
        "Family-based immigration petitions",
        "Employment-based visas and green cards",
        "Deportation and removal defense",
        "Asylum and refugee applications",
        "Citizenship and naturalization",
        "DACA, TPS, and humanitarian relief",
      ],
      faqs: [
        {
          question: "How can I bring my family members to the United States?",
          answer:
            "U.S. citizens can petition for spouses, children, parents, and siblings, while permanent residents can petition for spouses and unmarried children. The process typically involves filing Form I-130 (Petition for Alien Relative), waiting for approval, then having the relative apply for an immigrant visa or adjustment of status. Wait times vary significantly based on the relationship and the relative's country of origin, with some categories experiencing backlogs of many years.",
        },
        {
          question: "What options do I have to work legally in the United States?",
          answer:
            "Employment-based immigration options include temporary work visas (such as H-1B for specialty occupations, L-1 for intracompany transfers, O-1 for extraordinary ability) and permanent employment-based green cards (requiring labor certification for most categories). Other possibilities include investment visas (E-2, EB-5), treaty trader/investor visas (E-1/E-2), and self-petition options for individuals with extraordinary abilities or whose work serves the national interest.",
        },
        {
          question: "What should I do if I receive a Notice to Appear in immigration court?",
          answer:
            "A Notice to Appear (NTA) initiates removal proceedings and requires prompt action. You should immediately consult with an immigration attorney who can explain the charges against you, help you understand your rights, identify potential relief from removal (such as asylum, cancellation of removal, adjustment of status, or voluntary departure), and represent you in immigration court proceedings.",
        },
        {
          question: "How can I apply for asylum in the United States?",
          answer:
            "Asylum is available to individuals who have suffered persecution or have a well-founded fear of persecution in their home country based on race, religion, nationality, membership in a particular social group, or political opinion. Applications must generally be filed within one year of entering the U.S. The process involves submitting Form I-589, attending an interview or court hearing, and providing evidence of persecution. Our attorneys can help document your claim and prepare you for this complex process.",
        },
        {
          question: "What are the requirements for naturalization?",
          answer:
            "To become a U.S. citizen through naturalization, you typically must be a permanent resident for 5 years (3 years if married to a U.S. citizen), demonstrate continuous residence and physical presence, show good moral character, pass English and civics tests, and demonstrate attachment to the U.S. Constitution. Certain exemptions and accommodations are available for older applicants and those with disabilities. Our attorneys can assess your eligibility and guide you through the application process.",
        },
        {
          question: "How do recent immigration policy changes affect my case?",
          answer:
            "Immigration policies frequently change with presidential administrations and court decisions. These changes can affect enforcement priorities, application processing, available relief, and interpretation of immigration laws. Our attorneys stay current on all policy developments and can explain how specific changes might impact your case, helping you navigate this constantly evolving legal landscape.",
        },
      ],
    },
    "class-actions": {
      title: "Class Actions",
      summary:
        "Representing groups of individuals harmed by the same corporate misconduct or defective products, leveraging collective power to seek justice and compensation.",
      description:
        "Class action lawsuits allow individuals who have suffered similar harms to join together in a single legal action against powerful corporations or institutions. Our class action attorneys have the experience and resources to handle complex litigation against major companies, helping groups of injured parties secure compensation and hold wrongdoers accountable for widespread misconduct.",
      metaDescription:
        "TOP USA LAW handles class action lawsuits nationwide. Our attorneys represent groups harmed by corporate misconduct, defective products, and consumer fraud.",
      services: [
        "Evaluation of potential class action claims",
        "Class certification proceedings",
        "Discovery of corporate documents and practices",
        "Expert consultation and testimony",
        "Settlement negotiations and approval",
        "Trial representation when necessary",
      ],
      faqs: [
        {
          question: "What types of cases are appropriate for class actions?",
          answer:
            "Class actions are appropriate when many people have suffered similar harm from the same conduct, individual claims would be too small to litigate economically, and common questions of law and fact predominate. Common types include consumer fraud, defective products, securities fraud, employment discrimination, wage and hour violations, data breaches, environmental contamination, and antitrust violations.",
        },
        {
          question: "How does a class action lawsuit work?",
          answer:
            "Class actions begin with a complaint filed by one or more 'class representatives' on behalf of a proposed class. The court must then certify the class, determining that it meets requirements for numerosity, commonality, typicality, and adequate representation. If certified, notice is provided to class members, who may opt out if desired. The case then proceeds through discovery, potential settlement negotiations, and trial if necessary, with any recovery distributed among class members.",
        },
        {
          question: "What is the role of a class representative?",
          answer:
            "Class representatives (or 'named plaintiffs') file the lawsuit on behalf of all similarly situated individuals. They work closely with attorneys, participate in discovery, may provide testimony, and represent the interests of the entire class. In return for their more active role, they may receive an 'incentive award' in addition to their share of any class recovery, though this must be approved by the court.",
        },
        {
          question: "How much does it cost to participate in a class action?",
          answer:
            "Class members typically incur no out-of-pocket costs. Class action attorneys work on a contingency fee basis, with fees and litigation expenses paid from the recovery and subject to court approval. Class representatives also generally don't pay costs upfront. This structure allows individuals to pursue claims that would be economically unfeasible individually and aligns the attorneys' interests with maximizing class recovery.",
        },
        {
          question: "What is the difference between opting out and doing nothing?",
          answer:
            "If you receive notice of a class action and do nothing, you remain in the class, will be bound by the outcome (settlement or judgment), and can receive your share of any recovery. If you opt out, you preserve your right to file an individual lawsuit but receive no benefits from the class action. Opting out may be advisable if you have significant damages that warrant individual representation.",
        },
        {
          question: "How are class action settlements distributed?",
          answer:
            "Class action settlements establish a fund that is distributed to class members according to a court-approved plan. Distribution methods vary based on case type and available records. Some use simple equal payments, while others calculate individual amounts based on purchase records, extent of harm, or other factors. Claims administrators handle the distribution process, which may require class members to submit claim forms or may be automatic if records exist.",
        },
      ],
    },
  }

  return practiceAreas[slug as keyof typeof practiceAreas]
}

