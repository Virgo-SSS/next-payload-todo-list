import { getPayload } from 'payload'
import config from '@payload-config'
import React, { ReactElement } from 'react'
import HeroBlock, { HeroBlockProps } from '@/Blocks/Hero'
import FeaturesBlock, { FeaturesBlockProps } from '@/Blocks/Features'
import { Page } from '@/payload-types'
import HowItWorksBlock, { HowItWorksBlockProps } from '@/Blocks/HowItWorks'
import CallToAction from '@/components/call-to-action'
import Footer from '@/components/footer'

export default async function HomeMain() {
  const payload = await getPayload({ config })
  const findResult = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home-main',
      },
    },
  })

  if (findResult.totalDocs === 0) {
    return <div>Page not found</div>
  }

  const page: Page = findResult.docs[0]

  if (!page) {
    return <div>Page not found</div>
  }

  const layouts: ReactElement[] = page.layout.map((block) => {
    switch (block.blockType) {
      case 'hero':
        return <HeroBlock key={block.id} {...(block as HeroBlockProps)} />
      case 'features':
        return <FeaturesBlock key={block.id} {...(block as FeaturesBlockProps)} />
      case 'howItWorks':
        return <HowItWorksBlock key={block.id} {...(block as HowItWorksBlockProps)} />
      default:
        return <div>Unknown block type:</div>
    }
  })

  return (
    <>
      {layouts} <CallToAction /> <Footer />
    </>
  )
}
