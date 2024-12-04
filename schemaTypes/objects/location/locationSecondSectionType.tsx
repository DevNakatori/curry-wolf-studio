import {defineField, defineArrayMember} from 'sanity'

export const locationSecondSectionType = defineField({
  name: 'locationSecondSectionType',
  title: 'Location Second Section',
  type: 'object',
  fields: [
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              description: 'Image or illustration for the card',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              options: {aiAssist: {translateAction: true}},
              description: 'Title for the card',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              options: {aiAssist: {translateAction: true}},
              description: 'Short description for the card',
            }),
            defineField({
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              options: {aiAssist: {translateAction: true}},
              description: 'Text for the button',
            }),
            defineField({
              name: 'buttonLink',
              title: 'Button Link',
              type: 'string',
              description: 'URL for the button action',
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
