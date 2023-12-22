import type { Product } from '@sharedInterfaces/product/ProductInterface'

export interface Offer {
  id: number
  status: number
  price: number
  productQuantity: number
  warehouseQuantity: number
  product: Product
  createdAt: string
  updatedAt: string
  startsAt: string
  endsAt: string
}

export interface OfferFiltersParams {
  page?: string
  name?: string
  categoryId?: string | number
  subcategoryId?: string | number
  status?: string | number
}

export interface CreateOffer {
  stockItemId: number
  status: number
  price: number
  startDate: string
  endDate: string
  productQuantity: number
}
