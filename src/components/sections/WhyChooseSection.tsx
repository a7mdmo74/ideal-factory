import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { Check, Phone } from 'lucide-react'
import { getBlurDataURL } from '@/lib/utils'

export default async function WhyChooseSection() {
  const t = await getTranslations('WhyChoose')

  const points = [t('points.one'), t('points.two'), t('points.three'), t('points.four')]

  return (
    <section className="bg-white px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-30 lg:py-20">
      <div className="mx-auto max-w-299">
        <div className="hidden md:block relative rounded-[10px] min-h-100 lg:min-h-122.5">
          <div
            className="absolute inset-0 rounded-[10px]"
            style={{
              background: 'linear-gradient(to right, #57B7C0, #000000)',
            }}
          />

          <div className="pointer-events-none absolute bottom-0 left-0 rounded-[10px] z-0 w-[40%] md:w-[35%] lg:w-120 h-50 md:h-60 lg:h-70 bg-[radial-gradient(ellipse_at_10%_100%,rgba(87,183,192,0.55)_0%,transparent_65%)] blur-md" />

          <div
            className="relative grid h-full gap-4 md:gap-6 lg:gap-6.25"
            style={{ gridTemplateColumns: '1fr 1fr' }}
          >
            <div className="relative flex items-end justify-center overflow-visible pb-0">
              <Image
                src="/images/why-villa-owners.png"
                alt="Villa kitchen interior by Ideal Factory"
                width={580}
                height={560}
                priority
                className="relative z-10 w-full object-contain object-bottom drop-shadow-2xl"
                style={{
                  height: 'auto',
                  maxHeight: '400px',
                  maxWidth: '100%',
                  marginBottom: '-2px',
                }}
                placeholder="blur"
                blurDataURL={getBlurDataURL(580, 560)}
              />
            </div>

            <div className="relative z-10 flex flex-col justify-center py-6 md:py-10 lg:py-14 pe-4 md:pe-8 lg:pe-12">
              <h2 className="text-xl sm:text-2xl md:text-2.5xl lg:text-3xl xl:text-[2.1rem] font-bold leading-tight text-white">
                {t('title')}
              </h2>

              <ul className="mt-4 md:mt-5 lg:mt-7 space-y-2.5 md:space-y-3 lg:space-y-3.5">
                {points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5 md:gap-3">
                    <span
                      className="mt-0.5 flex h-5 w-5 md:h-6 md:w-6 shrink-0 items-center justify-center rounded-full ring-1 ring-white/40"
                      style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                    >
                      <Check className="h-3 w-3 md:h-3.5 md:w-3.5 text-white" />
                    </span>
                    <span className="text-sm md:text-base leading-relaxed text-white/95">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 md:mt-6 lg:mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 text-xs md:text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#0f2a2a]"
                >
                  <Phone className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  {t('cta')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="md:hidden relative rounded-[10px]"
          style={{
            background: 'linear-gradient(to bottom, #57B7C0, #000000)',
          }}
        >
          <div
            className="relative flex justify-center"
            style={{ height: '200px', overflow: 'visible' }}
          >
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0"
              style={{
                height: '120px',
                background:
                  'radial-gradient(ellipse at 50% 100%, rgba(87,183,192,0.5) 0%, transparent 70%)',
              }}
            />
            <Image
              src="/images/why-villa-owners.png"
              alt="Villa kitchen interior by Ideal Factory"
              width={380}
              height={340}
              className="relative z-10 h-auto w-full max-w-70 sm:max-w-85 object-contain drop-shadow-xl"
              style={{ marginTop: '-30px' }}
            />
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 px-4 sm:px-5 pb-6 sm:pb-8 pt-4 sm:pt-5">
            <h2 className="text-lg sm:text-xl font-bold text-white">{t('title')}</h2>
            <ul className="space-y-2.5 sm:space-y-3">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ring-1 ring-white/40"
                    style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                  >
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  <span className="text-xs sm:text-sm leading-relaxed text-white/95">{point}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/40 bg-white/10 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-white hover:text-[#0f2a2a]"
            >
              <Phone className="h-3.5 w-3.5" />
              {t('cta')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
