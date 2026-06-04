import type { Metadata } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { fontVariables } from '@/config/fonts'
import { siteConfig } from '@/config/site'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'Metadata' })

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t('home.title'),
      template: `%s | ${siteConfig.name}`,
    },
    description: t('home.description'),
    alternates: {
      canonical: siteConfig.url,
      languages: {
        en: siteConfig.url,
        ar: `${siteConfig.url}/ar`,
      },
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const messages = (await import(`../../messages/${locale}.json`)).default

  const dir = locale === 'ar' ? 'rtl' : 'ltr'
  const localeClass = `locale-${locale}`

  return (
    <NextIntlClientProvider messages={messages}>
      <div dir={dir} className={`${fontVariables} ${localeClass} antialiased`}>
        <Header />
        {children}
        <Footer />
      </div>
    </NextIntlClientProvider>
  )
}
