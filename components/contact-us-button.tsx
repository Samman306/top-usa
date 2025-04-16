"use client"

import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

interface ContactUsButtonProps {
  className?: string
  variant?: "primary" | "secondary" | "outline"
  size?: "default" | "lg" | "sm"
}

export function ContactUsButton({ className = "", variant = "primary", size = "default" }: ContactUsButtonProps) {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Define base styles
  const baseStyles =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md font-bold transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2"

  // Add size-specific styles
  const sizeStyles = {
    default: "text-lg h-11 px-6 py-2",
    lg: "text-lg h-12 px-8 py-3",
    sm: "text-base h-9 px-4 py-1.5",
  }

  // Add variant-specific styles
  const variantStyles = {
    primary: "bg-yellow-500 hover:bg-yellow-600 text-black focus:ring-yellow-500",
    secondary: "bg-black hover:bg-gray-900 text-white border border-black focus:ring-black",
    outline: "bg-transparent border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 focus:ring-yellow-500",
  }

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`

  const handleClick = () => {
    router.push("/contact")
  }

  if (!isClient) {
    return (
      <button
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-bold h-11 px-6 py-2 bg-yellow-500 text-black"
        aria-label="Contact Us"
      >
        Contact Us Today
      </button>
    )
  }

  return (
    <button onClick={handleClick} className={combinedStyles} aria-label="Contact Us">
      Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
    </button>
  )
}
