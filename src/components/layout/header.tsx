'use client'

import Image from 'next/image'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react'
import { useState, useRef, useEffect } from 'react'
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <motion.nav
        style={{ backgroundColor, borderColor }}
        className="relative mx-auto max-w-7xl rounded-[10px] border backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.75)]"
        ref={dropdownRef}
      >
        <div className="relative flex h-15 md:h-19.25 items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-white/80 hover:bg-white/10 hover:text-white lg:hidden"
              aria-label={t('toggleMenu')}
              onClick={() => setIsOpen(prev => !prev)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            <ul className="hidden items-center gap-7 text-sm font-medium text-white/85 lg:flex">
              {NAV_ITEMS.map(item => (
                <li key={item.href} className="relative">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveDropdown(activeDropdown === item.href ? null : item.href)
                        }
                        className={cn(
                          'flex items-center gap-1.5 transition-colors hover:text-primary',
                          activeDropdown === item.href && 'text-primary'
                        )}
                      >
                        {t(item.label)}
                        <ChevronDown
                          className={cn(
                            'h-3.5 w-3.5 transition-transform duration-200',
                            activeDropdown === item.href && 'rotate-180'
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.href && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.18, ease: 'easeOut' }}
                            className="absolute left-0 top-full z-50 mt-3 w-64 overflow-hidden rounded-xl border border-white/10 bg-black/80 shadow-2xl backdrop-blur-xl"
                          >
                            <ul className="p-1.5">
                              {item.dropdown.map(child => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="group flex flex-col gap-0.5 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/8"
                                  >
                                    <span className="text-sm font-medium text-white/90 group-hover:text-primary">
                                      {t(child.label)}
                                    </span>
                                    {child.description && (
                                      <span className="text-xs text-white/45 group-hover:text-white/60">
                                        {t(child.description)}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'transition-colors hover:text-primary',
                        pathname === item.href && 'text-primary'
                      )}
                    >
                      {t(item.label)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() =>
                            setActiveDropdown(activeDropdown === item.href ? null : item.href)
                          }
                          className="flex w-full items-center justify-between border-b border-white/5 py-3 text-sm font-medium text-white/85 transition-colors hover:text-primary"
                        >
                          {t(item.label)}
                          <ChevronDown
                            className={cn(
                              'h-4 w-4 transition-transform duration-200',
                              activeDropdown === item.href && 'rotate-180'
                            )}
                          />
                        </button>

                        <AnimatePresence>
                          {activeDropdown === item.href && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              {item.dropdown.map(child => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex flex-col gap-0.5 border-b border-white/5 py-2.5 pl-4 last:border-0"
                                  >
                                    <span className="text-sm font-medium text-white/75 hover:text-primary">
                                      {t(child.label)}
                                    </span>
                                    {child.description && (
                                      <span className="text-xs text-white/40">
                                        {t(child.description)}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
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
                    )}
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
