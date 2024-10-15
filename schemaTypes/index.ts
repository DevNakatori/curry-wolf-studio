import {accordionGroupType} from './objects/module/accordionGroupType'
import {accordionType} from './objects/module/accordionType'
import {calloutType} from './objects/module/calloutType'
import {callToActionType} from './objects/module/callToActionType'
import {collectionGroupType} from './objects/collection/collectionGroupType'
import {collectionLinksType} from './objects/collection/collectionLinksType'
import {collectionReferenceType} from './objects/module/collectionReferenceType'
import {collectionRuleType} from './objects/shopify/collectionRuleType'
import {customProductOptionColorObjectType} from './objects/customProductOption/customProductOptionColorObjectType'
import {customProductOptionColorType} from './objects/customProductOption/customProductOptionColorType'
import {customProductOptionSizeObjectType} from './objects/customProductOption/customProductOptionSizeObjectType'
import {customProductOptionSizeType} from './objects/customProductOption/customProductOptionSizeType'
import {gridItemType} from './objects/module/gridItemType'
import {gridType} from './objects/module/gridType'
import {heroType} from './objects/module/heroType'
import {imageCallToActionType} from './objects/module/imageCallToActionType'
import {imageFeaturesType} from './objects/module/imageFeaturesType'
import {imageFeatureType} from './objects/module/imageFeatureType'
import {imageWithProductHotspotsType} from './objects/hotspot/imageWithProductHotspotsType'
import {instagramType} from './objects/module/instagramType'
import {inventoryType} from './objects/shopify/inventoryType'
import {linkEmailType} from './objects/link/linkEmailType'
import {linkExternalType} from './objects/link/linkExternalType'
import {linkInternalType} from './objects/link/linkInternalType'
import {linkProductType} from './objects/link/linkProductType'
import {notFoundPageType} from './objects/global/notFoundPageType'
import {optionType} from './objects/shopify/optionType'
import {placeholderStringType} from './objects/shopify/placeholderStringType'
import {priceRangeType} from './objects/shopify/priceRangeType'
import {productFeaturesType} from './objects/module/productFeaturesType'
import {productHotspotsType} from './objects/hotspot/productHotspotsType'
import {productReferenceType} from './objects/module/productReferenceType'
import {productWithVariantType} from './objects/shopify/productWithVariantType'
import {proxyStringType} from './objects/shopify/proxyStringType'
import {seoType} from './objects/seoType'
import {shopifyCollectionType} from './objects/shopify/shopifyCollectionType'
import {shopifyProductType} from './objects/shopify/shopifyProductType'
import {shopifyProductVariantType} from './objects/shopify/shopifyProductVariantType'
import {spotType} from './objects/hotspot/spotType'
import localizedGoogleTranslateString from './objects/localizedGoogleTranslateString'
import localizedSlug from './objects/localizedSlug'
import localizedString from './objects/localizedString'
import localizedText from './objects/localizedText'
import {videoSchemaType} from './objects/home/videoSchemaType'
import {homeSecondSectionType} from './objects/home/homeSecondSectionType'
import {homeThirdSectionType} from './objects/home/homeTherdSectionType'
import headerNavigation from './documents/headerNavigation'
import LocationLink from './documents/LocationLink'
import {benefitsSection} from './objects/collection/benifitsSectionType'
import {trustedShopType} from './objects/collection/trustedShopSectionType'
import {footerSocialLinksTypes} from './objects/global/footerSocialLinksTypes'
import {footerContactInfoType} from './objects/global/footerContactInfoType'
import {locationSecondSectionType} from './objects/location/locationSecondSectionType'
import {locationThirdSectionType} from './objects/location/locationTherdSectionType'
import {locationMenuType} from './documents/locationMenuType'
import {globalContentType} from './objects/global/globalContentType'
// Objects used as annotations must be imported first
const annotations = [linkEmailType, linkExternalType, linkInternalType, linkProductType]

const objects = [
  accordionGroupType,
  accordionType,
  calloutType,
  callToActionType,
  collectionGroupType,
  localizedGoogleTranslateString,
  localizedSlug,
  localizedString,
  localizedText,
  headerNavigation,
  globalContentType,
  LocationLink,
  locationMenuType,
  locationSecondSectionType,
  locationThirdSectionType,
  homeThirdSectionType,
  benefitsSection,
  trustedShopType,
  homeSecondSectionType,
  videoSchemaType,
  footerContactInfoType,
  collectionLinksType,
  collectionReferenceType,
  collectionRuleType,
  customProductOptionColorObjectType,
  customProductOptionColorType,
  customProductOptionSizeObjectType,
  customProductOptionSizeType,
  footerSocialLinksTypes,
  gridItemType,
  gridType,
  heroType,
  imageCallToActionType,
  imageFeaturesType,
  imageFeatureType,
  imageWithProductHotspotsType,
  instagramType,
  inventoryType,
  notFoundPageType,
  optionType,
  placeholderStringType,
  priceRangeType,
  productFeaturesType,
  productHotspotsType,
  productReferenceType,
  productWithVariantType,
  proxyStringType,
  seoType,
  shopifyCollectionType,
  shopifyProductType,
  shopifyProductVariantType,
  spotType,
]

import {portableTextType} from './portableText/portableTextType'
import {portableTextSimpleType} from './portableText/portableTextSimpleType'

const blocks = [portableTextType, portableTextSimpleType]

import {collectionType} from './documents/collection'
import {pageType} from './documents/page'
import {productType} from './documents/product'
import {productVariantType} from './documents/productVariant'

import {LocationType} from './documents/locations'
import {CateringType} from './documents/cateringPage'
import {locationInnerPageType} from './documents/locationInnerPage'
import {cateringInnerPageType} from './documents/cateringInnerPage'
import {ourStoryType} from './documents/ourStory'
import {ourCurrywurstType} from './documents/ourCurrywurst'
import {cateringCTAFormType} from './documents/cateringCTAForm'
import {ContactType} from './documents/contactPage'
import {JobType} from './documents/jobPage'
import {JobInnerType} from './documents/jobInnerPage'
import {PoliciesType} from './documents/policies'
import {policiesInnerPageType} from './documents/policiesInnerPage'
import {legalNoticePageType} from './documents/legalNoticePage'

const documents = [
  collectionType,
  LocationType,
  legalNoticePageType,
  CateringType,
  PoliciesType,
  locationInnerPageType,
  policiesInnerPageType,
  cateringInnerPageType,
  cateringCTAFormType,
  ContactType,
  JobType,
  JobInnerType,
  ourCurrywurstType,
  ourStoryType,
  productType,
  productVariantType,
]

import {homeType} from './singletons/homeType'
import {settingsType} from './singletons/settingsType'
import header from './singletons/header'
import footer from './singletons/footer'

const singletons = [homeType, settingsType, header, footer, pageType]

export const schemaTypes = [...annotations, ...objects, ...singletons, ...blocks, ...documents]
