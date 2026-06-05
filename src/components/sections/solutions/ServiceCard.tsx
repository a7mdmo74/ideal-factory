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
      <div className="relative h-[clamp(220px,32vh,380px)] overflow-hidden">
        <Image
          src={service.image}
          alt={title}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 1024px) calc(100vw - 2.5rem), 600px"
        />

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />

        <div className="absolute top-6.5 left-6.5 flex h-14 w-14 items-center justify-center rounded-[10px] bg-white">
          {IconComponent && (
            <IconComponent
              className="h-8.5 w-8.5 text-primary"
              strokeWidth={1.7}
              aria-hidden="true"
            />
          )}
        </div>
      </div>

      <div className="flex flex-1 items-center justify-between px-5 py-5">
        <div className="min-w-0 flex-1">
          <h4 className="m-0 font-sans text-2xl font-semibold leading-[1.3] text-white">{title}</h4>

          <p className="mt-1 text-base leading-normal text-white/90">{subtitle}</p>
        </div>

        <div className="ml-4 flex justify-end">
          <Link
            href={service.href}
            aria-label={t('learnMore', { title })}
            className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-primary transition-all duration-300 group-hover:bg-primary-hover group-hover:shadow-[0_0_20px_rgb(var(--primary)/0.4)]"
          >
            <ArrowRight className="h-4 w-4 text-white" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  )
}
