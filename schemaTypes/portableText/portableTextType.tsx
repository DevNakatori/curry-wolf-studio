import {defineArrayMember, defineField} from 'sanity'

export const portableTextType = defineField({
  name: 'portableText',
  type: 'array',
  of: [
    defineArrayMember({
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {
            title: 'Italic',
            value: 'em',
          },
          {
            title: 'Strong',
            value: 'strong',
          },
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
      type: 'block',
    }),
    defineArrayMember({type: 'accordion'}),
    defineArrayMember({type: 'images'}),
    defineArrayMember({type: 'imageWithProductHotspots', title: 'Image with Hotspots'}),
    defineArrayMember({type: 'instagram'}),
    defineArrayMember({type: 'products'}),
  ],
})
