import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
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
  metadataBase: new URL("https://www.topusalaw.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.topusalaw.com",
    siteName: "TOP USA LAW",
    title: "TOP USA LAW | Professional Legal Services",
    description:
      "TOP USA LAW provides expert legal services with a client-centered approach. Specializing in personal injury, car accidents, truck accidents, and more.",
    images: [
      {
        url: "/images/top-usa-law-og.jpg",
        width: 1200,
        height: 630,
        alt: "TOP USA LAW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOP USA LAW | Professional Legal Services",
    description:
      "TOP USA LAW provides expert legal services with a client-centered approach. Specializing in personal injury, car accidents, truck accidents, and more.",
    images: ["/images/top-usa-law-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        {/* Remove the LawFirmSchema component for now */}
      </body>
    </html>
  )
}


import './globals.css'