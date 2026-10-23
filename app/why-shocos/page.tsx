import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import PageHeader from '@/components/PageHeader'
import Panel from '@/components/Panel'
import { config } from '@/lib/config'
import { loadContent, readFrontmatter } from '@/lib/content'
import { pageH1, pageIntro } from '@/lib/headings'
import { whyCopy } from '@/lib/page-content'
import { breadcrumbList } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

const CONTENT = 'why-shocos.mdx'
const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: `Why ${config.displayName}`, path: '/why-shocos' },
]

export function generateMetadata(): Metadata {
  const fm = readFrontmatter(CONTENT)
  return buildMetadata({ kind: 'other', title: 'House Washing and Paver Sealing', path: '/why-shocos', description: fm.description, image: fm.image }).metadata
}

/** Short and factual: specialties, the services, the counties, the hours. The About facts live here. */
export default async function WhyPage() {
  const { content } = await loadContent(CONTENT)
  const sections = whyCopy.sections.filter((s): s is typeof s & { heading: string } => s.heading !== null)
  return (
    <>
      <JsonLd data={breadcrumbList(CRUMBS)} />
      <PageHeader display={whyCopy.display} title={pageH1.why()} intro={pageIntro()} lead={whyCopy.lead} />
      <Panel>
        {sections.map((s) => (
          <div key={s.heading} className="mt-10 first:mt-0">
            <h2 className="font-heading text-step-3 font-bold text-ink">{s.heading}</h2>
            {s.body && <p className="mt-4 text-step-1 text-ink-soft">{s.body}</p>}
          </div>
        ))}
        <article className={sections.length > 0 ? 'mt-10' : ''}>{content}</article>
      </Panel>
    </>
  )
}
