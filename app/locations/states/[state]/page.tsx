import type { Metadata } from "next"
import { getStateBySlug, statesList } from "@/lib/states-data"
import { notFound } from "next/navigation"
import StatePageClient from "./StatePageClient"

type Props = {
  params: { state: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const state = getStateBySlug(params.state)

  if (!state) {
    return {
      title: "State Not Found | TOP USA LAW",
    }
  }

  return {
    title: `Legal Services in ${state.name} | TOP USA LAW`,
    description: `TOP USA LAW provides expert legal services throughout ${state.name}. Our experienced attorneys serve all major cities and communities across the state.`,
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
