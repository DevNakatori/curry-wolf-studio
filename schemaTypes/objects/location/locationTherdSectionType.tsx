import {defineField, defineArrayMember} from 'sanity'

export const locationThirdSectionType = defineField({
  name: 'locationThirdSection',
  title: 'Location 3rd Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      options: {aiAssist: {translateAction: true}},
      type: 'string',
      description: 'Title for the Section',
    }),
    defineField({
      name: 'images',
      title: 'Images',
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
          ],
        }),
      ],
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Text for the button',
      options: {aiAssist: {translateAction: true}},
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
      description: 'URL for the button action',
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
