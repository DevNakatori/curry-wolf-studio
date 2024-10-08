import {defineArrayMember, defineField} from 'sanity'

export const locationMenuType = defineField({
  name: 'locationMenu',
  title: 'Location',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'MenuImage',
      type: 'image',
    }),
    defineField({
      name: 'foods',
      title: 'Foods',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'foods',
          title: 'Food',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'food',
                  title: 'Food',
                  description: 'Name of the food',
                  type: 'string',
                }),
                defineField({
                  name: 'price',
                  title: 'Price',
                  description: 'Price of the food',
                  type: 'string',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'drinks',
      title: 'Drinks',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'drinks',
          title: 'Drinks',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'drink',
                  title: 'Drink',
                  description: 'Name of the drink',
                  type: 'string',
                }),
                defineField({
                  name: 'volume',
                  title: 'Volume',
                  description: 'Volume of the drink',
                  type: 'string',
                }),
                defineField({
                  name: 'price',
                  title: 'Price',
                  description: 'Price of the drink',
                  type: 'string',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'OutsideOfTheHouse',
      title: 'Outside of the house',
      type: 'object',
      options: {
        collapsed: false,
        collapsible: true,
      },
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'OutsideOfTheHouse',
          title: 'Outside of the house',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'Name',
                  title: 'Name',
                  description: 'Name of the food / drink',
                  type: 'string',
                }),
                defineField({
                  name: 'volume',
                  title: 'Volume',
                  description: 'Volume of the drink / food',
                  type: 'string',
                }),
                defineField({
                  name: 'price',
                  title: 'Price',
                  description: 'Price of the drink / food',
                  type: 'string',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})
