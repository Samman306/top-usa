import { Skeleton } from "@/components/ui/skeleton"

export default function LocationLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section Skeleton */}
      <div className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-full mb-6" />
            <div className="space-y-4 mb-6">
              <Skeleton className="h-5 w-64" />
              <Skeleton className="h-5 w-56" />
              <Skeleton className="h-5 w-72" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-48" />
            </div>
          </div>
          <Skeleton className="h-64 md:h-96 rounded-lg" />
        </div>
      </div>

      {/* Local Information Section Skeleton */}
      <div className="mb-16">
        <Skeleton className="h-10 w-64 mb-6" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
          <div>
            <Skeleton className="h-8 w-64 mb-4" />
            <div className="space-y-3">
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section Skeleton */}
      <div className="mb-16">
        <Skeleton className="h-10 w-64 mb-6" />
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="border rounded-lg overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <div className="p-4">
                <Skeleton className="h-6 w-32 mb-4" />
                <Skeleton className="h-16 w-full mb-4" />
                <Skeleton className="h-5 w-32" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section Skeleton */}
      <div className="mb-16">
        <Skeleton className="h-10 w-64 mb-6" />
        <div className="space-y-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg">
              <Skeleton className="h-7 w-3/4 mb-2" />
              <Skeleton className="h-20 w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section Skeleton */}
      <div className="bg-teal-50 p-8 rounded-lg">
        <div className="text-center max-w-3xl mx-auto">
          <Skeleton className="h-10 w-2/3 mx-auto mb-4" />
          <Skeleton className="h-6 w-3/4 mx-auto mb-6" />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Skeleton className="h-12 w-32 mx-auto sm:mx-0" />
            <Skeleton className="h-12 w-32 mx-auto sm:mx-0" />
          </div>
        </div>
      </div>
    </div>
  )
}
