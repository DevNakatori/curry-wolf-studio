import {defineField} from 'sanity'

export const globalContentType = defineField({
  name: 'globalContent',
  title: 'Global Content',
  description: 'Global content on the site',
  type: 'object',
  fields: [
    defineField({
      name: 'trustedShop',
      type: 'trustedShop',
    }),
    defineField({
      name: 'benefitsSection',
      type: 'benefitsSection',
    }),
    defineField({
      name: 'BackToAllProducts',
      title: 'Back to all products button text',
      type: 'string',
    }),
    defineField({
      name: 'addToCartButton',
      title: 'Add to Cart Button',
      type: 'string',
    }),
    defineField({
      name: 'moreInformation',
      title: 'More information Text',
      type: 'string',
    }),
    defineField({
      name: 'ingredientsText',
      title: 'Ingredients Text',
      type: 'string',
    }),
    defineField({
      name: 'nutritionalValues',
      title: 'Nutritional values Text',
      type: 'string',
    }),
    defineField({
      name: 'reparation',
      title: 'preparation Text',
      type: 'string',
    }),
    defineField({
      name: 'soldOutButton',
      title: 'Sold Out Button Text',
      type: 'string',
    }),
    defineField({
      name: 'plusShippingCostsText',
      title: 'plus shipping costs text',
      type: 'string',
    }),
    defineField({
      name: 'ShippingWeight',
      title: 'Shipping weight text',
      type: 'string',
    }),
    defineField({
      name: 'WeightNotAvailable',
      title: 'Weight not available text',
      type: 'string',
    }),
    defineField({
      name: 'inclVatText',
      title: 'incl. VAT /  text',
      type: 'string',
    }),
    defineField({
      name: 'deliveryTime',
      title: 'Delivery time: 2-4 days (*) text',
      type: 'string',
    }),
    defineField({
      name: 'cartContent',
      title: 'Cart content',
      type: 'object',
      fields: [
        defineField({
          name: 'cartMessage',
          title: 'Cart Message',
          type: 'string',
        }),
        defineField({
          name: 'anzahl',
          title: 'Cart Anzahl',
          type: 'string',
        }),
        defineField({
          name: 'ContinueShopping',
          title: 'Continue shopping Button Text',
          type: 'string',
        }),
        defineField({
          name: 'total',
          title: 'Total Text',
          type: 'string',
        }),
        defineField({
          name: 'subtotal',
          title: 'Subtotal Text',
          type: 'string',
        }),
        defineField({
          name: 'discountcode',
          title: 'discount code Placeholder Text',
          type: 'string',
        }),
        defineField({
          name: 'apply',
          title: 'Apply Button Text',
          type: 'string',
        }),
        defineField({
          name: 'ContinueToCheckout',
          title: 'Continue to checkout Button Text',
          type: 'string',
        }),
      ],
    }),
  ],
})
