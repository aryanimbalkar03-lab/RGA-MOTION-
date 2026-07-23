'use client'

import { motion } from 'framer-motion'
import { CalendarDays, CheckCircle2, GraduationCap, IndianRupee } from 'lucide-react'

const requirements = [
  'Minimum age 17 at enrollment (18 for CPL issue)',
  'Class 12 with Physics & Mathematics (or NIOS equivalent)',
  'DGCA Class 2 Medical (we assist with scheduling)',
  'English proficiency for radio telephony',
  'Valid passport or willingness to obtain one',
]

const intakes = [
  { batch: 'Monsoon Batch', month: 'August 2026', seats: '12 seats remaining' },
  { batch: 'Winter Batch', month: 'December 2026', seats: '24 seats open' },
  { batch: 'Summer Batch', month: 'April 2027', seats: 'Waitlist open' },
]

export function Admissions() {
  return (
    <section id="admissions" className="border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-primary">Admissions</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-foreground md:text-5xl text-balance">
            Everything you need to enroll
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Eligibility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-border bg-card p-8"
          >
            <GraduationCap className="h-8 w-8 text-primary" aria-hidden="true" />
            <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">Eligibility</h3>
            <ul className="mt-6 flex flex-col gap-4">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3 font-serif text-sm leading-relaxed text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {r}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Intakes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-3xl border border-border bg-card p-8"
          >
            <CalendarDays className="h-8 w-8 text-primary" aria-hidden="true" />
            <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">Upcoming Intakes</h3>
            <ul className="mt-6 flex flex-col">
              {intakes.map((it, i) => (
                <li
                  key={it.batch}
                  className={`flex items-center justify-between py-4 ${i > 0 ? 'border-t border-border' : ''}`}
                >
                  <div>
                    <p className="font-serif text-base font-medium text-foreground">{it.batch}</p>
                    <p className="font-sans text-xs text-muted-foreground">{it.month}</p>
                  </div>
                  <span className="font-sans text-[0.6rem] tracking-[0.15em] uppercase text-primary">{it.seats}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-sans text-xs leading-relaxed text-muted-foreground">
              Batches are capped at 24 cadets to guarantee aircraft availability and instructor
              attention.
            </p>
          </motion.div>

          {/* Fees & financing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col rounded-3xl border border-primary/40 bg-card p-8"
          >
            <IndianRupee className="h-8 w-8 text-primary" aria-hidden="true" />
            <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">Fees & Financing</h3>
            <p className="mt-6 font-serif text-sm leading-relaxed text-muted-foreground text-pretty">
              CPL training starts at <span className="text-foreground">₹38.5 lakh</span> all-inclusive
              — flying hours, ground school, uniforms, and exam fees. No hidden hourly surcharges.
            </p>
            <ul className="mt-6 flex flex-col gap-3 font-serif text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                Education loan tie-ups with SBI & HDFC Credila
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                Pay-per-phase installment plans
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                Merit scholarships up to ₹4 lakh
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-auto pt-8 font-sans text-xs tracking-[0.2em] uppercase text-primary transition-colors hover:text-foreground"
            >
              Request a detailed fee structure →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
