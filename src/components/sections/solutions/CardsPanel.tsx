'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { motion, MotionValue, useTransform } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import type { ServiceSlug } from '@/types'
import { ServiceCard } from './ServiceCard'

interface CardsPanelProps {
  scrollYProgress: MotionValue<number>
}

const SERVICE_TRANSLATION_KEYS: Record<
  ServiceSlug,
  'kitchens' | 'wardrobes' | 'doors' | 'windows'
> = {
  kitchens: 'kitchens',
  wardrobes: 'wardrobes',
  'interior-doors': 'doors',
  'upvc-window-door-systems': 'windows',
}

export function CardsPanel({ scrollYProgress }: CardsPanelProps) {
  const t = useTranslations('Solutions')
  const containerRef = useRef<HTMLDivElement>(null)
  const [overflow, setOverflow] = useState(0)

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return
      const H = containerRef.current.scrollHeight
      const V = window.innerHeight
      setOverflow(Math.max(0, H - V))
    }

    measure()
    window.addEventListener('resize', measure)

    const timer = setTimeout(measure, 200)

    return () => {
      window.removeEventListener('resize', measure)
      clearTimeout(timer)
    }
  }, [])

  const cardsOpacity = useTransform(scrollYProgress, [0.6, 0.78], [0, 1])

  const cardsY = useTransform(scrollYProgress, [0.68, 0.95], [0, -overflow])

  return (
    <motion.div
      ref={containerRef}
      className="relative z-40 w-full"
      style={{ opacity: cardsOpacity, y: cardsY }}
    >
      <div
        className="relative"
        style={{
          backgroundImage: 'url(/images/projects-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="relative mx-auto w-full max-w-360 pb-8 pt-14"
          style={{
            paddingLeft: 'clamp(1.25rem, 3.2vw, 2.875rem)',
            paddingRight: 'clamp(1.25rem, 3.2vw, 2.875rem)',
          }}
        >
          <div className="mx-auto mb-8 max-w-278.5 text-center">
            <motion.div
              className="mb-5 flex justify-center"
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/images/ideal-factory-icon.png"
                alt="Ideal Factory Icon"
                aria-hidden="true"
                width={96}
                height={108}
                loading="lazy"
                className="object-contain"
                style={{
                  height: 'clamp(48px,6vh,72px)',
                  width: 'auto',
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <h2
                style={{
                  fontFamily: '"Lexend", Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  lineHeight: 1.2,
                  color: '#FFFFFF',
                }}
              >
                {t('title')}
              </h2>
              <p
                style={{
                  fontFamily: '"Lexend", Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(1.1rem, 2.3vw, 2rem)',
                  lineHeight: 1.3,
                  color: '#FFFFFF',
                  marginTop: '0.75rem',
                }}
              >
                {t('lead')}
                <br />
                <span style={{ color: 'var(--primary)' }}>{t('accent')}</span>
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 80, scale: 0.93 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.1,
                }}
              >
                <ServiceCard
                  service={s}
                  title={t(`services.${SERVICE_TRANSLATION_KEYS[s.slug]}.title`)}
                  subtitle={t(`services.${SERVICE_TRANSLATION_KEYS[s.slug]}.subtitle`)}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-[8px] bg-primary px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_24px_rgb(var(--primary)/0.35)]"
              style={{
                fontFamily: '"Inter", sans-serif',
                minWidth: 236,
                height: 52,
              }}
            >
              {t('cta')}
              <ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
