import {defineField} from 'sanity'

export const videoSchemaType = defineField({
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'text',
      description: 'A short Title for the banner',
      rows: 4,
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'text',
      rows: 4,
      description: 'A short caption for the banner',
    }),
  ],
})
