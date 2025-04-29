import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | TOP USA LAW",
  description:
    "Contact TOP USA LAW for a free consultation. Our experienced attorneys are ready to help with your legal needs.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-6">
            Our team of experienced attorneys is ready to help you with your legal needs. Contact us today for a free
            consultation.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-1">Main Office</h3>
              <address className="not-italic">
                <p>123 Legal Street</p>
                <p>New York, NY 10001</p>
              </address>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1">Phone</h3>
              <p>(800) 123-4567</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1">Email</h3>
              <p>info@topusalaw.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1">Hours</h3>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: By appointment only</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
