import {defineField} from 'sanity'

export const trustedShopType = defineField({
  name: 'trustedShop',
  title: 'Trusted Shop Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title, e.g. "Alle Produkte"',
    }),
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
              options: {
                collapsed: false,
                collapsible: true,
              },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alternative Text',
                  type: 'string',
                  description: 'Important for SEO and accessibility.',
                }),
              ],
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
      type: 'text',
      description: 'The small print about delivery times and other info.',
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
