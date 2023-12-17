import type { OfferProduct } from './OfferProduct'

export interface Offer {
  id: number
  status: number
  price: number
  productQuantity: number
  product: OfferProduct
  createdAt: string
  updatedAt: string
  startsAt: string
  endsAt: string
}


export interface OfferFiltersParams {
  page?: string
  name?: string
  categoryId?: number
  subcategoryId?: number
  status?: number
}