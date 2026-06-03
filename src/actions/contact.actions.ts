'use server'

import { contactSchema } from '@/lib/validations'
import { resend, emailConfig } from '@/lib/resend'
import { siteConfig } from '@/config/site'
import { ContactEmailTemplate } from '@/emails/ContactEmail'
import { ConfirmationEmailTemplate } from '@/emails/ConfirmationEmail'
import type { ActionResponse, ContactFormData } from '@/types'

export async function submitContactForm(
  formData: FormData
): Promise<ActionResponse<ContactFormData>> {
  // ── 1. Extract ───────────────────────────────────────────
  const raw = {
    full_name: formData.get('full_name'),
    email: formData.get('email'),
    phone: formData.get('phone') || undefined,
    message: formData.get('message'),
  }

  // ── 2. Validate ──────────────────────────────────────────
  const parsed = contactSchema.safeParse(raw)

  if (!parsed.success) {
    return {
      success: false,
      error: 'Please fix the errors below.',
      fieldErrors: parsed.error.flatten().fieldErrors,
    }
  }

  const { data } = parsed

  // ── 3. Format submission time (Dubai timezone) ───────────
  const submittedAt = new Date().toLocaleString('en-AE', {
    timeZone: 'Asia/Dubai',
    dateStyle: 'full',
    timeStyle: 'short',
  })

  // ── 4. Send email via Resend ─────────────────────────────
  try {
    const { error } = await resend.emails.send({
      from: emailConfig.from,
      to: emailConfig.to,
      replyTo: data.email,
      subject: `New Inquiry from ${data.full_name} — ${siteConfig.name}`,
      react: ContactEmailTemplate({ data, submittedAt }),
    })

    if (error) {
      console.error('❌ Resend error:', error)
      return {
        success: false,
        error: `Failed to send message. Please call us at ${siteConfig.phone} or try again.`,
      }
    }

    // ── 5. Send confirmation email to user ───────────────
    await resend.emails.send({
      from: emailConfig.from,
      to: data.email,
      subject: `We received your message — ${siteConfig.name}`,
      react: ConfirmationEmailTemplate({ data }),
    })

    return {
      success: true,
      data,
    }
  } catch (err) {
    console.error('❌ Unexpected error:', err)
    return {
      success: false,
      error: `Something went wrong. Please call us at ${siteConfig.phone} or try again.`,
    }
  }
}
