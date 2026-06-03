'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform, useInView } from 'motion/react'
import { ChefHat, Shirt, DoorOpen, Maximize, ArrowRight } from 'lucide-react'

const services = [
  {
    key: 'kitchens',
    title: 'Kitchens',
    subtitle: 'Designed for daily use, built for long-term performance',
    href: '/service/kitchens',
    icon: ChefHat,
    image: '/images/home/kitchen-product-image.webp',
    label: 'Learn more about Kitchens',
  },
  {
    key: 'wardrobes',
    title: 'Wardrobes & Closets',
    subtitle: 'Structured storage that stays organized over time',
    href: '/service/wardrobes',
    icon: Shirt,
    image: '/images/home/wardrobe-product-image.webp',
    label: 'Learn more about Wardrobes & Closets',
  },
  {
    key: 'doors',
    title: 'Interior Doors',
    subtitle: 'Precise finishes that hold up with everyday use',
    href: '/service/interior-doors',
    icon: DoorOpen,
    image: '/images/home/door-product-image.webp',
    label: 'Learn more about Interior Doors',
  },
  {
    key: 'windows',
    title: 'Premium Window Systems',
    subtitle: 'Sealed systems for better comfort and control',
    href: '/service/upvc-window-door-systems',
    icon: Maximize,
    image: '/images/home/window-systems-image.webp',
    label: 'Learn more about Premium Window Systems',
  },
]

const cardContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

const cardItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon
  return (
    <motion.div
      variants={cardItem}
      className="group flex flex-col overflow-hidden rounded-[10px] border border-white/5 bg-[rgba(35,31,32,0.85)]"
    >
      <div className="relative overflow-hidden" style={{ height: 'clamp(220px, 32vh, 380px)' }}>
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) calc(100vw - 2.5rem), 600px"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
        <div className="absolute left-[26px] top-[26px] flex h-14 w-14 items-center justify-center rounded-[10px] bg-white">
          <Icon className="h-[34px] w-[34px] text-primary" strokeWidth={1.7} aria-hidden="true" />
        </div>
      </div>

      <div className="flex w-full flex-1 flex-row items-center justify-between px-5 py-5">
        <div>
          <h4 className="text-2xl font-semibold leading-[1.3] text-white">{service.title}</h4>
          <p className="text-base leading-relaxed text-white/90">{service.subtitle}</p>
        </div>
        <Link
          href={service.href}
          aria-label={service.label}
          className="mt-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-primary transition-all duration-300 group-hover:bg-primary-hover group-hover:shadow-[0_0_20px_rgb(var(--primary)/0.4)]"
        >
          <ArrowRight className="h-4 w-4 text-white" aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  )
}

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const cardsInView = useInView(cardsRef, { once: true, margin: '-80px' })

  /*
   * Section is 300vh → sticky child gets a full scroll window
   * to animate through all 3 phases before normal scroll resumes.
   *
   * Phase 0→0.45  : solid black letters fill screen, foreground image
   *                 visible only through letter shapes (SVG mask),
   *                 mask-layer scale grows 1 → 18 so image "bursts" out
   * Phase 0.35→0.6: outline strokes fade out, bg image fades in
   * Phase 0.55→0.75: center overlay (icon + title) fades in
   * Phase 0.65→0.85: cards slide up
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Masked foreground image scale: starts contained in letters → covers screen
  const maskScale = useTransform(scrollYProgress, [0, 0.5], [1, 16])

  // White outline strokes fade out
  const outlineOpacity = useTransform(scrollYProgress, [0.05, 0.38], [1, 0])

  // Background villa image fades in once letters have dissolved
  const bgOpacity = useTransform(scrollYProgress, [0.38, 0.62], [0, 1])

  // Center overlay fades + rises in
  const overlayOpacity = useTransform(scrollYProgress, [0.52, 0.72], [0, 1])
  const overlayY = useTransform(scrollYProgress, [0.52, 0.72], [30, 0])

  // Cards block slides up
  const cardsOpacity = useTransform(scrollYProgress, [0.66, 0.82], [0, 1])
  const cardsY = useTransform(scrollYProgress, [0.66, 0.82], [48, 0])

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="relative w-full"
      /* 300vh gives enough scroll room for all animation phases */
      style={{ height: '300vh', backgroundColor: '#0a0a0a' }}
    >
      {/* ── Sticky viewport — stays pinned while section scrolls ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0a0a0a]">
        {/* ── Layer 0: dark stone/marble base texture ── */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/home/parallax-effect-background-image.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* darken the texture so outline text is legible */}
        <div className="absolute inset-0 z-0 bg-black/70" />

        {/* ── Layer 1: villa photo revealed through letter shapes ── */}
        {/*
         * The SVG mask cuts the foreground villa image to only show
         * inside the letter shapes. Scaling the wrapper from 1→16
         * makes those "letter windows" zoom into the scene until the
         * image fills the entire viewport.
         */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <motion.div
            style={{
              scale: maskScale,
              transformOrigin: 'center center',
              willChange: 'transform',
            }}
          >
            <svg
              width="1440"
              height="900"
              viewBox="0 0 1440 900"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
              style={{ display: 'block' }}
            >
              <defs>
                <mask
                  id="letterMask"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="1440"
                  height="900"
                >
                  {/* white = show image, black = hide */}
                  <rect width="1440" height="900" fill="white" />
                  <text
                    x="720"
                    y="270"
                    fill="black"
                    fontFamily='"Bebas Neue", Impact, sans-serif'
                    fontSize="190"
                    letterSpacing="0.02em"
                    textAnchor="middle"
                  >
                    OUR
                  </text>
                  <text
                    x="720"
                    y="450"
                    fill="black"
                    fontFamily='"Bebas Neue", Impact, sans-serif'
                    fontSize="190"
                    letterSpacing="0.02em"
                    textAnchor="middle"
                  >
                    INTERIOR
                  </text>
                  <text
                    x="720"
                    y="630"
                    fill="black"
                    fontFamily='"Bebas Neue", Impact, sans-serif'
                    fontSize="190"
                    letterSpacing="0.02em"
                    textAnchor="middle"
                  >
                    SOLUTIONS
                  </text>
                </mask>
              </defs>
              {/* villa photo — visible only through letter cutouts */}
              <image
                href="/images/home/parallax-foreground.webp"
                x="0"
                y="0"
                width="1440"
                height="900"
                preserveAspectRatio="xMidYMid slice"
                mask="url(#letterMask)"
              />
            </svg>
          </motion.div>
        </div>

        {/* ── Layer 2: white outline strokes on top of masked image ── */}
        <motion.svg
          className="pointer-events-none absolute inset-0 z-20 h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          style={{ opacity: outlineOpacity }}
        >
          {(['OUR', 'INTERIOR', 'SOLUTIONS'] as const).map((word, i) => (
            <text
              key={word}
              x="720"
              y={270 + i * 180}
              fill="transparent"
              stroke="rgba(255,255,255,0.92)"
              strokeWidth="2.5"
              paintOrder="stroke"
              fontFamily='"Bebas Neue", Impact, sans-serif'
              fontSize="190"
              letterSpacing="0.02em"
              textAnchor="middle"
            >
              {word}
            </text>
          ))}
        </motion.svg>

        {/* ── Layer 3: full-screen villa bg image (fades in after burst) ── */}
        <motion.div className="absolute inset-0 z-30" style={{ opacity: bgOpacity }}>
          <Image
            src="/images/home/parallax-foreground.webp"
            alt=""
            fill
            aria-hidden="true"
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* ── Layer 4: center overlay — icon + heading + subtitle ── */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center px-6 text-center"
          style={{ opacity: overlayOpacity, y: overlayY }}
        >
          <div className="flex flex-col items-center" style={{ gap: 28 }}>
            <Image
              src="/images/ideal-factory-icon.png"
              alt="Ideal Factory"
              width={96}
              height={108}
              className="object-contain"
              style={{
                height: 'clamp(60px, 8vh, 96px)',
                width: 'auto',
                filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.35))',
              }}
            />
            <h2
              style={{
                fontFamily: '"Lexend", Inter, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)',
                lineHeight: 1.2,
                color: '#fff',
                textShadow: '0 8px 24px rgba(0,0,0,0.5)',
                margin: 0,
              }}
            >
              Our Solutions
            </h2>
            <p
              style={{
                fontFamily: '"Lexend", Inter, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(1rem, 2vw, 1.8rem)',
                lineHeight: 1.35,
                color: '#fff',
                maxWidth: 860,
                textShadow: '0 8px 24px rgba(0,0,0,0.5)',
                margin: 0,
              }}
            >
              We provide all types of integrated
              <br />
              <span style={{ color: 'rgb(var(--primary))' }}>KITCHEN, CLOSET, DOOR Services</span>
            </p>
          </div>
        </motion.div>

        {/* ── Layer 5: cards + CTA ── */}
        <motion.div
          className="absolute inset-x-0 bottom-0 z-50 w-full pb-8 pt-4"
          style={{ opacity: cardsOpacity, y: cardsY }}
        >
          <div className="container">
            <motion.div
              ref={cardsRef}
              className="grid grid-cols-1 gap-5 lg:grid-cols-2"
              variants={cardContainer}
              initial="hidden"
              animate={cardsInView ? 'visible' : 'hidden'}
            >
              {services.map(s => (
                <ServiceCard key={s.key} service={s} />
              ))}
            </motion.div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.35,
              }}
            >
              <Link
                href="/projects"
                className="inline-flex h-[52px] items-center gap-2 rounded-[8px] bg-primary px-6 text-base font-medium text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_24px_rgb(var(--primary)/0.35)]"
                style={{ fontFamily: '"Inter", sans-serif', minWidth: 236 }}
              >
                Explore Our Projects
                <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
