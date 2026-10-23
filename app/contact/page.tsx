import type { Metadata } from 'next'
import ContactDetails from '@/components/ContactDetails'
import ContactForm from '@/components/ContactForm'
import CoverageList from '@/components/CoverageList'
import JsonLd from '@/components/JsonLd'
import PageHeader from '@/components/PageHeader'
import { loadContent, readFrontmatter } from '@/lib/content'
import { config } from '@/lib/config'
import { fittedTitle, pageH1, pageIntro } from '@/lib/headings'
import { contactCopy } from '@/lib/page-content'
import { breadcrumbList } from '@/lib/schema'
import { buildMetadata } from '@/lib/seo'

const CONTENT = 'contact.mdx'
const CRUMBS = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
]

export function generateMetadata(): Metadata {
  const fm = readFrontmatter(CONTENT)
  const args = fittedTitle({ kind: 'contact', path: '/contact', description: fm.description, image: fm.image }, [`Contact Us in ${config.primaryCity}`])
  return buildMetadata(args).metadata
}

export default async function ContactPage() {
  const { content } = await loadContent(CONTENT)
  return (
    <>
      <JsonLd data={breadcrumbList(CRUMBS)} />
      <PageHeader display={contactCopy.display} title={pageH1.contact()} intro={pageIntro()} lead={contactCopy.lead} />
      <div className="mx-auto grid max-w-page gap-10 px-4 pb-16 md:pb-24 lg:grid-cols-3 lg:px-8">
        <div className="lg:col-span-2">
          <article className="mb-8">{content}</article>
          <ContactForm />
          <CoverageList className="mt-12" />
        </div>
        <aside>
          <ContactDetails />
        </aside>
      </div>
    </>
  )
}
