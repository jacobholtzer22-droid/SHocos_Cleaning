import Link from 'next/link'
import { config } from '@/lib/config'
import { pageH1, pageIntro } from '@/lib/headings'
import { HERO_TAGLINE_OPACITY, heroScrimCss } from '@/lib/hero-scrim'
import { QUOTE_CTA } from '@/lib/navigation'
import { homeCopy } from '@/lib/page-content'
import { darkVars } from '@/lib/theme-vars'
import { btnOutline, btnPrimary } from '@/lib/ui'
import HeroVideo from './HeroVideo'
import Highlight from './Highlight'
import { PhoneIcon } from './icons'
import Img from './Img'

/**
 * Homepage hero. The brand line keeps its display treatment as a styled <p>;
 * the page's single <h1> is the service-plus-city line directly under it.
 * Overlays are divs, never images.
 *
 * The hero sits on a photograph, so it keeps the dark palette on a light page:
 * darkVars redefines every token for this subtree, which is why the buttons
 * need no dark variant.
 *
 * The scrim is the one in lib/hero-scrim.ts, the same data verify check 19
 * measures, so the gradient a visitor sees is the gradient the gate knows about.
 * HERO_COPY_BOX in that file mirrors this layout (copy vertically centered,
 * left column, max-w-3xl).
 */
export default function Hero() {
  const copy = homeCopy.hero
  const hero = config.images.hero

  return (
    <section style={darkVars} className="relative isolate flex min-h-[90vh] items-center overflow-hidden bg-bg text-ink">
      {hero && <Img name={hero} priority sizes="100vw" className="absolute inset-0 -z-20 h-full w-full object-cover" />}
      {hero && config.images.heroVideo && (
        <div className="absolute inset-0 -z-20">
          <HeroVideo {...config.images.heroVideo} />
        </div>
      )}
      <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: heroScrimCss() }} />

      <div className="mx-auto w-full max-w-page px-4 pb-16 pt-24 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="max-w-3xl">
          <p className="font-heading text-display font-bold text-ink">
            <Highlight text={copy.brandLine.text} highlight={copy.brandLine.highlight} />
          </p>
          <h1 className="mt-6 font-body text-step-1 font-semibold text-ink md:text-step-2">{pageH1.home()}</h1>
          <p className="mt-4 max-w-measure text-step-1 text-ink" style={{ opacity: HERO_TAGLINE_OPACITY }}>
            {pageIntro()}
            {copy.lead && ` ${copy.lead}`}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href={QUOTE_CTA.href} className={`${btnPrimary} px-8 py-4 text-step-1`}>
              {QUOTE_CTA.label}
            </Link>
            <a href={`tel:${config.phone}`} className={`${btnOutline} px-8 py-4 text-step-1`}>
              <PhoneIcon className="h-5 w-5 text-accent-ink" />
              {config.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
