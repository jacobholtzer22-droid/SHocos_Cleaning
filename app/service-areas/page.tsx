import type { Metadata } from 'next'
import AreaList from '@/components/AreaList'
import CoverageList from '@/components/CoverageList'
import { MapPinIcon } from '@/components/icons'
import JsonLd from '@/components/JsonLd'
import PageHeader from '@/components/PageHeader'
import Panel from '@/components/Panel'
import { loadContent, readFrontmatter } from '@/lib/content'
import { pageH1, pageIntro } from '@/lib/headings'
import { areasCopy } from '@/lib/page-content'
import { breadcrumbList } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

const CONTENT = 'service-areas.mdx'
const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Service Areas', path: '/service-areas' },
]

export function generateMetadata(): Metadata {
  const fm = readFrontmatter(CONTENT)
  return buildMetadata({ kind: 'other', title: 'Treasure Coast Service Areas', path: '/service-areas', description: fm.description, image: fm.image }).metadata
}

export default async function ServiceAreasPage() {
  const { content } = await loadContent(CONTENT)
  return (
    <>
      <JsonLd data={breadcrumbList(CRUMBS)} />
      <PageHeader display={areasCopy.display} title={pageH1.serviceAreas()} intro={pageIntro()} lead={areasCopy.lead} />
      <Panel className="text-center">
        <MapPinIcon className="mx-auto h-10 w-10 text-accent-ink" />
        <div className="mt-8 text-left">
          <AreaList />
        </div>
        <CoverageList className="mt-12 text-left" />
        <article className="mt-10 text-left">{content}</article>
        {areasCopy.closing && <p className="mx-auto mt-8 max-w-measure text-ink-soft">{areasCopy.closing}</p>}
      </Panel>
    </>
  )
}
