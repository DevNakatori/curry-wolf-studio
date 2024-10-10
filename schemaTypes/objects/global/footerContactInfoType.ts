import {defineField} from 'sanity'

export const footerContactInfoType = defineField({
  name: 'footerContactInfo',
  title: 'Contact Information',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Contact', // Default value should be capitalized
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'object', // Ensure type is 'object' for label and number fields
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          initialValue: 'Phone', // Default label value
        }),
        defineField({
          name: 'number',
          title: 'Number',
          type: 'string',
          validation: (Rule) =>
            Rule.regex(/^[+]?[\d\s-]+$/, {
              name: 'phone number', // Error message for invalid format
            }).error('Please enter a valid phone number'), // Custom validation for phone number format
        }),
      ],
    }),
    defineField({
      name: 'faxNumber',
      title: 'Fax Number',
      type: 'object', // Ensure type is 'object' for label and number fields
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          initialValue: 'Fax', // Default label value
        }),
        defineField({
          name: 'number',
          title: 'Number',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'object', // Ensure type is 'object' for label and number fields
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          initialValue: 'Email', // Default label value
        }),
        defineField({
          name: 'email',
          title: 'Email Address',
          type: 'string',
          validation: (Rule) =>
            Rule.regex(/^([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+)$/, {
              name: 'email', // Error message for invalid format
            }).error('Please enter a valid email address'),
        }),
      ],
    }),
    defineField({
      name: 'address',
      title: ' Address',
      type: 'object', // Ensure type is 'object' for label and number fields
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
        }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'portableTextSimple',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'email', // Optional: Add a subtitle using email
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle: subtitle ? `Email: ${subtitle}` : undefined,
      }
    },
  },
})
