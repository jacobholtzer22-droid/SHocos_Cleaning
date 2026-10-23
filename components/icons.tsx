/** Inline SVG icons. Decorative: every icon is aria-hidden and never an <img>. */
import type { BENEFIT_ICONS, STEP_ICONS, TRUST_ICONS } from '@/lib/config-schema'

type IconProps = { className?: string }

const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true }

export function PhoneIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.11 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export function MapPinIcon({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

/** A paver grid: running-bond rectangles. */
function PaversIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M3 9.3h18M3 14.7h18M9 4v5.3M15 4v5.3M6 9.3v5.4M12 9.3v5.4M18 9.3v5.4M9 14.7V20M15 14.7V20" />
    </svg>
  )
}

export type TrustIconName = (typeof TRUST_ICONS)[number]

export function TrustIcon({ name, className = 'h-5 w-5' }: IconProps & { name: TrustIconName }) {
  switch (name) {
    case 'phone':
      return <PhoneIcon className={className} />
    case 'pin':
      return <MapPinIcon className={className} />
    case 'clock':
      return <ClockIcon className={className} />
    case 'pavers':
      return <PaversIcon className={className} />
  }
}

export type BenefitIconName = (typeof BENEFIT_ICONS)[number]

/** Benefit card icons (homepage "Why pressure cleaning"). Simple line marks, no water drops or splashes. */
export function BenefitIcon({ name, className = 'h-6 w-6' }: IconProps & { name: BenefitIconName }) {
  switch (name) {
    case 'growth':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M12 21V11" />
          <path d="M12 11c0-4 3-7 8-7 0 5-3 8-8 7z" />
          <path d="M12 14c0-3-2.5-5.5-7-5.5 0 4 2.5 6 7 5.5z" />
        </svg>
      )
    case 'color':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v18" />
          <path d="M12 7h5M12 11h7M12 15h6M12 19h3" />
        </svg>
      )
    case 'seal':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z" />
          <path d="M8.5 12l2.5 2.5 4.5-5" />
        </svg>
      )
    case 'pool':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M8 4v11M16 4v11M8 8h8M8 12h8" />
          <path d="M3 18c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0" />
        </svg>
      )
    case 'gutter':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M3 10l9-6 9 6" />
          <path d="M3 10h18v2.5H3z" />
          <path d="M18 12.5V20" />
        </svg>
      )
    case 'list':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M9 6h11M9 12h11M9 18h11" />
          <path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2" />
        </svg>
      )
    case 'clock':
      return <ClockIcon className={className} />
  }
}

export type StepIconName = (typeof STEP_ICONS)[number]

/** Process step icons (homepage process section and /how-it-works). */
export function StepIcon({ name, className = 'h-6 w-6' }: IconProps & { name: StepIconName }) {
  switch (name) {
    case 'call':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 9h8M8 13h5" />
        </svg>
      )
    case 'quote':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <rect x="5" y="4" width="14" height="17" rx="2" />
          <path d="M9 4V3h6v1M8.5 10h7M8.5 14h7M8.5 18h4" />
        </svg>
      )
    case 'clean':
      return <PaversIcon className={className} />
    case 'walk':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12.5l2.7 2.7L16 9.8" />
        </svg>
      )
  }
}
