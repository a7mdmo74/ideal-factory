import * as React from 'react'
import { Tailwind } from '@react-email/components'
import type { ContactFormData } from '@/types'
import { siteConfig } from '@/config/site'

interface ContactEmailProps {
  data: ContactFormData
  submittedAt: string
}

export function ContactEmailTemplate({ data, submittedAt }: ContactEmailProps) {
  return (
    <Tailwind>
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>

        <body className="m-0 bg-gray-100 p-5 font-sans">
          <table width="100%" cellPadding={0} cellSpacing={0} className="mx-auto max-w-[600px]">
            <tr>
              <td className="rounded-t-xl bg-[#0E0E0E] px-10 py-8 text-center">
                <h1 className="m-0 text-2xl font-bold text-white">Ideal Factory</h1>

                <p className="mt-1.5 mb-0 text-[13px] text-white/60">New Contact Form Submission</p>
              </td>
            </tr>

            <tr>
              <td className="rounded-b-xl bg-white p-10">
                <p className="mt-0 text-base text-[#111]">
                  You have a new inquiry from <strong>{data.full_name}</strong>.
                </p>

                <hr className="my-6 border-0 border-t border-[#eeeeee]" />

                <table width="100%" cellPadding={0} cellSpacing={0}>
                  <tbody>
                    <Row label="Full Name" value={data.full_name} />

                    <Row label="Email" value={data.email} isLink={`mailto:${data.email}`} />

                    <Row
                      label="Phone"
                      value={data.phone || 'Not provided'}
                      isLink={data.phone ? `tel:${data.phone}` : undefined}
                    />

                    <Row label="Submitted" value={submittedAt} />
                  </tbody>
                </table>

                <hr className="my-6 border-0 border-t border-[#eeeeee]" />

                <p className="mb-2.5 text-[13px] font-semibold uppercase tracking-wider text-[#666]">
                  Message
                </p>

                <p className="m-0 rounded-lg border-l-4 border-[#0E0E0E] bg-[#f9f9f9] px-5 py-4 text-[15px] leading-7 text-[#111]">
                  {data.message}
                </p>

                <div className="mt-8 text-center">
                  <a
                    href={`mailto:${data.email}`}
                    className="inline-block rounded-lg bg-[#0E0E0E] px-7 py-3 text-sm font-semibold text-white no-underline"
                  >
                    Reply to {data.full_name}
                  </a>
                </div>

                <hr className="my-8 border-0 border-t border-[#eeeeee]" />

                <p className="m-0 text-center text-xs text-[#999]">
                  This email was sent from the contact form at{' '}
                  <a href={siteConfig.url} className="text-[#999] underline">
                    {siteConfig.url.replace('https://', '')}
                  </a>
                </p>
              </td>
            </tr>
          </table>
        </body>
      </html>
    </Tailwind>
  )
}

function Row({ label, value, isLink }: { label: string; value: string; isLink?: string }) {
  return (
    <tr>
      <td className="py-2 text-sm font-medium uppercase tracking-wide text-[#666]">{label}</td>

      <td className="px-0 py-2 text-sm text-[#111]">
        {isLink ? (
          <a href={isLink} className="text-[#0E0E0E] underline">
            {value}
          </a>
        ) : (
          value
        )}
      </td>
    </tr>
  )
}
