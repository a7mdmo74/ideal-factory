'use client'

import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { ChefHat, Shirt, DoorOpen, Maximize, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import type { Service } from '@/types'

const ICON_MAP = {
  ChefHat,
  Shirt,
  DoorOpen,
  Maximize,
} as const

interface ServiceCardProps {
  service: Service
  title: string
  subtitle: string
}

export function ServiceCard({ service, title, subtitle }: ServiceCardProps) {
  const t = useTranslations('Solutions')
  const IconComponent = ICON_MAP[service.icon as keyof typeof ICON_MAP]

  return (
    <div className="group flex flex-col overflow-hidden rounded-[10px] border border-white/5 bg-[rgba(35,31,32,0.8)] backdrop-blur-[2px]">
      <div
        className="relative overflow-hidden"
        style={{ height: 'clamp(220px,32vh,380px)' }}
      >
        <Image
          src={service.image}
          alt={title}
          fill
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 1024px) calc(100vw - 2.5rem), 600px"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        <div className="absolute left-[26px] top-[26px] flex h-14 w-14 items-center justify-center rounded-[10px] bg-white">
          {IconComponent && (
            <IconComponent className="h-[34px] w-[34px] text-primary" strokeWidth={1.7} aria-hidden="true" />
          )}
        </div>
      </div>

      <div className="flex w-full flex-1 flex-row items-center justify-between px-5 py-5">
        <div>
          <h4
            style={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 600,
              fontSize: 24,
              lineHeight: 1.3,
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            {title}
          </h4>
          <p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.9)',
              margin: 0,
            }}
          >
            {subtitle}
          </p>
        </div>
        <div className="mt-auto flex justify-end">
          <Link
            href={service.href}
            aria-label={t('learnMore', { title })}
            className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-primary transition-all duration-300 group-hover:bg-primary-hover group-hover:shadow-[0_0_20px_rgb(var(--primary)_/_0.4)]"
          >
            <ArrowRight className="h-4 w-4 text-white" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  )
}
