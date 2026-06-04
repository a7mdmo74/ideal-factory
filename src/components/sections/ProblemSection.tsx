import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import {
  ShieldX,
  Clock,
  Wallet,
  CircleAlert,
  Layers,
  PencilRuler,
  Wrench,
  Factory,
} from 'lucide-react'
import { getBlurDataURL } from '@/lib/utils'
import VideoPlayer from '@/components/custom/VideoPlayer'
import { PROBLEM_ITEMS, APPROACH_ITEMS } from '@/lib/constants'

const PROBLEM_ICON_MAP = {
  ShieldX,
  Clock,
  Wallet,
  CircleAlert,
} as const

const APPROACH_ICON_MAP = {
  Layers,
  PencilRuler,
  Wrench,
  Factory,
} as const

export default async function ProblemsSection() {
  const t = await getTranslations('Problems')

  return (
    <section className="bg-white px-6 py-20 sm:px-8 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-6xl rounded-4xl bg-[#231f20] px-6 py-8 text-white shadow-[0_24px_80px_rgba(0,0,0,0.12)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.6rem]">
            {t('title')}
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-white/80 sm:text-base">
            {t('description')}
          </p>
        </div>

        <div className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {PROBLEM_ITEMS.map((item, index) => {
            const IconComponent = PROBLEM_ICON_MAP[item.icon as keyof typeof PROBLEM_ICON_MAP]
            const key = ['quality', 'delays', 'value', 'afterSales'][index]
            return (
              <div key={key}>
                <div className="flex items-center gap-3 text-lg font-semibold text-white">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/45 text-white/80">
                    <IconComponent className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <p>{t(`items.${key}`)}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="relative mt-8 overflow-hidden rounded-xl border border-white/10">
          <Image
            src="/images/design-section-background-image.png"
            alt=""
            aria-hidden="true"
            fill
            loading="lazy"
            sizes="(max-width: 640px) calc(100vw - 3rem), (max-width: 1024px) calc(100vw - 4rem), 1070px"
            className="object-cover"
            placeholder="blur"
            blurDataURL={getBlurDataURL(1070, 544)}
          />

          <div className="absolute inset-0 bg-black/20" />

          <VideoPlayer src="/videos/customer-journey-video.mp4" label={t('videoPlayLabel')} />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-0">
          <div className="lg:pe-10">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              {t('approach.title1')}
              <br />
              {t('approach.title2')}
            </h2>
          </div>

          <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
            {APPROACH_ITEMS.map((item, index) => {
              const IconComponent = APPROACH_ICON_MAP[item.icon as keyof typeof APPROACH_ICON_MAP]
              const key = ['multipleSystems', 'coordinatedDesign', 'afterSales', 'precision'][index]
              return (
                <div key={key}>
                  <article className="h-full border-white/10 py-6 sm:px-6 sm:[&:nth-child(odd)]:border-e sm:[&:nth-child(n+3)]:border-t">
                    <span className="mb-4 inline-flex h-10 w-10 items-center justify-center text-primary">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {t(`approach.${key}.title`)}
                    </h3>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">
                      {t(`approach.${key}.body`)}
                    </p>
                  </article>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
