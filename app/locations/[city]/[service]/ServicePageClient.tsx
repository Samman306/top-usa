"use client"

import Link from "next/link"
import { ArrowRight, MapPin, Phone, Mail, Award, Star, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"
import { getCityServiceUrl, getStateUrl } from "@/lib/url-utils"
import { useEffect, useState, useMemo } from "react"
import { guessStateForCity, getStateById } from "@/lib/allstates"
import { getStateByName } from "@/lib/allstates"

// Import our location utility functions
import { getLocationBySlugFromAPI, type Location } from "@/lib/locations"
import { allPracticeAreas } from "@/lib/practice-areas"

// Add schema data to city-service pages
import { LocalBusinessSchema, FAQSchema, BreadcrumbSchema } from "@/app/components/schema-org"
import { slugify, slugifyRevert } from "camote-utils"

export type ServicePageClientProps = {
  city: string;
  service: string;
  stateInfo: { name: string; slug: string };
}

export default function ServicePageClient({ city, service, stateInfo }: ServicePageClientProps) {
  // State for city, state, and service data
  const [cityData, setCityData] = useState<Location | null>(null)
  const [serviceData, setServiceData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Use the directly provided city and service slugs
  const citySlug = city || ''
  const serviceSlug = service || ''

  // Create a function to format city name from slug
  const formatCityName = (slug: string) => {
    if (!slug) return 'Unknown City'
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }
  
  // IMPORTANT: All useMemo hooks must be declared in the same order on every render
  // Default values
  const defaultCity = useMemo<Location>(() => ({ 
    city: formatCityName(citySlug), 
    state_id: stateInfo.slug,
    state_name: stateInfo.name,
    county_name: "",
    county_fips: "",
    population: "",
    zips: "",
    avg_commute_time_minutes: "",
    estimated_annual_accidents: "",
    nearby_hospitals: "",
    secondary_keyword: "legal services",
    traffic_congestion_level: "",
    main_courthouse: "",
    most_dangerous_road: "",
    main_hospital: "",
    top_dangerous_intersections: "",
    fatal_crashes_last_year: "",
    peak_accident_times: "",
    ambulance_response_time_min: "",
    closest_trauma_center: "",
    uninsured_driver_pct: "",
    personal_injury_case_filings: "",
    slug: citySlug || 'unknown-city'
  }), [citySlug])
  
  // Default service data in case lookup fails
  const defaultService = useMemo(() => ({
    title: "Personal Injury",
    slug: "personal-injury",
    description: "Personal injury legal services for victims of accidents and negligence."
  }), [])

  // Fetch city and service data from our API
  useEffect(() => {
    // Skip fetching if no slugs are available yet
    if (!citySlug && !serviceSlug) return
    
    // Save references to the current default values to use in the async function
    const currentDefaultCity = {...defaultCity};
    const currentDefaultService = {...defaultService};
    
    const fetchData = async () => {
      setLoading(true)
      try {
        // Make sure we have a citySlug before trying to fetch
        if (!citySlug || citySlug.trim() === '') {
          console.warn("Missing city slug in URL, using defaults") 
          setError("No city specified in URL")
          setLoading(false)
          return
        }
        
        // Fetch city data using our locations API
        const locationData = await getLocationBySlugFromAPI(citySlug)
        
        if (locationData) {
          setCityData(locationData)
        } else {
          // Create fallback based on URL slug
          setCityData(currentDefaultCity)
        }

        // Find matching service from our practice areas
        if (!serviceSlug) {
          setError("No service specified in URL")
          setLoading(false)
          return
        }
        
        const matchedService = allPracticeAreas.find(area => 
          area.slug === serviceSlug
        )
        
        if (matchedService) {
          setServiceData(matchedService)
        } else {
          setServiceData(currentDefaultService)
        }

        setError(null)
      } catch (err: any) {
        setError("Failed to load page data")
        // Use defaults
        setCityData(currentDefaultCity)
        setServiceData(currentDefaultService)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [citySlug, serviceSlug])

  // Skeleton loading effect
  if (loading) {
    return (
      <div className="bg-gradient-to-r from-primary/90 to-primary  py-12">


      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="space-y-4 animate-pulse bg-gray-800">
          <div className="h-8 w-1/2 bg-gray-200 bg-gray-700 rounded-full"></div>
          <div className="h-4 w-1/3 bg-gray-200 bg-gray-700 rounded-full"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 mt-8 animate-pulse bg-gray-800">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="p-4 bg-gray-200 bg-gray-700 rounded-lg h-24"></div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-6 mt-8 animate-pulse bg-gray-800">
          <div className="bg-gray-200 bg-gray-700 rounded-lg h-64"></div>
          <div className="bg-gray-200 bg-gray-700 rounded-lg h-64"></div>
          <div className="bg-gray-200 bg-gray-700 rounded-lg h-64"></div>
        </div>
        </div>
        </div>
    )
  }

  if (error) {
    return <div className="container my-16 text-center py-24 text-red-500 font-medium">{error}</div>
  }
  
  // If we don't have the data we need, show a 404 message
  if (!cityData || !serviceData) {
    return <div className="container my-16 text-center py-24 text-red-500 font-medium">
      <h2 className="text-2xl font-bold mb-2">404 - Page Not Found</h2>
      <p>Unable to load information for {citySlug ? `"${citySlug}"` : 'the city'} {serviceSlug ? `and "${serviceSlug}" service` : ''}.</p>
      <div className="mt-6">
        <Link href="/locations" className="text-primary hover:underline">Browse all locations</Link>
      </div>
    </div>  
  }

  // Access data with fallbacks
  const cityInfo = cityData || defaultCity
  const serviceInfo = serviceData || defaultService

  const stateName = stateInfo.name
  // Create state object with explicit properties to avoid undefined errors
  const state = {
    name: stateName,
    abbreviation: getStateByName(stateName)?.id,
    slug: getStateByName(stateName)?.slug
  };
  
  // Get the first zip code from the comma-separated list with null checks
  const primaryZipCode = cityInfo?.zips?.split(',')[0]?.trim() || '00000';
  
  // Get safe service title with proper fallback
  const serviceTitle = serviceInfo?.title || 'Legal';
  const serviceTitleLower = (serviceTitle || 'legal').toLowerCase();
  const cityName = cityInfo?.city || 'Your City';
  
  // Build service content with careful null handling
  const serviceContent = {
    heroTitle: `${serviceTitle} Attorneys in ${cityName}, ${stateName}`,
    heroSubtitle: `Expert legal representation for ${serviceTitleLower} cases in ${cityName.toLowerCase()} and throughout ${stateName}.`,
    faqs: [
      {
        question: `How can a ${serviceTitleLower} attorney in ${cityName} help me?`,
        answer: `Our ${cityName} ${serviceTitleLower} attorneys provide comprehensive legal representation, handling all aspects of your case from investigation to resolution. We'll protect your rights and work to secure the best possible outcome.`,
      },
      {
        question: `What does it cost to hire a ${serviceTitleLower} lawyer in ${cityName}?`,
        answer: `We work on a contingency fee basis for most ${serviceTitleLower} cases, which means you pay nothing unless we win your case. Initial consultations are always free.`,
      },
    ],
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/90 to-primary pb-16 pt-8 text-primary-foreground">
        <div className="container">
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Link href="/" className="text-gray-400 hover:text-yellow-500 text-sm inline-flex items-center">
              Home
            </Link>
            <span className="text-gray-600 text-sm">/</span>
            <Link href="/locations" className="text-gray-400 hover:text-yellow-500 text-sm inline-flex items-center">
              Locations
            </Link>
            <span className="text-gray-600 text-sm">/</span>
            {stateInfo.name && <>
              <Link href={`/locations/state/${slugify(stateInfo.slug)}`} className="text-gray-400 hover:text-yellow-500 text-sm inline-flex items-center">
                {stateInfo.name}
              </Link>
              <span className="text-gray-600 text-sm">/</span>
            </>}
            <Link
              href={`/locations/${slugifyRevert(stateInfo.name)}.${cityInfo.slug}`}
              className="text-gray-400 hover:text-yellow-500 text-sm inline-flex items-center">
              {cityInfo.city}
            </Link>
            <span className="text-gray-600 text-sm">/</span>
            <span className="text-sm font-semibold">{serviceInfo.title || 'Legal Services'}</span>  
          </div>

          {/* Hero Title */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">
                {serviceContent.heroTitle}
              </h1>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
                {serviceContent.heroSubtitle}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-yellow-300" />
                  <span className="font-bold">5.0</span>
                  <span className="text-primary-foreground/80">Google Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-yellow-300" />
                  <span className="font-bold">Top Rated</span>
                  <span className="text-primary-foreground/80">Attorneys</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-yellow-300" />
                  <span className="font-bold">Free</span>
                  <span className="text-primary-foreground/80">Consultation</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 px-8 py-2"
                >
                  Free Case Review <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="tel:+15551234567"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium bg-transparent border border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 h-11 px-8 py-2"
                >
                  <Phone className="mr-2 h-5 w-5" /> Call (555) 123-4567
                </Link>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <ClientShutterstockImage
                query={`lawyer ${cityInfo?.city || ''} ${state?.name || 'United States'}`}
                alt={`TOP USA LAW office in ${cityInfo?.city || 'your city'}, ${state?.name || 'United States'}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <div className="text-white">
                  <p className="text-xl font-bold mb-2">Available 24/7</p>
                  <p className="text-lg">No Fee Unless We Win</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-700">
              <ClientShutterstockImage
                query={`law firm ${cityInfo?.city || ''}`}
                alt={`TOP USA LAW office in ${cityInfo?.city || 'your city'}, ${state?.name || 'United States'}`}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">
                Expert {serviceInfo.title || 'Legal'} Representation in {cityInfo.city || 'Your Area'}
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300">
                  At TOP USA LAW, we specialize in {(serviceInfo?.title || 'legal').toLowerCase()} cases in {cityInfo?.city || 'your city'} and throughout{" "}
                  {state?.name || 'United States'}. Our attorneys have extensive experience handling these specific legal matters in the
                  local courts.
                </p>
                <p className="text-gray-300">
                  {serviceInfo?.title || 'Legal'} cases in {cityInfo?.city || 'your city'} require specialized knowledge of both state and local
                  regulations. Our team stays up-to-date with all relevant laws to provide you with the most effective
                  representation possible.
                </p>
                <p className="text-gray-300">
                  Whether you're dealing with a minor incident or a complex case, our {cityInfo?.city || 'experienced'}{" "}
                  {(serviceInfo?.title || 'legal').toLowerCase()} attorneys are ready to provide the skilled advocacy and personalized
                  attention you deserve.
                </p>
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold bg-yellow-500 hover:bg-yellow-600 text-black h-11 px-8 py-2"
                  >
                    Schedule a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-black text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Our {cityInfo.city || 'Top'} {serviceInfo.title || 'Legal'} Attorneys
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-white">Local Expertise</h3>
              <p className="text-gray-300">
                Our attorneys have deep knowledge of {cityInfo?.city || 'your city'}'s local courts, judges, and legal procedures specific
                to {(serviceInfo?.title || 'legal').toLowerCase()} cases.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-white">Proven Results</h3>
              <p className="text-gray-300">
                We've successfully handled hundreds of {(serviceInfo.title || 'legal').toLowerCase()} cases in {cityInfo.city || 'your city'}, securing
                substantial settlements for our clients.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
              <h3 className="text-xl font-bold mb-3 text-white">Personalized Approach</h3>
              <p className="text-gray-300">
                We treat each {(serviceInfo.title || 'legal').toLowerCase()} case in {cityInfo.city || 'your city'} with the individual attention it
                deserves, tailoring our strategy to your specific situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Our {cityInfo.city || 'Local'} Office</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">{cityInfo.city || 'Local'} Location</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-white">
                      123 Legal Avenue
                      <br />
                      Suite 500
                      <br />
                      {cityInfo?.city || 'Your City'}, {state?.abbreviation || 'US'} {primaryZipCode}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-yellow-500 mr-2" />
                  <p className="text-white">(555) 123-4567</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-yellow-500 mr-2" />
                  <p className="text-white">{cityInfo?.slug || 'contact'}@topusalaw.com</p>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-yellow-500 mr-2" />
                  <p className="text-white">Monday - Friday: 8:30 AM - 5:30 PM</p>
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10" asChild>
                  <Link href="/contact">
                    Contact This Office <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">Free Case Evaluation</h3>
              <p className="text-gray-300 mb-4">
                If you're dealing with a {(serviceInfo.title || 'legal').toLowerCase()} issue in {cityInfo.city || 'your city'}, don't wait to get the
                legal help you need. Contact our experienced attorneys today for a free, no-obligation consultation.
              </p>
              <p className="text-gray-300 mb-4">
                During your consultation, we'll review the details of your case, explain your legal options, and help
                you understand the potential outcomes. Our goal is to provide you with the information you need to make
                informed decisions about your legal situation.
              </p>
              <div className="mt-6">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold w-full" asChild>
                  <Link href="/contact">
                    Schedule Your Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-yellow-500 text-black">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need {serviceInfo.title || 'Legal'} Assistance in {cityInfo.city || 'Your Area'}?
          </h2>
          <p className="text-black/90 max-w-2xl mx-auto mb-8">
            Our {cityInfo.city || 'experienced'} {(serviceInfo.title || 'legal').toLowerCase()} attorneys are ready to help with your legal needs. Contact us
            today to schedule a free consultation at our local office.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold bg-black hover:bg-gray-900 text-white border border-black h-11 px-8 py-2"
          >
            Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Schema.org structured data */}
      <LocalBusinessSchema city={cityInfo?.city || 'Your City'} state={state?.name || 'United States'} />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.topusalaw.com" },
          { name: "Locations", url: "https://www.topusalaw.com/locations" },
          { name: state?.name || 'United States', url: `https://www.topusalaw.com${getStateUrl(state?.slug || 'united-states')}` },
          { name: cityInfo?.city || 'Your City', url: `https://www.topusalaw.com/locations/${cityInfo?.slug || 'unknown-city'}` },
          { name: serviceInfo?.title || 'Legal Services', url: `https://www.topusalaw.com${getCityServiceUrl(cityInfo?.slug || 'unknown-city', serviceInfo?.slug || 'legal-services')}` },
        ]}
      />

      <FAQSchema questions={serviceContent.faqs} />
    </>
  )
}
