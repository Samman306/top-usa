import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | TOP USA LAW",
  description: "Learn about TOP USA LAW's history, mission, and commitment to providing expert legal representation.",
}

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About TOP USA LAW</h1>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <p className="text-lg mb-4">
            Founded in 1995, TOP USA LAW has grown to become one of the nation's leading law firms, with a reputation
            for excellence and a commitment to fighting for our clients' rights.
          </p>
          <p className="text-lg mb-4">
            Our team of experienced attorneys brings decades of combined experience to every case, providing
            personalized attention and aggressive representation to secure the best possible outcomes for our clients.
          </p>
          <p className="text-lg">
            We believe that everyone deserves access to quality legal representation, which is why we work on a
            contingency fee basis for personal injury cases—you don't pay unless we win.
          </p>
        </div>
        <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
          <span className="text-gray-500">Law Office Image</span>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
          <p className="text-xl italic">
            "To provide exceptional legal representation with integrity and compassion, fighting tirelessly for the
            rights and fair compensation our clients deserve."
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Excellence",
              description:
                "We strive for excellence in every aspect of our practice, from client communication to courtroom representation.",
            },
            {
              title: "Integrity",
              description:
                "We maintain the highest ethical standards and are transparent with our clients throughout the legal process.",
            },
            {
              title: "Compassion",
              description:
                "We understand the challenges our clients face and approach each case with empathy and personal attention.",
            },
            {
              title: "Dedication",
              description:
                "We are committed to fighting tirelessly for our clients' rights and securing the compensation they deserve.",
            },
            {
              title: "Innovation",
              description:
                "We embrace new technologies and approaches to provide the most effective legal representation possible.",
            },
            {
              title: "Community",
              description:
                "We are dedicated to giving back to the communities we serve through pro bono work and charitable initiatives.",
            },
          ].map((value) => (
            <div key={value.title} className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6">Our History</h2>
        <div className="space-y-8">
          <div className="flex">
            <div className="flex-shrink-0 w-24 text-center">
              <div className="bg-yellow-500 text-black font-bold rounded-full h-12 w-12 flex items-center justify-center mx-auto">
                1995
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Founding</h3>
              <p className="text-gray-600">
                TOP USA LAW was founded by John Smith with a focus on personal injury cases.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0 w-24 text-center">
              <div className="bg-yellow-500 text-black font-bold rounded-full h-12 w-12 flex items-center justify-center mx-auto">
                2005
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Expansion</h3>
              <p className="text-gray-600">
                The firm expanded to include offices in New York, Los Angeles, and Chicago.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0 w-24 text-center">
              <div className="bg-yellow-500 text-black font-bold rounded-full h-12 w-12 flex items-center justify-center mx-auto">
                2015
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">National Recognition</h3>
              <p className="text-gray-600">
                TOP USA LAW was recognized as one of the top 100 law firms in the United States.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0 w-24 text-center">
              <div className="bg-yellow-500 text-black font-bold rounded-full h-12 w-12 flex items-center justify-center mx-auto">
                Today
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Nationwide Presence</h3>
              <p className="text-gray-600">
                With offices across the country, TOP USA LAW continues to provide expert legal representation to clients
                nationwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
