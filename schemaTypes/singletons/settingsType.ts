import {CogIcon, ControlsIcon, ErrorOutlineIcon, SearchIcon} from '@sanity/icons'
import { TfiAnnouncement } from "react-icons/tfi";

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
      name: 'Announcement',
      title: 'Shop Announcement ',
      icon: TfiAnnouncement,
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
      name: 'Announcement',
      title: 'Announcement ',
      type: 'announcement',
      group: 'Announcement',
    }),
    defineField({
			name: 'ShopHolidays',
			title: 'Shop Holidays',
			type: 'object',
      group: 'Announcement',
      fields: [
        defineField({
          name: 'end',
          title: 'Shop Close ',
          type: 'datetime',
        }),
        defineField({
          name: 'start',
          title: 'Shop Open ',
          type: 'datetime',
        }),
        defineField({
          name:"banner",
          title:"Banner",
          type:"image"
        })
      ]
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
