import {defineField} from 'sanity'

export const notFoundPageType = defineField({
  name: 'notFoundPage',
  title: '404 page',
  type: 'object',
  group: 'notFoundPage',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'btnText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'btnLink',
      type: 'url',
      validation: Rule => Rule.uri({
        allowRelative: true,
      })
    }),
  ],
})
