'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, Phone } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'

import { Button } from '@/components/ui/button'
import { NAV_ITEMS } from '@/lib/constants'

export const Header = () => {
  const { scrollY } = useScroll()

  const backgroundColor = useTransform(
    scrollY,
    [0, 150],
    ['rgba(0, 0, 0, 0.45)', 'rgba(0, 0, 0, 0.75)']
  )

  const borderColor = useTransform(
    scrollY,
    [0, 150],
    ['rgba(255,255,255,0.10)', 'rgba(255,255,255,0.15)']
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <motion.nav
        style={{
          backgroundColor,
          borderColor,
        }}
        className="relative mx-auto flex h-19.25 max-w-7xl items-center justify-between rounded-[10px] border px-4 py-3 backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.75)] sm:px-6"
      >
        {/* Left */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-white/80 hover:bg-white/10 hover:text-white"
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </Button>

          <ul className="hidden items-center gap-7 text-sm font-medium text-white/85 lg:flex">
            {NAV_ITEMS.map(item => (
              <li key={item.label}>
                <Link href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Center Logo */}
        <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="sr-only">Ideal Factory home</span>

          <Image
            src="/images/ideal-factory-logo.svg"
            alt="Ideal Factory"
            width={188}
            height={72}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Right */}
        <div className="flex items-center gap-3">
          <Button asChild className="hidden h-11 rounded-[10px] px-5 font-semibold sm:inline-flex">
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Start Your Project
            </Link>
          </Button>
        </div>
      </motion.nav>
    </header>
  )
}
