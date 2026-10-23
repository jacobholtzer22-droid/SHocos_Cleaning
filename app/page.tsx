import type { Metadata } from 'next'
import BeforeAfter from '@/components/BeforeAfter'
import FaqAccordion from '@/components/FaqAccordion'
import FeatureCards from '@/components/FeatureCards'
import GalleryTeaser from '@/components/GalleryTeaser'
import Hero from '@/components/Hero'
import JsonLd from '@/components/JsonLd'
import ProcessSteps from '@/components/ProcessSteps'
import QuoteSection from '@/components/QuoteSection'
import Section from '@/components/Section'
import ServiceAreaStrip from '@/components/ServiceAreaStrip'
import TrustStrip from '@/components/TrustStrip'
import WhatWeClean from '@/components/WhatWeClean'
import { config } from '@/lib/config'
import { loadContent, readFrontmatter } from '@/lib/content'
import { faqPage, localBusiness, organization, website } from '@/lib/schema'
import { fittedTitle } from '@/lib/headings'
import { buildMetadata } from '@/lib/seo'

const CONTENT = 'home.mdx'

export function generateMetadata(): Metadata {
  const fm = readFrontmatter(CONTENT)
  const args = fittedTitle({ kind: 'home', path: '/', description: fm.description, image: fm.image }, [
    `${config.primaryCity} ${config.copy.trade}`,
  ])
  return buildMetadata(args).metadata
}

/**
 * Section order follows the ported layout: hero, trust strip, the tabbed
 * section, town strip, benefits, gallery band, process, quote form. Before and
 * after sits directly under the hero; the home.mdx prose and the FAQs sit
 * between the process and the quote form. Section grounds alternate base / alt.
 */
export default async function HomePage() {
  const { content } = await loadContent(CONTENT)
  return (
    <>
      <JsonLd data={localBusiness()} />
      <JsonLd data={organization()} />
      <JsonLd data={website()} />
      <JsonLd data={faqPage(config.faqs)} />

      <Hero />
      <TrustStrip />
      <BeforeAfter tone="base" />
      <WhatWeClean />
      <ServiceAreaStrip tone="base" />
      <FeatureCards tone="alt" />
      <GalleryTeaser tone="base" />
      <ProcessSteps tone="alt" />
      <Section tone="base" label="About our work">
        <article className="mx-auto max-w-3xl">{content}</article>
      </Section>
      <FaqAccordion faqs={config.faqs} />
      <QuoteSection tone="alt" />
    </>
  )
}
