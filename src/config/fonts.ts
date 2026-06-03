import { Lexend, Geist, Geist_Mono } from 'next/font/google'

export const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

export const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

// Combined class string — use in layout.tsx
export const fontVariables = [lexend.variable, geist.variable, geistMono.variable].join(' ')
