'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Wordmark } from './logo'

const links = [
  { href: '#pilot-fit', label: 'Pilot Fit Test' },
  { href: '#story', label: 'Our Story' },
  { href: '#programs', label: 'Programs' },
  { href: '#process', label: 'Application' },
  { href: '#admissions', label: 'Admissions' },
  { href: '#contact', label: 'Contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.4, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-background/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Main navigation">
        <a href="#top" className="shrink-0" aria-label="Rajiv Gandhi Aviation Academy home">
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-sans text-xs tracking-[0.16em] uppercase text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#process"
            className="inline-block rounded-full border border-primary bg-primary px-6 py-2.5 font-sans text-xs tracking-[0.16em] uppercase text-primary-foreground transition-all hover:scale-105 hover:bg-transparent hover:text-primary"
          >
            Apply Now
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-sans text-sm tracking-[0.16em] uppercase text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#process"
                onClick={() => setOpen(false)}
                className="inline-block w-full rounded-full border border-primary bg-primary px-6 py-3 text-center font-sans text-xs tracking-[0.16em] uppercase text-primary-foreground"
              >
                Apply Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  )
}
