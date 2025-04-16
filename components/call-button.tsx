"use client"

import { Phone } from "lucide-react"

interface CallButtonProps {
  className?: string
  variant?: "primary" | "secondary" | "outline"
  size?: "default" | "lg" | "sm"
  phoneNumber?: string
}

export function CallButton({
  className = "",
  variant = "outline",
  size = "default",
  phoneNumber = "+15551234567",
}: CallButtonProps) {
  // Define base styles
  const baseStyles =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors cursor-pointer"

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
    outline: "bg-transparent border border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10",
  }

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`

  // Format the display number
  const displayNumber = phoneNumber === "+15551234567" ? "(555) 123-4567" : phoneNumber

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <button onClick={handleCall} className={combinedStyles}>
      <Phone className="mr-2 h-5 w-5" /> Call {displayNumber}
    </button>
  )
}
