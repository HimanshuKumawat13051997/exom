import { CollectionConfig } from 'payload'

export const Gender: CollectionConfig = {
  slug: 'gender',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'select',
      required: true,
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
      ],
    },
  ],
}
