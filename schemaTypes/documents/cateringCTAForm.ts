import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField} from 'sanity'

import {GROUPS} from '../../constants'

export const cateringCTAFormType = defineField({
  name: 'cateringCTAForm',
  title: 'Catering CTA Form',
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
      name: 'sectionFirst',
      title: 'Section 1st',
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
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
        }),
        defineField({
          name: 'buttonLink',
          title: 'Link',
          type: 'string',
          options: {
            aiAssist: {exclude: true}
         },
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'array',
          of: [{type: 'image'}],
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
              name: 'Sectionname',
              title: 'Section Name',
              type: 'string',
              options: {aiAssist: {translateAction: true}},
            }),
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              options: {aiAssist: {translateAction: true}},
            }),
            defineField({
              name: 'EMail',
              title: 'E-Mail',
              type: 'string',
            }),
            defineField({
              name: 'UnternehmenOrganisation',
              title: 'Unternehmen/Organisation',
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
          name: 'eventDates',
          title: 'Event Dates',
          type: 'object',
          options: {
            collapsed: false,
            collapsible: true,
          },
          fields: [
            defineField({
              name: 'sectionname',
              title: 'Section Name',
              type: 'string',
            }),
            defineField({
              name: 'numberofguests',
              title: 'Number of Guests',
              type: 'string',
            }),
            defineField({
              name: 'date',
              title: 'Date',
              type: 'string',
            }),
            defineField({
              name: 'Zeit',
              title: 'Zeit',
              type: 'string',
            }),
            defineField({
              name: 'street',
              title: 'Street',
              type: 'string',
            }),
            defineField({
              name: 'housenumber',
              title: 'House Number',
              type: 'string',
            }),
            defineField({
              name: 'Postalcode',
              title: 'Postal Code',
              type: 'string',
            }),
            defineField({
              name: 'location',
              title: 'Location',
              type: 'string',
            }),
          ],
        }),
        defineField({
          name: 'catering',
          title: 'Catering',
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
              name: 'dishes',
              title: 'Dishes',
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
                  name: 'dishes',
                  title: 'dishes',
                  type: 'array',
                  of: [
                    defineArrayMember({
                      type: 'object',
                      fields: [
                        defineField({
                          name: 'dish',
                          title: 'dishes',
                          description: 'Name of the dish',
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
              name: 'drinks',
              title: 'Drinks',
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
                  name: 'drinks',
                  title: 'Drinks',
                  type: 'array',
                  of: [
                    defineArrayMember({
                      type: 'object',
                      fields: [
                        defineField({
                          name: 'drink',
                          title: 'drink',
                          description: 'Name of the drink',
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
              name: 'eventArea',
              title: 'Event Area',
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
                  name: 'eventArea',
                  title: 'Event Area',
                  type: 'array',
                  of: [
                    defineArrayMember({
                      type: 'object',
                      fields: [
                        defineField({
                          name: 'area',
                          title: 'Area',
                          description: 'Name of the area ',
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
              name: 'equipment',
              title: 'Equipment',
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
                  name: 'equipment',
                  title: 'Equipment',
                  type: 'array',
                  of: [
                    defineArrayMember({
                      type: 'object',
                      fields: [
                        defineField({
                          name: 'equipment',
                          title: 'Equipment',
                          description: 'Do you need equipment Text',
                          type: 'string',
                          options: {aiAssist: {translateAction: true}},
                        }),
                      ],
                    }),
                  ],
                }),
              ],
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
          name: 'starContentText',
          title: 'Star Content Text',
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
