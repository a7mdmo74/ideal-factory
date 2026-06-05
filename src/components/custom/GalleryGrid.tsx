'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import { useTranslations } from 'next-intl'
import { cn, getBlurDataURL } from '@/lib/utils'
import { GALLERY_ITEMS } from '@/lib/constants'

type FilterKey = 'all' | 'kitchen' | 'door' | 'closet' | 'upvc'

interface Filter {
  key: string
  label: string
}

interface GalleryGridProps {
  filters: Filter[]
}

export default function GalleryGrid({ filters }: GalleryGridProps) {
  const [active, setActive] = useState<FilterKey>('all')

  const isAll = active === 'all'

  const filtered = GALLERY_ITEMS.filter(item => isAll || item.category === active)

  return (
    <div className="mt-10">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {filters.map(filter => (
          <button
            key={filter.key}
            onClick={() => setActive(filter.key as FilterKey)}
            className={cn(
              'rounded-full px-5 py-2 text-sm font-medium transition',
              active === filter.key
                ? 'bg-white text-[#0E0E0E]'
                : 'border border-white/20 bg-transparent text-white/70 hover:border-white/40 hover:text-white'
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {isAll ? <AllLayout items={GALLERY_ITEMS} /> : <FilteredLayout items={filtered} />}
    </div>
  )
}

function AllLayout({ items }: { items: typeof GALLERY_ITEMS }) {
  const t = useTranslations('Gallery')
  return (
    <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item, index) => (
        <motion.div
          key={item.src}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className={cn('relative overflow-hidden rounded-2.5', item.className)}
          style={{ height: item.className?.includes('row-span-2') ? 'auto' : '224px' }}
        >
          <Image
            src={item.src}
            alt={t(`items.${item.altKey}`)}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
            placeholder="blur"
            blurDataURL={getBlurDataURL(400, 300)}
          />
        </motion.div>
      ))}
    </div>
  )
}

function FilteredLayout({
  items,
}: {
  items: readonly {
    src: string
    altKey: string
    category: string
    className: string
  }[]
}) {
  const t = useTranslations('Gallery')
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      <AnimatePresence mode="popLayout">
        {items.map(item => (
          <motion.div
            key={item.src}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="relative overflow-hidden rounded-2xl h-56"
          >
            <Image
              src={item.src}
              alt={t(`items.${item.altKey}`)}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
              placeholder="blur"
              blurDataURL={getBlurDataURL(400, 300)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
