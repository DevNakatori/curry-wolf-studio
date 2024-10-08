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
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/^[+]?[\d\s-]+$/, {
          name: 'phone number', // Error message for invalid format
        }).error('Please enter a valid phone number'), // Custom validation for phone number format
    }),
    defineField({
      name: 'faxNumber',
      title: 'Fax Number',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/^[+]?[\d\s-]+$/, {
          name: 'fax number', // Error message for invalid format
        }).error('Please enter a valid fax number'), // Custom validation for fax number format
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(/^([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+)$/, {
          name: 'email', // Error message for invalid format
        }).error('Please enter a valid email address'), // Email validation
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 4,
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
