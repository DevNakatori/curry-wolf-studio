import {defineConfig, isDev} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {structure, defaultDocumentNode} from './structure'
import {visionTool} from '@sanity/vision'
import {colorInput} from '@sanity/color-input'
import {imageHotspotArrayPlugin} from 'sanity-plugin-hotspot-array'
import {media, mediaAssetSource} from 'sanity-plugin-media'
import {customDocumentActions} from './plugins/customDocumentActions'
import {documentInternationalization} from '@sanity/document-internationalization'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import Navbar from './components/studio/Navbar'
import {locate} from './presentation/locate'
import {getAllLanguages} from './utils/countries'
import {presentationTool} from '@sanity/presentation'
import {projectDetails} from './project.details'
import {languageFilter} from '@sanity/language-filter'
import {PreviewIcon} from './components/icons/Preview'
import {googleTranslate} from 'sanity-plugin-google-translate'
import {muxInput} from 'sanity-plugin-mux-input'
const {projectId, dataset, apiVersion, previewUrl} = projectDetails
const localePreviewUrl = 'http://localhost:3000'
const devOnlyPlugins = [
  visionTool({
    defaultApiVersion: apiVersion,
    defaultDataset: dataset,
  }),
]
const languages = getAllLanguages()
const SANITY_STUDIO_PRODUCTION_URL = isDev
  ? localePreviewUrl
  : previewUrl
    ? previewUrl
    : localePreviewUrl

export default defineConfig({
  name: 'default',
  title: 'Shopify - wolfshoppen',
  projectId: projectId || 'vu17rm6q',
  dataset: dataset || 'production',

  plugins: [
    structureTool({structure, defaultDocumentNode}),
    colorInput(),
    imageHotspotArrayPlugin(),
    customDocumentActions(),
    media(),
    presentationTool({
      // Required: set the base URL to the preview location in the front end
      previewUrl: `${SANITY_STUDIO_PRODUCTION_URL}/sanity/preview`,
      locate,
      icon: PreviewIcon,
      title: 'Preview',
    }),
    documentInternationalization({
      supportedLanguages: languages,
      schemaTypes: [
        'page',
        'home',
        'locations',
        'catering',
        'locationInnerPage',
        'header',
        'footer',
        'product',
        'settings',
        'collection',
      ],
    }),
    internationalizedArray({
      languages: getAllLanguages(),
      defaultLanguages: [languages[0].id],
      fieldTypes: ['string', 'text', 'slug', 'headerNavigation', 'locationLink'],
      buttonLocations: ['field'],
    }),
    languageFilter({
      supportedLanguages: getAllLanguages(),
      defaultLanguages: [languages[0].id],
      documentTypes: [
        'page',
        'home',
        'locations',
        'catering',
        'locationInnerPage',
        'header',
        'footer',
        'product',
        'settings',
        'collection',
      ],
      filterField: (enclosingType, member, selectedLanguageIds) => {
        // Filter internationalized arrays
        if (
          enclosingType.jsonType === 'object' &&
          enclosingType.name.startsWith('internationalizedArray') &&
          'kind' in member
        ) {
          const language = isKeyedObject(member.field.path[1]) ? member.field.path[1]._key : null

          return language ? selectedLanguageIds.includes(language) : false
        }

        // Filter internationalized objects
        // `localeString` must be registered as a custom schema type
        if (enclosingType.jsonType === 'object' && enclosingType.name.startsWith('locale')) {
          return selectedLanguageIds.includes(member.name)
        }

        return true
      },
    }),
    googleTranslate(),
    muxInput({
      apiSecret: process.env.SANITY_STUDIO_MUX_TOKEN_SECRET,
      apiKey: process.env.SANITY_STUDIO_MUX_TOKEN_ID,
    }),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
    // templates: (prev) => {
    //   const prevFiltered = prev.filter(
    //     (template) => !['home', 'pages', 'setting', 'products', 'collection'].includes(template.id),
    //   )

    //   return [
    //     ...prevFiltered,
    //     {
    //       id: 'home',
    //       title: 'Home Page',
    //       schemaType: 'home',
    //       parameters: [{name: 'language', type: 'string'}],
    //       value: (params) => ({
    //         language: params.language,
    //       }),
    //     },
    //     {
    //       id: 'pages',
    //       title: 'Pages',
    //       schemaType: 'pages',
    //       parameters: [{name: 'language', type: 'string'}],
    //       value: (params) => ({
    //         language: params.language,
    //       }),
    //     },
    //     {
    //       id: 'setting',
    //       title: 'Settings',
    //       schemaType: 'setting',
    //       parameters: [{name: 'language', type: 'string'}],
    //       value: (params) => ({
    //         language: params.language,
    //       }),
    //     },
    //     {
    //       id: 'products',
    //       title: 'Products',
    //       schemaType: 'products',
    //       parameters: [{name: 'language', type: 'string'}],
    //       value: (params) => ({
    //         language: params.language,
    //       }),
    //     },
    //     {
    //       id: 'collection',
    //       title: 'Collection',
    //       schemaType: 'collection',
    //       parameters: [{name: 'language', type: 'string'}],
    //       value: (params) => ({
    //         language: params.language,
    //       }),
    //     },
    //   ]
    // },
  },

  form: {
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource !== mediaAssetSource)
      },
    },
    image: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource)
      },
    },
  },

  studio: {
    components: {
      navbar: Navbar,
    },
  },
})
