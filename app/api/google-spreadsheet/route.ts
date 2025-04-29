export const dynamic = "force-static"

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
    const result = formSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 })
    }

    const { firstName, lastName, email, phone, message, service, recaptchaToken } = result.data
    const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY

    if (recaptchaSecretKey && recaptchaToken) {
      const recaptchaVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${recaptchaToken}`
      const recaptchaResponse = await fetch(recaptchaVerifyUrl, { method: "POST" })
      const recaptchaData = await recaptchaResponse.json()

      if (!recaptchaData.success) {
        return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 400 })
      }
    } else if (recaptchaSecretKey) {
      return NextResponse.json({ error: "reCAPTCHA verification required" }, { status: 400 })
    }

    const submissionDate = new Date().toISOString()
    const sheetsService = createGoogleSheetsService()
    const formData = { firstName, lastName, email, phone, service, message, submissionDate }
    await sheetsService.appendSheet("Submissions", [formData])

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to submit form" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID
    if (!spreadsheetId) {
      return NextResponse.json({ error: "GOOGLE_SPREADSHEET_ID not configured" }, { status: 500 })
    }

    const { searchParams } = new URL(request.url)
    const requestedSheet = searchParams.get("sheet") || ""
    const stateName = searchParams.get("stateName") || ""
    const sheetsToTry = [...(requestedSheet ? [requestedSheet] : []), "Locations", "LawyerProfiles"]

    const sheetsService = createGoogleSheetsService()
    let successData = null
    let successSheetName = null
    let lastError = null

    for (const sheetName of sheetsToTry) {
      try {
        const data = stateName
          ? await sheetsService.fetchSheet(sheetName, stateName)
          : await sheetsService.fetchSheet(sheetName)

        successData = data
        successSheetName = sheetName
        break
      } catch (error: any) {
        lastError = error
      }
    }

    if (successData) {
      return NextResponse.json({
        success: true,
        data: successData,
        sheet: successSheetName,
        requested: requestedSheet || null,
      })
    }

    return NextResponse.json(
      {
        error: `Failed to fetch data from any sheet. Last error: ${lastError?.message}`,
        fallback: true,
      },
      { status: 500 },
    )
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message || "Failed to fetch sheet data",
        fallback: true,
      },
      { status: 500 },
    )
  }
}
