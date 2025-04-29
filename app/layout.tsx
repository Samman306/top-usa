import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

// Update the metadata
export const metadata: Metadata = {
  title: {
    template: "%s | TOP USA LAW",
    default: "TOP USA LAW | Professional Legal Services",
  },
  description:
    "TOP USA LAW provides expert legal services with a client-centered approach. Specializing in personal injury, car accidents, truck accidents, and more.",
  keywords: ["law firm", "attorney", "legal services", "lawyer", "personal injury", "car accidents", "truck accidents"],
  authors: [{ name: "TOP USA LAW" }],
  creator: "TOP USA LAW",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <header className="bg-black text-white py-4">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">TOP USA LAW</div>
                <nav className="hidden md:flex space-x-6">
                  <a href="/" className="hover:text-yellow-500">
                    Home
                  </a>
                  <a href="/practice-areas" className="hover:text-yellow-500">
                    Practice Areas
                  </a>
                  <a href="/locations" className="hover:text-yellow-500">
                    Locations
                  </a>
                  <a href="/about-us" className="hover:text-yellow-500">
                    About Us
                  </a>
                  <a href="/contact" className="hover:text-yellow-500">
                    Contact
                  </a>
                </nav>
                <div className="md:hidden">
                  <button className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">TOP USA LAW</h3>
                  <p className="text-gray-400">Expert legal representation nationwide.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Practice Areas</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <a href="/practice-areas/personal-injury" className="hover:text-yellow-500">
                        Personal Injury
                      </a>
                    </li>
                    <li>
                      <a href="/practice-areas/car-accidents" className="hover:text-yellow-500">
                        Car Accidents
                      </a>
                    </li>
                    <li>
                      <a href="/practice-areas/truck-accidents" className="hover:text-yellow-500">
                        Truck Accidents
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Locations</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <a href="/locations" className="hover:text-yellow-500">
                        All Locations
                      </a>
                    </li>
                    <li>
                      <a href="/locations/new-york" className="hover:text-yellow-500">
                        New York
                      </a>
                    </li>
                    <li>
                      <a href="/locations/los-angeles" className="hover:text-yellow-500">
                        Los Angeles
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Contact</h4>
                  <address className="not-italic text-gray-400">
                    <p>123 Legal Street</p>
                    <p>New York, NY 10001</p>
                    <p className="mt-2">Phone: (800) 123-4567</p>
                    <p>Email: info@topusalaw.com</p>
                  </address>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} TOP USA LAW. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
