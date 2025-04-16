"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface DropdownProps {
  title: string
  children: React.ReactNode
  className?: string
  buttonClassName?: string
  contentClassName?: string
  initialOpen?: boolean
}

export function Dropdown({
  title,
  children,
  className,
  buttonClassName,
  contentClassName,
  initialOpen = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(initialOpen)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Handle clicks outside of dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div ref={dropdownRef} className={cn("relative", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center justify-between w-full p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors",
          buttonClassName,
        )}
        aria-expanded={isOpen}
      >
        <span className="font-medium">{title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className={cn("mt-2 p-3 bg-gray-800 rounded-lg border border-gray-700", contentClassName)}>{children}</div>
      )}
    </div>
  )
}
