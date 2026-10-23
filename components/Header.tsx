import Link from 'next/link'
import { config } from '@/lib/config'
import { NAV, QUOTE_CTA } from '@/lib/navigation'
import { btnPrimary, focusable } from '@/lib/ui'
import theme from '@/theme'
import { PhoneIcon } from './icons'
import MobileMenu from './MobileMenu'
import NavLink from './NavLink'
import Phone from './Phone'

/**
 * Sticky header. It sits outside every dark band, so it keeps the light ground
 * the whole way down the page and never changes color under a photo band. The
 * background stays fully opaque, so dark nav text never sits over a photograph.
 *
 * Brand: theme.logo when one is supplied, otherwise a wordmark built from
 * config.displayName. No business name is typed here.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-bg">
      <div className="relative mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-4 lg:px-8">
        {/* The wordmark is a home link too. min-h-[44px] so it is a comfortable tap target on a phone. */}
        <Link href="/" className={`inline-flex min-h-[44px] items-center font-body text-step--1 font-bold uppercase tracking-[0.16em] text-ink sm:text-step-1 sm:tracking-[0.22em] ${focusable}`}>
          {theme.logo ? <img src={theme.logo.src} alt={theme.logo.alt} className="h-10 w-auto" /> : config.displayName}
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-5 xl:gap-6 lg:flex">
          {NAV.map((item) => (
            <NavLink key={item.href} href={item.href} className="text-step--1 font-medium">
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <span className="flex items-center gap-2 text-step--1">
            <PhoneIcon className="h-4 w-4 text-accent-ink" />
            <Phone className="text-ink" />
          </span>
          <Link href={QUOTE_CTA.href} className={`${btnPrimary} px-5 py-2 text-step--1`}>
            {QUOTE_CTA.label}
          </Link>
        </div>
        <MobileMenu />
      </div>
      <div aria-hidden="true" className="strip-spectrum" />
    </header>
  )
}
