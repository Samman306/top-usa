"use client"

import { useRouter } from "next/navigation"
import { Gavel, Instagram, Twitter, Facebook, Youtube, Star, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ContactUsButton } from "@/components/contact-us-button"
import Link from "next/link"

export default function Footer() {
  const router = useRouter()

  return (
    <footer className="bg-black text-white">
      <div className="container py-16">
        {/* Top Section with Stats */}
        <div className="mb-16 border-b border-gray-800 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-yellow-500 mb-2">50+</div>
              <div className="text-lg">States Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-yellow-500 mb-2">5000+</div>
              <div className="text-lg">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-yellow-500 mb-2">$100M+</div>
              <div className="text-lg">Recovered for Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-yellow-500 mb-2">24/7</div>
              <div className="text-lg">Client Support</div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Gavel className="h-9 w-9 text-yellow-500" />
              <span className="font-extrabold text-2xl tracking-tight">
                TOP USA <span className="text-yellow-500">LAW</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing expert legal representation across all 50 states. When you need experienced attorneys fighting
              for your rights, you need TOP USA LAW.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5 text-yellow-500" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5 text-yellow-500" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5 text-yellow-500" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
                <Youtube className="h-5 w-5 text-yellow-500" />
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <Star className="h-5 w-5 text-yellow-500" />
              <Star className="h-5 w-5 text-yellow-500" />
              <Star className="h-5 w-5 text-yellow-500" />
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="ml-2 text-gray-400">5.0 from 1,200+ reviews</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-yellow-500">Practice Areas</h3>
            <ul className="space-y-4">
              {[
                { title: "Personal Injury", href: "/practice-areas/personal-injury" },
                { title: "Car Accidents", href: "/practice-areas/car-accidents" },
                { title: "Truck Accidents", href: "/practice-areas/truck-accidents" },
                { title: "Uber and Lyft Accidents", href: "/practice-areas/uber-lyft-accidents" },
                { title: "Work Accidents", href: "/practice-areas/work-accidents" },
                { title: "Construction Accidents", href: "/practice-areas/construction-accidents" },
              ].map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-yellow-500">Top Locations</h3>
            <ul className="space-y-4">
              {[
                { title: "California", href: "/locations/states/california" },
                { title: "Texas", href: "/locations/states/texas" },
                { title: "Florida", href: "/locations/states/florida" },
                { title: "New York", href: "/locations/states/new-york" },
                { title: "Illinois", href: "/locations/states/illinois" },
                { title: "Pennsylvania", href: "/locations/states/pennsylvania" },
                { title: "Ohio", href: "/locations/states/ohio" },
                { title: "Georgia", href: "/locations/states/georgia" },
                { title: "All Locations", href: "/locations" },
              ].map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-bold text-xl mt-8 mb-6 text-yellow-500">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { title: "Our Attorneys", href: "/team" },
                { title: "About Us", href: "/about" },
                { title: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-yellow-500 transition-colors flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-yellow-500">Newsletter</h3>
            <p className="text-gray-400 mb-4">Get legal tips and insights to help protect your rights and interests.</p>
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <ContactUsButton variant="primary" className="w-full" />
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-xl mb-6 text-yellow-500">24/7 Legal Hotline</h3>
              <p className="text-gray-400 mb-2">For urgent legal matters:</p>
              <a
                href="tel:+18889997777"
                className="text-2xl font-bold text-yellow-500 hover:underline mb-4 inline-block"
              >
                1-888-999-7777
              </a>
              <ContactUsButton variant="primary" className="w-full mt-4" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
            <p className="text-sm text-gray-500 mb-2 md:mb-0 md:mr-6">
              © {new Date().getFullYear()} TOP USA LAW. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-yellow-500">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-yellow-500">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">As seen on:</span>
            <span className="text-sm font-medium">Forbes</span>
            <span className="text-gray-700">•</span>
            <span className="text-sm font-medium">CNN</span>
            <span className="text-gray-700">•</span>
            <span className="text-sm font-medium">USA Today</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

