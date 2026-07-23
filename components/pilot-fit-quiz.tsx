'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Award, Compass, RotateCcw } from 'lucide-react'

type Option = { label: string; score: number }
type Question = { id: string; question: string; hint?: string; options: Option[] }

const questions: Question[] = [
  {
    id: 'age',
    question: 'How old are you?',
    hint: 'DGCA requires you to be at least 17 to begin flight training.',
    options: [
      { label: 'Under 16', score: 1 },
      { label: '16 – 17', score: 3 },
      { label: '18 – 30', score: 4 },
      { label: '31 – 40', score: 3 },
      { label: 'Over 40', score: 2 },
    ],
  },
  {
    id: 'education',
    question: 'Did you study Physics & Mathematics in Class 12?',
    hint: 'Both subjects are mandatory for a Commercial Pilot License in India.',
    options: [
      { label: 'Yes, I cleared both', score: 4 },
      { label: 'Currently studying them', score: 3 },
      { label: 'No, but willing to clear via NIOS', score: 2 },
      { label: 'No', score: 1 },
    ],
  },
  {
    id: 'vision',
    question: 'How is your eyesight?',
    hint: 'Correctable vision up to 6/6 is acceptable for a Class 1 Medical.',
    options: [
      { label: 'Perfect, no correction needed', score: 4 },
      { label: 'Glasses/lenses, corrects to normal', score: 3 },
      { label: 'Colour blindness suspected', score: 1 },
      { label: 'Not sure', score: 2 },
    ],
  },
  {
    id: 'health',
    question: 'How would you rate your overall physical fitness?',
    hint: 'You will need to pass a DGCA Class 2, then Class 1 medical exam.',
    options: [
      { label: 'Excellent — I stay active', score: 4 },
      { label: 'Good — no known conditions', score: 3 },
      { label: 'Average — some minor issues', score: 2 },
      { label: 'I have a chronic medical condition', score: 1 },
    ],
  },
  {
    id: 'english',
    question: 'How comfortable are you communicating in English?',
    hint: 'Aviation English proficiency is required for radio communication.',
    options: [
      { label: 'Fluent — speak and write with ease', score: 4 },
      { label: 'Comfortable in conversation', score: 3 },
      { label: 'Basic, but improving', score: 2 },
      { label: 'Limited', score: 1 },
    ],
  },
  {
    id: 'pressure',
    question: 'In a high-pressure situation, you usually…',
    hint: 'Cockpit decision-making demands calm under stress.',
    options: [
      { label: 'Stay calm and follow procedure', score: 4 },
      { label: 'Feel the nerves, but act decisively', score: 3 },
      { label: 'Need a moment before responding', score: 2 },
      { label: 'Tend to freeze or panic', score: 1 },
    ],
  },
  {
    id: 'commitment',
    question: 'Can you commit 18–24 months to full-time training?',
    hint: 'Our CPL program takes around 20 months including 200 flying hours.',
    options: [
      { label: 'Yes, fully committed', score: 4 },
      { label: 'Yes, with financial planning', score: 3 },
      { label: 'Only part-time for now', score: 2 },
      { label: 'Not sure yet', score: 1 },
    ],
  },
]

const maxScore = questions.length * 4

function getResult(score: number) {
  const pct = Math.round((score / maxScore) * 100)
  if (pct >= 80)
    return {
      pct,
      title: 'Cleared for Takeoff',
      verdict:
        'Outstanding. Your profile strongly matches what airlines look for in cadet pilots. You are an excellent candidate for our Commercial Pilot License program — apply now and our counselors will fast-track your admission.',
    }
  if (pct >= 60)
    return {
      pct,
      title: 'On the Flight Path',
      verdict:
        'You have real potential. A few areas may need attention — such as medicals or eligibility subjects — but nothing our admissions team hasn\u2019t guided hundreds of cadets through. Book a free counseling session to map your route.',
    }
  return {
    pct,
    title: 'Pre-Flight Checks Needed',
    verdict:
      'You are not disqualified — most gaps like Physics/Maths via NIOS or medical clarity can be resolved. Speak with our counselors and we will build a step-by-step plan to get you flight-ready.',
  }
}

