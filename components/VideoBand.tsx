import Link from 'next/link'
import type { VideoBand as Band } from '@/lib/config-schema'
import { HERO_SCRIM_RGB, HERO_TAGLINE_OPACITY } from '@/lib/hero-scrim'
import { QUOTE_CTA } from '@/lib/navigation'
import { darkVars } from '@/lib/theme-vars'
import { btnPrimary } from '@/lib/ui'
import Eyebrow from './Eyebrow'
import SectionVideo from './SectionVideo'

/**
 * Full-bleed band: the client's footage behind a short block of copy and the
 * quote CTA. Every word comes from the band prop (config.videoBands).
 *
 * Stacking follows MIGRATING.md: SectionVideo paints at absolute inset-0 z-0,
 * the scrim is the next sibling at z-0 so DOM order puts it above the video,
 * and the copy is positioned at z-10. No negative z-indexes here; that is the
 * hero's convention, and mixing the two is the documented failure.
 */
export default function VideoBand({ band }: { band: Band }) {
  return (
    <section style={darkVars} className="relative isolate overflow-hidden bg-bg text-ink">
      <SectionVideo desktop={band.desktop} mobile={band.mobile} poster={band.poster} alt={band.alt} />
      <div aria-hidden="true" className="absolute inset-0 z-0" style={{ background: `rgba(${HERO_SCRIM_RGB.join(',')}, 0.75)` }} />
      <div className="relative z-10 mx-auto w-full max-w-page px-4 py-20 md:py-28 lg:px-8">
        <div className="max-w-3xl">
          {band.eyebrow && <Eyebrow className="mb-4 !text-ink-soft">{band.eyebrow}</Eyebrow>}
          <h2 className="font-heading text-section font-bold text-ink">{band.heading}</h2>
          <p className="mt-4 max-w-measure text-step-1 text-ink" style={{ opacity: HERO_TAGLINE_OPACITY }}>
            {band.body}
          </p>
          <div className="mt-8">
            <Link href={QUOTE_CTA.href} className={`${btnPrimary} px-8 py-4 text-step-1`}>
              {QUOTE_CTA.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
