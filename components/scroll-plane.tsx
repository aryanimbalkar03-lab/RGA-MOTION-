'use client'

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

export function ScrollPlane() {
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20 })

  // Fly across the screen in a gentle wave as the user scrolls the page
  const x = useTransform(smooth, [0.05, 0.95], ['-12vw', '105vw'])
  const y = useTransform(
    smooth,
    [0.05, 0.25, 0.45, 0.65, 0.85, 0.95],
    ['70vh', '38vh', '55vh', '30vh', '48vh', '20vh'],
  )
  const rotate = useTransform(
    smooth,
    [0.05, 0.25, 0.45, 0.65, 0.85, 0.95],
    [-8, 6, -6, 8, -5, 10],
  )
  const opacity = useTransform(smooth, [0, 0.06, 0.92, 1], [0, 0.9, 0.9, 0])

  return (
    <motion.div
      style={{ x, y, rotate, opacity }}
      className="pointer-events-none fixed left-0 top-0 z-30 hidden md:block"
      aria-hidden="true"
    >
      <svg width="90" height="90" viewBox="0 0 24 24" fill="none" className="text-primary drop-shadow-[0_0_18px_oklch(0.78_0.13_75_/_0.45)]">
        <path
          d="M21.5 15.5 L13.5 11.5 L13.5 4.5 C13.5 3.4 12.9 2.5 12 2.5 C11.1 2.5 10.5 3.4 10.5 4.5 L10.5 11.5 L2.5 15.5 L2.5 17.5 L10.5 15 L10.5 20 L8 21.75 L8 23 L12 22 L16 23 L16 21.75 L13.5 20 L13.5 15 L21.5 17.5 Z"
          fill="currentColor"
        />
      </svg>
      {/* Contrail */}
      <motion.span
        className="absolute right-full top-1/2 block h-px w-40 bg-gradient-to-l from-primary/60 to-transparent"
        aria-hidden="true"
      />
    </motion.div>
  )
}
