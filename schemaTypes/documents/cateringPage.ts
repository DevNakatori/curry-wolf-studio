import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField} from 'sanity'
import {GROUPS} from '../../constants'

export const CateringType = defineField({
  name: 'catering',
  title: 'Catering',
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
      name: 'cateringPageBannerImages',
      title: 'Catering Page Banner  Images',
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
          ],
        }),
      ],
    }),
    defineField({
      name: 'naturlichVeganLogo',
      title: 'Naturlich Vegan Logo',
      type: 'image',
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    }),
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
              title: 'Cta Button Link',
              type: 'string',
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
                  options: {aiAssist: {translateAction: true}},
                  rows: 3,
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
          options: {aiAssist: {translateAction: true}},
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
      name: 'Accordions',
      title: 'Accordions Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          options: {aiAssist: {translateAction: true}},
        }),
        defineField({
          name: 'ctaButtontext',
          title: 'Cta Button Text ',
          type: 'string',
          options: {aiAssist: {translateAction: true}},
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
          name: 'accordion',
          title: 'Accordions',
          type: 'accordion',
          options: {aiAssist: {translateAction: true}},
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
