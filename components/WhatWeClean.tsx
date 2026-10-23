import { config, getService } from '@/lib/config'
import { getImage } from '@/lib/images'
import { QUOTE_CTA } from '@/lib/navigation'
import { homeCopy } from '@/lib/page-content'
import { darkVars } from '@/lib/theme-vars'
import CleanStage, { type CleanTab } from './CleanStage'
import Eyebrow from './Eyebrow'
import Highlight from './Highlight'

/**
 * Server wrapper for the What We Clean tabs (config.whatWeClean). One tab per
 * service that has a real photo; a service with no photo has no tab.
 *
 * The stage is photography edge to edge, so the section keeps the dark palette
 * on the light page. Its copy, buttons and tab panel read the tokens darkVars
 * redefines, so none of them need a dark variant.
 */
export default function WhatWeClean() {
  const w = config.whatWeClean
  if (!w) return null
  const copy = homeCopy.whatWeClean

  const tabs: CleanTab[] = w.tabs.map((t) => {
    const service = getService(t.service)
    if (!service) throw new Error(`whatWeClean tab "${t.service}" is not a service slug in config.services`)
    const img = getImage(t.image)
    return {
      key: t.service,
      name: service.name,
      sentence: t.sentence,
      goodFor: t.goodFor,
      file: t.image,
      image: { src: img.src, srcSet: img.srcSet, width: img.width, height: img.height, alt: img.alt },
    }
  })

  return (
    <section aria-labelledby="what-we-clean-heading" style={darkVars} className="relative bg-bg text-ink-soft">
      <div aria-hidden="true" className="strip-spectrum absolute inset-x-0 top-0 z-30" />
      <CleanStage tabs={tabs} defaultTab={w.defaultTab} hint={copy.hint} cta={QUOTE_CTA}>
        {copy.eyebrow && <Eyebrow>{copy.eyebrow}</Eyebrow>}
        <h2 id="what-we-clean-heading" className="mt-4 font-heading text-section font-bold text-ink lg:text-step-5">
          <Highlight text={copy.heading.text} highlight={copy.heading.highlight} />
        </h2>
        {copy.body && <p className="mt-4 max-w-measure text-step-1 text-ink-soft">{copy.body}</p>}
      </CleanStage>
    </section>
  )
}
