import Link from 'next/link'
import { config } from '@/lib/config'
import { focusable } from '@/lib/ui'

/**
 * Service area towns as cards on the /service-areas index, each linking to its
 * area page. The card shows the county, so the index reads as a directory
 * rather than a list of identical words.
 */
export default function AreaList({ exclude }: { exclude?: string } = {}) {
  const areas = config.serviceAreas.filter((a) => a.slug !== exclude)
  if (areas.length === 0) return null
  return (
    <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {areas.map((a) => (
        <li key={a.slug} className="rounded-card border border-line bg-bg text-step-1 text-ink">
          <Link href={`/areas/${a.slug}`} className={`flex h-full min-h-[44px] flex-col gap-1 px-4 py-4 transition-colors hover:text-accent-ink ${focusable}`}>
            <span className="font-semibold">{a.name}</span>
            {a.county && <span className="text-step--1 text-muted">{a.county}</span>}
          </Link>
        </li>
      ))}
    </ul>
  )
}
