import {defineField} from 'sanity'

export const shopifyCollectionType = defineField({
  name: 'shopifyCollection',
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
      name: 'isDeleted',
      title: 'Deleted from Shopify?',
      type: 'boolean',
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'id',
      title: 'ID',
      type: 'number',
      description: 'Shopify Collection ID',
      readOnly: true,
    }),
    defineField({
      name: 'gid',
      title: 'GID',
      type: 'string',
      description: 'Shopify Collection GID',
      readOnly: true,
    }),
    defineField({
      name: 'slug',
      description: 'Shopify Collection handle',
      type: 'slug',
    }),
    defineField({
      name: 'descriptionHtml',
      title: 'HTML Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL',
      type: 'string',
    }),
  ],
})
