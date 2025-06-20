import Image from "next/image"
import { cn } from "@/lib/utils"

interface AwardBadgeProps {
  image: string
  alt: string
  title: string
  className?: string
}

export function AwardBadge({ image, alt, title, className }: AwardBadgeProps) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative h-32 w-32 mb-4">
        <Image src={image || "/placeholder.svg"} alt={alt} fill className="object-contain" />
      </div>
      <p className="font-bold text-center">{title}</p>
    </div>
  )
}

