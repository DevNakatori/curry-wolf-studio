import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField} from 'sanity'

import {GROUPS} from '../../constants'

export const ourCurrywurstType = defineField({
  name: 'ourCurrywurst',
  title: 'Our Currywurst Page',
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'sectionFirst',
      title: 'Section 1st',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
        }),
        defineField({
          name: 'content',
          title: 'Content',
          type: 'portableTextSimple',
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
        }),
        defineField({
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'sectionSecond',
      title: 'Section 2nd',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'content',
          title: 'Content',
          type: 'portableTextSimple',
        }),
        defineField({
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [
            defineArrayMember({
              name: 'image',
              title: 'Image',
              type: 'image',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'sectionThird',
      title: 'Section 3rd',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'cards',
          title: 'Cards',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  description: 'Image or illustration for the card',
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  description: 'Title for the card',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  description: 'Short description for the card',
                }),
                defineField({
                  name: 'buttonText',
                  title: 'Button Text',
                  type: 'string',
                  description: 'Text for the button',
                }),
                defineField({
                  name: 'buttonLink',
                  title: 'Button Link',
                  type: 'string',
                  description: 'URL for the button action',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'sectionFourth',
      title: 'Section 4th',
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
          description: 'Title for the Section',
        }),
        defineField({
          name: 'Subtitle',
          title: 'Sub Title',
          type: 'string',
          description: 'Sub Title for the Section',
        }),
        defineField({
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  description: 'Image or illustration for the card',
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          description: 'Text for the button',
        }),
        defineField({
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
          description: 'URL for the button action',
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
