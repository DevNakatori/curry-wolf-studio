import {InsertBelowIcon} from '@sanity/icons'
import {defineField} from 'sanity'
import {GROUPS} from '../../constants'

const TITLE = 'Footer'

export default defineField({
  name: 'footer',
  title: TITLE,
  type: 'document',
  icon: InsertBelowIcon,
  groups: GROUPS,
  fields: [
    defineField({
      name: 'footerlogo',
      title: 'Footer Logo',
      type: 'image',
      group: 'editorial',
      options: {
        collapsed: false,
        collapsible: true,
      },
    }),
    defineField({
      name: 'FooterLink',
      group: 'editorial',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'menu',
          type: 'headerNavigation',
        }),
      ],
    }),
    defineField({
      name: 'FooterAddress',
      group: 'editorial',
      type: 'footerContactInfo',
      options: {
        collapsed: false,
        collapsible: true,
      },
    }),
    defineField({
      name: 'socialLinks',
      title: 'Footer Social Links',
      type: 'footerSocialLinks',
      group: 'editorial',
      options: {
        collapsed: false,
        collapsible: true,
      },
    }),
    defineField({
      name: 'imageRight',
      title: 'Footer Right Logo',
      type: 'image',
      group: 'editorial',
      options: {
        collapsed: false,
        collapsible: true,
      },
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      language: 'language',
    },
    prepare(selection) {
      const {language} = selection
      return {
        media: InsertBelowIcon,
        subtitle: language,
        title: TITLE,
      }
    },
  },
})
