import { Wordmark } from './logo'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <Wordmark />
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                ['#pilot-fit', 'Pilot Fit Test'],
                ['#story', 'Our Story'],
                ['#programs', 'Programs'],
                ['#process', 'Application'],
                ['#admissions', 'Admissions'],
                ['#contact', 'Contact'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-sans text-xs tracking-[0.16em] uppercase text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-xs text-muted-foreground">
            © {new Date().getFullYear()} Rajiv Gandhi Aviation Academy. DGCA Approved FTO.
          </p>
          <p className="font-serif text-sm italic text-muted-foreground">
            &ldquo;The sky is not the limit. It&apos;s the classroom.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  )
}
