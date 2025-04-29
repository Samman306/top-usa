import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Award, MapPin, Phone, Mail, Star, Shield, Gavel, Scale, Heart, Users, Quote } from "lucide-react"
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

      {/* Leadership Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-yellow-500 font-bold mb-4">Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the attorneys who lead Meridian Law Group with decades of combined experience and a track record of
              exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "James Wilson",
                title: "Founding Partner",
                image: "lawyer-male-1",
                bio: "With over 30 years of experience, James has secured numerous multi-million dollar verdicts and settlements for his clients. He specializes in complex litigation and class action lawsuits.",
              },
              {
                name: "Sarah Johnson",
                title: "Founding Partner",
                image: "lawyer-female-1",
                bio: "Sarah is renowned for her meticulous preparation and powerful courtroom presence. She has been recognized as one of the Top 100 Trial Lawyers in America for the past decade.",
              },
              {
                name: "Michael Chen",
                title: "Managing Partner",
                image: "lawyer-male-2",
                bio: "Michael oversees the firm's strategic direction and operations. His innovative approach to case management has revolutionized how the firm delivers results for clients.",
              },
            ].map((attorney, index) => (
              <div
                key={index}
                className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64">
                  <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse" />}>
                    <ClientShutterstockImage
                      query={attorney.image}
                      alt={`Portrait of ${attorney.name}, ${attorney.title} at Meridian Law Group`}
                      fill
                      className="object-cover"
                    />
                  </Suspense>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-yellow-500">{attorney.name}</h3>
                  <p className="text-primary font-medium mb-3">{attorney.title}</p>
                  <p className="text-muted-foreground">{attorney.bio}</p>
                  <Button variant="link" className="mt-4 p-0 text-primary" asChild>
                    <Link href="/team">
                      View Full Profile <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/team">
                Meet Our Full Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-yellow-500 font-bold mb-4">Firm Achievements</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence has earned us recognition from peers, clients, and legal organizations
              nationwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              {
                number: "$1B+",
                text: "Recovered for Clients",
              },
              {
                number: "95%",
                text: "Success Rate in Trials",
              },
              {
                number: "75+",
                text: "Experienced Attorneys",
              },
              {
                number: "12",
                text: "Office Locations Nationwide",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-lg text-muted-foreground">{stat.text}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Legal Excellence Awards",
                items: [
                  "Best Law Firms in America - U.S. News & World Report (2018-2023)",
                  "Top 50 Verdicts in the United States (2020, 2022)",
                  "Elite Trial Lawyers - National Law Journal (2019-2023)",
                ],
              },
              {
                title: "Attorney Recognition",
                items: [
                  "Super Lawyers - Multiple Attorneys (2015-2023)",
                  "Best Lawyers in America - 12 Partners Recognized (2021-2023)",
                  "Lawdragon 500 Leading Lawyers in America - 3 Partners",
                ],
              },
              {
                title: "Client Satisfaction",
                items: [
                  "5.0 Average Rating on Google Reviews",
                  "Client Choice Award - International Law Office",
                  "A+ Rating - Better Business Bureau",
                ],
              },
            ].map((category, index) => (
              <div key={index} className="bg-background rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-yellow-500">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <Award className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-yellow-500 font-bold mb-6">Community Involvement</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                At Meridian Law Group, we believe in giving back to the communities we serve. Our commitment extends
                beyond the courtroom through pro bono work, charitable initiatives, and community partnerships.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <Gavel className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-yellow-500">Pro Bono Legal Services</h3>
                    <p className="text-muted-foreground">
                      Our attorneys dedicate over 2,000 hours annually to providing free legal services to those in
                      need, including veterans, domestic violence survivors, and low-income families.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-yellow-500">Charitable Foundation</h3>
                    <p className="text-muted-foreground">
                      The Meridian Law Foundation has donated over $5 million to educational programs, legal aid
                      organizations, and community development initiatives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-yellow-500">Community Partnerships</h3>
                    <p className="text-muted-foreground">
                      We partner with local schools, nonprofits, and community organizations to provide legal education,
                      mentorship, and support for underserved populations.
                    </p>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="text-primary border-primary hover:bg-primary/5" asChild>
                <Link href="/community-impact">
                  Learn More About Our Impact <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse" />}>
                <ClientShutterstockImage
                  query="lawyers community service"
                  alt="Meridian Law Group attorneys volunteering at a community legal clinic, providing free legal advice to local residents"
                  fill
                  className="object-cover"
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-yellow-500 font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Hear from clients whose lives we've helped change through dedicated legal
              representation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Robert M.",
                case: "Personal Injury",
                quote:
                  "After my accident, I was overwhelmed with medical bills and unable to work. Meridian Law Group fought tirelessly for me and secured a settlement that changed my life. I couldn't be more grateful.",
                rating: 5,
              },
              {
                name: "Jennifer T.",
                case: "Car Accident",
                quote:
                  "The team at Meridian was compassionate, professional, and incredibly effective. They handled everything while I focused on recovery, and got me 3x what the insurance company initially offered.",
                rating: 5,
              },
              {
                name: "Marcus D.",
                case: "Workplace Injury",
                quote:
                  "When my employer's insurance denied my claim, I thought I was out of options. Meridian not only got my claim approved but secured additional compensation for my family during a difficult time.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-background rounded-lg p-8 shadow-md relative">
                <div className="absolute top-4 right-4 text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 inline-block fill-current" />
                  ))}
                </div>
                <div className="mb-6">
                  <Quote className="h-10 w-10 text-primary/20" />
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-yellow-500">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.case} Case</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/success-stories">
                Read More Success Stories <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-yellow-500 font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about working with Meridian Law Group.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How do your fees work?",
                answer:
                  "We work on a contingency fee basis for personal injury cases, which means you pay nothing unless we win your case. For other practice areas, we offer flexible fee arrangements including hourly rates, flat fees, and hybrid structures tailored to your needs.",
              },
              {
                question: "How long will my case take?",
                answer:
                  "Every case is unique, but we strive to resolve matters as efficiently as possible while maximizing your recovery. Simple cases may resolve in months, while complex litigation might take 1-2 years. We'll provide realistic timelines during your consultation.",
              },
              {
                question: "Do I have a case?",
                answer:
                  "The best way to determine if you have a viable legal claim is through a free consultation with our attorneys. We'll evaluate the facts, applicable laws, and potential compensation to help you make an informed decision about proceeding.",
              },
              {
                question: "What areas do you serve?",
                answer:
                  "Meridian Law Group has offices in 12 states and is licensed to practice in federal courts nationwide. For specific jurisdictions, please contact our office to confirm we can represent you in your location.",
              },
              {
                question: "What should I bring to my initial consultation?",
                answer:
                  "Please bring any documents related to your case (medical records, accident reports, correspondence, contracts, etc.), identification, and a list of questions you may have. This helps us provide the most accurate assessment of your situation.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-bold mb-3 text-yellow-500">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">Have more questions? We're here to help.</p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
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
