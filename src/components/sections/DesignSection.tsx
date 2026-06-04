import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { Check, ArrowRight, Box, PencilRuler, Pencil } from 'lucide-react'
import { getBlurDataURL } from '@/lib/utils'
import { DESIGN_STEP_CARDS } from '@/lib/constants'

export default async function DesignSection() {
  const t = await getTranslations('Design')

  const benefits = [t('benefits.noGuessing'), t('benefits.noRedesigns'), t('benefits.noDelays')]

  return (
    <section className="bg-white px-6 py-20 sm:px-8 lg:px-16 lg:py-28">
      <div
        className="relative isolate mx-auto max-w-7xl overflow-hidden"
        style={{ borderRadius: '2.5rem' }}
      >
        <Image
          src="/images/desgin-bg.jpg"
          alt=""
          aria-hidden="true"
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL={getBlurDataURL(1440, 500)}
        />

        <div className="absolute inset-0 bg-[#0e0e0e]/55" />
        <div className="absolute inset-0 bg-linear-to-r from-[#0e0e0e]/75 via-[#0e0e0e]/45 to-[#0e0e0e]/20" />

        <div className="relative grid items-center gap-8 px-10 py-12 lg:grid-cols-[1fr_1fr] lg:gap-6 lg:px-14 lg:py-14">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              {t('title1')}
              <br />
              <span className="text-primary">{t('title2')}</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">{t('description')}</p>

            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {benefits.map(benefit => (
                <li
                  key={benefit}
                  className="flex items-center gap-2 text-sm font-medium text-white"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
              >
                {t('cta')}
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/40">
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {DESIGN_STEP_CARDS.map(card => {
              const IconComponent = ICON_MAP[card.iconName]
              return (
                <StepCard
                  key={card.key}
                  icon={<IconComponent className="h-8 w-8" aria-hidden="true" />}
                  label={t(`steps.${card.key}`)}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

const ICON_MAP = {
  Box,
  PencilRuler,
  Pencil,
} as const

function StepCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-5 px-4 py-8 text-center"
      style={{
        borderRadius: '1.5rem',
        border: '1px solid rgba(255,255,255,0.12)',
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        minHeight: '180px',
      }}
    >
      <span
        className="flex items-center justify-center text-primary"
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          border: '2px solid',
          borderColor: 'var(--primary)',
          background: 'rgba(87,183,192,0.12)',
        }}
      >
        {icon}
      </span>

      <p className="text-sm font-medium leading-snug text-white">{label}</p>
    </div>
  )
}
