import { Fraunces, Hanken_Grotesk } from 'next/font/google'

/**
 * Heading face Fraunces, body face Hanken Grotesk: the families and weights of
 * the build this site's layout is ported from, unchanged.
 */
export const headingFont = Fraunces({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

export const bodyFont = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})
