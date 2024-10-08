import {DocumentsIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Pages') // Updated title to reflect both types
    .icon(DocumentsIcon)
    .child(
      S.list()
        .title('Pages') // You can customize the title here
        .items([
          S.documentTypeListItem('page').title('Pages'), // List of Pages
          // S.documentTypeListItem('locations').title('Location Page'), // List of Locations
        ]),
    ),
)
