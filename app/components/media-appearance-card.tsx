import Image from "next/image"
import { cn } from "@/lib/utils"

interface MediaAppearanceCardProps {
  image: string
  title: string
  description: string
  link?: string
  className?: string
}

export function MediaAppearanceCard({ image, title, description, link, className }: MediaAppearanceCardProps) {
  return (
    <div className={cn("bg-background rounded-lg overflow-hidden shadow-md", className)}>
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={`${title} - Media Appearance`} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline mt-3 inline-block"
          >
            Watch Video
          </a>
        )}
      </div>
    </div>
  )
}

