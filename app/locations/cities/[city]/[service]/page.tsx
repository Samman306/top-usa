import type { Metadata } from "next"
import { statesList, getTopCitiesByState, findCityState } from "@/lib/states-data"
import ServicePageClient from "./ServicePageClient"
import { notFound } from "next/navigation"

type Props = {
  params: { city: string; service: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city, state } = findCityState(params.city)

  if (!city || !state) {
    return {
      title: "Service Not Found | TOP USA LAW",
    }
  }

  // Format service name for display
  const serviceName = params.service
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return {
    title: `${serviceName} Attorneys in ${city.name}, ${state.name} | TOP USA LAW`,
    description: `TOP USA LAW provides expert ${serviceName.toLowerCase()} legal services in ${city.name}, ${state.name}. Our experienced attorneys offer comprehensive legal representation tailored to your needs.`,
  }
}

export async function generateStaticParams() {
  const paths: { city: string; service: string }[] = []
  const services = [
    "personal-injury",
    "car-accidents",
    "truck-accidents",
    "uber-lyft-accidents",
    "work-accidents",
    "construction-accidents",
    "slip-fall-injuries",
    "white-collar-crimes",
    "immigration-law",
    "class-actions",
  ]

  // For each state, get the top cities
  statesList.forEach((state) => {
    const cities = getTopCitiesByState(state.abbreviation)
    // For each city, create a path for each service
    cities.forEach((city) => {
      services.forEach((service) => {
        paths.push({
          city: city.slug,
          service: service,
        })
      })
    })
  })

  return paths
}

export default function ServicePage({ params }: Props) {
  const { city, state } = findCityState(params.city)

  // Check if city or state is not found
  if (!city || !state) {
    notFound()
  }

  // Check if service is valid
  const validServices = [
    "personal-injury",
    "car-accidents",
    "truck-accidents",
    "uber-lyft-accidents",
    "work-accidents",
    "construction-accidents",
    "slip-fall-injuries",
    "white-collar-crimes",
    "immigration-law",
    "class-actions",
  ]

  if (!validServices.includes(params.service)) {
    notFound()
  }

  return <ServicePageClient params={params} />
}

