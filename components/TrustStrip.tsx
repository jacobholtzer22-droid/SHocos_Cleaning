import Link from 'next/link'
import type { ReactNode } from 'react'
import { homeCopy } from '@/lib/page-content'
import { TrustIcon } from './icons'
import Phone from './Phone'

/**
 * Trust strip under the hero. Every item comes from config.copy.home.trustStrip:
 * an item with icon 'phone' renders the phone link, every other item is its
 * text, linked when it has an href. Confirmed facts only.
 */
export default function TrustStrip() {
  const items = homeCopy.trustStrip
  if (items.length === 0) return null
  const content = (item: (typeof items)[number]): ReactNode => {
    if (item.icon === 'phone') return <Phone className="text-ink" />
    if (!item.text) return null
    if (item.href)
      return (
        <Link href={item.href} className="underline-offset-4 hover:underline">
          {item.text}
        </Link>
      )
    return item.text
  }
  return (
    <section aria-label="At a glance" className="border-y border-line bg-bg-alt">
      <ul className="mx-auto grid max-w-page grid-cols-1 gap-x-4 gap-y-4 px-4 py-6 sm:grid-cols-2 md:grid-cols-4 lg:px-8">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-step-0 font-semibold text-ink">
            <span aria-hidden="true" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-site border border-line text-accent-ink">
              <TrustIcon name={item.icon} className="h-5 w-5" />
            </span>
            <span className="min-w-0">{content(item)}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
