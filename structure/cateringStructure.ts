import {DocumentsIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Catering') // Updated title to reflect both types
    .icon(DocumentsIcon)
    .child(
      S.list()
        .title('Catering') // You can customize the title here
        .items([
          S.documentTypeListItem('catering').title('Catering Page'),
          // S.documentTypeListItem('locationInnerPage').title('Location Inner Pages'),
        ]),
    ),
)
