import {HomeIcon} from '@sanity/icons'
import {defineField} from 'sanity'
import {GROUPS} from '../../constants'

const TITLE = 'Home'

export const homeType = defineField({
  name: 'home',
  title: TITLE,
  type: 'document',
  icon: HomeIcon,
  groups: GROUPS,
  fields: [
    defineField({
      name: 'video',
      title: 'Banner',
      type: 'video',
      group: 'editorial',
      options: {
        collapsed: false,
        collapsible: true,
      },
    }),
    defineField({
      name: 'homepageSecondSections',
      title: 'Homepage Second Sections',
      type: 'homepageSecondSection',
      group: 'editorial',
      options: {
        collapsed: false,
        collapsible: true,
      },
    }),
    defineField({
      name: 'homepageThirdSection',
      title: 'Homepage Third Sections',
      type: 'homepageThirdSection',
      group: 'editorial',
      options: {
        collapsed: false,
        collapsible: true,
      },
    }),
    // defineField({
    //   name: 'modules',
    //   type: 'array',
    //   of: [
    //     defineArrayMember({type: 'accordion'}),
    //     defineArrayMember({type: 'callout'}),
    //     defineArrayMember({type: 'grid'}),
    //     defineArrayMember({type: 'images'}),
    //     defineArrayMember({type: 'imageWithProductHotspots', title: 'Image with Hotspots'}),
    //     defineArrayMember({type: 'instagram'}),
    //     defineArrayMember({type: 'products'}),
    //   ],
    //   group: 'editorial',
    // }),
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
      language: 'language',
    },
    prepare(selection) {
      const {language} = selection
      return {
        media: HomeIcon,
        subtitle: language,
        title: TITLE,
      }
    },
  },
})
