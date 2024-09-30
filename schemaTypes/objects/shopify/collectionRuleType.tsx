import {FilterIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const collectionRuleType = defineField({
  title: 'Collection rule',
  name: 'collectionRule',
  type: 'object',
  icon: FilterIcon,
  readOnly: true,
  fields: [
    defineField({
      name: 'column',
      type: 'string',
    }),
    defineField({
      name: 'relation',
      type: 'string',
    }),
    defineField({
      name: 'condition',
      type: 'string',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      condition: 'condition',
      name: 'column',
      relation: 'relation',
    },
    prepare({condition, name, relation}) {
      return {
        subtitle: `${relation} ${condition}`,
        title: name,
      }
    },
  },
})
