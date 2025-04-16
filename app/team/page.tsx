import type { Metadata } from "next"
import TeamPageClient from "./TeamPageClient"

export const metadata: Metadata = {
  title: "Celebrity Attorneys | TOP USA LAW",
  description:
    "Meet the elite attorneys behind America's biggest celebrities and influencers. Our legal team has represented clients with a combined social reach of over 100 million followers.",
}

export default function TeamPage() {
  return (
    <>
      <TeamPageClient />
    </>
  )
}
