import { getPayload } from 'payload'
import config from '@payload-config'
import React from 'react'
import HeroBlock, { HeroBlockProps } from '@/Blocks/Hero'
import { Media } from '@/payload-types'

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

  const page = findResult.docs[0]

  if (!page) {
    return <div>Page not found</div>
  }

  // You can use the page data to render dynamic content here
  const heroBlock = page.layout.find((block) => block.blockType === 'hero')
  console.log('heroBlock', heroBlock)

  if (!heroBlock || !heroBlock.heading) {
    return <div>Hero block not found or missing required heading</div>
  }

  return (
    <>
      <HeroBlock {...(heroBlock as HeroBlockProps)} />
    </>
  )
}
