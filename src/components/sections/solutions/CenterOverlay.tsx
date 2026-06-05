'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { motion, MotionValue, useTransform } from 'motion/react'

interface CenterOverlayProps {
  scrollYProgress: MotionValue<number>
}

export function CenterOverlay({ scrollYProgress }: CenterOverlayProps) {
  const t = useTranslations('Solutions')

  const overlayOpacity = useTransform(scrollYProgress, [0.38, 0.58], [0, 1])

  const overlayY = useTransform(scrollYProgress, [0.38, 0.58], [28, 0])

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-6 text-center"
      style={{
        opacity: overlayOpacity,
        y: overlayY,
      }}
    >
      <div className="relative flex flex-col items-center justify-center gap-[30px]">
        <div
          className="absolute left-1/2 top-1/2 isolate -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full"
          style={{
            width: 'clamp(520px, 72vw, 980px)',
            height: 'clamp(320px, 52vh, 600px)',
          }}
        >
          <Image
            src="/images/parallax-foreground.jpg"
            alt=""
            aria-hidden="true"
            fill
            priority
            className="object-cover object-center"
            sizes="72vw"
          />

          <div className="absolute inset-0 bg-black/20" />
        </div>

        <Image
          src="/images/ideal-factory-icon.png"
          alt="Ideal Factory Icon"
          width={96}
          height={108}
          loading="lazy"
          className="relative z-[1] object-contain"
          style={{
            height: 'clamp(60px, 8vh, 100px)',
            width: 'auto',
            filter: 'drop-shadow(0 10px 24px rgba(0,0,0,0.22))',
          }}
        />

        <h2
          className="relative z-[1] m-0 font-bold leading-[1.2] text-white"
          style={{
            fontFamily: '"Lexend", Inter, sans-serif',
            fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)',
            textShadow: '0 10px 28px rgba(0,0,0,0.3)',
          }}
        >
          {t('title')}
        </h2>

        <p
          className="relative z-[1] m-0 max-w-[900px] font-semibold leading-[1.3] text-white"
          style={{
            fontFamily: '"Lexend", Inter, sans-serif',
            fontSize: 'clamp(1rem, 2vw, 2rem)',
            textShadow: '0 10px 28px rgba(0,0,0,0.3)',
          }}
        >
          {t('lead')}
          <br />
          <span className="text-primary">{t('accent')}</span>
        </p>
      </div>
    </motion.div>
  )
}
