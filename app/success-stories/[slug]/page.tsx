import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Tag, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const story = getSuccessStoryData(params.slug)

  if (!story) {
    return {
      title: "Success Story Not Found",
    }
  }

  return {
    title: `${story.title} | Client Success Story | Meridian Law Group`,
    description: story.summary,
  }
}

export async function generateStaticParams() {
  return [
    { slug: "contract-negotiation-success" },
    { slug: "intellectual-property-protection" },
    { slug: "favorable-settlement" },
    { slug: "business-contract-review" },
    { slug: "online-defamation-resolution" },
    { slug: "entertainment-contract-negotiation" },
  ]
}

export default function SuccessStoryPage({ params }: Props) {
  const story = getSuccessStoryData(params.slug)

  if (!story) {
    notFound()
  }

  return (
    <>
      <section className="bg-muted py-12 md:py-16">
        <div className="container">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Link
              href="/success-stories"
              className="text-muted-foreground hover:text-primary text-sm inline-flex items-center"
            >
              Success Stories
            </Link>
            <span className="text-muted-foreground text-sm">/</span>
            <span className="text-sm">{story.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{story.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">{story.summary}</p>

          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm">{story.date}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Tag className="h-4 w-4 mr-2" />
              <span className="text-sm">{story.category}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">{story.challenge}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {story.approach.map((step, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-md">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">The Result</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">{story.result}</p>
                {story.keyAchievements && (
                  <div className="mt-6">
                    <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
                    <ul className="space-y-2">
                      {story.keyAchievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Client Feedback</h3>
              <div className="relative">
                <svg
                  className="absolute -top-2 -left-2 h-8 w-8 text-primary/20"
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
                <p className="text-lg italic mb-6 text-muted-foreground">"{story.testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={story.testimonial.image || "/placeholder.svg?height=100&width=100"}
                      alt={story.testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold">{story.testimonial.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Need Legal Assistance?</h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Our team of experienced attorneys is ready to help you navigate your legal challenges. Contact us today to
            discuss your situation.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/contact">
              Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}

function getSuccessStoryData(slug: string) {
  const stories = {
    "contract-negotiation-success": {
      title: "Contract Negotiation Success",
      slug: "contract-negotiation-success",
      summary: "How Meridian Law Group helped a content creator secure better terms in their sponsorship agreement.",
      date: "June 15, 2023",
      category: "Entertainment Law",
      image: "/placeholder.svg?height=800&width=600",
      challenge:
        "Our client, a growing content creator with a dedicated following, received a sponsorship offer from a brand. The initial contract contained unfavorable terms, including excessive exclusivity requirements, minimal creative control, and below-market compensation. The client was concerned about maintaining their authentic voice while also securing fair compensation for their work.",
      approach: [
        {
          title: "Contract Analysis",
          description:
            "We conducted a thorough review of the proposed agreement, identifying problematic clauses and areas for improvement.",
        },
        {
          title: "Market Research",
          description:
            "We researched comparable sponsorship deals to establish appropriate compensation and standard terms for similar arrangements.",
        },
        {
          title: "Strategic Negotiation",
          description:
            "We developed and implemented a negotiation strategy that focused on key priorities while maintaining a positive relationship with the sponsor.",
        },
      ],
      result:
        "After several rounds of negotiation, we secured significantly improved terms for our client. The final agreement included a 40% increase in compensation, reduced exclusivity provisions, and clear creative control rights. The client was able to maintain their authentic voice while establishing a mutually beneficial relationship with the sponsor.",
      keyAchievements: [
        "40% increase in compensation",
        "Reduced exclusivity period from 12 months to 3 months",
        "Added creative approval rights",
        "Secured clear content ownership provisions",
        "Established framework for future collaborations",
      ],
      testimonial: {
        quote:
          "Meridian Law Group helped me transform what could have been a restrictive deal into a partnership that respects my creative freedom while fairly compensating my work. Their knowledge of industry standards was invaluable.",
        name: "Content Creator",
        image: "/placeholder.svg?height=100&width=100",
      },
    },
    "intellectual-property-protection": {
      title: "Intellectual Property Protection",
      slug: "intellectual-property-protection",
      summary: "How Meridian Law Group helped a small business owner protect their brand from unauthorized use.",
      date: "March 8, 2023",
      category: "IP Law",
      image: "/placeholder.svg?height=800&width=600",
      challenge:
        "Our client had built a successful small business with a distinctive brand identity. After several years of operation, they discovered competitors using similar names, logos, and marketing materials, causing customer confusion and potentially damaging their reputation. The client had not formally registered their intellectual property and was unsure how to protect their brand.",
      approach: [
        {
          title: "IP Audit",
          description:
            "We conducted a comprehensive audit of the client's intellectual property assets, identifying what elements could be protected through registration.",
        },
        {
          title: "Registration Strategy",
          description:
            "We developed and implemented a strategy for trademark registration, prioritizing the most valuable and distinctive brand elements.",
        },
        {
          title: "Enforcement Actions",
          description:
            "We drafted and sent cease and desist letters to infringing parties, clearly outlining our client's rights and the specific violations.",
        },
      ],
      result:
        "We successfully registered our client's primary trademarks, establishing legal protection for their brand. Through strategic enforcement actions, we stopped the unauthorized use of our client's intellectual property by competitors. The client now has clear ownership of their brand assets and a framework for monitoring and addressing future infringement.",
      keyAchievements: [
        "Successful registration of key trademarks",
        "Cessation of unauthorized use by competitors",
        "Establishment of brand protection protocols",
        "Prevention of customer confusion",
        "Preservation of brand value and reputation",
      ],
      testimonial: {
        quote:
          "Meridian Law Group helped me protect what I've worked so hard to build. They explained the process clearly and took effective action that stopped others from using my brand. I now have peace of mind knowing my business identity is legally protected.",
        name: "Small Business Owner",
        image: "/placeholder.svg?height=100&width=100",
      },
    },
    "favorable-settlement": {
      title: "Favorable Settlement",
      slug: "favorable-settlement",
      summary: "How Meridian Law Group helped resolve a complex business dispute through strategic negotiation.",
      date: "November 22, 2022",
      category: "Civil Litigation",
      image: "/placeholder.svg?height=800&width=600",
      challenge:
        "Our client was involved in a dispute with a long-term business partner regarding profit distributions and management decisions. The relationship had deteriorated, but litigation threatened to be costly, time-consuming, and potentially damaging to the business itself. The client wanted to resolve the matter efficiently while protecting their financial interests and preserving the business.",
      approach: [
        {
          title: "Case Assessment",
          description:
            "We conducted a thorough analysis of the dispute, reviewing contracts, financial records, and communications to determine strengths and weaknesses of each party's position.",
        },
        {
          title: "Strategic Planning",
          description:
            "We developed a negotiation strategy that focused on our client's key priorities while identifying potential compromise areas to facilitate resolution.",
        },
        {
          title: "Mediation Process",
          description:
            "We represented our client through a structured mediation process, presenting their position effectively while working toward a mutually acceptable solution.",
        },
      ],
      result:
        "Through strategic negotiation and mediation, we achieved a favorable settlement that addressed our client's primary concerns without the need for protracted litigation. The agreement included a fair financial resolution and clear terms for future business operations. By avoiding litigation, our client saved significant time and expense while preserving important business relationships.",
      keyAchievements: [
        "Negotiated favorable financial terms",
        "Established clear operational guidelines",
        "Avoided costly litigation process",
        "Preserved valuable business relationships",
        "Resolved dispute in under 90 days",
      ],
      testimonial: {
        quote:
          "Meridian Law Group found a path to resolution when I thought my only option was a lengthy court battle. Their strategic approach to negotiation secured a fair outcome while saving me time, money, and stress. Most importantly, they helped preserve a business I've spent years building.",
        name: "Business Client",
        image: "/placeholder.svg?height=100&width=100",
      },
    },
    "business-contract-review": {
      title: "Business Contract Review",
      slug: "business-contract-review",
      summary:
        "How Meridian Law Group helped a client identify and revise unfavorable terms before signing a critical business agreement.",
      date: "August 30, 2022",
      category: "Business Law",
      image: "/placeholder.svg?height=800&width=600",
      challenge:
        "Our client was preparing to enter into a significant business agreement that would have long-term implications for their company. The contract was complex, with numerous technical provisions and legal terminology that made it difficult for the client to fully understand the obligations and risks involved. They needed expert review to ensure they weren't agreeing to unfavorable terms.",
      approach: [
        {
          title: "Comprehensive Review",
          description:
            "We conducted a detailed analysis of the entire contract, identifying problematic clauses, ambiguous language, and missing protections.",
        },
        {
          title: "Risk Assessment",
          description:
            "We provided a clear explanation of potential risks and liabilities associated with the agreement as written, prioritizing the most significant concerns.",
        },
        {
          title: "Revision Recommendations",
          description:
            "We developed specific recommendations for contract revisions, including alternative language and additional provisions to protect our client's interests.",
        },
      ],
      result:
        "Based on our review and recommendations, the client was able to negotiate significant improvements to the contract before signing. We helped remove several one-sided provisions, clarified ambiguous terms, and added important protections regarding liability, intellectual property, and termination rights. The final agreement was much more balanced and significantly reduced the client's risk exposure.",
      keyAchievements: [
        "Identified and revised unfair liability provisions",
        "Added intellectual property protections",
        "Clarified ambiguous performance requirements",
        "Improved termination and exit provisions",
        "Reduced overall legal risk exposure",
      ],
      testimonial: {
        quote:
          "The contract review service from Meridian Law Group was invaluable. They identified several concerning provisions I would have missed and explained the potential consequences in terms I could understand. Their revisions made the final agreement much more balanced and gave me confidence in moving forward with the deal.",
        name: "Business Owner",
        image: "/placeholder.svg?height=100&width=100",
      },
    },
    "online-defamation-resolution": {
      title: "Online Defamation Resolution",
      slug: "online-defamation-resolution",
      summary:
        "How Meridian Law Group helped a professional address damaging online content affecting their reputation.",
      date: "May 17, 2023",
      category: "Digital Media",
      image: "/placeholder.svg?height=800&width=600",
      challenge:
        "Our client, a professional in a reputation-sensitive field, discovered false and damaging statements about them published online. The content was appearing prominently in search results and beginning to affect their professional opportunities and relationships. The client needed prompt action to address the defamatory content while minimizing additional attention to the matter.",
      approach: [
        {
          title: "Content Analysis",
          description:
            "We carefully reviewed the online content to determine which statements were potentially actionable as defamation under applicable law.",
        },
        {
          title: "Evidence Collection",
          description:
            "We gathered evidence to support our client's position, including documentation contradicting the false claims and evidence of potential damages.",
        },
        {
          title: "Strategic Response",
          description:
            "We developed a multi-faceted approach including direct communication with the content publisher and platform-specific removal requests based on terms of service violations.",
        },
      ],
      result:
        "Through strategic legal intervention, we successfully secured the removal of the defamatory content from both the original source and search engine results. We achieved this outcome without drawing additional attention to the false claims, using private legal channels rather than public action. The client's online reputation was restored, and we provided guidance on monitoring and quickly addressing any similar issues in the future.",
      keyAchievements: [
        "Complete removal of defamatory content",
        "Successful de-indexing from search results",
        "Resolution without public litigation",
        "Preservation of professional reputation",
        "Development of ongoing monitoring protocols",
      ],
      testimonial: {
        quote:
          "When I found false information about me online, I was deeply concerned about the potential impact on my career. Meridian Law Group handled the situation with the perfect balance of assertiveness and discretion. They resolved the issue completely without creating additional publicity, which was exactly what I needed.",
        name: "Professional Client",
        image: "/placeholder.svg?height=100&width=100",
      },
    },
    "entertainment-contract-negotiation": {
      title: "Entertainment Contract Negotiation",
      slug: "entertainment-contract-negotiation",
      summary: "How Meridian Law Group helped a performer secure better terms for their appearance contract.",
      date: "January 12, 2023",
      category: "Entertainment Law",
      image: "/placeholder.svg?height=800&width=600",
      challenge:
        "Our client, a performing artist, was offered an opportunity to appear at a significant event. The initial contract offered minimal compensation, required extensive content rights transfers, and included broad liability provisions. The client wanted to participate in the event but needed more favorable terms to protect their interests and ensure fair compensation.",
      approach: [
        {
          title: "Contract Analysis",
          description:
            "We reviewed the proposed agreement in detail, identifying problematic terms related to compensation, rights, and liability.",
        },
        {
          title: "Comparable Research",
          description:
            "We researched similar engagements to establish appropriate market rates and standard terms for performances of this nature.",
        },
        {
          title: "Negotiation Strategy",
          description:
            "We developed and implemented a negotiation approach that prioritized key issues while maintaining a positive relationship with the event organizers.",
        },
      ],
      result:
        "Through effective negotiation, we secured significantly improved terms for our client. The final agreement included increased compensation, limited content usage rights with appropriate attribution requirements, and more balanced liability provisions. The client was able to participate in the event under terms that properly valued their contribution and protected their professional interests.",
      keyAchievements: [
        "Increased performance fee by 35%",
        "Limited content usage to specific promotional purposes",
        "Added attribution requirements for all content use",
        "Balanced liability provisions",
        "Secured appropriate expense reimbursement",
      ],
      testimonial: {
        quote:
          "I'm so glad I had Meridian Law Group review my contract before signing. They identified several issues I hadn't noticed and negotiated much better terms than I would have achieved on my own. Their knowledge of industry standards was particularly helpful in making sure I was being fairly compensated.",
        name: "Performing Artist",
        image: "/placeholder.svg?height=100&width=100",
      },
    },
  }

  return stories[slug as keyof typeof stories]
}
