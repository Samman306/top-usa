import type { Metadata } from "next"
import { Suspense } from "react"
import StatePageContent from "./StatePageContent"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Locations | Nationwide Legal Services | TOP USA LAW",
  description:
    "TOP USA LAW provides expert legal services across all 50 states. Find an experienced attorney in your state and city today.",
}

export default function LocationsPage() {
  return (
    <main className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<LocationsLoading />}>
          <StatePageContent />
        </Suspense>
      </div>
      <section className="py-12 md:py-16 bg-gray-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find Your Location?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Even if your specific city isn't listed, we can still help. Our attorneys are licensed to practice
            throughout each state and can provide remote consultations.
          </p>
          <Button 
            size="lg" 
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold" 
            asChild
          >
            <Link href="/contact">
              Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button> 
        </div>
      </section>
    </main>
  )
}

function LocationsLoading() {
  return (
    <div className="w-full flex flex-col items-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-400 mb-4"></div>
      <p className="text-white">Loading locations...</p>
    </div>
  )
}
