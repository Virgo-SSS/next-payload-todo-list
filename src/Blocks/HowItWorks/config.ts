import { Block } from 'payload'

export const HowItWorksBlockConfig: Block = {
  slug: 'howItWorks',
  labels: {
    singular: 'How It Works Block',
    plural: 'How It Works Blocks',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Title',
      required: true,
      defaultValue: 'How It Works',
    },
    {
      name: 'steps',
      type: 'array',
      label: 'Steps',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Step Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Step Description',
          required: true,
        },
      ],
    },
  ],
}
