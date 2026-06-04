import Image from 'next/image'
import Link from 'next/link'
import { Globe, Mail, Phone } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { getTranslations } from 'next-intl/server'
import { FOOTER_SECTIONS } from '@/lib/constants'

export async function Footer() {
  const t = await getTranslations('Footer')
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/footer.jpg" alt="" fill priority className="object-cover" />

        <div className="absolute inset-0 bg-[#000000A8]" />

        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/30 to-black/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/">
              <Image
                src="/images/ideal-factory-logo.svg"
                alt="Ideal Factory"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </Link>

            <p className="mt-8 max-w-xs text-sm leading-8 text-white/70">
              {t('description')}
            </p>
          </div>

          {FOOTER_SECTIONS.map((section, index) => (
            <div key={index}>
              <h3 className="mb-6 text-2xl font-semibold text-primary">{t(section.title)}</h3>

              <ul className="space-y-4">
                {section.links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/85 transition hover:text-primary">
                      {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-6 text-2xl font-semibold text-primary">{t('contact')}</h3>

            <ul className="space-y-6">
              <li className="flex items-center gap-3 text-white/85">
                <Globe className="h-5 w-5 text-primary" />
                <span>{siteConfig.url.replace('https://', '')}</span>
              </li>

              <li className="flex items-center gap-3 text-white/85">
                <Mail className="h-5 w-5 text-primary" />
                <span>{siteConfig.email}</span>
              </li>

              <li className="flex items-center gap-3 text-white/85">
                <Phone className="h-5 w-5 text-primary" />
                <span>{siteConfig.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-primary/30 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/70 md:flex-row">
            <p>{t('copyright')}</p>

            <div className="flex items-center gap-8">
              <Link href="/terms" className="transition hover:text-primary">
                {t('terms')}
              </Link>

              <Link href="/privacy" className="transition hover:text-primary">
                {t('privacy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
