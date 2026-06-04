import * as React from 'react'
import type { ContactFormData } from '@/types'
import { siteConfig } from '@/config/site'

interface ContactEmailProps {
  data: ContactFormData
  submittedAt: string
}

export function ContactEmailTemplate({ data, submittedAt }: ContactEmailProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        style={{
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#f4f4f4',
          margin: 0,
          padding: '20px',
        }}
      >
        <table
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          style={{ maxWidth: '600px', margin: '0 auto' }}
        >
          <tr>
            <td
              style={{
                backgroundColor: '#0E0E0E',
                padding: '32px 40px',
                borderRadius: '12px 12px 0 0',
                textAlign: 'center',
              }}
            >
              <h1
                style={{
                  color: '#ffffff',
                  fontSize: '24px',
                  fontWeight: '700',
                  margin: 0,
                }}
              >
                Ideal Factory
              </h1>
              <p
                style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '13px',
                  margin: '6px 0 0',
                }}
              >
                New Contact Form Submission
              </p>
            </td>
          </tr>

          <tr>
            <td
              style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '0 0 12px 12px',
              }}
            >
              <p
                style={{
                  fontSize: '16px',
                  color: '#111',
                  marginTop: 0,
                }}
              >
                You have a new inquiry from <strong>{data.full_name}</strong>.
              </p>

              <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '24px 0' }} />

              <table width="100%" cellPadding={0} cellSpacing={0}>
                <tbody>
                  <Row label="Full Name" value={`${data.full_name}`} />
                  <Row label="Email" value={data.email} isLink={`mailto:${data.email}`} />
                  <Row
                    label="Phone"
                    value={data.phone || 'Not provided'}
                    isLink={data.phone ? `tel:${data.phone}` : undefined}
                  />
                  <Row label="Submitted" value={submittedAt} />
                </tbody>
              </table>

              <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '24px 0' }} />

              <p
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#666',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  margin: '0 0 10px',
                }}
              >
                Message
              </p>
              <p
                style={{
                  fontSize: '15px',
                  color: '#111',
                  lineHeight: '1.7',
                  backgroundColor: '#f9f9f9',
                  padding: '16px 20px',
                  borderRadius: '8px',
                  borderLeft: '4px solid #0E0E0E',
                  margin: 0,
                }}
              >
                {data.message}
              </p>

              <div style={{ textAlign: 'center', marginTop: '32px' }}>
                <a
                  href={`mailto:${data.email}`}
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#0E0E0E',
                    color: '#ffffff',
                    padding: '12px 28px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '600',
                  }}
                >
                  Reply to {data.full_name}
                </a>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '32px 0 24px' }} />

              <p
                style={{
                  fontSize: '12px',
                  color: '#999',
                  textAlign: 'center',
                  margin: 0,
                }}
              >
                This email was sent from the contact form at{' '}
                <a
                  href={siteConfig.url}
                  style={{ color: '#999', textDecoration: 'underline' }}
                >
                  {siteConfig.url.replace('https://', '')}
                </a>
              </p>
            </td>
          </tr>
        </table>
      </body>
    </html>
  )
}

function Row({ label, value, isLink }: { label: string; value: string; isLink?: string }) {
  return (
    <tr>
      <td
        style={{
          padding: '8px 0',
          fontSize: '13px',
          fontWeight: '600',
          color: '#666',
          width: '120px',
          verticalAlign: 'top',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
        }}
      >
        {label}
      </td>
      <td
        style={{
          padding: '8px 0',
          fontSize: '14px',
          color: '#111',
          verticalAlign: 'top',
        }}
      >
        {isLink ? (
          <a href={isLink} style={{ color: '#0E0E0E', textDecoration: 'underline' }}>
            {value}
          </a>
        ) : (
          value
        )}
      </td>
    </tr>
  )
}
