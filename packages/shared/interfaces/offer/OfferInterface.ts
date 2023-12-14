import type { OfferProduct } from './OfferProduct'

export interface Offer {
  id: number
  status: number
  product: OfferProduct
}
