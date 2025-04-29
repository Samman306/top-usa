// Function to fetch data from a sheet
import { type NextRequest, NextResponse } from "next/server"
import * as z from "zod"
import { createGoogleSheetsService } from "@/lib/google-spreadsheets"

const formSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(10),
  recaptchaToken: z.string(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate form data using zod schema
    const result = formSchema.safeParse(body)
    if (!result.success) {
      console.log(result.error)
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 })
    }

    const { firstName, lastName, email, phone, message, service, recaptchaToken } = result.data

    // reCAPTCHA verification
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY
    if (recaptchaSecretKey && recaptchaToken) {
      const recaptchaVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${recaptchaToken}`
      const recaptchaResponse = await fetch(recaptchaVerifyUrl, {
        method: "POST",
      })

      const recaptchaData = await recaptchaResponse.json()
      if (!recaptchaData.success) {
        console.error("reCAPTCHA verification failed", recaptchaData)
        return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 })
      }
    } else if (recaptchaSecretKey) {
      // If secret key exists but no token is provided
      console.error("reCAPTCHA token not provided")
      return NextResponse.json({ error: "reCAPTCHA verification required" }, { status: 400 })
    } else {
      // If reCAPTCHA is not configured, log a warning
      console.warn("reCAPTCHA is not configured. Proceeding without verification.")
    }

    // Get current date and time
    const submissionDate = new Date().toISOString()

    // Create Google Sheets service
    const sheetsService = createGoogleSheetsService()

    // Prepare the data to be appended to the sheet
    const formData = {
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
      submissionDate,
    }

    // Append data to the "Submissions" sheet
    await sheetsService.appendSheet("Submissions", [formData])

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error submitting contact form:", error)
    return NextResponse.json({ error: error.message || "Failed to submit form" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    // Get the spreadsheet ID from env
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID
    if (!spreadsheetId) {
      return new Response(
        JSON.stringify({
          error: "GOOGLE_SPREADSHEET_ID not configured",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store, max-age=0",
          },
        },
      )
    }

    // Get the sheet name from query params or use default
    const { searchParams } = new URL(request.url)
    const requestedSheet = searchParams.get("sheet") || ""
    const stateName = searchParams.get("stateName") || ""

    // Based on logs, we know the available sheets are "Locations" and "LawyerProfiles"
    // Prioritize these sheets when attempting to fetch data
    const sheetsToTry = [
      // First try the sheet specifically requested, if any
      ...(requestedSheet ? [requestedSheet] : []),
      // Then try known sheets that exist in this spreadsheet
      "Locations",
      "LawyerProfiles",
    ]

    // Initialize the Google Sheets service
    const sheetsService = createGoogleSheetsService()

    // Try each sheet in order until one works
    let successData = null
    let successSheetName = null
    let lastError = null

    for (const sheetName of sheetsToTry) {
      try {
        let data
        if (stateName) {
          data = await sheetsService.fetchSheet(sheetName, stateName)
        } else {
          data = await sheetsService.fetchSheet(sheetName)
        }
        // If we got here, this sheet worked
        successData = data
        successSheetName = sheetName
        break
      } catch (error: any) {
        console.error(`Error fetching sheet ${sheetName}:`, error)
        lastError = error
        // Continue to the next sheet
      }
    }

    // If we found a working sheet
    if (successData) {
      return new Response(
        JSON.stringify({
          success: true,
          data: successData,
          sheet: successSheetName,
          requested: requestedSheet || null,
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store, max-age=0",
          },
        },
      )
    }

    // If all sheets failed
    console.error(`Failed to fetch data from any sheet. Last error: ${lastError?.message}`)
    return new Response(
      JSON.stringify({
        error: `Failed to fetch data from any sheet. Last error: ${lastError?.message}`,
        fallback: true,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, max-age=0",
        },
      },
    )
  } catch (error: any) {
    console.error("Error in Google Spreadsheet API route:", error)
    return new Response(
      JSON.stringify({
        error: error.message || "Failed to fetch sheet data",
        fallback: true, // Signal to client that it should use fallback data
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, max-age=0",
        },
      },
    )
  }
}
