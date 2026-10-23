import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import PageHeader from '@/components/PageHeader'
import ServiceGrid from '@/components/ServiceGrid'
import { loadContent, readFrontmatter } from '@/lib/content'
import { pageH1, pageIntro } from '@/lib/headings'
import { servicesCopy } from '@/lib/page-content'
import { breadcrumbList } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

const CONTENT = 'services.mdx'
const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
]

export function generateMetadata(): Metadata {
  const fm = readFrontmatter(CONTENT)
  return buildMetadata({ kind: 'services', path: '/services', description: fm.description, image: fm.image }).metadata
}

export default async function ServicesIndexPage() {
  const { content } = await loadContent(CONTENT)
  return (
    <>
      <JsonLd data={breadcrumbList(CRUMBS)} />
      <PageHeader display={servicesCopy.display} title={pageH1.services()} intro={pageIntro()} lead={servicesCopy.lead} />
      <ServiceGrid heading="What we clean" />
      <article className="mx-auto max-w-3xl px-4 pb-16 md:pb-24 lg:px-8">{content}</article>
    </>
  )
}
