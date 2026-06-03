import { Resend } from 'resend'

if (!process.env.RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY environment variable')
}

export const resend = new Resend(process.env.RESEND_API_KEY)

export const emailConfig = {
  from: process.env.RESEND_FROM_EMAIL ?? 'noreply@idealhomeuae.com',
  to: process.env.RESEND_TO_EMAIL ?? 'info@idealhomeuae.com',
} as const
