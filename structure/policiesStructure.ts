import {DocumentsIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Policies') // Updated title to reflect both types
    .icon(DocumentsIcon)
    .child(
      S.list()
        .title('Policies') // You can customize the title here
        .items([
          S.documentTypeListItem('policies').title('Policies Page'),
          S.documentTypeListItem('policiesInnerPage').title('Policies Inner Pages'),
        ]),
    ),
)
