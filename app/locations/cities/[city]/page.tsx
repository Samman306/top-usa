import { findCityState } from "@/lib/states-data"
import CityPageClient from "./CityPageClient"
import type { Metadata } from "next"
import { statesList, getTopCitiesByState } from "@/lib/states-data"

type Props = {
  params: { city: string }
}

// Add this to the top of the file for metadata generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // For simplicity, we'll just use the city slug directly
  // In a real implementation, you would look up the city in a database
  const { city, state } = findCityState(params.city)

  if (!city || !state) {
    return {
      title: "Location Not Found | TOP USA LAW",
    }
  }

  return {
    title: `Legal Services in ${city.name}, ${state.name} | TOP USA LAW`,
    description: `TOP USA LAW provides expert legal services in ${city.name}, ${state.name}. Our experienced attorneys offer comprehensive legal representation for personal injury, car accidents, and more.`,
  }
}

// Update the generateStaticParams function to include more cities
export async function generateStaticParams() {
  // Get all cities from all states
  const allCities: { city: string }[] = []

  statesList.forEach((state) => {
    const cities = getTopCitiesByState(state.abbreviation)
    cities.forEach((city) => {
      allCities.push({ city: city.slug })
    })
  })

  return allCities
}

export default function CityPage({ params }: Props) {
  return <CityPageClient params={params} />
}
