import { z } from "zod"
import { Resend } from "resend"

// Initialize Resend with your API key
// You'll need to add RESEND_API_KEY to your environment variables
const resend = new Resend(process.env.RESEND_API_KEY)

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type FormData = z.infer<typeof formSchema>

export async function submitQuoteRequest(data: FormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(data)

    // Format the email content
    const emailContent = `
      New Quote Request from Premium Edge Curbing Website
      
      Customer Information:
      --------------------
      Name: ${validatedData.firstName} ${validatedData.lastName}
      Email: ${validatedData.email}
      Phone: ${validatedData.phone}
      
      Message:
      --------
      ${validatedData.message}
    `

    // Send email using Resend
    await resend.emails.send({
      from: "Premium Edge Curbing <onboarding@resend.dev>",
      to: ["premiumedgecurbing@gmail.com"],
      subject: `New Quote Request from ${validatedData.firstName} ${validatedData.lastName}`,
      text: emailContent,
      replyTo: validatedData.email,
    })

    // Send auto-reply to customer
    await resend.emails.send({
      from: "Premium Edge Curbing <onboarding@resend.dev>",
      to: [validatedData.email],
      subject: "Thank you for your quote request - Premium Edge Curbing",
      text: `
        Dear ${validatedData.firstName},

        Thank you for requesting a quote from Premium Edge Curbing. We have received your message and will get back to you shortly.

        Here's a copy of your message:
        -----------------------------
        ${validatedData.message}

        We typically respond within 1-2 business days.

        Best regards,
        The Premium Edge Curbing Team
        Email: premiumedgecurbing@gmail.com
        Phone: 517-206-6295
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Form submission error:", error)
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        error: "Please check your input and try again." 
      }
    }
    return { 
      success: false, 
      error: "Failed to submit form. Please try again." 
    }
  }
} 