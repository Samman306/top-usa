"use client"

import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"

interface ContactUsButtonProps {
  className?: string
  variant?: "primary" | "secondary" | "outline"
  size?: "default" | "lg" | "sm"
}

export function ContactUsButton({ className = "", variant = "primary", size = "default" }: ContactUsButtonProps) {
  const router = useRouter()

  // Define base styles
  const baseStyles =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md font-bold transition-colors cursor-pointer"

  // Add size-specific styles
  const sizeStyles = {
    default: "text-lg h-11 px-6 py-2",
    lg: "text-lg h-12 px-8 py-3",
    sm: "text-base h-9 px-4 py-1.5",
  }

  // Add variant-specific styles
  const variantStyles = {
    primary: "bg-yellow-500 hover:bg-yellow-600 text-black",
    secondary: "bg-black hover:bg-gray-900 text-white border border-black",
    outline: "bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10",
  }

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`

  const handleClick = () => {
    router.push("/contact")
  }

  return (
    <button onClick={handleClick} className={combinedStyles}>
      Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
    </button>
  )
}

