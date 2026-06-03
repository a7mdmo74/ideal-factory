import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'

export default async function HeroSection({ locale }: { locale?: string }) {
  const resolvedLocale = locale ?? routing.defaultLocale
  const t = await getTranslations({ locale: resolvedLocale, namespace: 'Hero' })

  return (
    <section>
      <span>{t('badge')}</span>
      <h1>
        {t('titleLine1')}
        <span>{t('titleLine2')}</span>
      </h1>
      <p>{t('description')}</p>
    </section>
  )
}
