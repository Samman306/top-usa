import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Car, Truck, Briefcase, HardHat, Building, Scale, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Practice Areas | TOP USA LAW",
  description:
    "Explore TOP USA LAW's practice areas including personal injury, car accidents, truck accidents, and more.",
}

export default function PracticeAreasPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Practice Areas</h1>

      <div className="mb-8">
        <p className="text-lg mb-4">
          TOP USA LAW provides expert legal representation across a wide range of practice areas. Our experienced
          attorneys are dedicated to fighting for your rights and securing the compensation you deserve.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Personal Injury",
            icon: <Shield className="h-10 w-10 text-yellow-500" aria-label="Personal Injury services icon" />,
            description:
              "Comprehensive legal representation for victims of accidents and injuries caused by negligence.",
            link: "/practice-areas/personal-injury",
          },
          {
            title: "Car Accidents",
            icon: <Car className="h-10 w-10 text-yellow-500" aria-label="Car Accidents services icon" />,
            description: "Expert representation for victims of automobile accidents to secure maximum compensation.",
            link: "/practice-areas/car-accidents",
          },
          {
            title: "Truck Accidents",
            icon: <Truck className="h-10 w-10 text-yellow-500" aria-label="Truck Accidents services icon" />,
            description: "Specialized legal support for victims of commercial truck and 18-wheeler accidents.",
            link: "/practice-areas/truck-accidents",
          },
          {
            title: "Work Accidents",
            icon: <Briefcase className="h-10 w-10 text-yellow-500" aria-label="Work Accidents services icon" />,
            description:
              "Helping injured workers navigate workers' compensation claims and third-party liability cases.",
            link: "/practice-areas/work-accidents",
          },
          {
            title: "Construction Accidents",
            icon: <HardHat className="h-10 w-10 text-yellow-500" aria-label="Construction Accidents services icon" />,
            description:
              "Specialized representation for workers injured on construction sites and in building-related accidents.",
            link: "/practice-areas/construction-accidents",
          },
          {
            title: "Slip and Fall Accidents",
            icon: <Building className="h-10 w-10 text-yellow-500" aria-label="Slip and Fall Accidents services icon" />,
            description:
              "Holding property owners accountable for dangerous conditions that cause slip, trip, and fall injuries.",
            link: "/practice-areas/slip-fall-injuries",
          },
          {
            title: "Immigration Law",
            icon: <Scale className="h-10 w-10 text-yellow-500" aria-label="Immigration Law services icon" />,
            description:
              "Comprehensive immigration services including visas, green cards, citizenship, and deportation defense.",
            link: "/practice-areas/immigration-law",
          },
          {
            title: "Class Actions",
            icon: <Users className="h-10 w-10 text-yellow-500" aria-label="Class Actions services icon" />,
            description:
              "Representing groups of individuals harmed by the same corporate misconduct or defective products.",
            link: "/practice-areas/class-actions",
          },
        ].map((area) => (
          <div key={area.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="mb-4">{area.icon}</div>
            <h2 className="text-2xl font-bold mb-2">{area.title}</h2>
            <p className="text-gray-600 mb-4">{area.description}</p>
            <Link href={area.link} className="inline-flex items-center text-yellow-600 font-medium hover:underline">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
