"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ChevronsLeft, ChevronsRight, MapPin, Award, Building, Map } from "lucide-react"
import { slugify } from "camote-utils"

// Types
type Location = {
  city: string
  slug: string
  state_name: string
  state_id: string
  county_name: string
  population?: string
  zips?: string
  avg_commute_time_minutes?: string
  estimated_annual_accidents?: string
  traffic_congestion_level?: string
}

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

// Location Card Component
const LocationCard = ({ location }: { location: Location }) => {
  return (
    <Link href={`/locations/${slugify(location.state_name)}.${location.slug}`} className="block group">
      <div className="bg-gray-900 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-800 group-hover:-translate-y-1 transform overflow-hidden">
        {/* Decorative Top Bar */}
        <div className="h-2 bg-gradient-to-r from-yellow-500/20 via-yellow-600/20 to-yellow-700/20"></div>

        {/* Main Content */}
        <div className="p-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">
                {location.city}
              </h3>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">{location.state_name}</span>
                {location.population && (
                  <span className="text-sm text-gray-400">• Population: {location.population}</span>
                )}
              </div>
            </div>

            {/* Bottom Meta & CTA */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-yellow-500/10">
              <div className="flex items-center gap-2">
                <span className="text-xs text-yellow-500 bg-yellow-500/20 px-2 py-1 rounded-full">
                  {location.state_id}
                </span>
              </div>
              <div className="flex items-center text-sm text-yellow-500 group-hover:text-yellow-400 transition">
                View Details
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

// Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pageNumbers = []
  const maxPageButtons = 5

  // Logic to show appropriate page numbers
  let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2))
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1)

  if (endPage - startPage + 1 < maxPageButtons) {
    startPage = Math.max(1, endPage - maxPageButtons + 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="flex justify-center mt-8">
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        {/* Previous Page Button */}
        <button
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-700 bg-gray-800 text-sm font-medium ${
            currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-400 hover:bg-gray-700"
          }`}
        >
          <span className="sr-only">Previous</span>
          <ChevronsLeft />
        </button>

        {/* First Page Button (if not near first page) */}
        {startPage > 1 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-gray-800 text-sm font-medium text-gray-400 hover:bg-gray-700"
            >
              1
            </button>
            {startPage > 2 && (
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-gray-800 text-sm font-medium text-gray-400">
                ...
              </span>
            )}
          </>
        )}

        {/* Page Numbers */}
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`relative inline-flex items-center px-4 py-2 border ${
              currentPage === number
                ? "z-10 bg-gray-700 border-gray-600 text-yellow-500"
                : "border-gray-700 bg-gray-800 text-gray-400 hover:bg-gray-700"
            } text-sm font-medium`}
          >
            {number}
          </button>
        ))}

        {/* Last Page Button (if not near last page) */}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-gray-800 text-sm font-medium text-gray-400">
                ...
              </span>
            )}
            <button
              onClick={() => onPageChange(totalPages)}
              className="relative inline-flex items-center px-4 py-2 border border-gray-700 bg-gray-800 text-sm font-medium text-gray-400 hover:bg-gray-700"
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Next Page Button */}
        <button
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-700 bg-gray-800 text-sm font-medium ${
            currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-gray-400 hover:bg-gray-700"
          }`}
        >
          <span className="sr-only">Next</span>
          <ChevronsRight />
        </button>
      </nav>
    </div>
  )
}

// State Hero Section
const StateHero = ({ stateName, stateId, cityCount }: { stateName: string; stateId: string; cityCount: number }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl mb-10 p-8 md:p-12 border border-gray-700">
      <div className="relative">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl mb-4">
          <span className="text-yellow-500">TOP USA LAW</span> in {stateName}
        </h1>
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center bg-gray-800/50 rounded-lg px-4 py-2 backdrop-blur-sm">
            <Award className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="text-gray-300">Trusted Legal Services</span>
          </div>
          <div className="flex items-center bg-gray-800/50 rounded-lg px-4 py-2 backdrop-blur-sm">
            <Building className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="text-gray-300">
              {cityCount} {cityCount === 1 ? "City" : "Cities"}
            </span>
          </div>
          <div className="flex items-center bg-gray-800/50 rounded-lg px-4 py-2 backdrop-blur-sm">
            <Map className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="text-gray-300">
              {stateName} ({stateId})
            </span>
          </div>
        </div>
        <p className="text-xl text-gray-300 max-w-3xl mb-8">
          Expert legal representation throughout {stateName}. Our attorneys understand local laws and courts to provide
          you with the best possible legal service.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-500 hover:bg-yellow-600 transition duration-200"
          >
            Contact Our {stateName} Legal Team
          </Link>
          <Link
            href="/practice-areas"
            className="inline-flex items-center justify-center px-5 py-3 border border-gray-700 text-base font-medium rounded-md text-white bg-gray-800/70 hover:bg-gray-700 transition duration-200"
          >
            Our Practice Areas
          </Link>
        </div>
      </div>
    </div>
  )
}

