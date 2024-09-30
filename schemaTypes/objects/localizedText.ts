import {defineField, defineType} from 'sanity'

import {getAllLanguages} from '../../utils/countries'
const Languages = getAllLanguages()
export default defineType({
  name: 'localizedText',
  title: 'Localized Text',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true, collapsed: false},
    },
  ],
  fields: Languages.map((lang) =>
    defineField({
      name: lang.id,
      title: lang.title,
      type: 'slug',
      fieldset: lang.id ? undefined : 'translations',
      options: {
        source: `title.${lang.id}`,
      },
    }),
  ),
})
