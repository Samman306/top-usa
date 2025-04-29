import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  MapPin,
  Phone,
  Mail,
  Star,
  Shield,
  Gavel,
  Scale,
  Heart,
  Users,
  Quote,
  BookOpen,
  Landmark,
  Trophy,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ClientShutterstockImage } from "@/components/client-shutterstock-image"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "About Meridian Law Group | Distinguished Legal Excellence Since 1995",
  description:
    "Discover the legacy of Meridian Law Group, where distinguished attorneys have secured over $1 billion in verdicts and settlements through unwavering dedication to legal excellence and client advocacy.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section - Refined */}
      <section className="bg-gradient-to-r from-primary/95 via-primary to-primary/90 py-20 md:py-28 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/chromatic-flow.png')] opacity-5 bg-repeat"></div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="text-yellow-400 block">A Legacy of</span>
                <span className="text-yellow-500">Legal Excellence</span>
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-primary-foreground/95 leading-relaxed font-light">
                For nearly three decades, Meridian Law Group has stood as a beacon of justice, representing clients with
                unparalleled expertise, integrity, and dedication to achieving extraordinary outcomes.
              </p>

              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex items-center gap-2">
                  <div className="bg-yellow-400/20 p-2 rounded-full">
                    <Star className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-bold text-yellow-400 block">5.0</span>
                    <span className="text-primary-foreground/80 text-sm">Client Satisfaction</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-yellow-400/20 p-2 rounded-full">
                    <Award className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-bold text-yellow-400 block">Top 1%</span>
                    <span className="text-primary-foreground/80 text-sm">of Law Firms</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-yellow-400/20 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <span className="font-bold text-yellow-400 block">99%</span>
                    <span className="text-primary-foreground/80 text-sm">Success Rate</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <Button size="lg" variant="secondary" className="text-lg rounded-full px-8" asChild>
                  <Link href="/contact">
                    Complimentary Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg rounded-full px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground hover:border-primary-foreground"
                  asChild
                >
                  <Link href="tel:+15551234567">
                    <Phone className="mr-2 h-5 w-5" /> (555) 123-4567
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[450px] md:h-[550px] rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse" />}>
                <ClientShutterstockImage
                  query="elegant law firm building with columns"
                  alt="The distinguished headquarters of Meridian Law Group featuring neoclassical architecture with modern elements, symbolizing our blend of tradition and innovation"
                  fill
                  className="object-cover"
                  priority
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - New */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-500">Our Philosophy</h2>
            <p className="text-2xl text-gray-700 font-light italic mb-10 leading-relaxed">
              "We believe that exceptional legal representation is not merely about knowing the law—it's about
              understanding people, championing justice, and having the courage to stand unwavering in the pursuit of
              what is right."
            </p>
            <div className="flex justify-center">
              <div className="h-0.5 w-24 bg-yellow-500/50"></div>
            </div>
            <p className="mt-8 text-lg text-gray-600">— James Wilson & Sarah Johnson, Founding Partners</p>
          </div>
        </div>
      </section>

      {/* Our Legacy Section - Refined */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-yellow-500/50"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-yellow-500/50"></div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse" />}>
                  <ClientShutterstockImage
                    query="elegant law library with antique books"
                    alt="The distinguished Meridian Law Group library, featuring rare legal volumes, handcrafted wooden shelves, and the portraits of our founding partners"
                    fill
                    className="object-cover"
                    priority
                  />
                </Suspense>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-500">Our Distinguished Legacy</h2>
              <p className="text-lg mb-6 text-gray-600 leading-relaxed">
                Established in 1995 by visionaries James Wilson and Sarah Johnson, Meridian Law Group emerged from a
                profound commitment to redefine legal representation through a harmonious blend of intellectual rigor,
                unwavering integrity, and genuine compassion.
              </p>
              <p className="text-lg mb-6 text-gray-600 leading-relaxed">
                What began as an intimate practice with a select clientele has evolved into one of the nation's most
                esteemed legal institutions, with a distinguished presence in twelve states and a collective of over 75
                preeminent attorneys whose expertise spans the full spectrum of legal disciplines.
              </p>
              <p className="text-lg mb-8 text-gray-600 leading-relaxed">
                Throughout our evolution, we have remained steadfast in our founding principles: relentless advocacy,
                bespoke client attention, and an unwavering commitment to securing optimal outcomes for those we have
                the privilege to represent.
              </p>

              <div className="flex items-center space-x-4 text-yellow-500">
                <div className="h-px bg-yellow-500/50 flex-grow"></div>
                <span className="font-serif italic text-lg">Excellence in Practice</span>
                <div className="h-px bg-yellow-500/50 flex-grow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - New */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-500">Our Journey of Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The evolution of Meridian Law Group reflects our commitment to growth, innovation, and unwavering
              dedication to our clients.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-yellow-500/30"></div>

            {[
              {
                year: "1995",
                title: "Foundation",
                description:
                  "Meridian Law Group was established by James Wilson and Sarah Johnson with a vision to provide exceptional legal representation.",
                icon: <Landmark className="h-6 w-6" />,
              },
              {
                year: "2001",
                title: "First Landmark Victory",
                description:
                  "Secured a precedent-setting $28.5 million verdict in Wilson v. National Industries, establishing our reputation for excellence.",
                icon: <Trophy className="h-6 w-6" />,
              },
              {
                year: "2008",
                title: "National Expansion",
                description:
                  "Expanded our practice to five states, bringing our distinctive approach to legal representation to clients across the country.",
                icon: <MapPin className="h-6 w-6" />,
              },
              {
                year: "2015",
                title: "Meridian Law Foundation",
                description:
                  "Established our charitable foundation to formalize our commitment to pro bono work and community service.",
                icon: <Heart className="h-6 w-6" />,
              },
              {
                year: "2023",
                title: "A Billion in Recoveries",
                description:
                  "Reached the milestone of over $1 billion in cumulative recoveries for our clients, affirming our position as industry leaders.",
                icon: <Award className="h-6 w-6" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative mb-16 ${index % 2 === 0 ? "ml-auto pl-16 pr-0" : "mr-auto pr-16 pl-0"} w-1/2`}
              >
                {/* Circle on timeline */}
                <div className="absolute left-0 top-0 transform -translate-x-1/2 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white z-10">
                  {item.icon}
                </div>

                {/* Content box */}
                <div
                  className={`bg-gray-50 p-8 rounded-lg shadow-md border-l-4 ${index % 2 === 0 ? "border-yellow-500" : "border-primary"}`}
                >
                  <div className="text-2xl font-bold text-yellow-500 mb-1">{item.year}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section - Refined */}
      <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/woven-texture.png')] opacity-5 bg-repeat"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-500">The Meridian Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our methodology is defined by a meticulous attention to detail, strategic foresight, and an unwavering
              commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Gavel className="h-12 w-12 text-primary" />,
                title: "Meticulous Advocacy",
                description:
                  "We approach each case with exhaustive preparation, strategic vision, and the readiness to advocate relentlessly in pursuit of optimal outcomes for our clients.",
              },
              {
                icon: <Shield className="h-12 w-12 text-primary" />,
                title: "Bespoke Representation",
                description:
                  "We recognize that each client's circumstances are unique, requiring tailored strategies, personalized attention, and solutions crafted to address specific needs and objectives.",
              },
              {
                icon: <Scale className="h-12 w-12 text-primary" />,
                title: "Principled Justice",
                description:
                  "Our practice is founded on the belief that exceptional legal representation should be accessible to all who seek justice, regardless of their circumstances or resources.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-10 shadow-md hover:shadow-lg transition-shadow border border-gray-100 group"
              >
                <div className="mb-6 text-yellow-500 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-yellow-500">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distinguished Leadership Section - Refined */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-500">Distinguished Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our firm is guided by legal luminaries whose expertise, vision, and commitment to excellence have
              established new standards in the practice of law.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "James Wilson, J.D.",
                title: "Founding Partner",
                image: "distinguished male lawyer portrait professional",
                bio: "A graduate of Harvard Law School and former judicial clerk for the U.S. Supreme Court, James has secured numerous landmark verdicts that have reshaped legal precedent. His strategic approach to complex litigation has earned him recognition among America's most influential attorneys.",
                specialties: ["Complex Litigation", "Class Actions", "Constitutional Law"],
              },
              {
                name: "Sarah Johnson, J.D.",
                title: "Founding Partner",
                image: "distinguished female lawyer portrait professional",
                bio: "With degrees from Yale Law School and Oxford University, Sarah brings unparalleled analytical precision to her practice. Her courtroom eloquence and meticulous case preparation have resulted in over $300 million in recoveries for her clients over her illustrious career.",
                specialties: ["Trial Advocacy", "Medical Malpractice", "Product Liability"],
              },
              {
                name: "Michael Chen, J.D., MBA",
                title: "Managing Partner",
                image: "asian american male lawyer portrait professional",
                bio: "Combining legal expertise with business acumen, Michael holds both a J.D. from Columbia and an MBA from Wharton. His innovative leadership has transformed Meridian's operational excellence while maintaining our unwavering commitment to client success.",
                specialties: ["Corporate Law", "Strategic Planning", "Legal Operations"],
              },
            ].map((attorney, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-80">
                  <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse" />}>
                    <ClientShutterstockImage
                      query={attorney.image}
                      alt={`Portrait of ${attorney.name}, ${attorney.title} at Meridian Law Group`}
                      fill
                      className="object-cover"
                    />
                  </Suspense>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{attorney.name}</h3>
                    <p className="text-yellow-400 font-medium">{attorney.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{attorney.bio}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">AREAS OF EXPERTISE</h4>
                    <div className="flex flex-wrap gap-2">
                      {attorney.specialties.map((specialty, i) => (
                        <span key={i} className="bg-yellow-50 text-yellow-700 text-xs px-3 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button variant="link" className="p-0 text-primary font-medium" asChild>
                    <Link href="/team">
                      View Complete Profile <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-yellow-500/50 text-yellow-500 hover:bg-yellow-50"
              asChild
            >
              <Link href="/team">
                Meet Our Distinguished Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Accolades Section - Refined */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-500">Accolades & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has earned recognition from the most prestigious institutions in the legal
              profession.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            {[
              {
                number: "$1B+",
                text: "Client Recoveries",
              },
              {
                number: "95%",
                text: "Trial Success Rate",
              },
              {
                number: "75+",
                text: "Distinguished Attorneys",
              },
              {
                number: "12",
                text: "Regional Offices",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-3">{stat.number}</p>
                <div className="w-12 h-0.5 bg-yellow-500/50 mx-auto mb-3"></div>
                <p className="text-lg text-gray-600 font-medium">{stat.text}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Institutional Recognition",
                items: [
                  "Chambers & Partners - Band 1 Ranking (2020-2023)",
                  "Best Law Firms in America - Tier 1, U.S. News & World Report (2018-2023)",
                  "Elite Trial Lawyers - National Law Journal (2019-2023)",
                ],
              },
              {
                title: "Individual Excellence",
                items: [
                  "American College of Trial Lawyers - 5 Fellows",
                  "Best Lawyers in America - 12 Partners Recognized (2021-2023)",
                  "Lawdragon 500 Leading Lawyers in America - 3 Partners",
                ],
              },
              {
                title: "Client Commendation",
                items: [
                  "Martindale-Hubbell - AV Preeminent Rating",
                  "Client Choice Award - International Law Office",
                  "5.0 Average Rating - 250+ Client Reviews",
                ],
              },
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-6 text-yellow-500 pb-3 border-b border-gray-100">
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Journey Section - New */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-500">The Meridian Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you engage Meridian Law Group, you embark on a journey defined by clarity, confidence, and
              exceptional outcomes.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="relative">
                <div className="sticky top-24">
                  <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                    <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse" />}>
                      <ClientShutterstockImage
                        query="elegant law firm client meeting"
                        alt="A distinguished Meridian attorney consulting with clients in our elegantly appointed conference room, providing personalized attention and strategic counsel"
                        fill
                        className="object-cover"
                      />
                    </Suspense>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                {[
                  {
                    number: "01",
                    title: "Comprehensive Consultation",
                    description:
                      "Your journey begins with a thorough consultation where we listen attentively to understand your unique circumstances, objectives, and concerns. This foundation allows us to craft a strategy precisely tailored to your needs.",
                    icon: <Users className="h-6 w-6" />,
                  },
                  {
                    number: "02",
                    title: "Strategic Case Development",
                    description:
                      "Our team conducts exhaustive research, evidence gathering, and legal analysis to build a compelling case. We leave no stone unturned in our preparation, anticipating challenges and developing preemptive solutions.",
                    icon: <BookOpen className="h-6 w-6" />,
                  },
                  {
                    number: "03",
                    title: "Transparent Communication",
                    description:
                      "Throughout your case, you'll receive regular updates and have direct access to your legal team. We explain complex legal concepts in clear terms, ensuring you're empowered to make informed decisions at every stage.",
                    icon: <Mail className="h-6 w-6" />,
                  },
                  {
                    number: "04",
                    title: "Resolute Advocacy",
                    description:
                      "Whether through skillful negotiation or powerful courtroom representation, we advocate for your interests with unwavering determination. Our reputation often facilitates favorable settlements, but we stand ready for trial when necessary.",
                    icon: <Gavel className="h-6 w-6" />,
                  },
                  {
                    number: "05",
                    title: "Enduring Relationship",
                    description:
                      "Our commitment extends beyond the resolution of your immediate legal matter. We establish lasting relationships with our clients, providing ongoing counsel and remaining available to address future legal needs as they arise.",
                    icon: <Heart className="h-6 w-6" />,
                  },
                ].map((step, index) => (
                  <div key={index} className="relative pl-16">
                    <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-500 font-bold text-lg border border-yellow-200">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-yellow-500">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Refined */}
      <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-50 opacity-50 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 opacity-50 rounded-tr-full"></div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-500">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The true measure of our success is reflected in the words of those we've had the privilege to represent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Robert M.",
                position: "Personal Injury Client",
                location: "New York, NY",
                quote:
                  "In the aftermath of a life-altering accident, Meridian Law Group provided not just legal representation, but a partnership that restored my sense of justice and security. Their meticulous approach and unwavering advocacy resulted in a settlement that has allowed me to rebuild my life with dignity.",
                rating: 5,
              },
              {
                name: "Jennifer T.",
                position: "Corporate Client",
                location: "Chicago, IL",
                quote:
                  "The strategic acumen and negotiation skills demonstrated by Meridian's team transformed what appeared to be an insurmountable legal challenge into a favorable resolution that protected both our business interests and reputation. Their counsel was invaluable and their execution flawless.",
                rating: 5,
              },
              {
                name: "Marcus D.",
                position: "Class Action Participant",
                location: "Los Angeles, CA",
                quote:
                  "When confronting a powerful corporation seemed impossible, Meridian Law Group stood beside us with unwavering resolve. Their commitment to justice for ordinary people against overwhelming odds resulted in accountability that will benefit countless others in similar situations.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md relative border border-gray-100">
                <div className="absolute top-6 right-6 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 inline-block fill-current" />
                  ))}
                </div>
                <div className="mb-8">
                  <Quote className="h-12 w-12 text-yellow-100" />
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="pt-6 border-t border-gray-100">
                  <p className="font-bold text-yellow-500">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-yellow-500/50 text-yellow-500 hover:bg-yellow-50"
              asChild
            >
              <Link href="/success-stories">
                Explore Client Success Stories <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section - Refined */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-500">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that navigating legal matters can raise questions. We've provided answers to those most
              commonly asked.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                question: "What is your approach to fee arrangements?",
                answer:
                  "We offer flexible fee structures tailored to the specific nature of your case and circumstances. For personal injury matters, we operate on a contingency basis—you pay nothing unless we secure compensation on your behalf. For other practice areas, we provide options including hourly rates, flat fees, and hybrid arrangements, all discussed with complete transparency during your initial consultation.",
              },
              {
                question: "What can I expect regarding case duration?",
                answer:
                  "While we pursue resolution with appropriate urgency, our primary commitment is to achieving optimal outcomes rather than expedient ones. The timeline for your case will depend on its complexity, the opposing parties involved, and court schedules. During your consultation, we provide a realistic assessment of anticipated timeframes based on our extensive experience with similar matters.",
              },
              {
                question: "How do I determine if I have a viable case?",
                answer:
                  "The most effective way to assess the viability of your potential claim is through a comprehensive consultation with our attorneys. We evaluate the factual circumstances, applicable legal principles, evidentiary strength, and potential compensation to provide an informed assessment of your position and prospects for success.",
              },
              {
                question: "What geographic regions does your practice encompass?",
                answer:
                  "Meridian Law Group maintains offices in twelve states and our attorneys are admitted to practice in numerous federal jurisdictions nationwide. For matters in locations where we do not maintain a physical presence, we frequently collaborate with carefully selected local counsel to ensure comprehensive representation while maintaining our exacting standards of quality and client service.",
              },
              {
                question: "What should I prepare for my initial consultation?",
                answer:
                  "To maximize the productivity of your initial consultation, we recommend bringing all documentation relevant to your matter—including correspondence, contracts, medical records, incident reports, and any other materials that help illustrate your circumstances. Additionally, preparing a chronological summary of events and a list of your questions will help ensure a comprehensive and efficient discussion.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-8 hover:border-yellow-200 hover:bg-yellow-50/30 transition-colors"
              >
                <h3 className="text-xl font-bold mb-4 text-yellow-500">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Have additional questions? Our team is available to provide the clarity you seek.
            </p>
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section - Refined */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/chromatic-flow.png')] opacity-5 bg-repeat"></div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400">
                Begin Your Journey with Meridian Law Group
              </h2>
              <p className="text-xl mb-10 leading-relaxed">
                Our distinguished attorneys are prepared to provide the exceptional representation you deserve. Contact
                us today to schedule a confidential consultation and discover the Meridian difference.
              </p>

              <div className="space-y-8 mb-10">
                <div className="flex items-start">
                  <div className="bg-yellow-400/20 p-3 rounded-full mr-5 mt-1">
                    <MapPin className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-yellow-400 mb-1">Principal Office</p>
                    <p className="text-primary-foreground/90">
                      One Meridian Plaza, 123 Legal Avenue, Suite 500
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-400/20 p-3 rounded-full mr-5 mt-1">
                    <Phone className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-yellow-400 mb-1">Telephone Consultation</p>
                    <p className="text-primary-foreground/90">(555) 123-4567</p>
                    <p className="text-sm text-primary-foreground/70 mt-1">Available 24 hours a day, 7 days a week</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-400/20 p-3 rounded-full mr-5 mt-1">
                    <Mail className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-yellow-400 mb-1">Electronic Correspondence</p>
                    <p className="text-primary-foreground/90">inquiries@meridianlaw.com</p>
                    <p className="text-sm text-primary-foreground/70 mt-1">
                      Responses provided within 24 business hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <Button size="lg" variant="secondary" className="text-lg rounded-full px-8" asChild>
                  <Link href="/contact">
                    Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg rounded-full px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link href="tel:+15551234567">
                    <Phone className="mr-2 h-5 w-5" /> Call Directly
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-white text-foreground rounded-lg p-10 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 text-center text-yellow-500">
                Request a Confidential Consultation
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-colors"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-colors"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-colors"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Telephone <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-colors"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="practiceArea" className="text-sm font-medium text-gray-700">
                    Area of Legal Concern <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="practiceArea"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-colors"
                    required
                  >
                    <option value="">Please Select</option>
                    <option value="Personal Injury">Personal Injury</option>
                    <option value="Medical Malpractice">Medical Malpractice</option>
                    <option value="Corporate Law">Corporate Law</option>
                    <option value="Class Action">Class Action</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Brief Description of Your Situation <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 transition-colors"
                    placeholder="Please provide a concise overview of your legal matter"
                    rows={4}
                    required
                  ></textarea>
                </div>

                <Button type="submit" className="w-full text-lg py-6 rounded-md">
                  Submit Your Inquiry
                </Button>

                <p className="text-xs text-center text-gray-500">
                  By submitting this form, you acknowledge our privacy policy and consent to our initial contact
                  regarding your inquiry. All communications remain confidential and protected by attorney-client
                  privilege.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
