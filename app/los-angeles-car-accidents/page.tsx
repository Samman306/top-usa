import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Phone, Mail, Award, Star, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LocalBusinessSchema, FAQSchema, BreadcrumbSchema } from "@/app/components/schema-org"

export const metadata: Metadata = {
  title: "Car Accidents Attorneys in Los Angeles, California | TOP USA LAW",
  description:
    "Expert car accident attorneys in Los Angeles, California. Our experienced lawyers provide comprehensive legal representation for all car accident matters. Contact us today.",
}

export default function LosAngelesCarAccidentsPage() {
  // Hardcoded data for Los Angeles
  const city = {
    name: "Los Angeles",
    slug: "los-angeles",
    zipCode: "90001",
  }

  const state = {
    name: "California",
    abbreviation: "CA",
    slug: "california",
  }

  const service = "Car Accidents"
  const serviceSlug = "car-accidents"

  // Service-specific content
  const serviceContent = {
    heroTitle: `${service} Attorneys in ${city.name}, ${state.name}`,
    heroSubtitle: `Expert legal representation for ${service.toLowerCase()} cases in ${city.name} and throughout ${state.name}.`,
    faqs: [
      {
        question: `How can a ${service.toLowerCase()} attorney in ${city.name} help me?`,
        answer: `Our ${city.name} ${service.toLowerCase()} attorneys provide comprehensive legal representation, handling all aspects of your case from investigation to resolution. We'll protect your rights and work to secure the best possible outcome.`,
      },
      {
        question: `What does it cost to hire a ${service.toLowerCase()} lawyer in ${city.name}?`,
        answer: `We work on a contingency fee basis for most ${service.toLowerCase()} cases, which means you pay nothing unless we win your case. Initial consultations are always free.`,
      },
    ],
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/90 to-primary py-16 md:py-24 text-primary-foreground">
        <div className="container">
          <div className="flex flex-wrap items-center gap-2 mb-6 text-primary-foreground/80">
            <Link href="/" className="hover:text-primary-foreground text-sm inline-flex items-center">
              Home
            </Link>
            <span className="text-sm">/</span>
            <Link href="/locations" className="hover:text-primary-foreground text-sm inline-flex items-center">
              Locations
            </Link>
            <span className="text-sm">/</span>
            <Link
              href={`/locations/states/${state.slug}`}
              className="hover:text-primary-foreground text-sm inline-flex items-center"
            >
              {state.name}
            </Link>
            <span className="text-sm">/</span>
            <Link
              href={`/locations/cities/${city.slug}`}
              className="hover:text-primary-foreground text-sm inline-flex items-center"
            >
              {city.name}
            </Link>
            <span className="text-sm">/</span>
            <span className="text-sm">{service}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {serviceContent.heroTitle}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">{serviceContent.heroSubtitle}</p>

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
                <Button size="lg" variant="secondary" className="text-lg" asChild>
                  <Link href="/contact">
                    Free Case Review <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link href="tel:+15551234567">
                    <Phone className="mr-2 h-5 w-5" /> Call (555) 123-4567
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt={`Top-rated ${service.toLowerCase()} attorneys in ${city.name}, ${state.name}`}
                fill
                className="object-cover"
                priority
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

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our {city.name} {service} Attorneys
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team of experienced {service.toLowerCase()} attorneys provides exceptional legal representation
              tailored to your specific needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-muted rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Local Expertise</h3>
              <p className="text-muted-foreground">
                Our attorneys have deep knowledge of {city.name}'s local courts, judges, and legal procedures specific
                to {service.toLowerCase()} cases.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-muted-foreground">
                We've successfully handled hundreds of {service.toLowerCase()} cases in {city.name}, securing
                substantial settlements for our clients.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Personalized Approach</h3>
              <p className="text-muted-foreground">
                We treat each {service.toLowerCase()} case in {city.name} with the individual attention it deserves,
                tailoring our strategy to your specific situation.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" className="text-lg" asChild>
              <Link href="/contact">
                Schedule Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Contact {city.name}'s Premier {service} Attorneys
              </h2>
              <p className="text-xl mb-8">
                Don't face your {service.toLowerCase()} case alone. Our award-winning attorneys are ready to fight for
                you. Contact us 24/7 for a free, no-obligation consultation.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary-foreground mr-4 mt-1" />
                  <div>
                    <p className="font-bold text-lg">Our {city.name} Office</p>
                    <p>
                      123 Legal Avenue, Suite 500
                      <br />
                      {city.name}, {state.abbreviation} {city.zipCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary-foreground mr-4" />
                  <div>
                    <p className="font-bold text-lg">Call Us 24/7</p>
                    <p>(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary-foreground mr-4" />
                  <div>
                    <p className="font-bold text-lg">Email Us</p>
                    <p>{city.slug}@topusalaw.com</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="text-lg" asChild>
                  <Link href="/contact">
                    Free Case Evaluation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link href="tel:+15551234567">
                    <Phone className="mr-2 h-5 w-5" /> Call Now
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-white text-foreground rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Get Your Free Case Review</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="firstName"
                      className="w-full px-3 py-2 border border-input rounded-md"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="lastName"
                      className="w-full px-3 py-2 border border-input rounded-md"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border border-input rounded-md"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone <span className="text-destructive">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-3 py-2 border border-input rounded-md"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Tell Us About Your Case <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-3 py-2 border border-input rounded-md"
                    placeholder="Please briefly describe your situation"
                    rows={4}
                    required
                  ></textarea>
                </div>

                <Button type="submit" className="w-full text-lg">
                  Submit Your Case Details
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By submitting, you agree to our privacy policy and consent to being contacted about your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions About {service} in {city.name}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about {service.toLowerCase()} cases in {city.name} and throughout{" "}
              {state.name}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {serviceContent.faqs.map((faq, index) => (
              <div key={index} className="bg-muted rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl mb-6">
              Have more questions? Our {city.name} {service.toLowerCase()} attorneys are available 24/7 to provide
              answers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-bold bg-black hover:bg-gray-900 text-white border border-black h-11 px-8 py-2"
              >
                Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <Link href="tel:+15551234567">
                  <Phone className="mr-2 h-5 w-5" /> Call (555) 123-4567
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <LocalBusinessSchema city={city.name} state={state.name} />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.topusalaw.com" },
          { name: "Locations", url: "https://www.topusalaw.com/locations" },
          { name: state.name, url: `https://www.topusalaw.com/locations/states/${state.slug}` },
          { name: city.name, url: `https://www.topusalaw.com/locations/cities/${city.slug}` },
          { name: service, url: `https://www.topusalaw.com/${city.slug}-${serviceSlug}` },
        ]}
      />

      <FAQSchema questions={serviceContent.faqs} />
    </>
  )
}

