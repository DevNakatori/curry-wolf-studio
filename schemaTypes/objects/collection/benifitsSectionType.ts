import {defineArrayMember} from 'sanity'
import {defineField} from 'sanity'

export const benefitsSection = defineField({
  name: 'benefitsSection',
  title: 'Benefits Section',
  type: 'object',
  fields: [
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'This is the title for the Benefits Section',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              description: 'This is the image for the Benefits Section',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'A brief description of the Benefits Section',
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({title, media}) {
      return {
        title,
        media,
      }
    },
  },
})
