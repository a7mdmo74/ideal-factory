'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion } from 'motion/react'
import { ChevronLeft, ChevronRight, QuoteIcon } from 'lucide-react'

import { TESTIMONIALS } from '@/lib/constants'

const Testmonials = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = (direction: 'prev' | 'next') => {
    if (!scrollRef.current) return

    const offset = scrollRef.current.offsetWidth * 0.9
    scrollRef.current.scrollBy({
      left: direction === 'next' ? offset : -offset,
      behavior: 'smooth',
    })
  }

  return (
    <section className="relative overflow-hidden bg-[#231F20] text-white px-6 py-20 sm:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute -left-8 top-1/2 z-0 hidden -translate-y-1/2 opacity-30 lg:block"
      >
        <Image
          src="/images/testmonials1.png"
          alt=""
          width={250}
          height={250}
          className="object-contain w-auto h-auto"
          style={{ width: 'auto', height: 'auto' }}
          aria-hidden="true"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute -right-8 top-1/2 z-0 hidden -translate-y-1/2 opacity-30 lg:block"
      >
        <Image
          src="/images/testmonials2.png"
          alt=""
          width={300}
          height={300}
          className="object-contain w-auto h-auto"
          style={{ width: 'auto', height: 'auto' }}
          aria-hidden="true"
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-start gap-10 lg:grid-cols-[5fr_7fr]">
          <div>
            <span className="inline-flex items-center text-lg font-semibold tracking-[0.18em] text-primary">
              Testimonials
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl text-white">
              What They&apos;re Talking About Company ?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
              Real villa owners across the UAE have trusted Ideal Factory for kitchens, closets,
              doors and uPVC window systems.
            </p>
            <div className="mt-7 flex gap-3">
              <button
                type="button"
                onClick={() => handleScroll('prev')}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/15 transition hover:bg-white/10"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-5 w-5 cursor-pointer" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll('next')}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white"
                aria-label="Next review"
              >
                <ChevronRight className="h-5 w-5 cursor-pointer" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="overflow-hidden pb-4" dir="ltr">
            <div ref={scrollRef} className="flex gap-4 p-4 overflow-x-auto scrollbar-hide">
              {TESTIMONIALS.map(testimonial => (
                <div
                  key={testimonial.id}
                  data-testimonial-slide="true"
                  className="shrink-0 basis-full max-w-xl px-2 sm:basis-1/2"
                >
                  <article
                    dir="ltr"
                    className="group relative flex min-h-96 flex-col rounded-3xl border border-white/10 bg-[#101010]/70 p-8 text-white shadow-[0_40px_90px_-60px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-300 hover:border-primary/40"
                  >
                    <QuoteIcon className="h-11 w-11 text-primary" aria-hidden="true" />
                    <p className="mt-8 flex-1 text-base leading-8 text-white/70">
                      {testimonial.quote}
                    </p>
                    <div className="mt-10 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-sm font-semibold text-primary">
                        <Image
                          src={testimonial.image}
                          alt={`${testimonial.name}'s avatar`}
                          width={40}
                          height={40}
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-primary">{testimonial.name}</p>
                        <p className="text-sm text-white/60">{testimonial.role ?? 'Customer'}</p>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <style jsx>{`
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}

export default Testmonials
