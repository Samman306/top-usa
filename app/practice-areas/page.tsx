import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Car, Truck, Building, HardHat, Briefcase, Scale, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Practice Areas | TOP USA LAW",
  description:
    "Explore TOP USA LAW's comprehensive legal services including personal injury, car accidents, truck accidents, work injuries, and more across all 50 states.",
}

export default function PracticeAreasPage() {
  const practiceAreas = [
    {
      title: "Personal Injury",
      slug: "personal-injury",
      description: "Comprehensive legal representation for victims of accidents and injuries caused by negligence.",
      icon: <Shield className="h-10 w-10 text-yellow-500" aria-label="Personal Injury services icon" />,
      details: [
        "Catastrophic Injuries",
        "Traumatic Brain Injuries",
        "Spinal Cord Injuries",
        "Burn Injuries",
        "Wrongful Death",
        "Medical Malpractice",
      ],
    },
    {
      title: "Car Accidents",
      slug: "car-accidents",
      description: "Expert representation for victims of automobile accidents to secure maximum compensation.",
      icon: <Car className="h-10 w-10 text-yellow-500" aria-label="Car Accidents services icon" />,
      details: [
        "Head-On Collisions",
        "Rear-End Accidents",
        "T-Bone Accidents",
        "Multi-Vehicle Crashes",
        "Drunk Driving Accidents",
        "Distracted Driving Accidents",
      ],
    },
    {
      title: "Truck Accidents",
      slug: "truck-accidents",
      description: "Specialized legal support for victims of commercial truck and 18-wheeler accidents.",
      icon: <Truck className="h-10 w-10 text-yellow-500" aria-label="Truck Accidents services icon" />,
      details: [
        "18-Wheeler Accidents",
        "Delivery Truck Crashes",
        "Tanker Truck Accidents",
        "Logging Truck Accidents",
        "Underride Accidents",
        "Jackknife Accidents",
      ],
    },
    {
      title: "Uber and Lyft Accidents",
      slug: "uber-lyft-accidents",
      description: "Dedicated representation for passengers, drivers, and others injured in rideshare accidents.",
      icon: <Car className="h-10 w-10 text-yellow-500" aria-label="Rideshare Accidents services icon" />,
      details: [
        "Passenger Injuries",
        "Rideshare Driver Injuries",
        "Third-Party Vehicle Accidents",
        "Pedestrian Accidents",
        "Insurance Coverage Disputes",
        "App-On/App-Off Issues",
      ],
    },
    {
      title: "Work Accidents",
      slug: "work-accidents",
      description: "Helping injured workers navigate workers' compensation claims and third-party liability cases.",
      icon: <Briefcase className="h-10 w-10 text-yellow-500" aria-label="Work Accidents services icon" />,
      details: [
        "Workers' Compensation Claims",
        "Third-Party Liability Cases",
        "Machinery Accidents",
        "Toxic Exposure",
        "Repetitive Stress Injuries",
        "Workplace Falls",
      ],
    },
    {
      title: "Construction Accidents",
      slug: "construction-accidents",
      description:
        "Specialized representation for workers injured on construction sites and in building-related accidents.",
      icon: <HardHat className="h-10 w-10 text-yellow-500" aria-label="Construction Accidents services icon" />,
      details: [
        "Falls from Heights",
        "Scaffold Accidents",
        "Electrical Accidents",
        "Trench Collapses",
        "Equipment Malfunctions",
        "Struck-by Accidents",
      ],
    },
    {
      title: "Slip and Fall Injuries",
      slug: "slip-fall-injuries",
      description:
        "Holding property owners accountable for dangerous conditions that cause slip, trip, and fall injuries.",
      icon: <Building className="h-10 w-10 text-yellow-500" aria-label="Slip and Fall Injuries services icon" />,
      details: [
        "Wet Floor Accidents",
        "Uneven Surface Falls",
        "Inadequate Lighting Falls",
        "Staircase Accidents",
        "Parking Lot Falls",
        "Snow and Ice Accidents",
      ],
    },
    {
      title: "White Collar Crimes",
      slug: "white-collar-crimes",
      description:
        "Strategic defense against fraud, embezzlement, and other financial and business-related criminal charges.",
      icon: <Briefcase className="h-10 w-10 text-yellow-500" aria-label="White Collar Crimes services icon" />,
      details: [
        "Fraud Charges",
        "Embezzlement",
        "Money Laundering",
        "Tax Evasion",
        "Securities Fraud",
        "Identity Theft",
      ],
    },
    {
      title: "Immigration Law",
      slug: "immigration-law",
      description:
        "Comprehensive immigration services including visas, green cards, citizenship, and deportation defense.",
      icon: <Scale className="h-10 w-10 text-yellow-500" aria-label="Immigration Law services icon" />,
      details: [
        "Family-Based Immigration",
        "Employment-Based Immigration",
        "Deportation Defense",
        "Asylum Applications",
        "Citizenship & Naturalization",
        "DACA & TPS",
      ],
    },
    {
      title: "Class Actions",
      slug: "class-actions",
      description: "Representing groups of individuals harmed by the same corporate misconduct or defective products.",
      icon: <Users className="h-10 w-10 text-yellow-500" aria-label="Class Actions services icon" />,
      details: [
        "Consumer Protection",
        "Defective Products",
        "Pharmaceutical Litigation",
        "Environmental Contamination",
        "Securities Fraud",
        "Employment Discrimination",
      ],
    },
  ]

  return (
    <>
      <section className="bg-black text-white py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Practice Areas</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            TOP USA LAW offers comprehensive legal services across all 50 states. Our experienced attorneys provide
            tailored solutions for your specific legal needs.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, index) => (
              <Card
                key={index}
                className="h-full bg-gray-800 border-gray-700 hover:border-yellow-500/50 transition-colors"
              >
                <CardHeader>
                  <div className="mb-2">{area.icon}</div>
                  <CardTitle className="text-2xl text-white">{area.title}</CardTitle>
                  <CardDescription className="text-base text-gray-400">{area.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {area.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link
                      href={`/practice-areas/${area.slug}`}
                      className="text-yellow-500 font-medium hover:underline inline-flex items-center"
                    >
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nationwide Legal Representation</h2>
              <p className="text-gray-300 mb-4">
                TOP USA LAW provides expert legal services across all 50 states, with specialized knowledge of local
                laws and regulations in each jurisdiction.
              </p>
              <p className="text-gray-300 mb-4">
                Our network of experienced attorneys covers the top 100 cities in each state, ensuring you have access
                to high-quality legal representation no matter where you're located.
              </p>
              <p className="text-gray-300 mb-4">
                Each location page features unique content with specific data points about local accident statistics,
                legal regulations, court systems, and recovery outcomes to help you understand the legal landscape in
                your area.
              </p>
              <Link href="/locations" className="text-yellow-500 font-medium hover:underline inline-flex items-center">
                Find Your Location <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-700">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Map of the United States showing TOP USA LAW's nationwide coverage"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-yellow-500 text-black">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Need Legal Assistance?</h2>
          <p className="text-black/90 max-w-2xl mx-auto mb-8">
            Our team can help determine the best legal approach for your situation. Contact us for a free consultation
            and we'll guide you in the right direction.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold bg-black hover:bg-gray-900 text-white border border-black h-11 px-8 py-2"
          >
            Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}

