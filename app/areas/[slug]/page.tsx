import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import AreaList from '@/components/AreaList'
import CoverageList from '@/components/CoverageList'
import JsonLd from '@/components/JsonLd'
import PageHeader from '@/components/PageHeader'
import Panel from '@/components/Panel'
import { config, getArea } from '@/lib/config'
import { loadContent, readFrontmatter } from '@/lib/content'
import { areaIntro, fittedTitle, pageH1 } from '@/lib/headings'
import { QUOTE_CTA } from '@/lib/navigation'
import { breadcrumbList } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { btnPrimary } from '@/lib/ui'

/**
 * One page per town in config.serviceAreas. The body is that town's MDX file,
 * written from widely known facts about the place; the rest of the page is
 * shared structure (quote button, the other towns, the county coverage list).
 */
export function generateStaticParams() {
  return config.serviceAreas.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const area = getArea(params.slug)
  if (!area) return {}
  const fm = readFrontmatter(`areas/${area.slug}.mdx`)
  const args = fittedTitle(
    { kind: 'area', area, path: `/areas/${area.slug}`, description: fm.description, image: fm.image },
    [`Pressure Washing, ${area.name}`, `${area.name} Power Washing`],
  )
  return buildMetadata(args).metadata
}

export default async function AreaPage({ params }: { params: { slug: string } }) {
  const area = getArea(params.slug)
  if (!area) notFound()
  const { content } = await loadContent(`areas/${area.slug}.mdx`, { area })

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: `${area.name}, ${config.primaryState}`, path: `/areas/${area.slug}` },
  ]

  return (
    <>
      <JsonLd data={breadcrumbList(crumbs)} />
      <PageHeader display={{ text: area.name, highlight: null }} title={pageH1.area(area)} intro={areaIntro(area)} />

      <Panel>
        <article>{content}</article>
        <Link href={QUOTE_CTA.href} className={`${btnPrimary} mt-8 px-6 py-3.5`}>
          {QUOTE_CTA.label}
        </Link>
      </Panel>

      <section aria-labelledby="other-areas-heading" className="mx-auto max-w-4xl px-4 pb-12 lg:px-8">
        <h2 id="other-areas-heading" className="mb-6 font-heading text-step-3 font-bold text-ink">
          Other towns we serve
        </h2>
        <AreaList exclude={area.slug} />
      </section>
      <CoverageList className="mx-auto max-w-4xl px-4 pb-16 md:pb-24 lg:px-8" />
    </>
  )
}
