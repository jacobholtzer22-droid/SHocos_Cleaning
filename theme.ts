/**
 * Visual theme. With app/fonts.ts, the only place design decisions live. No
 * business facts belong here.
 *
 * A LIGHT site with dark bands. `palette` is the light ground used everywhere;
 * `dark` overrides the same tokens inside a dark section: the hero, the What We
 * Clean stage, and the gallery band, all of which sit on photography.
 *
 * Palette: no logo was supplied, so this is the brief's fallback water palette.
 * Deep ocean blue as primary, one clear aqua accent, cool off-white ground. No
 * gradients: `spectrum` and the page glow are flat values, kept as tokens only
 * because the ported components read them.
 *
 * Token notes:
 * - components/ContactForm.tsx is sealed: it uses text-primary-dark for its
 *   success heading, text-primary for phone links, focus:border-primary,
 *   bg-accent / hover:bg-accent-dark with text-on-accent for its button, and
 *   text-accent-dark for error text. So `primary` must read as text, and
 *   `accentDark` is a fill white text sits on (the button hover).
 * - `accent` is darkened from #0F86A1 (4.25:1 under white) to #0E7D96 so white
 *   button text clears 4.5:1 (4.78:1). It is a fill only: buttons and the one
 *   hero underline. `accentInk` is what icons and text links use; it is the
 *   deep blue on light and a pale blue in dark bands, so no aqua appears as text.
 */
export type HeroVariant = 'full-bleed' | 'split'

export interface Palette {
  /** Emphasis color: links, focus borders. Must read as text on `surface`. */
  primary: string
  /** Strongest text color. */
  primaryDark: string
  /** Focus ring tint. */
  primarySoft: string
  /** The single accent. Fills and borders only, never text. */
  accent: string
  /** Hover fill for accent buttons. White text sits on it. */
  accentDark: string
  /** Accent color for text and icons. */
  accentInk: string
  /** Page ground. */
  bg: string
  /** Alternate section ground, one step from bg, for section rhythm. */
  bgAlt: string
  /** Cards, panels, form card. */
  surface: string
  /** Raised items on a surface. */
  surfaceRaised: string
  /** Headings and primary text. */
  ink: string
  /** Body text. */
  inkSoft: string
  /** Labels, secondary text. */
  muted: string
  line: string
  onPrimary: string
  onAccent: string
  /** Emphasis inside headings. Same as ink tones here: no second accent. */
  warm: string
}

export interface Theme {
  palette: Palette
  /** Overrides applied inside dark sections. */
  dark: Palette
  /** Divider strips. Flat: this site uses no gradients. */
  spectrum: string
  darkSpectrum: string
  /** Behind interior page headers. */
  pageGlow: string
  darkPageGlow: string
  /** Overlay on the What We Clean stage at desktop width, so its copy reads over the photo. */
  stageScrim: string
  heroVariant: HeroVariant
  /** Inputs, form card, and compact buttons, in rem. Read by the sealed form as var(--radius). */
  radius: number
  /** Cards and images, in rem. */
  radiusCard: number
  /** Large panels, in rem. */
  radiusPanel: number
  shadow: string
  darkShadow: string
  /** Lift under primary calls to action. */
  shadowGlow: string
  darkShadowGlow: string
  /** Header logo. null renders the wordmark from config.displayName. */
  logo: { src: string; alt: string } | null
}

const theme: Theme = {
  palette: {
    primary: '#0E3A5B',
    primaryDark: '#092A42',
    primarySoft: '#E6F1F7',
    accent: '#0E7D96',
    accentDark: '#0B6A80',
    accentInk: '#0E3A5B',
    bg: '#F6FAFC',
    bgAlt: '#EAF2F7',
    surface: '#FFFFFF',
    surfaceRaised: '#E6EEF4',
    ink: '#111A22',
    inkSoft: '#2E3B48',
    muted: '#5B6B7A',
    // The fallback palette's #DCE6EE measured about 1.2:1 on the page, which left form
    // fields and card edges nearly invisible. Ink at 45% alpha, the same role as the
    // build this layout is ported from, gives input boundaries about 3:1.
    line: 'rgba(17, 26, 34, 0.45)',
    onPrimary: '#F4F9FC',
    onAccent: '#FFFFFF',
    warm: '#0E3A5B',
  },
  dark: {
    primary: '#DCEBF4',
    primaryDark: '#F4F9FC',
    primarySoft: '#134669',
    accent: '#0E7D96',
    accentDark: '#0B6A80',
    accentInk: '#C9D9E5',
    bg: '#092A42',
    bgAlt: '#0B3049',
    surface: '#0E3A5B',
    surfaceRaised: '#134669',
    ink: '#F4F9FC',
    inkSoft: '#C9D9E5',
    muted: '#93A9BA',
    line: 'rgba(244, 249, 252, 0.14)',
    onPrimary: '#092A42',
    onAccent: '#FFFFFF',
    warm: '#F4F9FC',
  },
  spectrum: 'linear-gradient(#0E3A5B, #0E3A5B)',
  darkSpectrum: 'linear-gradient(#134669, #134669)',
  pageGlow: 'transparent',
  darkPageGlow: 'transparent',
  stageScrim:
    'linear-gradient(90deg, rgba(9, 42, 66, 0.92) 0%, rgba(9, 42, 66, 0.6) 34%, rgba(9, 42, 66, 0) 62%), linear-gradient(0deg, rgba(9, 42, 66, 0.75) 0%, rgba(9, 42, 66, 0) 42%)',
  heroVariant: 'full-bleed',
  radius: 0.75,
  radiusCard: 1,
  radiusPanel: 1.5,
  shadow: '0 10px 30px -12px rgb(17 26 34 / 0.18)',
  darkShadow: '0 10px 30px -10px rgb(0 0 0 / 0.5)',
  shadowGlow: '0 10px 24px -12px rgb(17 26 34 / 0.28)',
  darkShadowGlow: '0 10px 24px -12px rgb(0 0 0 / 0.55)',
  logo: null,
}

export default theme
