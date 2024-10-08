import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Header')
    .schemaType('header')
    .child(S.editor().title('Header').schemaType('header').documentId('header')),
)