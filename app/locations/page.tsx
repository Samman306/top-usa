import type { Metadata } from "next"
import LocationsPageClient from "./LocationsPageClient"

export const metadata: Metadata = {
  title: "Our Locations | Nationwide Legal Services | TOP USA LAW",
  description:
    "TOP USA LAW provides expert legal services across all 50 states. Find an experienced attorney in your state and city today.",
}

export default function LocationsPage() {
  return <LocationsPageClient />
}
