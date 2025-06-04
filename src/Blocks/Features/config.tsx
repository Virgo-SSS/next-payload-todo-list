import { Block } from 'payload'

export const FeaturesBlockConfig: Block = {
  slug: 'features',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      defaultValue: 'Why Choose Taskify?',
    },
    {
      name: 'features',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'icon',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
