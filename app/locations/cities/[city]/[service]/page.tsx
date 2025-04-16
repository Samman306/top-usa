import ServicePageClient from "./ServicePageClient"

type Props = {
  params: { value: string }
}

export default function ServicePage({ params }: Props) {
  return <ServicePageClient params={params} />
}