// State Stats Section
const StateStatsSection = ({ stateName }: { stateName: string }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-8 my-10 text-white border border-gray-700">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Why Choose TOP USA LAW in {stateName}</h2>
        <p className="text-gray-400">
          Our team of experienced attorneys is dedicated to providing you with excellent legal representation.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="p-4 bg-gray-700/50 rounded-lg">
          <div className="text-4xl font-bold mb-2 text-yellow-500">20+</div>
          <div className="text-gray-400 text-sm">Years in {stateName}</div>
        </div>
        <div className="p-4 bg-gray-700/50 rounded-lg">
          <div className="text-4xl font-bold mb-2 text-yellow-500">95%</div>
          <div className="text-gray-400 text-sm">Success Rate</div>
        </div>
        <div className="p-4 bg-gray-700/50 rounded-lg">
          <div className="text-4xl font-bold mb-2 text-yellow-500">24/7</div>
          <div className="text-gray-400 text-sm">Support</div>
        </div>
        <div className="p-4 bg-gray-700/50 rounded-lg">
          <div className="text-4xl font-bold mb-2 text-yellow-500">5,000+</div>
          <div className="text-gray-400 text-sm">Satisfied Clients</div>
        </div>
      </div>
    </div>
  )
}

// Why Choose Us section
const WhyChooseUs = () => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-sm p-8 my-10">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Our Firm</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-md bg-gray-700 flex items-center justify-center mb-4">
            <svg
              className="h-6 w-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-white mb-2">Local Expertise</h3>
          <p className="text-gray-400">
            Our attorneys have deep knowledge of local laws and court systems in every location we serve.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-md bg-gray-700 flex items-center justify-center mb-4">
            <svg
              className="h-6 w-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857l-4.244-4.243a8 8 0 1111.314 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-white mb-2">National Network</h3>
          <p className="text-gray-400">
            Access to a nationwide network of legal professionals and resources to support your case.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-md bg-gray-700 flex items-center justify-center mb-4">
            <svg
              className="h-6 w-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-white mb-2">24/7 Availability</h3>
          <p className="text-gray-400">
            Legal emergencies don't wait for business hours. Our team is available whenever you need us.
          </p>
        </div>
      </div>
    </div>
  )
}

