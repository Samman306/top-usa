import Image from "next/image"
import { cn } from "@/lib/utils"

interface CaseResultCardProps {
  amount: string
  title: string
  description: string
  image?: string
  className?: string
}

export function CaseResultCard({
  amount,
  title,
  description,
  image = "/placeholder.svg?height=400&width=600",
  className,
}: CaseResultCardProps) {
  return (
    <div
      className={cn("bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow", className)}
    >
      <div className="relative h-40">
        <Image
          src={image || "/images/case-results-placeholder.jpg"}
          alt={`${title} case result - $${amount} recovery for client represented by Meridian Law Group`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-4xl md:text-5xl font-bold text-white">${amount}</div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
