import type { Metadata } from 'next'
import type { PageSEO } from '@/types'
import { siteConfig } from '@/config/site'

export function generatePageMetadata({
  title,
  description,
  image,
  imageAlt,
  canonical,
  noIndex = false,
}: PageSEO): Metadata {
  const url = canonical ?? siteConfig.url
  const ogImage = image ?? siteConfig.ogImage

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'en_AE',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: imageAlt ?? title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage],
    },
  }
}
