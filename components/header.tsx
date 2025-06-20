"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Gavel, Menu, X, ChevronDown, Star, Award, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [practiceAreasOpen, setPracticeAreasOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const pathname = usePathname()

  const practiceAreasRef = useRef<HTMLDivElement>(null)
  const locationsRef = useRef<HTMLDivElement>(null)

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setPracticeAreasOpen(false)
    setLocationsOpen(false)
  }, [pathname])

  // Handle clicks outside of dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (practiceAreasRef.current && !practiceAreasRef.current.contains(event.target as Node)) {
        setPracticeAreasOpen(false)
      }
      if (locationsRef.current && !locationsRef.current.contains(event.target as Node)) {
        setLocationsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("scroll", handleClickOutside)
  }, [])

  // Toggle dropdown functions
  const togglePracticeAreas = (e: React.MouseEvent) => {
    e.preventDefault()
    setPracticeAreasOpen(!practiceAreasOpen)
    setLocationsOpen(false)
  }

  const toggleLocations = (e: React.MouseEvent) => {
    e.preventDefault()
    setLocationsOpen(!locationsOpen)
    setPracticeAreasOpen(false)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-black/95 backdrop-blur-sm shadow-sm" : "bg-black",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Gavel className="h-9 w-9 text-yellow-500" />
          <span className="font-extrabold text-2xl text-white tracking-tight">
            TOP USA <span className="text-yellow-500">LAW</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <NavigationMenu className="mr-6">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/"}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/about"}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Practice Areas</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {[
                      { title: "Personal Injury", href: "/practice-areas/personal-injury" },
                      { title: "Car Accidents", href: "/practice-areas/car-accidents" },
                      { title: "Truck Accidents", href: "/practice-areas/truck-accidents" },
                      { title: "Uber and Lyft Accidents", href: "/practice-areas/uber-lyft-accidents" },
                      { title: "Work Accidents", href: "/practice-areas/work-accidents" },
                      { title: "Construction Accidents", href: "/practice-areas/construction-accidents" },
                      { title: "Slip and Fall Injuries", href: "/practice-areas/slip-fall-injuries" },
                      { title: "White Collar Crimes", href: "/practice-areas/white-collar-crimes" },
                      { title: "Immigration Law", href: "/practice-areas/immigration-law" },
                      { title: "Class Actions", href: "/practice-areas/class-actions" },
                    ].map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/team" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/team"}>
                    Our Attorneys
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Locations</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[400px] md:w-[600px] lg:w-[700px]">
                    <div className="mb-3">
                      <Link href="/locations" className="text-sm font-medium hover:underline">
                        View All Locations
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        "California",
                        "Texas",
                        "Florida",
                        "New York",
                        "Illinois",
                        "Pennsylvania",
                        "Ohio",
                        "Georgia",
                        "North Carolina",
                        "Michigan",
                        "New Jersey",
                        "Virginia",
                      ].map((state) => (
                        <Link
                          key={state}
                          href={`/locations/states/${state.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-sm hover:underline"
                        >
                          {state}
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/contact"}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center space-x-2 mr-6">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-1" />
              <span className="text-sm text-white">5.0</span>
            </div>
            <div className="h-4 border-r border-gray-600"></div>
            <div className="flex items-center">
              <Award className="h-5 w-5 text-yellow-500 mr-1" />
              <span className="text-sm text-white">Top Rated</span>
            </div>
            <div className="h-4 border-r border-gray-600"></div>
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 text-yellow-500 mr-1" />
              <span className="text-sm text-white">Millions Won</span>
            </div>
          </div>

          <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
            <Link href="/contact">FREE CONSULTATION</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="container py-4 space-y-4">
            <Link
              href="/"
              className={cn("block py-2 text-lg", pathname === "/" ? "text-yellow-500 font-medium" : "text-white")}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn("block py-2 text-lg", pathname === "/about" ? "text-yellow-500 font-medium" : "text-white")}
            >
              About
            </Link>

            {/* Practice Areas Dropdown */}
            <div className="py-2" ref={practiceAreasRef}>
              <button
                className="flex items-center justify-between w-full cursor-pointer text-lg text-white"
                onClick={togglePracticeAreas}
                aria-expanded={practiceAreasOpen}
                aria-controls="practice-areas-dropdown"
              >
                <span>Practice Areas</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${practiceAreasOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                id="practice-areas-dropdown"
                className={`pl-4 mt-2 space-y-2 ${practiceAreasOpen ? "block" : "hidden"}`}
              >
                {[
                  { title: "Personal Injury", href: "/practice-areas/personal-injury" },
                  { title: "Car Accidents", href: "/practice-areas/car-accidents" },
                  { title: "Truck Accidents", href: "/practice-areas/truck-accidents" },
                  { title: "Uber and Lyft Accidents", href: "/practice-areas/uber-lyft-accidents" },
                  { title: "Work Accidents", href: "/practice-areas/work-accidents" },
                  { title: "Construction Accidents", href: "/practice-areas/construction-accidents" },
                  { title: "Slip and Fall Injuries", href: "/practice-areas/slip-fall-injuries" },
                  { title: "White Collar Crimes", href: "/practice-areas/white-collar-crimes" },
                  { title: "Immigration Law", href: "/practice-areas/immigration-law" },
                  { title: "Class Actions", href: "/practice-areas/class-actions" },
                ].map((item) => (
                  <Link key={item.title} href={item.href} className="block py-1 text-base text-gray-300">
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/team"
              className={cn("block py-2 text-lg", pathname === "/team" ? "text-yellow-500 font-medium" : "text-white")}
            >
              Our Attorneys
            </Link>

            {/* Locations Dropdown */}
            <div className="py-2" ref={locationsRef}>
              <button
                className="flex items-center justify-between w-full cursor-pointer text-lg text-white"
                onClick={toggleLocations}
                aria-expanded={locationsOpen}
                aria-controls="locations-dropdown"
              >
                <span>Locations</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${locationsOpen ? "rotate-180" : ""}`} />
              </button>
              <div id="locations-dropdown" className={`pl-4 mt-2 ${locationsOpen ? "block" : "hidden"}`}>
                <Link href="/locations" className="block py-1 text-base font-medium text-gray-300">
                  View All Locations
                </Link>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {[
                    "California",
                    "Texas",
                    "Florida",
                    "New York",
                    "Illinois",
                    "Pennsylvania",
                    "Ohio",
                    "Georgia",
                    "North Carolina",
                    "Michigan",
                    "New Jersey",
                    "Virginia",
                  ].map((state) => (
                    <Link
                      key={state}
                      href={`/locations/states/${state.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block py-1 text-sm text-gray-300"
                    >
                      {state}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className={cn(
                "block py-2 text-lg",
                pathname === "/contact" ? "text-yellow-500 font-medium" : "text-white",
              )}
            >
              Contact
            </Link>

            <Button asChild className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
              <Link href="/contact">FREE CONSULTATION</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

