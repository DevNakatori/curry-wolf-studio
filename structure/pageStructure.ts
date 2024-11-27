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
          S.documentTypeListItem('ourStory').title('Our Story Page'),
          S.documentTypeListItem('ourCurrywurst').title('Our Currywurst Page'),
          S.documentTypeListItem('contact').title('Contact Page'),
          S.documentTypeListItem('job').title('Job Page'),
          S.documentTypeListItem('jobInnerPage').title('Job Inner Page'),
        ]),
    ),
)
