"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronsLeft, ChevronsRight } from "lucide-react"
import { slugify } from "camote-utils"

// Types
type Location = {
  name: string
  slug: string
  state_name: string
  state_code?: string
  state_id?: string
  county_name?: string
  population?: string
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
                {location.name}
              </h3>
              <span className="inline-flex items-center text-sm text-gray-400">
                <svg
                  className="w-4 h-4 mr-1 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {location.county_name}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">{location.state_name}</span>
              </div>
            </div>

            {/* Bottom Meta & CTA */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-yellow-500/10">
              <div className="flex items-center gap-2">
                <span className="text-xs text-yellow-500 bg-yellow-500/20 px-2 py-1 rounded-full">Location Info</span>
                {location.state_code && (
                  <span className="text-xs text-yellow-500 bg-yellow-500/20 px-2 py-1 rounded-full">
                    {location.state_code}
                  </span>
                )}
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

// Simple Tab Navigation Component - just two tabs
const TabsNavigation = ({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: string
  setSelectedTab: (tab: string) => void
}) => {
  return (
    <div className="mb-6 bg-gray-800 rounded-2xl shadow-md overflow-hidden border border-gray-700">
      {/* Elegant tab header */}
      <div className="flex bg-gradient-to-r from-gray-700 to-gray-800 border-b border-gray-600">
        <button
          onClick={() => setSelectedTab("cities")}
          className={`flex-1 py-4 text-sm font-medium transition-colors duration-200 ease-in-out relative
            ${selectedTab === "cities" ? "text-yellow-500 font-semibold" : "text-gray-400 hover:text-yellow-500"}`}
        >
          Cities
          {selectedTab === "cities" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500 transition-all duration-300 rounded-t"></span>
          )}
        </button>
        <button
          onClick={() => setSelectedTab("states")}
          className={`flex-1 py-4 text-sm font-medium transition-colors duration-200 ease-in-out relative
            ${selectedTab === "states" ? "text-yellow-500 font-semibold" : "text-gray-400 hover:text-yellow-500"}`}
        >
          States
          {selectedTab === "states" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500 transition-all duration-300 rounded-t"></span>
          )}
        </button>
      </div>
    </div>
  )
}

