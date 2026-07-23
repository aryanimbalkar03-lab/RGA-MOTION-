'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const programs = [
  {
    title: 'Commercial Pilot License',
    code: 'CPL — 20 Months',
    image: '/images/cockpit.png',
    alt: 'Student pilot at the controls of a training aircraft at dusk',
    description:
      'Our flagship program. 200 flying hours, complete DGCA ground school, multi-engine rating, and airline interview preparation.',
    points: ['200 hrs flight time', 'Multi-engine rating', 'Airline placement support'],
  },
  {
    title: 'Private Pilot License',
    code: 'PPL — 8 Months',
    image: '/images/hero-runway.png',
    alt: 'Training aircraft accelerating down a runway at dusk',
    description:
      'Fly for the love of it. 50 flying hours covering solo cross-country navigation, radio telephony, and full ground subjects.',
    points: ['50 hrs flight time', 'Solo cross-country', 'Weekend batches available'],
  },
  {
    title: 'Cadet Airline Pathway',
    code: 'CPL + Type Rating — 26 Months',
    image: '/images/cadets.png',
    alt: 'Pilot cadets in uniform walking on the tarmac toward a training aircraft',
    description:
      'The direct route to the right seat of an A320 or B737. CPL plus type rating with structured airline assessment coaching.',
    points: ['A320 / B737 type rating', 'Airline mentorship', 'Simulator assessments'],
  },
]

export function Programs() {
  return (
    <section id="programs" className="border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-primary">Flight Programs</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl text-balance">
              Choose your route to the cockpit
            </h2>
          </div>
          <p className="max-w-sm font-serif leading-relaxed text-muted-foreground text-pretty">
            Every program is DGCA-approved and taught by instructors with airline and defence
            flying careers behind them.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {programs.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: 'easeOut' }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_60px_-20px_oklch(0.78_0.13_75_/_0.25)]"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={p.image || "/placeholder.svg"}
                  alt={p.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" aria-hidden="true" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-primary">{p.code}</p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-foreground text-balance">{p.title}</h3>
                <p className="mt-3 flex-1 font-serif text-sm leading-relaxed text-muted-foreground text-pretty">
                  {p.description}
                </p>
                <ul className="mt-5 flex flex-col gap-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 font-sans text-xs text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-primary" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href="#process"
                  className="mt-7 flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-primary transition-colors hover:text-foreground"
                >
                  Apply for this program
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
