'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, type ReactNode, type SyntheticEvent } from 'react'
import { btnPrimary } from '@/lib/ui'
import CleanTabList from './CleanTabList'

export interface CleanTab {
  key: string
  name: string
  sentence: string
  goodFor: string[]
  /** Manifest filename, recorded on the <img> for debugging and checks. */
  file: string
  image: { src: string; srcSet: string; width: number; height: number; alt: string }
}

/**
 * What We Clean: one real photograph per service, stacked and cross-faded,
 * with the tab picker beside it.
 *
 * - Every tab photo is an <img> with its own descriptive alt. Only the photo on
 *   screen is exposed to assistive tech; the rest carry aria-hidden="true".
 * - Tabs are real buttons with aria-pressed, one tab stop, and arrow keys
 *   within the group. A polite live region announces changes, so the control
 *   is usable and understandable with images off.
 *
 * Loading: every tab photo carries its real src (a shared placeholder src
 * would point one alt at two images, which verify check 11 rejects) and is
 * lazy and low priority, so the hero keeps the bandwidth. The srcset is added
 * only once a visitor hovers, focuses, or picks a tab. A picked tab appears
 * once its photo settles, loaded or failed, so the frame is never blank and a
 * failed photo never locks the control. The 0.6s cross-fade is an
 * instant cut under reduced motion (app/globals.css).
 */
export default function CleanStage({
  tabs,
  defaultTab,
  hint,
  cta,
  children,
}: {
  tabs: CleanTab[]
  defaultTab: string
  hint?: string | null
  cta: { href: string; label: string }
  children: ReactNode
}) {
  const [selected, setSelected] = useState(defaultTab)
  const [requested, setRequested] = useState<ReadonlySet<string>>(() => new Set([defaultTab]))
  const [announcement, setAnnouncement] = useState('')
  const [shown, setShown] = useState(defaultTab)
  const [settled, setSettled] = useState<ReadonlySet<string>>(() => new Set())
  const photos = useRef<(HTMLImageElement | null)[]>([])

  const nameOf = (key: string) => tabs.find((t) => t.key === key)?.name ?? key
  const settle = (key: string) => setSettled((prev) => (prev.has(key) ? prev : new Set(prev).add(key)))
  const request = (key: string) => setRequested((prev) => (prev.has(key) ? prev : new Set(prev).add(key)))

  function select(key: string) {
    if (key === selected) return
    request(key)
    setSelected(key)
  }

  // A photo that settled before hydration never fires onLoad or onError in React.
  useEffect(() => {
    photos.current.forEach((img, i) => {
      const tab = tabs[i]
      if (tab && img?.complete && img.currentSrc) settle(tab.key)
    })
  }, [tabs])

  useEffect(() => {
    if (selected !== shown && settled.has(selected)) {
      setShown(selected)
      setAnnouncement(`Showing ${nameOf(selected)}`)
    }
    if (selected !== shown && !settled.has(selected)) setAnnouncement(`Loading ${nameOf(selected)}`)
    // nameOf only reads tabs, which is already a dependency.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, shown, settled, tabs])

  function onPhotoSettled(key: string) {
    return (event: SyntheticEvent<HTMLImageElement>) => {
      if (event.currentTarget.currentSrc) settle(key)
    }
  }

  const current = tabs.find((t) => t.key === shown) ?? tabs[0]
  if (!current) return null

  return (
    <div className="relative lg:aspect-[16/9] lg:max-h-[58.75rem] lg:w-full">
      <div className="relative z-20 px-4 pb-12 pt-16 lg:absolute lg:left-[max(2rem,5vw)] lg:top-[8%] lg:max-w-xl lg:p-0">
        {children}
        <div className="mt-6">
          <h3 className="font-heading text-step-3 font-bold text-ink">{current.name}</h3>
          <p className="mt-3 max-w-measure text-step-1 text-ink-soft">{current.sentence}</p>
          <p className="mt-5 text-step--1 font-semibold uppercase tracking-[0.18em] text-muted">Good for</p>
          <ul className="mt-2 space-y-1 text-step-0 text-ink-soft">
            {current.goodFor.map((g) => (
              <li key={g} className="flex items-center gap-2">
                <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                {g}
              </li>
            ))}
          </ul>
        </div>
        <Link href={cta.href} className={`${btnPrimary} mt-6 rounded-site px-6 py-3.5`}>
          {cta.label}
        </Link>
      </div>

      <div data-stage-media="" className="relative aspect-[4/3] overflow-hidden bg-bg sm:aspect-[16/9] lg:absolute lg:inset-0 lg:aspect-auto">
        {tabs.map((tab, i) => {
          const active = tab.key === shown
          const wanted = requested.has(tab.key)
          return (
            <img
              key={tab.key}
              ref={(el) => {
                photos.current[i] = el
              }}
              src={tab.image.src}
              srcSet={wanted ? tab.image.srcSet : undefined}
              sizes="100vw"
              width={tab.image.width}
              height={tab.image.height}
              alt={tab.image.alt}
              aria-hidden={active ? undefined : true}
              decoding="async"
              // Lazy and low priority: the hero above is the LCP element.
              loading="lazy"
              {...{ fetchpriority: 'low' }}
              data-tab={tab.key}
              data-image={tab.file}
              onLoad={onPhotoSettled(tab.key)}
              onError={onPhotoSettled(tab.key)}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[600ms] ease-out"
              style={{ opacity: active ? 1 : 0 }}
            />
          )
        })}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block" style={{ background: 'var(--stage-scrim)' }} />
        {selected !== shown && (
          <p aria-hidden="true" className="absolute bottom-4 left-4 rounded-full bg-surface px-3 py-1 text-step--1 text-ink">
            Loading photo
          </p>
        )}
      </div>

      <CleanTabList
        tabs={tabs.map((t) => ({ key: t.key, name: t.name, description: t.goodFor[0] ?? '' }))}
        current={{ key: current.key, name: current.name, description: current.goodFor[0] ?? '' }}
        selected={selected}
        onSelect={select}
        onPrefetch={request}
        hint={hint}
        className="relative z-20 px-4 py-6 lg:absolute lg:right-[6%] lg:top-1/2 lg:w-[17rem] lg:-translate-y-1/2 lg:rounded-[2.5rem] lg:border-[10px] lg:border-surface-raised lg:bg-surface lg:px-4 lg:py-5 lg:shadow-site"
      />

      <p aria-live="polite" className="sr-only">
        {announcement}
      </p>
    </div>
  )
}
