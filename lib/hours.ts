import { config } from './config'
import type { Hours } from './config-schema'

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const

/** "06:00" -> "6am", "21:30" -> "9:30pm". */
function short(hhmm: string): string {
  const [h = 0, m = 0] = hhmm.split(':').map(Number)
  const suffix = h >= 12 ? 'pm' : 'am'
  const hour12 = h % 12 === 0 ? 12 : h % 12
  return m === 0 ? `${hour12}${suffix}` : `${hour12}:${String(m).padStart(2, '0')}${suffix}`
}

/**
 * config.hours as one line: runs of consecutive days with the same hours
 * collapse to "Monday through Saturday, 6am to 9pm", and days with no entry are
 * listed as closed. Nothing is typed here; every value comes from config.
 */
export function hoursSummary(hours: Hours | null = config.hours): string | null {
  if (!hours || hours.length === 0) return null
  const byDay = new Map(hours.map((h) => [h.day, h]))
  const parts: string[] = []
  let i = 0
  while (i < DAYS.length) {
    const day = DAYS[i] as (typeof DAYS)[number]
    const h = byDay.get(day)
    if (!h) {
      i++
      continue
    }
    let j = i
    while (j + 1 < DAYS.length) {
      const next = byDay.get(DAYS[j + 1] as (typeof DAYS)[number])
      if (!next || next.open !== h.open || next.close !== h.close) break
      j++
    }
    const span = j > i ? `${day} through ${DAYS[j]}` : day
    parts.push(`${span}, ${short(h.open)} to ${short(h.close)}`)
    i = j + 1
  }
  const closed = DAYS.filter((d) => !byDay.has(d))
  return `${parts.join('. ')}.${closed.length ? ` Closed ${closed.join(', ')}.` : ''}`
}
