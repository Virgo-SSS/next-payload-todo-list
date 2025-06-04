import { getPayload } from 'payload'
import config from '@payload-config'
import React, { ReactElement } from 'react'
import HeroBlock, { HeroBlockProps } from '@/Blocks/Hero'
import FeaturesBlock, { FeaturesBlockProps } from '@/Blocks/Features'
import { Page } from '@/payload-types'

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
      default:
        return <div>Unknown block type:</div>
    }
  })

  return <>{layouts}</>
}
