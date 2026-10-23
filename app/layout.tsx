import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import MobileCallBar from '@/components/MobileCallBar'
import { config } from '@/lib/config'
import { buildTitle, renderTitle, TITLE_TEMPLATE } from '@/lib/seo'
import { lightVars } from '@/lib/theme-vars'
import { bodyFont, headingFont } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(config.domain),
  title: {
    default: renderTitle(buildTitle({ kind: 'home' })),
    template: TITLE_TEMPLATE,
  },
  applicationName: config.displayName,
  // Pre-launch: noindex everywhere until config.prelaunch is flipped at launch.
  robots: config.prelaunch ? { index: false, follow: false } : { index: true, follow: true },
}


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`} style={lightVars}>
      <body className="flex min-h-screen flex-col bg-bg pb-[4.5rem] text-ink lg:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-site focus:bg-surface focus:px-3 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  )
}
