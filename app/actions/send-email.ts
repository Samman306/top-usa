"use server"

import { z } from "zod"

// Define a schema for email validation
const emailSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
})

export async function sendContactEmail(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate form data
    const result = emailSchema.safeParse({
      name,
      email,
      phone,
      subject,
      message,
    })

    if (!result.success) {
      return {
        success: false,
        message: "Please check your inputs and try again.",
      }
    }

    // In a real application, you would send an email here
    // For now, we'll just simulate a successful email send
    console.log("Email would be sent with:", {
      name,
      email,
      phone,
      subject,
      message,
    })

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "Thank you for your message. We'll get back to you soon!",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "An error occurred while sending your message. Please try again later.",
    }
  }
}
