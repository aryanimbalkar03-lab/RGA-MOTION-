'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const stats = [
  { value: '27', label: 'Years of flight training' },
  { value: '1,400+', label: 'Pilots graduated' },
  { value: '92%', label: 'Airline placement rate' },
  { value: '18', label: 'Training aircraft fleet' },
]

export function BrandStory() {
  return (
    <section id="story" className="border-t border-border bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/story-hangar.png"
                alt="Instructor and cadet walking beside a training aircraft inside the academy hangar"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="glass absolute -bottom-6 -right-6 hidden rounded-2xl px-8 py-6 md:block">
              <p className="font-serif text-4xl font-semibold text-primary">Est. 1998</p>
              <p className="mt-1 font-sans text-[0.6rem] tracking-[0.3em] uppercase text-muted-foreground">
                Hyderabad, India
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            <p className="font-sans text-[0.65rem] tracking-[0.4em] uppercase text-primary">Our Story</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-foreground md:text-5xl text-balance">
              Where India&apos;s skies found their pilots
            </h2>
            <div className="mt-6 flex flex-col gap-5 font-serif leading-relaxed text-muted-foreground">
              <p className="text-pretty">
                In 1998, a retired Air Force captain and three flight instructors opened a single
                hangar with two aircraft and one conviction — that world-class pilot training
                belonged in India, not overseas.
              </p>
              <p className="text-pretty">
                Today, Rajiv Gandhi Aviation Academy is one of the country&apos;s most trusted
                DGCA-approved flight schools. Our cadets fly with IndiGo, Air India, Vistara, and
                carriers across the Gulf and Southeast Asia. But our measure of success has never
                changed: the moment a student takes their first solo flight and lands as a pilot.
              </p>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8">
              {stats.map((s, i) => (
                <motion.li
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="border-l border-primary/40 pl-4"
                >
                  <p className="font-serif text-3xl font-semibold text-foreground md:text-4xl">{s.value}</p>
                  <p className="mt-1 font-sans text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground">
                    {s.label}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
