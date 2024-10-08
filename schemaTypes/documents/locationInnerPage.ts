import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField} from 'sanity'

import {GROUPS} from '../../constants'

export const locationInnerPageType = defineField({
  name: 'locationInnerPage',
  title: 'Location Inner Page',
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
      name: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'string',
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'video',
      description: 'page Video ',
      options: {
        collapsed: false,
        collapsible: true,
      },
    }),
    defineField({
      name: 'imagesTop',
      title: 'Page Background Top images',
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
              name: 'alt',
              title: 'alt tag',
              type: 'string',
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'imagesBottom',
      title: 'Page Background Bottom images',
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
              name: 'alt',
              title: 'alt tag',
              type: 'string',
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'openingTimes',
      title: 'Opening Times',
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
          name: 'OpeningTimes',
          title: 'OpeningTimes',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'day',
                  title: 'Day',
                  type: 'string',
                }),
                defineField({
                  name: 'time',
                  title: 'opening time',
                  type: 'string',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'paymentMethods',
      title: 'Payment methods',
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
          name: 'PaymentMethodsImages',
          title: 'images',
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
                  name: 'alt',
                  title: 'alt tag',
                  type: 'string',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'route',
      title: 'Route',
      description: 'Map Route for the Location',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'buttonText',
          type: 'string',
        }),
        defineField({
          name: 'buttonLink',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'locationMenu',
      title: 'Menu',
      description: 'Map Route for the Location',
      type: 'locationMenu',
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
