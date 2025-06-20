import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import ContactForm from "./contact-form"

export const metadata: Metadata = {
  title: "Contact Us | TOP USA LAW",
  description:
    "Contact TOP USA LAW for expert legal assistance. Schedule a free consultation with our experienced attorneys today.",
}

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact TOP USA LAW</h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Our team of experienced attorneys is ready to help with your legal needs. Reach out today for a consultation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mt-12">
        <div className="md:col-span-1 space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">info@topusalaw.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Main Office</p>
                  <p className="text-muted-foreground">
                    123 Legal Avenue, Suite 500
                    <br />
                    Metro City, MC 12345
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Office Hours</p>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Additional Offices</h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Downtown Office</p>
                <p className="text-muted-foreground">
                  456 Center Street, 10th Floor
                  <br />
                  Metro City, MC 12345
                </p>
              </div>
              <div>
                <p className="font-medium">Suburban Office</p>
                <p className="text-muted-foreground">
                  789 Parkway Drive, Suite 300
                  <br />
                  Greenville, MC 12346
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

