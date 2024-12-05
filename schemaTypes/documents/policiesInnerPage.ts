import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField} from 'sanity'

import {GROUPS} from '../../constants'

export const policiesInnerPageType = defineField({
  name: 'policiesInnerPage',
  title: 'Policies Inner Page',
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
      name: 'slug',
      type: 'string',
      options: {
        aiAssist: {exclude: true}
     }
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
          options: {
            aiAssist: {exclude: true}
         }
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
