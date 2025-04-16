import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Shield, Award, Car, Truck, Building, HardHat, Briefcase, Scale, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"

export const metadata: Metadata = {
  title: "TOP USA LAW | Expert Legal Representation",
  description:
    "TOP USA LAW provides expert legal representation for personal injury, car accidents, truck accidents, work injuries, and more. Free consultation available.",
}

export default function Home() {
  return (
    <>
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <ClientShutterstockImage
            query="law office"
            alt="Professional law office"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="container relative z-20">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-yellow-500/10 px-3 py-1 rounded-full text-yellow-500 text-sm font-medium mb-2">
                <Award className="h-4 w-4 mr-1" /> TOP-RATED LEGAL REPRESENTATION
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                FIGHTING FOR <span className="text-yellow-500">YOUR RIGHTS</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Expert legal representation for personal injury, accidents, white collar crimes, immigration, and class
                actions.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center bg-gray-800/80 px-4 py-2 rounded-lg">
                  <Award className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="text-sm text-white">Top-Rated Attorneys</span>
                </div>
                <div className="flex items-center bg-gray-800/80 px-4 py-2 rounded-lg">
                  <Shield className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="text-sm text-white">Millions Recovered</span>
                </div>
                <div className="flex items-center bg-gray-800/80 px-4 py-2 rounded-lg">
                  <Scale className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="text-sm text-white">No Fee Unless We Win</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold bg-yellow-500 hover:bg-yellow-600 text-black h-11 px-8 py-2"
                >
                  FREE CONSULTATION <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/practice-areas"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 h-11 px-8 py-2"
                >
                  Our Services
                </Link>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl border-2 border-yellow-500/20">
              <ClientShutterstockImage
                query="professional law office with clients"
                alt="Professional law office"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Award key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="ml-2 text-white text-sm">5.0 (1,200+ reviews)</span>
                </div>
                <p className="text-white text-lg font-medium">
                  "TOP USA LAW fought for me when no one else would. They got me the compensation I deserved."
                </p>
                <p className="text-gray-300 mt-2">- Satisfied Client</p>
              </div>
            </div>
          </div>

          {/* Trusted by logos */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-center text-gray-400 mb-6 text-sm uppercase tracking-wider">As featured in</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {["Forbes", "CNN", "USA Today", "The New York Times", "Bloomberg"].map((brand) => (
                <div key={brand} className="text-white font-bold text-xl">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">
              OUR <span className="text-yellow-500">LEGAL SERVICES</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide expert legal representation across a wide range of practice areas to help you get the justice
              and compensation you deserve.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                description:
                  "Expert representation for victims of automobile accidents to secure maximum compensation.",
                link: "/practice-areas/car-accidents",
              },
              {
                title: "Truck Accidents",
                icon: <Truck className="h-10 w-10 text-yellow-500" aria-label="Truck Accidents services icon" />,
                description: "Specialized legal support for victims of commercial truck and 18-wheeler accidents.",
                link: "/practice-areas/truck-accidents",
              },
              {
                title: "Uber and Lyft Accidents",
                icon: <Car className="h-10 w-10 text-yellow-500" aria-label="Rideshare Accidents services icon" />,
                description:
                  "Dedicated representation for passengers, drivers, and others injured in rideshare accidents.",
                link: "/practice-areas/uber-lyft-accidents",
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
                icon: (
                  <HardHat className="h-10 w-10 text-yellow-500" aria-label="Construction Accidents services icon" />
                ),
                description:
                  "Specialized representation for workers injured on construction sites and in building-related accidents.",
                link: "/practice-areas/construction-accidents",
              },
              {
                title: "Slip and Fall Accidents",
                icon: (
                  <Building className="h-10 w-10 text-yellow-500" aria-label="Slip and Fall Accidents services icon" />
                ),
                description:
                  "Holding property owners accountable for dangerous conditions that cause slip, trip, and fall injuries.",
                link: "/practice-areas/slip-fall-injuries",
              },
              {
                title: "White Collar Crimes",
                icon: (
                  <Briefcase className="h-10 w-10 text-yellow-500" aria-label="White Collar Crimes services icon" />
                ),
                description:
                  "Strategic defense against fraud, embezzlement, and other financial and business-related criminal charges.",
                link: "/practice-areas/white-collar-crimes",
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
            ].map((area, index) => (
              <Card
                key={index}
                className="group transition-all hover:shadow-md bg-gray-800 border-gray-700 hover:border-yellow-500/50"
              >
                <CardHeader>
                  <div className="mb-2">{area.icon}</div>
                  <CardTitle className="text-white text-2xl">{area.title}</CardTitle>
                  <CardDescription className="text-gray-400">{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={area.link}
                    className="text-yellow-500 font-medium group-hover:underline inline-flex items-center"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/nationwide-coverage"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 h-11 px-8 py-2 mr-4"
            >
              View Nationwide Coverage <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/practice-areas"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 h-11 px-8 py-2"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-yellow-500 text-black">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">WHY CHOOSE TOP USA LAW</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We're committed to fighting for your rights and securing the compensation you deserve. Our experienced
            attorneys provide personalized attention to every case.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold bg-black hover:bg-gray-900 text-white h-11 px-8 py-2"
          >
            Schedule Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
