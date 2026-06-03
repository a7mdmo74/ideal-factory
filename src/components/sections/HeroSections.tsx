import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import FloatingChat from '@/components/custom/FloatingChat'
async function HeroSection({ locale }: { locale: string }) {
  const resolvedLocale = locale ?? routing.defaultLocale
  const t = await getTranslations({ locale: resolvedLocale, namespace: 'Hero' })
  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      <Image
        src="/images/hero__banner.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-br from-black/90 via-black/60 to-black/20" />

      <div className="relative mx-auto flex min-h-screen items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl rounded-4xl bg-black/50 p-8 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.8)] sm:p-12 lg:p-16">
          <h1 className="text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-[3.6rem]">
            {t('titleLine1')}
            <br />
            <span className="text-primary">{t('titleLine2')}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            {t('description')}
          </p>

          <Button
            asChild
            size="lg"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0E0E0E] shadow-2xl transition hover:bg-primary hover:text-white"
          >
            <Link href="/contact">
              {t('ctaPrimary')}
              <ArrowRightCircle className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Button>
        </div>
      </div>
      <FloatingChat />
    </section>
  )
}

export default HeroSection
