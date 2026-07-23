'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'

const details = [
  {
    icon: MapPin,
    label: 'Campus',
    value: 'Begumpet Airport Road, Hyderabad, Telangana 500016',
  },
  {
    icon: Phone,
    label: 'Admissions Hotline',
    value: '+91 40 2790 4455',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'admissions@rgaviationacademy.in',
  },
  {
    icon: Clock,
    label: 'Visiting Hours',
    value: 'Mon – Sat, 9:00 AM to 6:00 PM. Campus tours every Saturday.',
  },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" className="border-t border-border bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-primary">Contact Us</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl text-balance">
              Come see the hangar for yourself
            </h2>
            <p className="mt-5 max-w-md font-serif leading-relaxed text-muted-foreground text-pretty">
              The best way to know if this life is for you? Stand on our tarmac while a cadet takes
              off for their first solo. Book a campus visit or simply call — a real counselor
              answers, not a bot.
            </p>

            <ul className="mt-10 flex flex-col gap-7">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border text-primary">
                    <d.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-muted-foreground">{d.label}</p>
                    <p className="mt-1 font-serif text-base text-foreground">{d.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden="true" />
                <h3 className="mt-6 font-serif text-2xl font-semibold text-foreground">Message sent</h3>
                <p className="mt-3 max-w-sm font-serif leading-relaxed text-muted-foreground">
                  Thank you for reaching out. Our team will get back to you within one working day.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl font-semibold text-foreground">Send us a message</h3>
                <form
                  className="mt-7 flex flex-col gap-5"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                >
                  <div className="flex flex-col gap-2">
                    <label htmlFor="c-name" className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">
                      Name
                    </label>
                    <input
                      id="c-name"
                      required
                      placeholder="Your full name"
                      className="rounded-xl border border-input bg-transparent px-4 py-3 font-serif text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="c-email" className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="rounded-xl border border-input bg-transparent px-4 py-3 font-serif text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="c-msg" className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      id="c-msg"
                      required
                      rows={5}
                      placeholder="I&apos;d like to book a campus visit…"
                      className="resize-none rounded-xl border border-input bg-transparent px-4 py-3 font-serif text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-full border border-primary bg-primary px-8 py-4 font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground transition-all hover:scale-[1.02] hover:bg-transparent hover:text-primary"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
