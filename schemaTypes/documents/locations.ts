import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField} from 'sanity'
import {GROUPS} from '../../constants'
import {validateSlug} from '../../utils/validateSlug'

export const LocationType = defineField({
  name: 'locations',
  title: 'Location',
  type: 'document',
  icon: DocumentIcon,
  groups: GROUPS,
  fields: [
    defineField({
      name: 'title',
      group: 'editorial',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      group: 'editorial',
      type: 'string',
    }),
    defineField({
      name: 'imagesLabels',
      group: 'editorial',
      type: 'locationLink',
    }),
    defineField({
      name: 'locationSecondSectionType',
      title: 'LocationPage Second Sections',
      type: 'locationSecondSectionType',
      group: 'editorial',
      options: {
        collapsed: false,
        collapsible: true,
      },
    }),
    defineField({
      name: 'locationThirdSection',
      title: 'Location Third Sections',
      type: 'locationThirdSection',
      group: 'editorial',
      options: {
        collapsed: false,
        collapsible: true,
      },
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
