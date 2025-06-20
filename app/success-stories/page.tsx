import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Client Success Stories | Meridian Law Group",
  description:
    "Discover how Meridian Law Group has helped clients achieve favorable outcomes in various legal matters through skilled representation and strategic legal solutions.",
}

export default function SuccessStoriesPage() {
  const featuredCases = [
    {
      title: "Contract Negotiation Success",
      category: "Entertainment Law",
      description:
        "Helped a content creator secure better terms in their sponsorship agreement, including improved compensation and more favorable creative control provisions.",
      result: "Increased compensation by 40% and secured creative approval rights",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Intellectual Property Protection",
      category: "IP Law",
      description:
        "Assisted a small business owner in protecting their brand from unauthorized use by competitors, securing their trademark rights and stopping infringement.",
      result: "Successfully registered trademark and halted unauthorized usage",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Favorable Settlement",
      category: "Civil Litigation",
      description:
        "Represented a client in a complex business dispute, negotiating a favorable settlement that avoided costly and time-consuming litigation while protecting their interests.",
      result: "Achieved settlement that preserved business relationships",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  const successStories = [
    {
      title: "Business Contract Review",
      category: "Business Law",
      description:
        "Identified and revised unfavorable terms in a client's business contract before signing, preventing potential future disputes and financial losses.",
      result: "Risk Mitigated",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Online Defamation Resolution",
      category: "Digital Media",
      description:
        "Helped a professional address damaging online content that was affecting their reputation and business opportunities.",
      result: "Content Removed",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Entertainment Contract Negotiation",
      category: "Entertainment Law",
      description:
        "Negotiated improved terms for a performer's appearance contract, securing better compensation and more favorable conditions.",
      result: "Improved Terms",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Confidential Family Matter",
      category: "Family Law",
      description:
        "Guided a client through a sensitive family legal matter with discretion and care, achieving a resolution that protected their interests and privacy.",
      result: "Private Resolution",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Digital Rights Management",
      category: "Intellectual Property",
      description:
        "Helped a creator establish proper licensing and usage terms for their digital content, creating a framework for monetization and protection.",
      result: "Rights Secured",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Business Formation",
      category: "Business Law",
      description:
        "Assisted an entrepreneur in properly structuring their new business, establishing appropriate legal protections and compliance measures.",
      result: "Successful Launch",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const testimonials = [
    {
      quote:
        "Meridian Law Group provided clear guidance through a complicated legal situation. Their attention to detail and strategic approach made all the difference in my case.",
      name: "Business Owner",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "I appreciated the straightforward communication and realistic expectations. My attorney took the time to explain complex legal concepts and kept me informed throughout the process.",
      name: "Entertainment Professional",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The team at Meridian Law Group helped me navigate a challenging situation with professionalism and care. I felt supported throughout the entire process.",
      name: "Individual Client",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <>
      <section className="bg-muted py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Success Stories</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            At Meridian Law Group, we measure our success by the positive outcomes we achieve for our clients. Here are
            some examples of how our legal expertise has made a difference.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Case Results</h2>

          <div className="space-y-16">
            {featuredCases.map((caseItem, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
                  <div className="inline-flex items-center bg-primary/10 px-3 py-1 rounded-full text-primary text-sm font-medium mb-4">
                    {caseItem.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{caseItem.title}</h3>
                  <p className="text-muted-foreground mb-6">{caseItem.description}</p>
                  <div className="bg-muted p-4 rounded-lg mb-6">
                    <h4 className="text-lg font-bold mb-2">Result:</h4>
                    <p className="font-medium">{caseItem.result}</p>
                  </div>
                  <Button asChild>
                    <Link href="/contact">
                      Discuss Your Case <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={caseItem.image || "/placeholder.svg"}
                      alt={caseItem.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Client Testimonials</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background rounded-lg p-8 shadow-md relative">
                <svg
                  className="absolute top-4 right-4 h-8 w-8 text-primary/20"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
                <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">More Success Stories</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-muted rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                    {story.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-background/90 text-foreground text-sm font-bold px-3 py-1 rounded">
                    {story.result}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                  <p className="text-muted-foreground">{story.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Let Us Help You Achieve Success</h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Our team of experienced attorneys is ready to help you navigate your legal challenges and work toward a
                positive outcome. Contact us today to discuss your situation.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Personalized legal strategies tailored to your needs",
                  "Clear communication throughout your case",
                  "Experienced attorneys with proven results",
                  "Commitment to achieving the best possible outcome",
                  "Practical, cost-effective legal solutions",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-foreground mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </div>
                ))}
              </div>

              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">
                  Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Meridian Law Group attorneys meeting with clients"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

