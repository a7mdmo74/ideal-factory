import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, '')}`
}

export function formatEmailHref(email: string): string {
  return `mailto:${email}`
}

export function formatWhatsAppHref(phone: string, message?: string): string {
  const cleaned = phone.replace(/[\s+]/g, '')
  const encoded = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${cleaned}${encoded}`
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength).trimEnd()}...`
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function isExternalUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://')
}

export function shimmer(w: number, h: number): string {
  return `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#1a1a1a" offset="20%" />
          <stop stop-color="#2a2a2a" offset="50%" />
          <stop stop-color="#1a1a1a" offset="70%" />
        </linearGradient>
        <filter id="blur">
          <feGaussianBlur stdDeviation="20" />
        </filter>
      </defs>
      <rect width="${w}" height="${h}" fill="#1a1a1a" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" filter="url(#blur)" />
    </svg>`
}

export function toBase64(str: string): string {
  return typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)
}

export function getBlurDataURL(w = 700, h = 475): string {
  return `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`
}
