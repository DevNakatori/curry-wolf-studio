import {defineField} from 'sanity'

export const footerSocialLinksTypes = defineField({
  name: 'footerSocialLinks',
  title: 'Footer Social Links',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title for the social links section, e.g. "Folgen Sie uns".',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Social Platform',
              type: 'string',
              description:
                'The name of the social media platform, e.g., Instagram, Facebook, LinkedIn.',
            }),
            defineField({
              name: 'url',
              title: 'Link URL',
              type: 'url',
              description: 'URL to the social media profile.',
            }),
          ],
        },
      ],
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
