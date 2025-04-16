import type { WithContext, LocalBusiness, Person, WebPage, BreadcrumbList, FAQPage, Article } from "schema-dts"

export function LawFirmSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "TOP USA LAW",
          description:
            "TOP USA LAW provides expert legal services with a client-centered approach. Specializing in personal injury, car accidents, truck accidents, and more.",
          url: "https://www.topusalaw.com",
          logo: "https://www.topusalaw.com/images/top-usa-law-logo.jpg",
          telephone: "(555) 123-4567",
          email: "info@topusalaw.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Legal Avenue, Suite 500",
            addressLocality: "Metro City",
            addressRegion: "MC",
            postalCode: "12345",
            addressCountry: "US",
          },
          openingHours: "Mo,Tu,We,Th,Fr 09:00-17:00",
          priceRange: "$$",
          serviceArea: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: 40.7128,
              longitude: -74.006,
            },
            geoRadius: "50000",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Legal Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Personal Injury",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Car Accidents",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Truck Accidents",
                },
              },
            ],
          },
        }),
      }}
    />
  )
}

export function LocalBusinessSchema({ city, state }: { city: string; state: string }) {
  const schema: WithContext<LocalBusiness> = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `TOP USA LAW - ${city}, ${state}`,
    description: `TOP USA LAW provides expert legal services in ${city}, ${state}. Our experienced attorneys offer comprehensive legal representation for individuals and businesses.`,
    url: `https://www.topusalaw.com/locations/cities/${city.toLowerCase().replace(/\s+/g, "-")}`,
    telephone: "(555) 123-4567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Legal Avenue, Suite 500",
      addressLocality: city,
      addressRegion: state,
      postalCode: "12345",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.7128",
      longitude: "-74.0060",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "17:30",
      },
    ],
    priceRange: "$$",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function AttorneySchema({ attorney }: { attorney: any }) {
  const schema: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: attorney.name,
    jobTitle: attorney.title,
    description: attorney.bio,
    image: attorney.image,
    url: `https://www.meridianlaw.com/team/${attorney.slug}`,
    worksFor: {
      "@type": "LegalService",
      name: "Meridian Law Group",
    },
    alumniOf: attorney.education,
    memberOf: attorney.associations,
    telephone: "(555) 123-4567",
    email: `${attorney.slug.toLowerCase()}@meridianlaw.com`,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function WebPageSchema({ title, description, url }: { title: string; description: string; url: string }) {
  const schema: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    isPartOf: {
      "@type": "WebSite",
      name: "Meridian Law Group",
      url: "https://www.meridianlaw.com",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function FAQSchema({ questions }: { questions: { question: string; answer: string }[] }) {
  const schema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function BlogPostSchema({ post }: { post: any }) {
  const schema: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    dateModified: post.lastModified || post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      url: post.author.url,
    },
    publisher: {
      "@type": "Organization",
      name: "Meridian Law Group",
      logo: {
        "@type": "ImageObject",
        url: "https://www.meridianlaw.com/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.url,
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
