'use client'

import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { usePathname } from '@/i18n/navigation'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { NAV_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export const Header = () => {
  const t = useTranslations('Navigation')
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

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
        style={{ backgroundColor, borderColor }}
        className="relative mx-auto max-w-7xl rounded-[10px] border backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.75)]"
      >
        <div className="relative flex h-15 md:h-19.25 items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-9.5">
            <Button
              variant="ghost"
              size="icon"
              className="text-white/80 hover:bg-white/10 hover:text-white"
              aria-label={t('toggleMenu')}
              onClick={() => setIsOpen(prev => !prev)}
            >
              {isOpen ? <X className="size-9" /> : <Menu className="size-9" />}
            </Button>

            <ul className="hidden items-center gap-7 text-sm font-medium text-white/85 lg:flex">
              {NAV_ITEMS.map(item => (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={cn(
                      'transition-colors hover:text-primary text-lg',
                      pathname === item.href && 'text-primary'
                    )}
                  >
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/"
            className="ms-auto lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
          >
            <span className="sr-only">Ideal Factory home</span>
            <Image
              src="/images/ideal-factory-logo.svg"
              alt="Ideal Factory"
              width={280}
              height={100}
              priority
              className="h-10 w-auto object-contain md:h-14.75"
            />
          </Link>

          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden h-11 rounded-[10px] px-5 font-semibold sm:inline-flex"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4" />
                {t('cta')}
              </Link>
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-white/10 lg:hidden"
            >
              <ul className="flex flex-col px-4 py-2 sm:px-6">
                {NAV_ITEMS.map(item => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'block border-b border-white/5 py-3 text-sm font-medium',
                        'text-white/85 transition-colors hover:text-primary last:border-0',
                        pathname === item.href && 'text-primary'
                      )}
                    >
                      {t(item.label)}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="px-4 pb-4 pt-2 sm:px-6">
                <Button asChild className="w-full rounded-[10px] font-semibold">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Phone className="mr-2 h-4 w-4" />
                    {t('cta')}
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
