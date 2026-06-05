import * as React from 'react'
import { Tailwind } from '@react-email/components'
import type { ContactFormData } from '@/types'
import { siteConfig } from '@/config/site'

interface ConfirmationEmailProps {
  data: Pick<ContactFormData, 'full_name' | 'email'>
}

export function ConfirmationEmailTemplate({ data }: ConfirmationEmailProps) {
  return (
    <Tailwind>
      <html>
        <body className="m-0 bg-gray-100 p-5 font-sans">
          <table width="100%" cellPadding={0} cellSpacing={0} className="mx-auto max-w-[600px]">
            <tr>
              <td className="rounded-t-xl bg-[#0E0E0E] px-10 py-8 text-center">
                <h1 className="m-0 text-2xl font-bold text-white">Ideal Factory</h1>
              </td>
            </tr>

            <tr>
              <td className="rounded-b-xl bg-white p-10">
                <h2 className="mt-0 text-[20px] font-semibold text-[#111]">
                  Thank you, {data.full_name}!
                </h2>

                <p className="text-[15px] leading-7 text-[#444]">
                  We&apos;ve received your message and a member of our design team will be in touch
                  within <strong>one working day</strong>.
                </p>

                <p className="text-[15px] leading-7 text-[#444]">
                  In the meantime, feel free to explore our projects and services at{' '}
                  <a href={siteConfig.url} className="font-semibold text-[#0E0E0E] no-underline">
                    {siteConfig.url.replace('https://', '')}
                  </a>
                  .
                </p>

                <div className="mt-8 text-center">
                  <a
                    href={`${siteConfig.url}/projects`}
                    className="font-semibold text-[#0E0E0E] underline"
                  >
                    Explore Our Projects
                  </a>
                </div>

                <hr className="my-8 border-0 border-t border-[#eeeeee]" />

                <p className="m-0 text-center text-xs text-[#999]">
                  {siteConfig.legalName}
                  <br />
                  {siteConfig.phone} · {siteConfig.email}
                </p>
              </td>
            </tr>
          </table>
        </body>
      </html>
    </Tailwind>
  )
}
