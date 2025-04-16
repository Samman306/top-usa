import * as React from "react"
import { LucideArrowRight } from "lucide-react"

interface ArrowRightProps extends React.SVGAttributes<SVGSVGElement> {}

const ArrowRight = React.forwardRef<SVGSVGElement, ArrowRightProps>(({ className, ...props }, ref) => {
  return <LucideArrowRight ref={ref} className={className} {...props} />
})
ArrowRight.displayName = "ArrowRight"

export { ArrowRight }
