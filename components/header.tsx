"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { Gavel, Menu, X, ChevronDown, Star, Award, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { allPracticeAreas } from "@/lib/practice-areas"

const states = [
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
].map((state) => ({
  title: state,
  href: `/locations/states/${state.toLowerCase().replace(/\s+/g, "-")}`,
}))

const practiceAreas = allPracticeAreas.map((area) => ({
  title: area.title,
  href: area.slug,
}))

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [practiceAreasOpen, setPracticeAreasOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const practiceAreasRef = useRef(null)
  const locationsRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const togglePracticeAreas = () => setPracticeAreasOpen((prev) => !prev)
  const toggleLocations = () => setLocationsOpen((prev) => !prev)

  return (
    <header
      className={cn(
        "sticky top-0 bg-black/95 z-50 w-full transition-all duration-150 font-sans text-white shadow-md",
        isScrolled ? "bg-black/95" : "bg-gradient-to-r from-black via-gray-900 to-black",
      )}
    >
      <div
        className={cn(
          "container mx-auto px-3 sm:px-4 md:px-6 flex items-center justify-between transition-all duration-300",
          isScrolled ? "h-16" : "h-20",
        )}
      >
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3 px-1 group">
          <Gavel className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-yellow-500 transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-black text-lg sm:text-xl tracking-tight group-hover:scale-105 transition-transform duration-300">
            TOP USA <span className="text-yellow-500">LAW</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center">
          <NavigationMenu className="mr-6">
            <NavigationMenuList className="flex items-center gap-3">
              <Link
                href="/"
                className={cn("py-2 px-1", pathname === "/" ? "text-yellow-500 font-medium" : "hover:text-yellow-600")}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={cn(
                  "py-2 px-1",
                  pathname === "/about" ? "text-yellow-500 font-medium" : "hover:text-yellow-600",
                )}
              >
                About
              </Link>

              <NavigationMenuItem className="px-0">
                <NavigationMenuTrigger className="!bg-transparent !text-white hover:!text-yellow-600 focus:!bg-transparent hover:!bg-transparent">
                  Practice Areas
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                <DesktopDropdown
                    viewAllLinks="/practice-areas"
                    items={practiceAreas}
                    type="practice"
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="px-0">
                <NavigationMenuTrigger className="!bg-transparent !text-white hover:!text-yellow-600 focus:!bg-transparent hover:!bg-transparent">
                  Locations
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <DesktopDropdown
                    viewAllLinks="/locations"
                    items={states}
                    type="location"
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <Link
                href="/team"
                className={cn("py-2", pathname === "/team" ? "text-yellow-500 font-medium" : "hover:text-yellow-600")}
              >
                Attorneys
              </Link>
              <Link
                href="/nationwide-coverage"
                title="Nationwide Coverage"
                className={cn(
                  "py-2",
                  pathname === "/nationwide-coverage" ? "text-yellow-500 font-medium" : "hover:text-yellow-600",
                )}
              >
                {" "}
                Coverage
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "py-2",
                  pathname === "/contact" ? "text-yellow-500 font-medium" : "hover:text-yellow-600",
                )}
              >
                Contact
              </Link>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden xl:flex items-center space-x-4 mr-6 px-4 py-2 rounded-full">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-1 animate-pulse" />
              <span className="text-sm">5.0</span>
            </div>
            <div className="h-4 border-r border-yellow-500/20"></div>
            <div className="flex items-center">
              <Award className="h-5 w-5 text-yellow-500 mr-1" />
              <span className="text-xs">Top Rated</span>
            </div>
            <div className="h-4 border-r border-yellow-500/20"></div>
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 text-yellow-500 mr-1" />
              <span className="text-xs">Millions Won</span>
            </div>
          </div>

          <Button
            asChild
            className="ml-2 bg-gradient-to-r from-yellow-500 to-amber-400 hover:from-amber-400 hover:to-yellow-500 text-black font-bold shadow-md shadow-yellow-500/20 transition hover:scale-105"
          >
            <Link href="/contact">FREE CONSULTATION</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-3 rounded-md hover:bg-yellow-500/10 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {/* Mobile & Tablet Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-gradient-to-b from-black to-gray-900 border-t border-yellow-500/10">
          <div className="container py-4 space-y-4">
            <MobileLink href="/" label="Home" pathname={pathname} />
            <MobileLink href="/about" label="About" pathname={pathname} />

            {/* Practice Areas Dropdown */}
            <MobileDropdown
              title="Practice Areas"
              open={practiceAreasOpen}
              toggle={togglePracticeAreas}
              items={practiceAreas}
            />

            <MobileLink href="/team" label="Our Attorneys" pathname={pathname} />

            {/* Locations Dropdown */}
            <MobileDropdown
              title="Locations"
              open={locationsOpen}
              toggle={toggleLocations}
              items={states.map(({ title, href }) => ({ title, href }))}
            />

            <MobileLink href="/nationwide-coverage" label="Nationwide Coverage" pathname={pathname} />
            <MobileLink href="/contact" label="Contact" pathname={pathname} />

            <Button
              asChild
              className="w-full mt-6 bg-gradient-to-r from-yellow-500 to-amber-400 hover:from-amber-400 hover:to-yellow-500 text-black font-bold shadow-lg shadow-yellow-500/20 hover:scale-105"
            >
              <Link href="/contact">FREE CONSULTATION</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

function MobileLink({ href, label, pathname }: { href: string; label: string; pathname: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "block py-2 text-lg transition hover:translate-x-1",
        pathname === href ? "text-yellow-500 font-medium" : "text-white hover:text-yellow-600",
      )}
    >
      {label}
    </Link>
  )
}

function MobileDropdown({
  title,
  open,
  toggle,
  items,
}: {
  title: string
  open: boolean
  toggle: () => void
  items: { title: string; href: string }[]
}) {
  return (
    <div className="py-2">
      <button
        className="flex items-center justify-between w-full text-lg text-white hover:text-yellow-600 transition"
        onClick={toggle}
      >
        <span>{title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pl-4 mt-2 space-y-2 max-h-60 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-yellow-600 scrollbar-track-transparent">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block py-1 text-base text-gray-300 hover:text-yellow-600 transition hover:translate-x-1"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
  
}

function DesktopDropdown({
  viewAllLinks,
  items,
  type
}: {
  viewAllLinks: string
  items: { title: string; href: string }[]
  type: "practice" | "location"
}) {
  return (
    <div className="p-4 w-full sm:w-[400px] md:w-[500px] lg:w-[600px] bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {type === "location" ? items.map((state) => (
        <Link
          key={state.title}
          href={state.href}
          className="block truncate rounded-md px-3 py-1.5 text-sm text-gray-800 hover:bg-yellow-50 hover:text-yellow-700 transition"
        >
          {state.title}
        </Link>
      )) : items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="block truncate rounded-md px-3 py-1.5 text-sm text-gray-800 hover:bg-yellow-50 hover:text-yellow-700 transition"
        >
          {item.title}
        </Link>
      ))}
    </div>
    <div className="mt-3 text-right">
      <Link
        href={viewAllLinks}
        className="text-sm font-medium text-yellow-700 hover:underline transition"
      >
        View All →
      </Link>
    </div>
  </div>
  )
}

export default Header
