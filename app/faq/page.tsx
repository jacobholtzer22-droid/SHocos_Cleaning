import type { Metadata } from 'next'
import FaqAccordion from '@/components/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import PageHeader from '@/components/PageHeader'
import Panel from '@/components/Panel'
import { config } from '@/lib/config'
import { loadContent, readFrontmatter } from '@/lib/content'
import { pageH1, pageIntro } from '@/lib/headings'
import { faqCopy } from '@/lib/page-content'
import { breadcrumbList, faqPage } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

const CONTENT = 'faq.mdx'
const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'FAQ', path: '/faq' },
]

export function generateMetadata(): Metadata {
  const fm = readFrontmatter(CONTENT)
  return buildMetadata({ kind: 'other', title: 'Pressure Washing Questions', path: '/faq', description: fm.description, image: fm.image }).metadata
}

/** The homepage FAQs first, then every service's questions under that service's name. */
export default async function FaqPage() {
  const { content } = await loadContent(CONTENT)
  const all = [...config.faqs, ...config.services.flatMap((s) => s.faqs)]
  return (
    <>
      <JsonLd data={faqPage(all)} />
      <JsonLd data={breadcrumbList(CRUMBS)} />
      <PageHeader display={faqCopy.display} title={pageH1.faq()} intro={pageIntro()} lead={faqCopy.lead} />
      <FaqAccordion faqs={config.faqs} heading="General questions" />
      {config.services.map((s) => (
        <FaqAccordion key={s.slug} faqs={s.faqs} heading={`${s.name} questions`} />
      ))}
      <Panel>
        <article>{content}</article>
      </Panel>
    </>
  )
}
