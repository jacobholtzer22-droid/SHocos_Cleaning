import type { Metadata } from 'next'
import { BeforeAfterGrid } from '@/components/BeforeAfter'
import GalleryGrid from '@/components/GalleryGrid'
import JsonLd from '@/components/JsonLd'
import PageHeader from '@/components/PageHeader'
import { config } from '@/lib/config'
import { loadContent, readFrontmatter } from '@/lib/content'
import { pageH1, pageIntro } from '@/lib/headings'
import { galleryCopy } from '@/lib/page-content'
import { breadcrumbList } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'
import { darkVars } from '@/lib/theme-vars'

const CONTENT = 'gallery.mdx'
const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
]

export function generateMetadata(): Metadata {
  const fm = readFrontmatter(CONTENT)
  return buildMetadata({ kind: 'other', title: 'Pressure Washing Photos', path: '/gallery', description: fm.description, image: fm.image }).metadata
}

export default async function GalleryPage() {
  const { content } = await loadContent(CONTENT)
  return (
    <>
      <JsonLd data={breadcrumbList(CRUMBS)} />
      <PageHeader display={galleryCopy.display} title={pageH1.gallery()} intro={pageIntro()} lead={galleryCopy.lead} />
      {config.beforeAfter.length > 0 && (
        <section aria-label="Before and after" className="mx-auto max-w-page px-4 pb-16 md:pb-24 lg:px-8">
          <BeforeAfterGrid pairs={config.beforeAfter} />
        </section>
      )}
      {/* Photography end to end, so the grid keeps the dark palette. */}
      <section aria-label="Job photos" style={darkVars} className="relative bg-bg text-ink-soft">
        <div aria-hidden="true" className="strip-spectrum absolute inset-x-0 top-0" />
        <div className="mx-auto max-w-page px-4 py-16 md:py-24 lg:px-8">
          <GalleryGrid />
        </div>
      </section>
      <article className="mx-auto max-w-3xl px-4 py-16 md:py-24 lg:px-8">{content}</article>
    </>
  )
}
