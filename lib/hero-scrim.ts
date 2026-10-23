/**
 * The hero scrim, as data. This is the ONE place the gradient over the hero
 * photograph is defined.
 *
 *   components/Hero.tsx      renders it with heroScrimCss()
 *   scripts/contrast-check.ts  rebuilds it pixel by pixel with heroScrimAlpha()
 *
 * Both read these stops, so the CSS a visitor sees and the model the contrast
 * gate measures cannot drift apart. Tune the scrim here and only here; a
 * gradient typed into a component is a gradient the gate does not know about.
 *
 * Positions run 0 (top of the hero) to 1 (bottom). Alpha is the darkness
 * applied at that position. Between stops the alpha is linear, which is also
 * what CSS linear-gradient does, so the two agree exactly.
 */

export type ScrimStop = readonly [position: number, alpha: number]

/** The scrim color: the dark band ground from theme.ts (dark.bg), so the hero reads as part of the palette. */
export const HERO_SCRIM_RGB = [9, 42, 66] as const

/**
 * The hero copy is vertically centered and runs most of the hero's height, so
 * the scrim is dark from the top. The hero photo is bright concrete and pavers
 * in full sun; at these stops the brightest pixels under the copy measure
 * 5.35:1 for the faintest text (check 19). The first ramp tried here
 * (0.55 / 0.68 / 0.82) measured 3.81:1 and failed.
 */
export const HERO_SCRIM_STOPS: readonly ScrimStop[] = [
  [0, 0.68],
  [0.3, 0.78],
  [1, 0.86],
]

/** Opacity of the small uppercase eyebrow line above the H1. */
export const HERO_EYEBROW_OPACITY = 0.85
/** Opacity of the tagline under the H1. */
export const HERO_TAGLINE_OPACITY = 0.9

/**
 * Where the copy sits, as fractions of the hero box [x0, y0, x1, y1]. Mirrors
 * the full-bleed layout in components/Hero.tsx (max-w-page container, copy
 * vertically centered in a min-h-[90vh] section, max-w-3xl column on the
 * left). If that layout moves, move these.
 */
export const HERO_COPY_BOX = {
  desktop: [0.03, 0.14, 0.62, 0.9],
  mobile: [0.04, 0.08, 0.96, 0.94],
} as const satisfies Record<string, readonly [number, number, number, number]>

/** CSS for the scrim layer, built from the stops. */
export function heroScrimCss(): string {
  const [r, g, b] = HERO_SCRIM_RGB
  const stops = HERO_SCRIM_STOPS.map(([p, a]) => `rgb(${r} ${g} ${b} / ${a}) ${Math.round(p * 100)}%`)
  return `linear-gradient(180deg, ${stops.join(', ')})`
}

/** Scrim alpha at vertical position y (0 top .. 1 bottom), linear between stops. */
export function heroScrimAlpha(y: number): number {
  const stops = HERO_SCRIM_STOPS
  const first = stops[0]
  const last = stops[stops.length - 1]
  if (!first || !last) return 0
  if (y <= first[0]) return first[1]
  if (y >= last[0]) return last[1]
  for (let i = 1; i < stops.length; i++) {
    const a = stops[i - 1]
    const b = stops[i]
    if (!a || !b) continue
    if (y <= b[0]) {
      const t = (y - a[0]) / (b[0] - a[0] || 1)
      return a[1] + (b[1] - a[1]) * t
    }
  }
  return last[1]
}
