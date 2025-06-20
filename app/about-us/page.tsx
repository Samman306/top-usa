import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Award, MapPin, Phone, Mail, Star, Shield, Gavel, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "About Meridian Law Group | Top-Rated Attorneys",
  description:
    "Meridian Law Group is a premier law firm with award-winning attorneys who have recovered over $1 billion for clients nationwide. Learn about our history, mission, and elite legal team.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/90 to-primary py-16 md:py-24 text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl  text-yellow-500 lg:text-6xl font-bold mb-6 leading-tight">
                About Meridian Law Group
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
                A premier law firm with award-winning attorneys who have recovered over $1 billion for clients
                nationwide.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="h-6 w-6 text-yellow-300" />
                  <span className="font-bold">5.0</span>
                  <span className="text-primary-foreground/80">Google Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-yellow-300" />
                  <span className="font-bold">Top 1%</span>
                  <span className="text-primary-foreground/80">of Law Firms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-yellow-300" />
                  <span className="font-bold">99%</span>
                  <span className="text-primary-foreground/80">Success Rate</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="text-lg" asChild>
                  <Link href="/contact">
                    Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  asChild
                >
                  <Link href="tel:+15551234567">
                    <Phone className="mr-2 h-5 w-5" /> Call (555) 123-4567
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse" />}>
                <ClientShutterstockImage
                  query="judge"
                  alt="Meridian Law Group's impressive headquarters building featuring modern architecture with glass facades and professional landscaping"
                  fill
                  className="object-cover"
                  priority
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse" />}>
                <ClientShutterstockImage
                  query="law library"
                  alt="Founding partners James Wilson and Sarah Johnson standing in the law library of Meridian Law Group, surrounded by legal books and awards"
                  fill
                  className="object-cover"
                  priority
                />
              </Suspense>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl  text-yellow-500 font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Founded in 1995 by James Wilson and Sarah Johnson, Meridian Law Group began with a simple mission: to
                provide exceptional legal representation to those who need it most.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                What started as a small two-attorney practice has grown into one of the nation's most respected law
                firms, with offices in 12 states and a team of over 75 elite attorneys.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Throughout our growth, we've maintained our founding principles: relentless advocacy, personalized
                attention, and a commitment to securing maximum compensation for our clients.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Today, Meridian Law Group is recognized as a legal powerhouse, having recovered over $1 billion for our
                clients and establishing precedent-setting verdicts that have changed the legal landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl  text-yellow-500 font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At Meridian Law Group, we're driven by a singular purpose: to level the playing field between everyday
              people and powerful corporations and insurance companies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Gavel className="h-12 w-12 text-primary" />,
                title: "Relentless Advocacy",
                description:
                  "We fight tirelessly for our clients, preparing every case as if it will go to trial and never settling for less than what our clients deserve.",
              },
              {
                icon: <Shield className="h-12 w-12 text-primary" />,
                title: "Client-First Approach",
                description:
                  "We treat every client like family, providing personalized attention, clear communication, and compassionate guidance through difficult times.",
              },
              {
                icon: <Scale className="h-12 w-12 text-primary" />,
                title: "Justice for All",
                description:
                  "We believe quality legal representation should be accessible to everyone, which is why we work on contingency - you pay nothing unless we win.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-background rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="mb-4 text-yellow-500">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-yellow-500">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-yellow-500 font-bold mb-6">
                Ready to Work with Meridian Law Group?
              </h2>
              <p className="text-xl mb-8">
                Our award-winning attorneys are ready to fight for you. Contact us today for a free, no-obligation
                consultation.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary-foreground mr-4 mt-1" />
                  <div>
                    <p className="font-bold text-lg">Headquarters</p>
                    <p>
                      123 Legal Avenue, Suite 500
                      <br />
                      New York, NY 10001
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
                    <p>info@meridianlaw.com</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="text-lg" asChild>
                  <Link href="/contact">
                    Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
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
              <h3 className="text-2xl font-bold mb-6 text-center">Get Your Free Consultation</h3>
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
    </>
  )
}
