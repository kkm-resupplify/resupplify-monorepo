import type { Offer } from '@sharedInterfaces/offer/OfferInterface'

export interface CartCompanyGroup {
  companyName: string
  cartItems: CartItem[]
}

export interface CartItem {
  offer: Offer
  quantity: number
}
