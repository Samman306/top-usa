import type { Metadata } from "next"
import StatePageContent from "./StatePageContent"
import { slugifyRevert } from "camote-utils"

type Props = {
  params: { state: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const stateSlug = params.state
  const stateName = slugifyRevert(stateSlug)

  return {
    title: `${stateName} Legal Services | TOP USA LAW`,
    description: `Expert legal representation throughout ${stateName}. Our attorneys understand local laws and courts to provide you with the best possible legal service.`,
    openGraph: {
      title: `${stateName} Legal Services | TOP USA LAW`,
      description: `Expert legal representation throughout ${stateName}. Our attorneys understand local laws and courts to provide you with the best possible legal service.`,
      url: `https://topusalaw.com/locations/states/${stateSlug}`,
      siteName: "TOP USA LAW",
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: `https://topusalaw.com/locations/states/${stateSlug}`,
    },
  }
}

export default function StatePage({ params }: Props) {
  return (
    <main>
      <StatePageContent />
    </main>
  )
}
