'use client'

import { useCallback, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'

export interface SliderImage {
  src: string
  srcSet: string
  width: number
  height: number
  alt: string
}

/**
 * One before and after pair as a two-image slider. The after photo is the
 * base layer; the before photo sits on top, clipped to the left of the handle.
 * Pointer events drive the drag (no library), and the handle is a real
 * role="slider" control: arrow keys move it 5%, Page Up and Page Down 20%,
 * Home and End to either edge.
 */
export default function BeforeAfterSlider({ before, after, label }: { before: SliderImage; after: SliderImage; label: string }) {
  const [pos, setPos] = useState(50)
  const frame = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const moveTo = useCallback((clientX: number) => {
    const box = frame.current?.getBoundingClientRect()
    if (!box || box.width === 0) return
    setPos(Math.min(100, Math.max(0, ((clientX - box.left) / box.width) * 100)))
  }, [])

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    dragging.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
    moveTo(e.clientX)
  }
  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (dragging.current) moveTo(e.clientX)
  }
  function onPointerUp() {
    dragging.current = false
  }
  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const step = { ArrowLeft: -5, ArrowDown: -5, ArrowRight: 5, ArrowUp: 5, PageDown: -20, PageUp: 20 }[e.key]
    if (step !== undefined) setPos((p) => Math.min(100, Math.max(0, p + step)))
    else if (e.key === 'Home') setPos(0)
    else if (e.key === 'End') setPos(100)
    else return
    e.preventDefault()
  }

  const img = (i: SliderImage, extra: string) => (
    <img
      src={i.src}
      srcSet={i.srcSet}
      sizes="(min-width: 1024px) 50vw, 100vw"
      width={i.width}
      height={i.height}
      alt={i.alt}
      loading="lazy"
      decoding="async"
      draggable={false}
      className={`absolute inset-0 h-full w-full select-none object-cover ${extra}`}
    />
  )

  return (
    <div
      ref={frame}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      className="relative aspect-[3/2] touch-pan-y cursor-ew-resize select-none overflow-hidden rounded-card border border-line bg-surface"
    >
      {img(after, '')}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {img(before, '')}
      </div>

      <span aria-hidden="true" className="pointer-events-none absolute left-3 top-3 rounded-full bg-surface px-3 py-1 text-step--1 font-semibold uppercase tracking-[0.14em] text-ink">
        Before
      </span>
      <span aria-hidden="true" className="pointer-events-none absolute right-3 top-3 rounded-full bg-surface px-3 py-1 text-step--1 font-semibold uppercase tracking-[0.14em] text-ink">
        After
      </span>

      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-surface" style={{ left: `${pos}%` }} />
      <div
        role="slider"
        tabIndex={0}
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-valuetext={`${Math.round(pos)}% before`}
        onKeyDown={onKeyDown}
        className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface text-ink shadow-site focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        style={{ left: `${pos}%` }}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
        </svg>
      </div>
    </div>
  )
}
