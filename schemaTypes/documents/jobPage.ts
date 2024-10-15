import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField} from 'sanity'
import {GROUPS} from '../../constants'

export const JobType = defineField({
  name: 'job',
  title: 'Job Page',
  type: 'document',
  icon: DocumentIcon,
  groups: GROUPS,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionFirst',
      title: 'Section First',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'images',
      title: 'Section Second Job Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'sectionThird',
      title: 'Section Third',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'stellenangebote',
          title: 'Stellenangebote',
          type: 'object',
          options: {
            collapsed: false,
            collapsible: true,
          },
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'innerPage',
              title: 'Inner Page',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    }),
                    defineField({
                      name: 'link',
                      title: 'Link',
                      type: 'string',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      seoImage: 'seo.image',
      title: 'title',
      language: 'language',
    },
    prepare({seoImage, title, language}) {
      return {
        media: seoImage ?? DocumentIcon,
        subtitle: language,
        title,
      }
    },
  },
})
