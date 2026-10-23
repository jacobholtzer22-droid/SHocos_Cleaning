import { config } from './config'

/**
 * Structured page copy, read from config.copy (validated with the rest of
 * site.config.ts in lib/config-schema.ts).
 *
 * A null slot is copy that is not written yet. Components render nothing for a
 * null slot, so adding copy later is a config edit, never a component change.
 */
export type { Display } from './config-schema'

const c = config.copy

export type Step = (typeof c.how.steps)[number]

export const siteCopy = { footerBlurb: c.footerBlurb }
export const homeCopy = c.home
export const howCopy = c.how
export const galleryCopy = c.gallery
export const whyCopy = c.why
export const areasCopy = c.serviceAreas
export const faqCopy = c.faq
export const quoteCopy = c.quote
export const servicesCopy = c.services
export const contactCopy = c.contact
