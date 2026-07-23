import { Admissions } from '@/components/admissions'
import { ApplicationProcess } from '@/components/application-process'
import { BrandStory } from '@/components/brand-story'
import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { PilotFitQuiz } from '@/components/pilot-fit-quiz'
import { Programs } from '@/components/programs'
import { ScrollPlane } from '@/components/scroll-plane'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'

export default function Page() {
  return (
    <>
      <SiteNav />
      <ScrollPlane />
      <main>
        <Hero />
        <PilotFitQuiz />
        <BrandStory />
        <Programs />
        <ApplicationProcess />
        <Admissions />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
