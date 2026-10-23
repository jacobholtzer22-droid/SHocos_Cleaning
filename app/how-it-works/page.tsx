import type { Metadata } from 'next'
import { StepIcon } from '@/components/icons'
import JsonLd from '@/components/JsonLd'
import PageHeader from '@/components/PageHeader'
import Panel from '@/components/Panel'
import { loadContent, readFrontmatter } from '@/lib/content'
import { pageH1, pageIntro } from '@/lib/headings'
import { howCopy } from '@/lib/page-content'
import { breadcrumbList } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

const CONTENT = 'how-it-works.mdx'
const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'How It Works', path: '/how-it-works' },
]

export function generateMetadata(): Metadata {
  const fm = readFrontmatter(CONTENT)
  return buildMetadata({ kind: 'other', title: 'How Pressure Washing Works', path: '/how-it-works', description: fm.description, image: fm.image }).metadata
}

export default async function HowItWorksPage() {
  const { content } = await loadContent(CONTENT)
  const steps = howCopy.steps.filter((s): s is typeof s & { title: string } => s.title !== null)
  return (
    <>
      <JsonLd data={breadcrumbList(CRUMBS)} />
      <PageHeader display={howCopy.display} title={pageH1.how()} intro={pageIntro()} lead={howCopy.lead} />
      {steps.length > 0 && (
        <Panel>
          <ol className="space-y-10">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-6">
                <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-accent-ink">
                  {step.icon ? <StepIcon name={step.icon} /> : <span className="font-heading text-step-1 font-bold">{i + 1}</span>}
                </span>
                <div className="min-w-0">
                  <h2 className="font-heading text-step-2 font-bold text-ink">{step.title}</h2>
                  {step.body && <p className="mt-2 text-ink-soft">{step.body}</p>}
                </div>
              </li>
            ))}
          </ol>
        </Panel>
      )}
      <Panel>
        <article>{content}</article>
      </Panel>
    </>
  )
}
