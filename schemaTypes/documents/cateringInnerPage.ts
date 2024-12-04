import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField} from 'sanity'

import {GROUPS} from '../../constants'

export const cateringInnerPageType = defineField({
  name: 'cateringInnerPage',
  title: 'Catering Inner Page',
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
     },
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'ctaButtontext',
      title: 'Cta Button Text ',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Cta Button Link',
      type: 'string',
      options: {
        aiAssist: {exclude: true}
     },
    }),
    defineField({
      name: 'image',
      title: 'Made In Berlin Logo',
      type: 'image',
    }),
    defineField({
      name: 'Description',
      title: 'Description Image',
      type: 'text',
    }),
    defineField({
      name: 'Brandenburger',
      title: 'section 2nd',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'description',
          type: 'text',
          rows: 4,
        }),
        defineField({
          name: 'content',
          title: 'content',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: '  title',
                  type: 'text',
                  rows: 3,
                  options: {aiAssist: {translateAction: true}},
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 4,
                  options: {aiAssist: {translateAction: true}},
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'ButtonText',
          title: 'Button',
          type: 'string',
        }),
        defineField({
          name: 'ButtonLink',
          title: 'Button Link',
          type: 'string',
          options: {
            aiAssist: {exclude: true}
         },
        }),
        defineField({
          name: 'secondContent',
          title: 'content',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 4,
                  options: {aiAssist: {translateAction: true}},
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'secondButtonText',
          title: 'Second Button',
          type: 'string',
        }),
        defineField({
          name: 'secondButtonLink',
          title: 'Second Button Link',
          type: 'string',
          options: {
            aiAssist: {exclude: true}
         },
        }),
        defineField({
          name: 'image',
          title: 'image',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'image',
              type: 'image',
            }),
            defineField({
              name: 'title',
              title: 'title',
              type: 'string',
              options: {aiAssist: {translateAction: true}},
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'Referenzen',
      title: 'Referenzen',
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
          options: {aiAssist: {translateAction: true}},
        }),
        defineField({
          name: 'ReferenzenContent',
          title: 'Referenzen Content',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'description',
                  title: 'description',
                  type: 'text',
                  rows: 3,
                  options: {aiAssist: {translateAction: true}},
                }),
                defineField({
                  name: 'title',
                  title: 'title',
                  type: 'string',
                  options: {aiAssist: {translateAction: true}},
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'Rating',
      title: 'Rating Section',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'number',
          title: 'Number',
          type: 'string',
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'Image',
                  title: 'Image',
                  type: 'image',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'ImagesSection',
      title: 'Images Section',
      type: 'object',
      fields: [
        defineField({
          name: 'cateringPageImages',
          title: 'Catering Page Images',
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
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  options: {aiAssist: {translateAction: true}},
                }),
                defineField({
                  name: 'link',
                  title: 'image Link',
                  type: 'string',
                }),
              ],
            }),
          ],
        }),
        defineField({
          name: 'buttons',
          title: 'Buttons',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'buttonText',
                  title: 'Button Text',
                  type: 'string',
                  options: {aiAssist: {translateAction: true}},
                }),
                defineField({
                  name: 'buttonLink',
                  title: 'Button Text',
                  type: 'string',
                }),
              ],
            }),
          ],
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
