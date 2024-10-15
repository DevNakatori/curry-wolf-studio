import {CogIcon, ControlsIcon, ErrorOutlineIcon, MenuIcon, SearchIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

const TITLE = 'Settings'
interface ProductOptions {
  title: string
}

export const settingsType = defineType({
  name: 'settings',
  title: TITLE,
  type: 'document',
  icon: CogIcon,
  groups: [
    {
      name: 'productOptions',
      title: 'Product options',
      icon: ControlsIcon,
    },
    {
      name: 'notFoundPage',
      title: '404 page',
      icon: ErrorOutlineIcon,
    },
    {
      name: 'seo',
      title: 'SEO',
      icon: SearchIcon,
    },
  ],
  fields: [
    defineField({
      name: 'notFoundPage',
      title: '404 page',
      type: 'notFoundPage',
      group: 'notFoundPage',
    }),
    defineField({
      name: 'globalContent',
      title: 'Global content',
      type: 'globalContent',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      }
    },
  },
})
