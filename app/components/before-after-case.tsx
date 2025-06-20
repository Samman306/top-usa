import Image from "next/image"
import { cn } from "@/lib/utils"

interface BeforeAfterCaseProps {
  title: string
  before: {
    image: string
    text: string
  }
  after: {
    image: string
    text: string
  }
  className?: string
}

export function BeforeAfterCase({ title, before, after, className }: BeforeAfterCaseProps) {
  return (
    <div className={cn("bg-background rounded-lg overflow-hidden shadow-md", className)}>
      <div className="p-6 bg-primary text-primary-foreground">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 md:border-r border-border">
          <p className="font-bold mb-3 text-destructive">BEFORE</p>
          <div className="relative h-48 mb-4 rounded overflow-hidden">
            <Image
              src={before.image || "/placeholder.svg"}
              alt={`Before our representation - ${title}`}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground">{before.text}</p>
        </div>
        <div className="p-6">
          <p className="font-bold mb-3 text-primary">AFTER</p>
          <div className="relative h-48 mb-4 rounded overflow-hidden">
            <Image
              src={after.image || "/placeholder.svg"}
              alt={`After our representation - ${title}`}
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-muted-foreground">{after.text}</p>
        </div>
      </div>
    </div>
  )
}

