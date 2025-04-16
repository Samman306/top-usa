import type { Metadata } from "next"
import { getStateBySlug, statesList } from "@/lib/states-data"
import { notFound } from "next/navigation"
import StatePageClient from "./StatePageClient"
import { unslugifyAndUCWords } from "@/lib/url-utils"

type Props = {
  params: { state: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const state = getStateBySlug(params.state)
  const stateName = unslugifyAndUCWords(params.state)

  if (!state) {
    return {
      title: "State Not Found | TOP USA LAW",
    }
  }

  return {
    title: `Legal Services in ${stateName} | TOP USA LAW`,
    description: `TOP USA LAW provides expert legal services throughout ${stateName}. Our experienced attorneys serve all major cities and communities across the state.`,
  }
}

// Ensure we're generating all state pages
export async function generateStaticParams() {
  return statesList.map((state) => ({
    state: state.slug,
  }))
}

export default function StatePage({ params }: Props) {
  const state = getStateBySlug(params.state)

  if (!state) {
    notFound()
  }

  return <StatePageClient params={params} />
}
