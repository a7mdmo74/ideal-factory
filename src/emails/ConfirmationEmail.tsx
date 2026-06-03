import * as React from 'react'
import type { ContactFormData } from '@/types'

interface ConfirmationEmailProps {
  data: Pick<ContactFormData, 'first_name' | 'last_name' | 'email'>
}

export function ConfirmationEmailTemplate({ data }: ConfirmationEmailProps) {
  return (
    <html>
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
          {/* Header */}
          <tr>
            <td
              style={{
                backgroundColor: '#0E0E0E',
                padding: '32px 40px',
                borderRadius: '12px 12px 0 0',
                textAlign: 'center',
              }}
            >
              <h1 style={{ color: '#fff', fontSize: '24px', margin: 0 }}>Ideal Factory</h1>
            </td>
          </tr>

          {/* Body */}
          <tr>
            <td
              style={{
                backgroundColor: '#ffffff',
                padding: '40px',
                borderRadius: '0 0 12px 12px',
              }}
            >
              <h2 style={{ fontSize: '20px', color: '#111', marginTop: 0 }}>
                Thank you, {data.first_name}!
              </h2>
              <p style={{ fontSize: '15px', color: '#444', lineHeight: '1.7' }}>
                We&apos;ve received your message and a member of our design team will be in touch
                within <strong>one working day</strong>.
              </p>
              <p style={{ fontSize: '15px', color: '#444', lineHeight: '1.7' }}>
                In the meantime, feel free to explore our projects and services at{' '}
                <a href="https://idealhomeuae.com" style={{ color: '#0E0E0E', fontWeight: '600' }}>
                  idealhomeuae.com
                </a>
                .
              </p>

              {/* CTA */}
              <div style={{ textAlign: 'center', marginTop: '32px' }}>
                <a
                  href="https://idealhomeuae.com/projects"
                  style={{ color: '#0E0E0E', fontWeight: '600' }}
                >
                  Explore Our Projects
                </a>
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '32px 0 24px' }} />

              <p style={{ fontSize: '12px', color: '#999', textAlign: 'center', margin: 0 }}>
                Ideal Factory — ICAD I, Abu Dhabi Industrial City
                <br />
                +971 50 312 2300 · info@idealhomeuae.com
              </p>
            </td>
          </tr>
        </table>
      </body>
    </html>
  )
}
