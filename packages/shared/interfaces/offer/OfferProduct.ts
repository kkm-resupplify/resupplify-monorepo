import type { Product } from '@sharedInterfaces/product/ProductInterface'

export interface OfferProduct extends Product {
  quantity: number
  netPrice: number
  supply: number
}
