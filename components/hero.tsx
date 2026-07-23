'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { LogoMark } from './logo'

const line1 = 'Rajiv Gandhi'
const line2 = 'Aviation Academy'

function RevealLine({
  text,
  baseDelay,
  className,
}: {
  text: string
  baseDelay: number
  className?: string
}) {
  return (
    <span className={`block overflow-hidden ${className ?? ''}`} aria-hidden="true">
      {text.split('').map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: baseDelay + i * 0.035,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </motion.span>
      ))}
    </span>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} id="top" className="relative h-[100svh] overflow-hidden" aria-label="Hero">
      {/* Running airplane video background */}
      <motion.div style={{ y: videoY }} className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src="/videos/hero-runway.mp4"
          poster="/images/hero-runway.png"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      </motion.div>

      {/* Cinematic grade overlays */}
      <div className="absolute inset-0 bg-background/55" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, oklch(0.16 0.008 75 / 0.85) 0%, transparent 35%, transparent 60%, oklch(0.16 0.008 75) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        {/* Logo reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <LogoMark className="h-20 w-20 text-primary md:h-24 md:w-24" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 font-sans text-[0.65rem] tracking-[0.5em] uppercase text-primary md:text-xs"
        >
          Est. 1998 — DGCA Approved Flight School
        </motion.p>

        {/* Brand name reveal */}
        <h1 className="mt-4 font-serif font-semibold text-foreground">
          <span className="sr-only">Rajiv Gandhi Aviation Academy</span>
          <RevealLine
            text={line1}
            baseDelay={1.1}
            className="text-5xl leading-[1.05] md:text-7xl lg:text-8xl text-balance"
          />
          <RevealLine
            text={line2}
            baseDelay={1.55}
            className="text-3xl leading-[1.15] tracking-[0.04em] text-primary md:text-5xl lg:text-6xl text-balance"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.2 }}
          className="mt-8 max-w-xl font-serif text-base leading-relaxed text-muted-foreground md:text-lg text-pretty"
        >
          The runway to your commercial pilot license begins here. Train with veteran captains, fly
          modern aircraft, and graduate into the cockpit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.5 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#pilot-fit"
            className="rounded-full border border-primary bg-primary px-8 py-3.5 font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground transition-all hover:scale-105 hover:bg-transparent hover:text-primary"
          >
            Test If You Are Pilot Fit
          </a>
          <a
            href="#process"
            className="glass rounded-full px-8 py-3.5 font-sans text-xs tracking-[0.2em] uppercase text-foreground transition-all hover:scale-105 hover:border-primary hover:text-primary"
          >
            Start Application
          </a>
        </motion.div>
      </motion.div>

      {/* Runway edge lights */}
      <div className="absolute bottom-24 left-0 right-0 z-10 flex justify-between px-8 md:px-16" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-primary animate-runway-blink"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#pilot-fit"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to pilot fit test"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.8 }}
          className="block"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.span>
      </motion.a>
    </section>
  )
}
