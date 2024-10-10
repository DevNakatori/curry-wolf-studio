import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField} from 'sanity'
import {GROUPS} from '../../constants'

export const ContactType = defineField({
  name: 'contact',
  title: 'Contact Page',
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
    }),
    defineField({
      name: 'sectionFirst',
      title: 'Section First',
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
          name: 'image',
          title: 'Image',
          type: 'image',
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
          name: 'Kontakt',
          title: 'Kontakt',
          type: 'object',
          options: {
            collapsed: false,
            collapsible: true,
          },
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'EMail',
              title: 'E-Mail',
              type: 'string',
            }),
            defineField({
              name: 'Telefon',
              title: 'Telefon',
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'commentsSection',
          title: 'Comments Section',
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
              name: 'placeholder',
              title: 'Placeholder',
              type: 'string',
            }),
            defineField({
              name: 'privacyPolicyCheckbox',
              title: 'Privacy Policy Checkbox Text',
              type: 'portableTextSimple',
            }),
          ],
        }),
        defineField({
          name: 'submitButtonText',
          title: 'Submit Button Text',
          type: 'string',
        }),
        defineField({
          name: 'Address',
          title: 'Address',
          type: 'footerContactInfo',
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
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Title for the Section',
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
