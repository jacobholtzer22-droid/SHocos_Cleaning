import { buildTitle, renderTitle, TITLE_MAX, TITLE_MIN, type BuildMetadataArgs } from './seo'
import { config } from './config'
import type { Service, ServiceArea } from './config-schema'

/**
 * One H1 per page, containing the service and, where natural, the city. Display
 * lines stay visible as styled non-heading text. Every word that names the
 * business, the service, or a place comes from config.
 */
const where = () => `${config.primaryCity}, ${config.primaryState}`
const TRADE = config.copy.trade

export const pageH1 = {
  home: () => `${config.copy.home.hero.h1Lead} in ${where()}`,
  services: () => `${TRADE} Services in ${where()}`,
  service: (s: Service) => `${s.name} in ${where()}`,
  how: () => `How ${TRADE} Works with ${config.displayName}`,
  gallery: () => `${TRADE} Photos from ${where()}`,
  why: () => `Why ${config.displayName}`,
  serviceAreas: () => `${TRADE} Service Areas: ${config.copy.region}`,
  faq: () => `${TRADE} Questions in ${where()}`,
  contact: () => `Contact ${config.displayName} in ${where()}`,
  quote: () => `Request a ${TRADE} Quote in ${where()}`,
  area: (area: ServiceArea) => `${TRADE} in ${area.name}, ${config.primaryState}`,
}

const counties = () => config.coverage.map((c) => c.county)
const countyList = () => {
  const list = counties()
  return list.length > 1 ? `${list.slice(0, -1).join(', ')} and ${list.at(-1)}` : (list[0] ?? '')
}

/** The first paragraph under every H1: who, what service, where. */
export function pageIntro(): string {
  return `${config.displayName} ${config.copy.introPhrase} in ${where()} and across ${countyList()}.`
}

/** Same sentence for an area page, naming that town. */
export function areaIntro(area: ServiceArea): string {
  return `${config.displayName} ${config.copy.introPhrase} in ${area.name}, ${config.primaryState}, and across ${config.copy.region}.`
}

/**
 * Metadata args for a page whose builder title may run past the 60-character
 * limit (verify check 13). The display name alone is 24 characters, so some
 * service and town names cannot fit the template's builder. When the builder's
 * title fits, it is used unchanged; otherwise the page falls back to kind
 * 'other' with the first shorter candidate that fits. lib/seo.ts is untouched.
 */
export function fittedTitle(args: BuildMetadataArgs, fallbacks: string[]): BuildMetadataArgs {
  const fits = (t: string) => t.length >= TITLE_MIN && t.length <= TITLE_MAX
  if (fits(renderTitle(buildTitle(args)))) return args
  const pick = fallbacks.find((c) => fits(renderTitle(buildTitle({ kind: 'other', title: c })))) ?? fallbacks.at(-1)
  return { ...args, kind: 'other', title: pick }
}