export function PilotFitQuiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [selected, setSelected] = useState<number | null>(null)
  const done = step >= questions.length
  const score = answers.reduce((a, b) => a + b, 0)

  const choose = (i: number) => setSelected(i)

  const next = () => {
    if (selected === null) return
    setAnswers((prev) => [...prev, questions[step].options[selected].score])
    setSelected(null)
    setStep((s) => s + 1)
  }

  const back = () => {
    if (step === 0) return
    setAnswers((prev) => prev.slice(0, -1))
    setSelected(null)
    setStep((s) => s - 1)
  }

  const restart = () => {
    setStep(0)
    setAnswers([])
    setSelected(null)
  }

  const result = done ? getResult(score) : null

  return (
    <section id="pilot-fit" className="relative border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-col items-center text-center">
          <p className="flex items-center gap-2 font-sans text-[0.65rem] tracking-[0.4em] uppercase text-primary">
            <Compass className="h-4 w-4" aria-hidden="true" />
            The Cockpit Check
          </p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-foreground md:text-5xl text-balance">
            Are You Pilot Fit?
          </h2>
          <p className="mt-4 max-w-lg font-serif leading-relaxed text-muted-foreground text-pretty">
            Seven questions. Two minutes. An honest estimate of your eligibility to train as a
            commercial pilot in India.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mt-12" aria-hidden="true">
          <div className="flex justify-between font-sans text-[0.6rem] tracking-[0.25em] uppercase text-muted-foreground">
            <span>{done ? 'Assessment complete' : `Question ${step + 1} of ${questions.length}`}</span>
            <span>{Math.round(((done ? questions.length : step) / questions.length) * 100)}%</span>
          </div>
          <div className="mt-2 h-px w-full bg-border">
            <motion.div
              className="h-px bg-primary"
              animate={{ width: `${((done ? questions.length : step) / questions.length) * 100}%` }}
              transition={{ ease: 'easeOut', duration: 0.5 }}
            />
          </div>
        </div>

        <div className="mt-10 min-h-[24rem]">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <h3 className="font-serif text-2xl font-medium text-foreground md:text-3xl text-balance">
                  {questions[step].question}
                </h3>
                {questions[step].hint && (
                  <p className="mt-2 font-sans text-xs leading-relaxed text-muted-foreground">
                    {questions[step].hint}
                  </p>
                )}

                <div className="mt-8 flex flex-col gap-3" role="radiogroup" aria-label={questions[step].question}>
                  {questions[step].options.map((opt, i) => (
                    <button
                      key={opt.label}
                      type="button"
                      role="radio"
                      aria-checked={selected === i}
                      onClick={() => choose(i)}
                      className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-left font-serif transition-all ${
                        selected === i
                          ? 'border-primary bg-primary/10 text-foreground'
                          : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                      }`}
                    >
                      <span>{opt.label}</span>
                      <span
                        className={`h-3 w-3 shrink-0 rounded-full border transition-colors ${
                          selected === i ? 'border-primary bg-primary' : 'border-border'
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={back}
                    disabled={step === 0}
                    className="flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    disabled={selected === null}
                    className="flex items-center gap-2 rounded-full border border-primary bg-primary px-8 py-3 font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground transition-all hover:scale-105 hover:bg-transparent hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
                  >
                    {step === questions.length - 1 ? 'See Result' : 'Next'}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="glass flex flex-col items-center rounded-3xl px-6 py-12 text-center md:px-12"
              >
                <Award className="h-10 w-10 text-primary" aria-hidden="true" />
                <p className="mt-6 font-sans text-[0.65rem] tracking-[0.4em] uppercase text-muted-foreground">
                  Your Pilot Fit Score
                </p>
                <motion.p
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-2 font-serif text-7xl font-semibold text-primary"
                >
                  {result!.pct}
                  <span className="text-3xl text-muted-foreground">/100</span>
                </motion.p>
                <h3 className="mt-4 font-serif text-3xl font-semibold text-foreground text-balance">
                  {result!.title}
                </h3>
                <p className="mt-4 max-w-xl font-serif leading-relaxed text-muted-foreground text-pretty">
                  {result!.verdict}
                </p>
                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                  <a
                    href="#process"
                    className="rounded-full border border-primary bg-primary px-8 py-3.5 font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground transition-all hover:scale-105 hover:bg-transparent hover:text-primary"
                  >
                    Begin Your Application
                  </a>
                  <button
                    type="button"
                    onClick={restart}
                    className="flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <RotateCcw className="h-4 w-4" aria-hidden="true" />
                    Retake Test
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
