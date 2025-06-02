import { CollectionConfig } from 'payload'

export const AttributeSets: CollectionConfig = {
  slug: 'attributesets',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'attributes',
      type: 'relationship',
      relationTo: 'attributes',
      hasMany: true,
    },
  ],
}
