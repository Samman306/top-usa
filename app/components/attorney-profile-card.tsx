import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface AttorneyProfileCardProps {
  name: string
  title: string
  image: string
  bio: string
  slug?: string
  className?: string
}

export function AttorneyProfileCard({ name, title, image, bio, slug, className }: AttorneyProfileCardProps) {
  return (
    <div
      className={cn("bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow", className)}
    >
      <div className="relative h-80">
        <Image
          src={image || "/images/placeholder-attorney.jpg"}
          alt={`Attorney ${name} - ${title} at Meridian Law Group with ${bio.split(".")[0]}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-primary font-medium mb-3">{title}</p>
        <p className="text-muted-foreground mb-4">{bio}</p>
        {slug && (
          <Button variant="outline" size="sm" className="w-full" asChild>
            <Link href={`/attorneys/${slug}`}>View Full Profile</Link>
          </Button>
        )}
      </div>
    </div>
  )
}
