import { FeaturesBlockConfig } from '@/Blocks/Features/config'
import { HeroBlockConfig } from '@/Blocks/Hero/config'
import { HowItWorksBlockConfig } from '@/Blocks/HowItWorks/config'
import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  timestamps: true,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [HeroBlockConfig, FeaturesBlockConfig, HowItWorksBlockConfig],
    },
  ],
}
