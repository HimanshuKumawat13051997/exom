import { CollectionConfig } from 'payload'

// collections/Attributes.js
export const Attributes: CollectionConfig = {
  slug: 'attributes',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      options: ['text', 'number', 'select'],
      required: true,
    },
    {
      name: 'options',
      type: 'array',
      admin: {
        condition: (_, siblingData) => siblingData.type === 'select',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'value',
          type: 'text',
        },
      ],
    },
  ],
  admin: {
    useAsTitle: 'name',
  },
}
