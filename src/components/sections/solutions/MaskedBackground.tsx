'use client'

import { motion, MotionValue, useTransform } from 'motion/react'
import { useTranslations } from 'next-intl'

interface MaskedBackgroundProps {
  scrollYProgress: MotionValue<number>
}

const TEXT_CENTER = '720px 450px'

export function MaskedBackground({ scrollYProgress }: MaskedBackgroundProps) {
  const t = useTranslations('Solutions')

  const words = [t('maskWords.our'), t('maskWords.interior'), t('maskWords.solutions')]

  const maskGroupOpacity = useTransform(scrollYProgress, [0, 0.15, 0.35, 0.45], [0, 1, 1, 0])

  const maskGroupScale = useTransform(scrollYProgress, [0, 0.45], [0.65, 2.0])

  const outlineGroupOpacity = useTransform(scrollYProgress, [0, 0.15, 0.35, 0.45], [1, 1, 1, 0])

  const outlineGroupScale = useTransform(scrollYProgress, [0, 0.45], [0.65, 2.0])

  const villaOpacity = useTransform(scrollYProgress, [0, 0.25, 0.35, 0.58, 0.65], [0, 0, 1, 1, 0])

  const villaWidth = useTransform(scrollYProgress, [0.35, 0.55], ['100vw', '80vw'])

  const villaHeight = useTransform(scrollYProgress, [0.35, 0.55], ['100vh', '80vh'])

  const villaBorderRadius = useTransform(scrollYProgress, [0.35, 0.55], ['0px', '40vh'])

  return (
    <>
      <motion.div
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 overflow-hidden"
        style={{
          width: villaWidth,
          height: villaHeight,
          borderRadius: villaBorderRadius,
          opacity: villaOpacity,
        }}
      >
        <div
          className="absolute left-1/2 top-1/2 h-screen w-screen -translate-x-1/2 -translate-y-1/2 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/parallax-effect-background-image.jpg)',
          }}
        />
      </motion.div>

      <svg
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-dvh w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <mask
            id="letterMask"
            maskUnits="userSpaceOnUse"
            maskContentUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1440"
            height="900"
          >
            <rect x="0" y="0" width="1440" height="900" fill="black" />

            <motion.g
              style={{
                opacity: maskGroupOpacity,
                scale: maskGroupScale,
                transformOrigin: TEXT_CENTER,
              }}
            >
              {words.map((word, index) => (
                <text
                  key={word}
                  x="720"
                  y={270 + index * 180}
                  fill="white"
                  fontFamily='"Bebas Neue", Impact, sans-serif'
                  fontSize="190"
                  fontWeight="400"
                  letterSpacing="0.02em"
                  textAnchor="middle"
                >
                  {word}
                </text>
              ))}
            </motion.g>
          </mask>
        </defs>

        <image
          href="/images/parallax-effect-background-image.jpg"
          x="0"
          y="0"
          width="1440"
          height="900"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#letterMask)"
        />
      </svg>

      <svg
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-dvh w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <motion.g
          style={{
            opacity: outlineGroupOpacity,
            scale: outlineGroupScale,
            transformOrigin: TEXT_CENTER,
          }}
        >
          {words.map((word, index) => (
            <text
              key={word}
              x="720"
              y={270 + index * 180}
              fill="transparent"
              stroke="rgba(255,255,255,0.92)"
              strokeWidth="3"
              paintOrder="stroke"
              fontFamily='"Bebas Neue", Impact, sans-serif'
              fontSize="190"
              fontWeight="400"
              letterSpacing="0.02em"
              textAnchor="middle"
            >
              {word}
            </text>
          ))}
        </motion.g>
      </svg>
    </>
  )
}
