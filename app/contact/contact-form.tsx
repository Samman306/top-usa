"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formResponse, setFormResponse] = useState<{
    success?: boolean
    message?: string
  } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormResponse(null)

    try {
      // For now, we'll simulate a successful submission
      // In a real application, you would call the server action
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setFormResponse({
        success: true,
        message: "Thank you for your message. We'll get back to you soon!",
      })

      // Reset form if successful
      const form = document.getElementById("contact-form") as HTMLFormElement
      if (form) form.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormResponse({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form id="contact-form" action={handleSubmit} className="space-y-6">
      {formResponse && (
        <div
          className={`p-4 mb-6 rounded-lg ${
            formResponse.success
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          <p>{formResponse.message}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input id="name" name="name" placeholder="John Doe" required disabled={isSubmitting} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input id="email" name="email" type="email" placeholder="john@example.com" required disabled={isSubmitting} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" disabled={isSubmitting} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">
            Subject <span className="text-red-500">*</span>
          </Label>
          <Input
            id="subject"
            name="subject"
            placeholder="Legal consultation request"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="message">
            Message <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Please describe how we can help you..."
            rows={5}
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
