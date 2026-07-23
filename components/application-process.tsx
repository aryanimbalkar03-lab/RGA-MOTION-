'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ClipboardList, FileText, HeartPulse, PlaneTakeoff, Users } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Submit Your Application',
    text: 'Fill the online form with your academic records. Takes under ten minutes — no application fee.',
  },
  {
    icon: ClipboardList,
    step: '02',
    title: 'Entrance Assessment',
    text: 'A short aptitude test covering physics, mathematics, English, and spatial reasoning.',
  },
  {
    icon: Users,
    step: '03',
    title: 'Counseling & Interview',
    text: 'Meet our chief flight instructor. We assess motivation, discuss financing, and answer every question.',
  },
  {
    icon: HeartPulse,
    step: '04',
    title: 'DGCA Medical',
    text: 'We guide you through your Class 2 medical with our partner examiners — usually cleared within three weeks.',
  },
  {
    icon: PlaneTakeoff,
    step: '05',
    title: 'Enrollment & First Flight',
    text: 'Secure your seat, receive your uniform and wings, and take your familiarization flight in week one.',
  },
]

export function ApplicationProcess() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="process" className="border-t border-border bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-primary">Application Process</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-foreground md:text-5xl text-balance">
            Five steps from ground to sky
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-serif leading-relaxed text-muted-foreground text-pretty">
            From application to your first flight in as little as six weeks.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Vertical line on mobile, horizontal on desktop */}
          <div className="absolute left-6 top-0 h-full w-px bg-border md:left-0 md:top-6 md:h-px md:w-full" aria-hidden="true" />
          <motion.div
            initial={{ scaleY: 0, scaleX: 0 }}
            whileInView={{ scaleY: 1, scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
            className="absolute left-6 top-0 h-full w-px origin-top bg-primary/60 md:left-0 md:top-6 md:h-px md:w-full md:origin-left"
            aria-hidden="true"
          />

          <ol className="grid gap-10 md:grid-cols-5 md:gap-6">
            {steps.map((s, i) => (
              <motion.li
                key={s.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-16 md:pl-0 md:pt-16"
              >
                <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary bg-background text-primary md:left-0">
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-primary">Step {s.step}</p>
                <h3 className="mt-2 font-serif text-xl font-semibold text-foreground text-balance">{s.title}</h3>
                <p className="mt-2 font-serif text-sm leading-relaxed text-muted-foreground text-pretty">{s.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Inline application form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="glass mx-auto mt-20 max-w-2xl rounded-3xl p-8 md:p-12"
        >
          {submitted ? (
            <div className="flex flex-col items-center py-8 text-center">
              <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden="true" />
              <h3 className="mt-6 font-serif text-2xl font-semibold text-foreground">Application received</h3>
              <p className="mt-3 max-w-md font-serif leading-relaxed text-muted-foreground text-pretty">
                Our admissions team will call you within one working day to schedule your entrance
                assessment. Keep your Class 12 marksheet handy.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-serif text-2xl font-semibold text-foreground text-balance">
                Start Step 01 right now
              </h3>
              <p className="mt-2 font-serif text-sm leading-relaxed text-muted-foreground">
                No application fee. No obligation. A counselor responds within 24 hours.
              </p>
              <form
                className="mt-8 grid gap-5 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="app-name" className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">
                    Full Name
                  </label>
                  <input
                    id="app-name"
                    name="name"
                    required
                    placeholder="Arjun Sharma"
                    className="rounded-xl border border-input bg-transparent px-4 py-3 font-serif text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="app-phone" className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">
                    Phone
                  </label>
                  <input
                    id="app-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="rounded-xl border border-input bg-transparent px-4 py-3 font-serif text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="app-email" className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="app-email"
                    name="email"
                    type="email"
                    required
                    placeholder="arjun@email.com"
                    className="rounded-xl border border-input bg-transparent px-4 py-3 font-serif text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="app-program" className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">
                    Program of Interest
                  </label>
                  <select
                    id="app-program"
                    name="program"
                    className="rounded-xl border border-input bg-background px-4 py-3 font-serif text-foreground focus:border-primary focus:outline-none"
                  >
                    <option>Commercial Pilot License (CPL)</option>
                    <option>Private Pilot License (PPL)</option>
                    <option>Cadet Airline Pathway</option>
                    <option>Not sure yet — need counseling</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="sm:col-span-2 rounded-full border border-primary bg-primary px-8 py-4 font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground transition-all hover:scale-[1.02] hover:bg-transparent hover:text-primary"
                >
                  Submit Application
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
