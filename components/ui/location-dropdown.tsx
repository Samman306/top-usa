"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface LocationDropdownProps {
  title: string
  items: { name: string; slug: string }[]
  baseUrl: string
  variant?: "default" | "yellow" | "white" | "black"
}

export function LocationDropdown({ title, items, baseUrl, variant = "default" }: LocationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return

      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  // Style variants
  const buttonVariants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    yellow: "bg-yellow-500 text-black hover:bg-yellow-600",
    white: "bg-white text-black hover:bg-gray-100",
    black: "bg-black text-white hover:bg-gray-900",
  }

  // Generate URLs based on the baseUrl
  const getUrl = (slug: string) => {
    if (baseUrl.includes("states")) {
      return `/locations/states/${slug}`
    } else if (baseUrl.includes("cities")) {
      return `/locations/cities/${slug}`
    }
    return `${baseUrl}/${slug}`
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center justify-between px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",
          buttonVariants[variant],
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{title}</span>
        <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 max-h-96 overflow-y-auto">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {items.map((item) => (
              <Link
                key={item.slug}
                href={getUrl(item.slug)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
