import {InsertBelowIcon} from '@sanity/icons'
import {defineField} from 'sanity'
import {GROUPS} from '../../constants'

const TITLE = 'Header'

export default defineField({
  name: 'header',
  title: TITLE,
  type: 'document',
  icon: InsertBelowIcon,
  groups: GROUPS,
  fields: [
    defineField({
      name: 'headerlogo',
      title: 'Header Logo',
      type: 'image',
      group: 'editorial',
      options: {
        collapsed: false,
        collapsible: true,
      },
    }),
    defineField({
      name: 'menu',
      group: 'editorial',
      type: 'headerNavigation',
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
