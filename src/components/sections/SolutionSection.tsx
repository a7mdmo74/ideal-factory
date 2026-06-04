'use client'

import { useRef } from 'react'
import { useScroll } from 'motion/react'
import { MaskedBackground } from './solutions/MaskedBackground'
import { CenterOverlay } from './solutions/CenterOverlay'
import { CardsPanel } from './solutions/CardsPanel'

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="relative w-full overflow-x-clip"
      style={{ height: '400vh' }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <MaskedBackground scrollYProgress={scrollYProgress} />

        <CenterOverlay scrollYProgress={scrollYProgress} />

        <CardsPanel scrollYProgress={scrollYProgress} />
      </div>
    </section>
  )
}
