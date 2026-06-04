import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { ArrowRight } from 'lucide-react'
import GalleryGrid from '@/components/custom/GalleryGrid'
import GalleryDecoration from '@/components/custom/GalleryDecoration'

export default async function GallerySection() {
  const t = await getTranslations('Gallery')

  const filters = [
    { key: 'all', label: t('tags.all') },
    { key: 'kitchen', label: t('tags.kitchen') },
    { key: 'door', label: t('tags.door') },
    { key: 'closet', label: t('tags.closet') },
    { key: 'upvc', label: t('tags.upvc') },
  ]

  return (
    <section className="relative isolate overflow-hidden bg-[#0E0E0E] px-6 py-24 sm:px-8 lg:px-16">
      <GalleryDecoration />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <span className="inline-flex items-center text-lg font-semibold tracking-[0.18em] text-primary">
            {t('badge')}
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl text-white">
            {t('title')}
          </h2>
        </div>

        <GalleryGrid filters={filters} />

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-primary-hover"
          >
            {t('cta')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
