import {defineField, defineType} from 'sanity'

import {getAllLanguages} from '../../utils/countries'

const Languages = getAllLanguages()

export default defineType({
  name: 'localizedString',
  title: 'Localized String',
  type: 'object',
  options: {
    // This will replace the default input component
    translate: true,
    // This API key will be bundled with your studio
    // and so should be restricted by hostname
    // See: https://www.sanity.io/docs/studio-environment-variables
    apiKey: process.env.SANITY_STUDIO_GOOGLE_TRANSLATE_API_KEY,
  },
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
