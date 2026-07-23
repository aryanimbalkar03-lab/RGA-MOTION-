export function LogoMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      {/* Outer ring */}
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <circle cx="32" cy="32" r="25" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
      {/* Left wing */}
      <path
        d="M31 33 L6 26 L10 33 L31 35 Z"
        fill="currentColor"
      />
      {/* Right wing */}
      <path
        d="M33 33 L58 26 L54 33 L33 35 Z"
        fill="currentColor"
      />
      {/* Fuselage pointing up */}
      <path
        d="M32 12 L34.5 32 L34 46 L36 50 L32 48.5 L28 50 L30 46 L29.5 32 Z"
        fill="currentColor"
      />
      {/* Star above */}
      <path
        d="M32 4 L33 7 L36 7 L33.6 8.8 L34.5 12 L32 10 L29.5 12 L30.4 8.8 L28 7 L31 7 Z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  )
}

export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-9 w-9 text-primary" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-sm font-semibold tracking-[0.18em] uppercase text-foreground">
          Rajiv Gandhi
        </span>
        <span className="font-sans text-[0.6rem] tracking-[0.34em] uppercase text-muted-foreground mt-1">
          Aviation Academy
        </span>
      </span>
    </span>
  )
}
