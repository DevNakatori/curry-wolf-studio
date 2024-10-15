import {defineField} from 'sanity'

export const trustedShopType = defineField({
  name: 'trustedShop',
  title: 'Trusted Shop Section',
  type: 'object',
  fields: [
    defineField({
      name: 'certifications',
      title: 'Certifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Certification Image',
              type: 'image',
            }),
            defineField({
              name: 'label',
              title: 'Certification Label',
              type: 'string',
              description: 'The text next to the certification, e.g. "Zertifizierter online-shop".',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'deliveryNote',
      title: 'Delivery Note',
      type: 'portableTextSimple',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title,
      }
    },
  },
})
