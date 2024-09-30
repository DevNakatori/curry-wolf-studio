import {DefaultDocumentNodeResolver, ListItemBuilder, StructureResolver} from 'sanity/structure'
import collections from './collectionStructure'
import home from './homeStructure'
import pages from './pageStructure'
import products from './productStructure'
import settings from './settingStructure'
import headerStructure from './headerStructure'
import footerStructure from './footerStructure'

const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId()

  if (!id) {
    return false
  }

  return ![
    'collection',
    'colorTheme',
    'home',
    'media.tag',
    'page',
    'product',
    'header',
    'footer',
    'productVariant',
    'settings',
  ].includes(id)
}
export const defaultDocumentNode: DefaultDocumentNodeResolver = (S) => {
  return S.document().views([S.view.form()])
}
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      home(S, context),
      pages(S, context),
      S.divider(),
      headerStructure(S, context),
      S.divider(),
      footerStructure(S, context),
      S.divider(),
      collections(S, context),
      products(S, context),
      S.divider(),
      settings(S, context),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
