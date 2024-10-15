import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField} from 'sanity'

import {GROUPS} from '../../constants'

export const legalNoticePageType = defineField({
  name: 'legalNoticePage',
  title: 'Legal Notice  Page',
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
      name: 'button',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({
          name: 'label',
          title: 'Button Label',
          type: 'string',
        }),
        defineField({
          name: 'link',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'portableTextSimple',
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
