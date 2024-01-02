import type { ProductTag } from '@sharedInterfaces/product/ProductTagInterface'
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'

export interface Product {
  id: number
  name: string
  description: string
  producer: string
  image: string
  imageAlt?: string
  code: string
  status: number
  verificationStatus: number
  companyId: number
  productUnit: ProductUnit
  productSubcategory: ProductSubcategory
  productCategory: ProductCategory
  productTags: ProductTag[]
  translations: ProductTranslation[]
}

export interface ProductSubcategory {
  id: number
  name: string
  categoryId: number
}

export interface ProductCategory {
  id: number
  name: string
}

export interface ProductUnit {
  id: number
  code: string
}

export interface ProductCategorySelectItem {
  id: number
  text: string
}

export interface ProductSubcategorySelectItem {
  id: number
  text: string
  categoryId: number
}

export interface ProductTranslation {
  languageId: number
  name: string
  description: string
}

export interface FeaturedProduct extends Product {
  soldQuantity: number
  productOffer: Offer
}