// Hero section for the top of the page
const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gray-800 rounded-xl mb-10">
      <div className="relative px-6 py-12 sm:px-12 sm:py-16 lg:py-20 lg:px-16">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          <span className="text-yellow-500">Our</span> Nationwide Legal Presence
        </h1>
        <p className="mt-4 max-w-3xl text-xl text-gray-400">
          With offices across the country, we provide exceptional legal services wherever you are. Browse our locations
          to find the closest office or learn about our services in your area.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#locations"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-yellow-500 hover:bg-yellow-600"
            >
              Find a Location
            </a>
          </div>
          <div className="inline-flex">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
            >
              Contact Us
            </a>
          </div>
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
const CitiesView = ({ locations }: { locations: Location[] }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [itemsPerPage, setItemsPerPage] = useState(50) // Default to 50 items per page

  // Filter locations by search term
  const filteredLocations = locations.filter(
    (location) =>
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (location.county_name && location.county_name.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const totalPages = Math.ceil(filteredLocations.length / itemsPerPage)

  // Get current page cities
  const currentLocations = filteredLocations.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Items per page selector
  const changeItemsPerPage = (newSize: number) => {
    setItemsPerPage(newSize)
    setCurrentPage(1) // Reset to first page when changing display count
  }

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-2xl font-bold text-yellow-600">
          All Cities <span className="text-sm font-normal text-gray-400">({filteredLocations.length} locations)</span>
        </h2>

        {/* Controls: Search and Page Size */}
        <div className="w-full md:w-auto flex flex-col md:flex-row gap-4 items-center mt-4 md:mt-0">
          {/* Page size selector */}
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Show:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => {
                const val = e.target.value
                // Special handling for 'all' option
                if (val === "all") {
                  changeItemsPerPage(locations.length || 1000)
                } else {
                  changeItemsPerPage(Number(val))
                }
              }}
              className="bg-gray-800 border border-gray-700 rounded-lg px-2 py-1 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="24">24</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="500">500</option>
              <option value="all">All Cities</option>
            </select>
          </div>

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
      </div>

      {filteredLocations.length === 0 ? (
        <div className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700">
          <div className="mx-auto w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <div className="h-8 w-8 text-gray-500">🏙️</div>
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No cities found</h3>
          <p className="text-gray-400 mb-4">We couldn't find any cities matching your search.</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

// States view component with pagination
const StatesView = ({ locations }: { locations: Location[] }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [itemsPerPage, setItemsPerPage] = useState(15) // Default number of states per page
  const [currentPage, setCurrentPage] = useState(1)

  // Group locations by state
  const stateMap = new Map<string, Location[]>()

  locations.forEach((location) => {
    const state = location.state_name
    if (!state) return

    if (!stateMap.has(state)) {
      stateMap.set(state, [])
    }
    stateMap.get(state)?.push(location)
  })

  // Convert to array for rendering
  const states = Array.from(stateMap).map(([state, locs]) => ({
    name: state,
    locations: locs,
    count: locs.length,
    // Use the state code from the first location if available
    code: locs[0]?.state_code || locs[0]?.state_id || "",
  }))

  // Sort states alphabetically
  states.sort((a, b) => a.name.localeCompare(b.name))

  // Filter states by search term
  const filteredStates = states.filter(
    (state) =>
      state.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      state.code.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages = Math.ceil(filteredStates.length / itemsPerPage)

  // Get current page states
  const currentStates = filteredStates.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Items per page selector
  const changeItemsPerPage = (newSize: number) => {
    setItemsPerPage(newSize)
    setCurrentPage(1) // Reset to first page when changing display count
  }

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-2xl font-bold text-yellow-600">
          By State <span className="text-sm font-normal text-gray-400">({filteredStates.length} states)</span>
        </h2>

        {/* Controls: Search and Page Size */}
        <div className="w-full md:w-auto flex flex-col md:flex-row gap-4 items-center mt-4 md:mt-0">
          {/* Page size selector */}
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Show:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => changeItemsPerPage(Number(e.target.value))}
              className="bg-gray-800 border border-gray-700 rounded-lg px-2 py-1 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-64">
            <div className="relative">
              <input
                type="text"
                placeholder="Search states..."
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
      </div>

      {filteredStates.length === 0 ? (
        <div className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700">
          <div className="mx-auto w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <div className="h-8 w-8 text-gray-500">🇺🇸</div>
          </div>
          <h3 className="text-xl font-medium text-white mb-2">No states found</h3>
          <p className="text-gray-400 mb-4">We couldn't find any states matching your search.</p>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentStates.map((state) => (
            <Link
              key={state.name}
              href={`/locations/state/${state.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-xl p-4 border border-gray-700"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-white">{state.name}</h3>
                  <p className="text-gray-400 text-sm">
                    {state.count} {state.count === 1 ? "City" : "Cities"}
                  </p>
                </div>
                {state.code && (
                  <span className="text-xs font-bold bg-gray-700 text-yellow-500 rounded-md px-2 py-1">
                    {state.code}
                  </span>
                )}
              </div>
            </Link>
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
export default function LocationsClient() {
  // State
  const [locations, setLocations] = useState<Location[]>([])
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isFiltering, setIsFiltering] = useState(false)
  const [citySearchTerm, setCitySearchTerm] = useState("")
  const [stateSearchTerm, setStateSearchTerm] = useState("")

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(12)
  const [totalLocations, setTotalLocations] = useState(0)
  const [totalPages, setTotalPages] = useState(1)

  // Filter state
  const [states, setStates] = useState<string[]>([])
  const [selectedState, setSelectedState] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [selectedTab, setSelectedTab] = useState("cities")
  const [populationFilter, setPopulationFilter] = useState("")
  const [practiceAreas, setPracticeAreas] = useState<string[]>([])

  // Demo location data (fallback if API fails)
  const demoLocations = [
    {
      name: "New York",
      slug: "new-york",
      state_name: "New York",
      state_code: "NY",
      county_name: "New York County",
      population: "8336817",
    },
    {
      name: "Los Angeles",
      slug: "los-angeles",
      state_name: "California",
      state_code: "CA",
      county_name: "Los Angeles County",
      population: "3979576",
    },
    {
      name: "Chicago",
      slug: "chicago",
      state_name: "Illinois",
      state_code: "IL",
      county_name: "Cook County",
      population: "2693976",
    },
    {
      name: "Houston",
      slug: "houston",
      state_name: "Texas",
      state_code: "TX",
      county_name: "Harris County",
      population: "2320268",
    },
    {
      name: "Phoenix",
      slug: "phoenix",
      state_name: "Arizona",
      state_code: "AZ",
      county_name: "Maricopa County",
      population: "1680992",
    },
    {
      name: "Philadelphia",
      slug: "philadelphia",
      state_name: "Pennsylvania",
      state_code: "PA",
      county_name: "Philadelphia County",
      population: "1584064",
    },
    {
      name: "San Antonio",
      slug: "san-antonio",
      state_name: "Texas",
      state_code: "TX",
      county_name: "Bexar County",
      population: "1547253",
    },
  ]

  // Fetch cities data
  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true)
        try {
          // Add limit=1000 to ensure we get all cities (or the maximum allowed)
          const locationsResponse = await fetch("/api/cities?limit=1000")

          if (locationsResponse.ok) {
            const locationsData = await locationsResponse.json()

            if (Array.isArray(locationsData) && locationsData.length > 0) {
              // Transform the data to match our Location type
              const transformedLocations = locationsData.map((item: any) => ({
                name: item.city || item.name || "Unknown Location",
                slug: item.slug || item.city?.toLowerCase().replace(/\s+/g, "-") || "unknown",
                state_name: item.state || "Unknown State",
                state_code: item.stateCode || "",
                county_name: item.county || "Unknown County",
                population: item.population || "0",
              }))

              setLocations(transformedLocations)
              setFilteredLocations(transformedLocations)
              setTotalLocations(transformedLocations.length)
              setTotalPages(Math.ceil(transformedLocations.length / itemsPerPage))

              // Extract states from fetched locations
              const stateNames = Array.from(new Set(transformedLocations.map((loc: Location) => loc.state_name)))
                .filter(Boolean)
                .sort() as string[]
              setStates(stateNames)

              setIsLoading(false)
              return // Exit early if we successfully got data
            }
          }
        } catch (apiError) {
          console.log("Could not fetch from built-in API, trying spreadsheet directly")
        }

        // Fallback to direct Google Spreadsheet API
        console.log("Fetching location data from Google Spreadsheet API...")
        // Try with different common sheet names
        const sheetNames = ["Cities", "Locations", "cities", "locations", "Sheet1"]
        let result = null

        for (const sheet of sheetNames) {
          try {
            const response = await fetch(`/api/google-spreadsheet?sheet=${sheet}`)
            if (response.ok) {
              const data = await response.json()
              if (data.success && Array.isArray(data.data) && data.data.length > 0) {
                console.log(`Successfully fetched data from sheet: ${sheet}`)
                result = data
                break
              }
            }
          } catch (err) {
            console.log(`Failed to fetch from sheet ${sheet}:`, err)
          }
        }

        // Process data if we found it from spreadsheet
        if (result && result.success && Array.isArray(result.data) && result.data.length > 0) {
          // Detect column names from the first item
          const firstItem = result.data[0]
          const keys = Object.keys(firstItem)

          // Map flexible field names based on what's available
          const cityField =
            keys.find((k) => /^city$|^name$|^title$/i.test(k)) || keys.find((k) => /city|name|title/i.test(k)) || "City"
          const slugField = keys.find((k) => /slug|cityslug|url/i.test(k)) || "Slug"

          // Be extra thorough with state detection - check for exact matches first, then partial
          let stateField =
            keys.find((k) => k.toLowerCase() === "state") ||
            keys.find((k) => k.toLowerCase() === "state_name") ||
            keys.find((k) => k.toLowerCase() === "statename")

          // If not found with exact match, try with regex
          if (!stateField) {
            stateField = keys.find((k) => /state|state.?name/i.test(k)) || "State"
            console.log("Using regex match for state field:", stateField)
          } else {
            console.log("Using exact match for state field:", stateField)
          }

          const stateCodeField = keys.find((k) => /statecode|state.?code|state.?abbr/i.test(k)) || "StateCode"
          const countyField = keys.find((k) => /county/i.test(k)) || "County"
          const populationField = keys.find((k) => /population|pop/i.test(k)) || "Population"

          console.log("Available column keys:", keys)

          console.log(
            `Detected fields: city=${cityField}, state=${stateField}, stateCode=${stateCodeField}, all keys:`,
            keys,
          )

          // Log a few sample items to check data structure
          console.log("Sample data item:", result.data[0])

          // Try to identify valid state names by looking at all possible columns
          const findStateName = (item: any): string => {
            // First try the detected state field if it exists
            if (stateField && item[stateField] && typeof item[stateField] === "string") {
              return item[stateField]
            }

            // Then try common variations
            const stateVariants = ["State", "StateName", "state_name", "STATE", "State_Name", "state", "STATENAME"]
            for (const variant of stateVariants) {
              if (item[variant] && typeof item[variant] === "string") {
                return item[variant]
              }
            }

            // As a last resort, check all fields and look for values that might be state names
            const commonStates = [
              "Alabama",
              "Alaska",
              "Arizona",
              "Arkansas",
              "California",
              "Colorado",
              "Connecticut",
              "Delaware",
              "Florida",
              "Georgia",
              "Hawaii",
              "Idaho",
              "Illinois",
              "Indiana",
              "Iowa",
              "Kansas",
              "Kentucky",
              "Louisiana",
              "Maine",
              "Maryland",
              "Massachusetts",
              "Michigan",
              "Minnesota",
              "Mississippi",
              "Missouri",
              "Montana",
              "Nebraska",
              "Nevada",
              "New Hampshire",
              "New Jersey",
              "New Mexico",
              "New York",
              "North Carolina",
              "North Dakota",
              "Ohio",
              "Oklahoma",
              "Oregon",
              "Pennsylvania",
              "Rhode Island",
              "South Carolina",
              "South Dakota",
              "Tennessee",
              "Texas",
              "Utah",
              "Vermont",
              "Virginia",
              "Washington",
              "West Virginia",
              "Wisconsin",
              "Wyoming",
            ]

            for (const key of Object.keys(item)) {
              const value = item[key]
              if (typeof value === "string" && commonStates.includes(value)) {
                console.log(`Found state ${value} in field ${key}`)
                return value
              }
            }

            // If we still haven't found it, use the demo data to match cities to states
            const cityName = item[cityField]
            if (cityName) {
              const matchingDemoCity = demoLocations.find((d) => d.name.toLowerCase() === cityName.toLowerCase())
              if (matchingDemoCity) {
                console.log(`Matched city ${cityName} to state ${matchingDemoCity.state_name} from demo data`)
                return matchingDemoCity.state_name
              }
            }

            return "Unknown State"
          }

          // Transform with enhanced state detection
          const transformedLocations = result.data.map((item: any) => {
            const stateName = findStateName(item)

            return {
              name: item[cityField] || "Unknown Location",
              slug: item[slugField] || item[cityField]?.toLowerCase().replace(/\s+/g, "-") || "unknown",
              state_name: stateName,
              state_code: item[stateCodeField] || "",
              county_name: item[countyField] || "Unknown County",
              population: item[populationField] || "0",
            }
          })

          // Set locations and update UI
          setLocations(transformedLocations)
          setFilteredLocations(transformedLocations)
          setTotalLocations(transformedLocations.length)
          setTotalPages(Math.ceil(transformedLocations.length / itemsPerPage))

          // Extract states from fetched locations
          const stateNames = Array.from(new Set(transformedLocations.map((loc: Location) => loc.state_name)))
            .filter(Boolean)
            .sort() as string[]

          console.log("Detected state names:", stateNames)
          setStates(stateNames)

          console.log("Successfully loaded", transformedLocations.length, "locations")
        } else {
          console.warn("API returned no data or invalid format, using demo data as fallback")
          // Use demo data as fallback
          setLocations(demoLocations)
          setFilteredLocations(demoLocations)
          setTotalLocations(demoLocations.length)
          setTotalPages(Math.ceil(demoLocations.length / itemsPerPage))

          // Extract states from demo locations
          const stateNames = Array.from(new Set(demoLocations.map((loc: Location) => loc.state_name)))
            .filter(Boolean)
            .sort() as string[]
          setStates(stateNames)
        }

        setIsLoading(false)
      } catch (err) {
        console.error("Error fetching cities:", err)
        setError("Failed to load locations. Using demo data as fallback.")

        // Use demo data as fallback in case of error
        setLocations(demoLocations)
        setFilteredLocations(demoLocations)
        setTotalLocations(demoLocations.length)
        setTotalPages(Math.ceil(demoLocations.length / itemsPerPage))

        // Extract states from demo locations
        const stateNames = Array.from(new Set(demoLocations.map((loc) => loc.state_name)))
          .filter(Boolean)
          .sort() as string[]
        setStates(stateNames)

        setIsLoading(false)
      }
    }

    fetchCities()
  }, [itemsPerPage])

  // Apply filters and pagination with animation
  useEffect(() => {
    console.log("Filter changed, applying filters. Selected state:", selectedState)

    // Start filtering animation
    setIsFiltering(true)

    // Use a timeout to allow fade-out animation to complete
    const filterTimeout = setTimeout(() => {
      // Start with all locations
      let filtered = [...locations]

      // Apply tab-specific search filter first
      if (selectedTab === "cities" && citySearchTerm.trim() !== "") {
        const searchLower = citySearchTerm.toLowerCase()
        filtered = filtered.filter((location) => {
          const name = location.name?.toLowerCase() || ""
          const state = location.state_name?.toLowerCase() || ""
          const county = location.county_name?.toLowerCase() || ""
          return name.includes(searchLower) || state.includes(searchLower) || county.includes(searchLower)
        })
      } else if (selectedTab === "states" && stateSearchTerm.trim() !== "") {
        const searchLower = stateSearchTerm.toLowerCase()
        // For states tab, search only in state names
        filtered = filtered.filter((location) => {
          const state = location.state_name?.toLowerCase() || ""
          return state.includes(searchLower)
        })
      }

      // Apply state filter if selected
      if (selectedState && selectedState !== "") {
        console.log(`Filtering by state: "${selectedState}"`)

        filtered = filtered.filter((location) => {
          const locationState = String(location.state_name || "").toLowerCase()
          const selectedStateLower = selectedState.toLowerCase()
          return locationState === selectedStateLower
        })
      }

      // City filter - case insensitive partial match
      if (selectedCity && selectedCity !== "") {
        filtered = filtered.filter(
          (location) => location.name && location.name.toLowerCase().includes(selectedCity.toLowerCase()),
        )
      }

      // Population filter
      if (populationFilter && populationFilter !== "") {
        filtered = filtered.filter((location) => {
          const pop = location.population ? Number.parseInt(location.population) : 0
          if (populationFilter === "small") return pop < 50000
          if (populationFilter === "medium") return pop >= 50000 && pop < 500000
          if (populationFilter === "large") return pop >= 500000
          return true
        })
      }

      // Set filtered results and update pagination
      setFilteredLocations(filtered)
      setTotalLocations(filtered.length)
      const newTotalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage))
      setTotalPages(newTotalPages)

      // Reset to first page if current page is now invalid
      if (currentPage > newTotalPages) {
        setCurrentPage(1)
      }

      // End filtering animation
      setIsFiltering(false)
    }, 300) // Short delay for animation

    // Clean up timeout if component unmounts or filters change again
    return () => clearTimeout(filterTimeout)
  }, [
    selectedState,
    selectedCity,
    populationFilter,
    locations,
    itemsPerPage,
    currentPage,
    practiceAreas,
    citySearchTerm,
    stateSearchTerm,
    selectedTab,
  ])

  // Handle tab change
  const handleTabChange = (tab: string) => {
    setSelectedTab(tab)
    setCurrentPage(1) // Reset to first page when changing tabs
    // Clear search terms when switching tabs
    if (tab === "cities") {
      setStateSearchTerm("")
    } else {
      setCitySearchTerm("")
    }
  }

  // Handle clear filters
  const handleClearFilters = () => {
    setSelectedState("")
    setSelectedCity("")
    setPopulationFilter("")
    setPracticeAreas([])
    setCurrentPage(1) // Reset to first page when clearing filters
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
        <p className="font-medium">Error</p>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div id="locations">
      <HeroSection />
      <h1 className="text-4xl font-bold mb-6">Our Locations</h1>
      <p className="text-lg text-gray-400 mb-8 max-w-4xl">
        TOP USA LAW provides expert legal representation across the United States. Find a location near you to get
        started with your case.
      </p>
      <div className="container mx-auto px-4 py-8">
        {/* Search Input */}
        <TabsNavigation selectedTab={selectedTab} setSelectedTab={handleTabChange} />

        {isLoading ? (
          <div className="w-full flex flex-col items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-600 mb-4"></div>
            <p className="text-gray-800">Loading locations...</p>
          </div>
        ) : locations.length > 0 ? (
          selectedTab === "cities" ? (
            <div>
              {/* Cities Search */}
              <div className="mb-6">
                <label htmlFor="city-search" className="sr-only">
                  Search cities
                </label>
                <div className="relative rounded-xl shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md focus-within:shadow-md">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="h-6 w-6 text-yellow-500 transition-all duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="city-search"
                    id="city-search"
                    className="block w-full pl-12 pr-14 py-3 text-gray-900 sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 
                    focus:ring-yellow-500 focus:ring-opacity-50 focus:border-yellow-500 focus:outline-none transition-all duration-200 placeholder:text-gray-900"
                    placeholder="Search cities, states, or counties..."
                    value={citySearchTerm}
                    onChange={(e) => setCitySearchTerm(e.target.value)}
                  />
                  {citySearchTerm && (
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center hover:text-yellow-500 transition-colors duration-200"
                      onClick={() => setCitySearchTerm("")}
                    >
                      <svg
                        className="h-6 w-6 text-gray-400 transition-all duration-200 hover:text-yellow-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {/* No results message for cities */}
              {citySearchTerm && filteredLocations.length === 0 ? (
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center">
                    <svg className="h-6 w-6 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">No cities found</h3>
                      <p className="mt-1 text-sm text-gray-600">
                        No cities match your search for "{citySearchTerm}". Try searching for a different city or state.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <CitiesView locations={filteredLocations} />
              )}
            </div>
          ) : (
            <div>
              {/* States Search */}
              <div className="mb-6">
                <label htmlFor="state-search" className="sr-only">
                  Search states
                </label>
                <div className="relative rounded-xl shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md focus-within:shadow-md">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg
                      className="h-6 w-6 text-yellow-500 transition-all duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="state-search"
                    id="state-search"
                    className="block w-full pl-12 pr-14 py-3 sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 focus:border-yellow-500 focus:outline-none transition-all duration-200"
                    placeholder="Search states..."
                    value={stateSearchTerm}
                    onChange={(e) => setStateSearchTerm(e.target.value)}
                  />
                  {stateSearchTerm && (
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-4 flex items-center hover:text-yellow-500 transition-colors duration-200"
                      onClick={() => setStateSearchTerm("")}
                    >
                      <svg
                        className="h-6 w-6 text-gray-400 transition-all duration-200 hover:text-yellow-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              {/* No results message for states */}
              {stateSearchTerm && filteredLocations.length === 0 ? (
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex items-center">
                    <svg className="h-6 w-6 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">No states found</h3>
                      <p className="mt-1 text-sm text-gray-600">
                        No states match your search for "{stateSearchTerm}". Try searching for a different state name.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <StatesView locations={filteredLocations} />
              )}
            </div>
          )
        ) : (
          <div className="bg-white rounded-lg p-8 text-center">
            <svg
              className="h-12 w-12 text-gray-400 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <p className="text-gray-800 mb-3 text-lg">No locations found with the selected filters.</p>
            <p className="text-gray-600 mb-4">Try adjusting your filters to see more results.</p>
            <button
              onClick={handleClearFilters}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Clear filters
            </button>
          </div>
        )}

        <StatsSection />
        <WhyChooseUs />
        <FaqSection />
      </div>
    </div>
  )
}
