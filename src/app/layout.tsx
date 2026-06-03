import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ideal Factory',
  description: 'Ideal Factory website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
