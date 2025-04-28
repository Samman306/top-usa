import { explode, slugify, slugifyRevert } from "camote-utils"
import ServicePageClient from "./ServicePageClient"

type Props = {
  params: { city: string, service: string }
}

export default function ServicePage({ params }: Props) {
  const city = explode(params?.city, '.')
  const decodedCity = decodeURIComponent(city[1] || '')
  const stateInfo = slugifyRevert(city[0]) || ''


  // Explicitly extract and pass the parameters to the client component
  return <ServicePageClient stateInfo={{
    name: stateInfo,
    slug: slugify(stateInfo)
  }}  city={decodedCity} service={params.service} />
}
