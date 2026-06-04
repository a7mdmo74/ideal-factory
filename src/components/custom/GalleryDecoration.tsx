'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

export default function GalleryDecoration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="pointer-events-none absolute -left-8 top-1/2 z-0 hidden -translate-y-1/2 opacity-30 lg:block"
    >
      <Image
        src="/images/gallery-bg.png"
        alt="Gallery background"
        width={250}
        height={250}
        className="object-contain"
        aria-hidden="true"
      />
    </motion.div>
  )
}
