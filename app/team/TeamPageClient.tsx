"use client"
import Link from "next/link"
import { ArrowRight, Mail, Phone, Instagram, Award, Star, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"

export default function TeamPageClient() {
  const attorneys = [
    {
      name: "Alexander Sterling",
      role: "Founding Partner",
      specialties: ["Entertainment Law", "Celebrity Litigation"],
      image: "/placeholder.svg?height=400&width=400",
      bio: "Alexander Sterling is Hollywood's go-to attorney for A-list celebrities and major studios. With over $300 million recovered for clients and a reputation for aggressive representation, he's been named to Hollywood Reporter's Power Lawyers list for 10 consecutive years. His client roster includes Oscar winners, Grammy artists, and social media stars with a combined following of over 50 million.",
      instagram: "@alexsterlinglaw",
      followers: "1.2M",
      featured: ["CNN", "Forbes", "Variety"],
    },
    {
      name: "Victoria Chase",
      role: "Managing Partner",
      specialties: ["Intellectual Property", "Brand Protection"],
      image: "/placeholder.svg?height=400&width=400",
      bio: "Victoria Chase is the legal mastermind behind some of the biggest celebrity brands in the world. A Harvard Law graduate with an undefeated trial record, she's protected over $1 billion in intellectual property assets for her high-profile clients. Victoria regularly appears as a legal expert on major news networks and has been featured in Forbes' 40 Under 40.",
      instagram: "@victoriachaselegal",
      followers: "850K",
      featured: ["CNBC", "Bloomberg", "Forbes"],
    },
    {
      name: "Jackson Wolf",
      role: "Head of Litigation",
      specialties: ["Crisis Management", "Defamation Defense"],
      image: "/placeholder.svg?height=400&width=400",
      bio: "When celebrities face career-threatening scandals, Jackson Wolf is their first call. Known as 'The Fixer' in Hollywood circles, he's successfully defended dozens of high-profile clients against defamation, privacy invasion, and reputation damage. His strategic approach to crisis management has saved countless careers and preserved billions in celebrity earning potential.",
      instagram: "@thejacksonwolf",
      followers: "920K",
      featured: ["TMZ", "Entertainment Tonight", "Deadline"],
    },
    {
      name: "Sophia Rodriguez",
      role: "Partner",
      specialties: ["Social Media Law", "Influencer Contracts"],
      image: "/placeholder.svg?height=400&width=400",
      bio: "Sophia Rodriguez pioneered the field of social media law and has negotiated over $100 million in influencer deals. Her innovative approach to digital rights has made her the attorney of choice for content creators across YouTube, Instagram, and TikTok. A social media personality herself, Sophia brings firsthand platform knowledge to her legal practice.",
      instagram: "@sophialaw",
      followers: "1.5M",
      featured: ["Business Insider", "TechCrunch", "Wired"],
    },
    {
      name: "Marcus King",
      role: "Partner",
      specialties: ["Music Industry", "Touring & Performance"],
      image: "/placeholder.svg?height=400&width=400",
      bio: "Marcus King has represented Grammy winners, multi-platinum artists, and legendary performers throughout his illustrious career. His expertise in music law has helped artists reclaim their masters, negotiate record-breaking deals, and protect their creative legacies. A former recording artist himself, Marcus brings unique industry insight to his legal practice.",
      instagram: "@marcuskinglaw",
      followers: "780K",
      featured: ["Billboard", "Rolling Stone", "Variety"],
    },
    {
      name: "Olivia Bennett",
      role: "Partner",
      specialties: ["Fashion & Beauty Law", "Licensing"],
      image: "/placeholder.svg?height=400&width=400",
      bio: "Olivia Bennett is the legal force behind some of the most successful celebrity beauty and fashion brands. She's structured and negotiated licensing deals worth over $500 million and has a perfect track record protecting her clients' creative vision. Her background in both law and fashion makes her uniquely qualified to guide celebrities through brand development.",
      instagram: "@oliviabennettesq",
      followers: "950K",
      featured: ["Vogue", "WWD", "Elle"],
    },
    {
      name: "Ethan Drake",
      role: "Senior Counsel",
      specialties: ["Sports & Entertainment", "Endorsement Deals"],
      image: "/placeholder.svg?height=400&width=400",
      bio: "Ethan Drake represents elite athletes and sports personalities both on and off the field. His negotiation of groundbreaking endorsement deals has set industry records and created new revenue streams for his clients. A former Division I athlete and sports agent, Ethan's comprehensive understanding of the sports business is unmatched.",
      instagram: "@ethandrakelaw",
      followers: "680K",
      featured: ["ESPN", "Sports Illustrated", "The Athletic"],
    },
    {
      name: "Isabella Chen",
      role: "Senior Counsel",
      specialties: ["Digital Media", "NFTs & Blockchain"],
      image: "/placeholder.svg?height=400&width=400",
      bio: "Isabella Chen is at the cutting edge of entertainment technology law. She's guided celebrities through NFT launches, metaverse appearances, and digital asset management worth hundreds of millions. Her technical background and legal expertise make her the go-to attorney for celebrities entering the Web3 space and exploring new digital frontiers.",
      instagram: "@isabelladigitallaw",
      followers: "720K",
      featured: ["Wired", "CoinDesk", "The Verge"],
    },
  ]

  return (
    <>
      <section className="bg-black text-white py-16 md:py-24 relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-90 z-10"></div>

        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <ClientShutterstockImage
            query="person portrait"
            alt="Celebrity attorneys in luxury office"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="container relative z-20">
          <div className="inline-flex items-center bg-yellow-500/10 px-3 py-1 rounded-full text-yellow-500 text-sm font-medium mb-4">
            ELITE LEGAL REPRESENTATION
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            MEET THE <span className="text-yellow-500">CELEBRITY ATTORNEYS</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Our team of elite attorneys has represented A-list celebrities, Grammy winners, Oscar nominees, and social
            media stars with a combined following of over 100 million.
          </p>

          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center bg-gray-800/80 px-4 py-2 rounded-lg">
              <Award className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-sm">Hollywood Power Lawyers</span>
            </div>
            <div className="flex items-center bg-gray-800/80 px-4 py-2 rounded-lg">
              <TrendingUp className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-sm">$500M+ Recovered</span>
            </div>
            <div className="flex items-center bg-gray-800/80 px-4 py-2 rounded-lg">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              <span className="text-sm">Featured in Major Media</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {attorneys.map((attorney, index) => (
              <div
                key={index}
                className="group bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-700 hover:border-yellow-500/50"
              >
                <div className="relative h-[350px]">
                  <ClientShutterstockImage query="person portrait" alt={attorney.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center">
                      <Instagram className="h-4 w-4 text-yellow-500 mr-2" />
                      <span className="text-white text-sm">{attorney.instagram}</span>
                      <span className="ml-auto text-yellow-500 text-sm font-bold">{attorney.followers} followers</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white">{attorney.name}</h2>
                  <p className="text-yellow-500 font-medium mb-2">{attorney.role}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-400">Specializes in:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {attorney.specialties.map((specialty, i) => (
                        <span key={i} className="text-xs bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-400">Featured in:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {attorney.featured.map((outlet, i) => (
                        <span key={i} className="text-xs text-white">
                          {outlet}
                          {i < attorney.featured.length - 1 ? "," : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`#${attorney.name.toLowerCase().replace(/\s/g, "-")}`}
                    className="text-yellow-500 font-medium group-hover:underline inline-flex items-center text-sm"
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.getElementById(attorney.name.toLowerCase().replace(/\s/g, "-"))
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    View Full Profile <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-center">
            ATTORNEY <span className="text-yellow-500">PROFILES</span>
          </h2>
          <div className="space-y-16">
            {attorneys.map((attorney, index) => (
              <div
                key={index}
                id={attorney.name.toLowerCase().replace(/\s/g, "-")}
                className="bg-gray-900 rounded-lg p-8 shadow-lg border border-gray-800"
              >
                <div className="grid md:grid-cols-[250px_1fr] gap-8">
                  <div className="space-y-6">
                    <div className="relative h-[300px] w-full rounded-lg overflow-hidden shadow-lg border-2 border-yellow-500/20">
                      <ClientShutterstockImage
                        query="person portrait"
                        alt={attorney.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Instagram className="h-5 w-5 text-yellow-500 mr-2" />
                        <span className="text-white">{attorney.instagram}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-yellow-500 font-bold text-lg">{attorney.followers}</span>
                        <span className="text-gray-400 ml-2">followers</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 w-full"
                      >
                        <Mail className="mr-2 h-4 w-4" /> Email
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 w-full"
                      >
                        <Phone className="mr-2 h-4 w-4" /> Contact
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold text-white mb-2">{attorney.name}</h3>
                    <p className="text-yellow-500 font-medium text-xl mb-4">{attorney.role}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {attorney.specialties.map((specialty, i) => (
                        <span key={i} className="text-sm bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-white mb-2">Featured In</h4>
                      <div className="flex flex-wrap gap-3">
                        {attorney.featured.map((outlet, i) => (
                          <span key={i} className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
                            {outlet}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-white mb-2">Biography</h4>
                      <p className="text-gray-300 leading-relaxed">{attorney.bio}</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                      <div className="bg-gray-800 p-4 rounded-lg text-center">
                        <div className="text-yellow-500 font-bold text-2xl">100+</div>
                        <div className="text-gray-400 text-sm">Celebrity Clients</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg text-center">
                        <div className="text-yellow-500 font-bold text-2xl">95%</div>
                        <div className="text-gray-400 text-sm">Success Rate</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg text-center">
                        <div className="text-yellow-500 font-bold text-2xl">15+</div>
                        <div className="text-gray-400 text-sm">Years Experience</div>
                      </div>
                      <div className="bg-gray-800 p-4 rounded-lg text-center">
                        <div className="text-yellow-500 font-bold text-2xl">50M+</div>
                        <div className="text-gray-400 text-sm">Client Followers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-yellow-500 text-black">
        <div className="container text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">NEED VIP LEGAL REPRESENTATION?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Our team of celebrity attorneys is ready to protect your career, reputation, and assets. Contact us today
            for a confidential consultation.
          </p>
          <Button size="lg" className="bg-black hover:bg-gray-900 text-white font-bold text-lg" asChild>
            <Link href="/contact">
              GET VIP ACCESS <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
