import { config } from '@/lib/config'

/**
 * "Where We Work": each county in config.coverage with its towns as a plain
 * comma-separated paragraph. No links here; the area pages are the links.
 * Renders nothing when coverage is empty.
 */
export default function CoverageList({ className = '' }: { className?: string }) {
  if (config.coverage.length === 0) return null
  return (
    <section aria-labelledby="coverage-heading" className={className}>
      <h2 id="coverage-heading" className="font-heading text-step-3 font-bold text-ink">
        Where We Work
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {config.coverage.map((c) => (
          <div key={c.county} className="rounded-card border border-line bg-surface p-6">
            <h3 className="font-heading text-step-1 font-bold text-ink">{c.county}</h3>
            <p className="mt-2 text-step-0 text-ink-soft">{c.towns.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
