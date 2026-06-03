import { Lexend, Geist, Geist_Mono, Noto_Sans_Arabic } from 'next/font/google'

export const englishFont = Lexend({
  subsets: ['latin'],
  variable: '--font-english',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const arabicFont = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
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
export const fontVariables = [
  englishFont.variable,
  arabicFont.variable,
  geist.variable,
  geistMono.variable,
].join(' ')
