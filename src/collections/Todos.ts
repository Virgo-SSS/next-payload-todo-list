import { CollectionConfig } from 'payload'

export const Todos: CollectionConfig = {
  slug: 'todos',
  timestamps: true,
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
      name: 'completed',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}
