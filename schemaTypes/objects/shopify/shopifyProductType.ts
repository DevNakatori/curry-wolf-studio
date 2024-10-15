import {defineArrayMember, defineField} from 'sanity'

export const shopifyProductType = defineField({
  name: 'shopifyProduct',
  title: 'Shopify',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fieldsets: [
    {
      name: 'status',
      title: 'Status',
    },
    {
      name: 'organization',
      title: 'Organization',
      options: {
        columns: 2,
      },
    },
    {
      name: 'variants',
      title: 'Variants',
      options: {
        collapsed: true,
        collapsible: true,
      },
    },
  ],
  fields: [
    defineField({
      fieldset: 'status',
      name: 'createdAt',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      fieldset: 'status',
      name: 'updatedAt',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      fieldset: 'status',
      name: 'status',
      type: 'string',
      readOnly: true,
      options: {
        layout: 'dropdown',
        list: ['active', 'archived', 'draft'],
      },
    }),
    defineField({
      fieldset: 'status',
      name: 'isDeleted',
      title: 'Deleted from Shopify?',
      type: 'boolean',
      readOnly: true,
    }),
    defineField({
      name: 'title',
      type: 'string',
      description: 'Title displayed in both cart and checkout',
    }),
    defineField({
      name: 'id',
      title: 'ID',
      type: 'number',
      readOnly: true,
      description: 'Shopify Product ID',
    }),
    defineField({
      name: 'gid',
      title: 'GID',
      type: 'string',
      readOnly: true,
      description: 'Shopify Product GID',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'Shopify Product handle',
      options: {
        isUnique: () => true,
      },
    }),
    defineField({
      name: 'descriptionHtml',
      title: 'HTML Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      fieldset: 'organization',
      name: 'productType',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      fieldset: 'organization',
      name: 'vendor',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      fieldset: 'organization',
      name: 'tags',
      readOnly: true,
      type: 'string',
    }),
    defineField({
      name: 'priceRange',
      type: 'priceRange',
      readOnly: true,
    }),
    defineField({
      name: 'previewImageUrl',
      title: 'Preview Image URL',
      type: 'string',
      readOnly: true,
      description: 'Image displayed in both cart and checkout',
    }),
    defineField({
      name: 'options',
      type: 'array',
      readOnly: true,
      of: [{type: 'option'}],
    }),
    defineField({
      fieldset: 'variants',
      name: 'variants',
      readOnly: true,
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Variant',
          type: 'reference',
          readOnly: true,
          weak: true,
          to: [{type: 'productVariant'}],
        }),
      ],
    }),
  ],
})
