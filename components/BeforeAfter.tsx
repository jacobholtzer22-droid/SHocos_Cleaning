import { config } from '@/lib/config'
import { getImage } from '@/lib/images'
import { homeCopy } from '@/lib/page-content'
import BeforeAfterSlider from './BeforeAfterSlider'
import Eyebrow from './Eyebrow'
import Section, { type SectionTone } from './Section'

type Pair = (typeof config.beforeAfter)[number]

/** The pairs as sliders in a two-column grid, each with its caption. Renders nothing without pairs. */
export function BeforeAfterGrid({ pairs }: { pairs: readonly Pair[] }) {
  if (pairs.length === 0) return null
  return (
    <ul className={`grid gap-8 ${pairs.length > 1 ? 'md:grid-cols-2' : 'mx-auto max-w-3xl'}`}>
      {pairs.map((p) => {
        const before = getImage(p.before)
        const after = getImage(p.after)
        return (
          <li key={`${p.before}-${p.after}`}>
            <figure>
              <BeforeAfterSlider before={before} after={after} label={p.alt} />
              {p.caption && <figcaption className="mt-3 max-w-measure text-step--1 text-muted">{p.caption}</figcaption>}
            </figure>
          </li>
        )
      })}
    </ul>
  )
}

/**
 * Homepage before and after band, directly after the hero. Every pair is the
 * same surface photographed from a close angle (see MEDIA.md). Renders nothing
 * when config.beforeAfter is empty.
 */
export default function BeforeAfter({ tone = 'base', pairs = config.beforeAfter }: { tone?: SectionTone; pairs?: readonly Pair[] }) {
  const copy = homeCopy.beforeAfter
  if (pairs.length === 0) return null
  return (
    <Section tone={tone} labelledBy={copy.heading ? 'before-after-heading' : undefined} label={copy.heading ? undefined : 'Before and after'}>
      <div className="mb-10 max-w-2xl">
        {copy.eyebrow && <Eyebrow>{copy.eyebrow}</Eyebrow>}
        {copy.heading && (
          <h2 id="before-after-heading" className="mt-3 font-heading text-section font-bold text-ink">
            {copy.heading}
          </h2>
        )}
        {copy.body && <p className="mt-3 max-w-measure text-step-1 text-ink-soft">{copy.body}</p>}
      </div>
      <BeforeAfterGrid pairs={pairs} />
    </Section>
  )
}
