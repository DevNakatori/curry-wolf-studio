import {defineField} from 'sanity'

export const footerContactInfoType = defineField({
  name: 'footerContactInfo',
  title: 'Contact Information',
  type: 'document',
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
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        defineField({
          name: 'street',
          title: 'Street',
          type: 'string',
        }),
        defineField({
          name: 'postalCode',
          title: 'Postal Code',
          type: 'string',
          validation: (Rule) =>
            Rule.regex(/^\d+$/, {
              name: 'postal code', // Error message for invalid postal code
            }).error('Please enter a valid postal code'), // Custom validation for postal code format
        }),
        defineField({
          name: 'city',
          title: 'City',
          type: 'string',
        }),
        defineField({
          name: 'country',
          title: 'Country',
          type: 'string',
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