// FAQ Section with accordion items
const FaqSection = () => {
  // State for tracking which FAQ items are open
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({})

  // Toggle FAQ item open/closed
  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  // FAQ data
  const faqs = [
    {
      question: "How do I find the nearest office location?",
      answer:
        "You can use our location finder above to filter by state or city. Alternatively, you can search for your city or state in the search box. Each location page will provide detailed contact information and directions.",
    },
    {
      question: "Do you offer virtual consultations?",
      answer:
        "Yes, we offer virtual consultations for clients who cannot visit our physical locations. Contact your nearest office to schedule a video or phone consultation with one of our attorneys.",
    },
    {
      question: "What practice areas are available at each location?",
      answer:
        "Most of our locations offer a full range of legal services including family law, personal injury, criminal defense, estate planning, and business law. Some specialized services may only be available at certain locations. Please check the specific location page for details.",
    },
    {
      question: "How do I schedule an appointment?",
      answer:
        "You can schedule an appointment by calling the office directly, using our online appointment scheduler, or by submitting a contact form on the location's page. Our staff will follow up promptly to confirm your appointment.",
    },
    {
      question: "Do you have multilingual attorneys available?",
      answer:
        "Yes, many of our locations have multilingual attorneys and staff. Languages available vary by location but often include Spanish, French, Mandarin, and more. Check the specific location page for language capabilities.",
    },
  ]

  return (
    <div className="bg-gray-900 rounded-xl shadow-sm p-8 my-10">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center p-4 text-left bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              <span className="text-white font-medium">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-yellow-500 transform transition-transform ${openItems[index] ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openItems[index] && (
              <div className="p-4 bg-gray-800 border-t border-gray-700">
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Stats section to showcase the firm's presence
const StatsSection = () => {
  return (
    <div className="bg-gray-800 rounded-xl p-8 my-10 text-white">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Our National Presence</h2>
        <p className="text-gray-400">
          With decades of experience and a nationwide network, we're ready to serve you wherever you are.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="p-4">
          <div className="text-4xl font-bold mb-2 text-yellow-500">250+</div>
          <div className="text-gray-400 text-sm">Office Locations</div>
        </div>
        <div className="p-4">
          <div className="text-4xl font-bold mb-2 text-yellow-500">48</div>
          <div className="text-gray-400 text-sm">States Covered</div>
        </div>
        <div className="p-4">
          <div className="text-4xl font-bold mb-2 text-yellow-500">1,500+</div>
          <div className="text-gray-400 text-sm">Attorneys</div>
        </div>
        <div className="p-4">
          <div className="text-4xl font-bold mb-2 text-yellow-500">50K+</div>
          <div className="text-gray-400 text-sm">Successful Cases</div>
        </div>
      </div>
    </div>
  )
}

// Cities view component with pagination
const CitiesView = ({ locations, stateName }: { locations: Location[]; stateName: string }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [itemsPerPage, setItemsPerPage] = useState(12) // Can be adjusted up or down

  // Filter locations by search term
  const filteredLocations = locations.filter(
    (location) =>
      location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.county_name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredLocations.length / itemsPerPage)

  // Get current page cities
  const currentLocations = filteredLocations.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  // Items per page selector
  const changeItemsPerPage = (newSize: number) => {
    setItemsPerPage(newSize)
    setCurrentPage(1) // Reset to first page when changing display count
  }

  return (
    <div>
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-white">
          <span className="text-yellow-500">{stateName}</span> Cities
          <span className="ml-2 text-sm font-normal text-gray-400">({filteredLocations.length} locations)</span>
        </h2>

        {/* Search Input */}
        <div className="w-full md:w-64">
          <div className="relative">
            <input
              type="text"
              placeholder="Search cities..."
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-gray-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                onClick={() => setSearchTerm("")}
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {filteredLocations.length === 0 ? (
        <div className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700">
          <div className="mx-auto w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <MapPin className="h-8 w-8 text-gray-500" />
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No cities found</h3>
          <p className="text-gray-400 mb-4">We couldn't find any cities matching your search in {stateName}.</p>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-md text-sm font-medium text-white bg-gray-700 hover:bg-gray-600"
            >
              Clear search
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentLocations.map((location, index) => (
            <div
              key={`${location.slug}-${index}`}
              className="transform transition-all duration-300 ease-in-out hover:scale-[1.02]"
            >
              <LocationCard location={location} />
            </div>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      )}
    </div>
  )
}

// Practice Areas section for the state page
const PracticeAreas = ({ stateName }: { stateName: string }) => {
  const practiceAreas = [
    { name: "Personal Injury", icon: "⚖️", slug: "personal-injury" },
    { name: "Car Accidents", icon: "🚗", slug: "car-accidents" },
    { name: "Truck Accidents", icon: "🚚", slug: "truck-accidents" },
    { name: "Motorcycle Accidents", icon: "🏍️", slug: "motorcycle-accidents" },
    { name: "Medical Malpractice", icon: "🏥", slug: "medical-malpractice" },
    { name: "Wrongful Death", icon: "💔", slug: "wrongful-death" },
  ]

  return (
    <div className="bg-gray-800 rounded-xl p-8 my-10 border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-6">Our Practice Areas in {stateName}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {practiceAreas.map((area) => (
          <Link
            key={area.slug}
            href={`/practice-areas/${area.slug}`}
            className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg flex flex-col items-center text-center transition-colors duration-200"
          >
            <span className="text-3xl mb-2">{area.icon}</span>
            <h3 className="font-medium text-white">{area.name}</h3>
            <p className="text-sm text-gray-400 mt-1">in {stateName}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function StatePageClient() {
  // Get state from URL params
  const params = useParams<{ state: string }>()
  const stateParam = params.state || ""

  // Format state name for display (convert from slug to proper name)
  const formatStateName = (slug: string): string => {
    // First replace hyphens with spaces
    const withSpaces = slug.replace(/-/g, " ")

    // Capitalize first letter of each word
    return withSpaces
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  const stateId = stateParam.toUpperCase().substring(0, 2)
  const stateName = formatStateName(stateParam)

  // State variables for component
  const [locations, setLocations] = useState<Location[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Demo location data
  const demoLocations: Location[] = []

  // Fetch cities for the selected state
  useEffect(() => {
    const fetchCities = async () => {
      setIsLoading(true)
      setError(null)

      // Skip API calls during build time
      if (typeof window === "undefined" && process.env.NODE_ENV === "production") {
        console.log("Skipping API call during build time")
        setLocations([])
        setIsLoading(false)
        return
      }

      try {
        // Try fetching from our API endpoint first
        const response = await fetch(`/api/google-spreadsheet?sheet=${"Locations"}`)

        const data = await response.json()
        const locationsData = data.data
        if (Array.isArray(locationsData) && locationsData.length > 0) {
          // Transform the data to match our Location type
          const transformedLocations = locationsData.map((item: any) => ({
            city: item.city || "Unknown City",
            slug: item.slug || item.city?.toLowerCase().replace(/\s+/g, "-") || "unknown",
            state_name: item.state_name || "Unknown State",
            state_id: item.state_id || "",
            county_name: item.county_name || "Unknown County",
            population: item.population || "",
            zips: item.zips || "",
            avg_commute_time_minutes: item.avg_commute_time_minutes || "",
            estimated_annual_accidents: item.estimated_annual_accidents || "",
            traffic_congestion_level: item.traffic_congestion_level || "Moderate",
          }))

          // Filter for this state
          const stateLocations = transformedLocations.filter(
            (loc) =>
              loc.state_name.toLowerCase() === stateName.toLowerCase() ||
              loc.state_id.toLowerCase() === stateParam.toLowerCase(),
          )

          if (stateLocations.length > 0) {
            setLocations(stateLocations)
            setIsLoading(false)
            return
          }
        }
      } catch (error) {
        console.error("Error fetching from API:", error)
      }

      // Fallback to demo locations filtered by state
      const filteredDemo = demoLocations.filter(
        (loc) =>
          loc.state_name.toLowerCase() === stateName.toLowerCase() ||
          loc.state_id.toLowerCase() === stateParam.toLowerCase(),
      )

      if (filteredDemo.length > 0) {
        setLocations(filteredDemo)
      } else {
        // Create fake locations for this state
        const genericLocations: Location[] = []

        setLocations(genericLocations)
      }

      setIsLoading(false)
    }

    fetchCities()
  }, [stateName, stateParam, stateId])

  // Render the state page
  return (
    <div>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center min-h-[300px]">
          <div className="rounded-full h-12 w-12 border-4 border-gray-300 border-t-yellow-500 animate-spin mb-4"></div>
          <p className="text-gray-400">Loading {stateName} cities...</p>
        </div>
      ) : error ? (
        <div className="p-4 bg-red-500/10 text-red-500 rounded-lg border border-red-500/20 mb-8">
          <h3 className="font-semibold mb-2">Error</h3>
          <p>{error}</p>
        </div>
      ) : (
        <>
          {/* State Hero */}
          <StateHero stateName={stateName} stateId={stateId} cityCount={locations.length} />

          {/* State Cities */}
          <CitiesView locations={locations} stateName={stateName} />

          {/* State Stats */}
          <StateStatsSection stateName={stateName} />

          {/* Practice Areas */}
          <PracticeAreas stateName={stateName} />

          {/* Why Choose Us */}
          <WhyChooseUs />

          {/* Stats Section */}
          <StatsSection />

          {/* FAQ section */}
          <FaqSection />
        </>
      )}
    </div>
  )
}
