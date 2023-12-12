import type { OfferProduct } from './OfferProduct'

export interface Offer {
  status: OfferStatus
  product: OfferProduct
}

enum OfferStatus {
  Active,
  Inactive
}
