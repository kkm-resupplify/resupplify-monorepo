import type { Product } from '@sharedInterfaces/product/ProductInterface'
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'

export interface Offer {
  id: number
  status: number
  price: number
  company: CompanyData
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
  sortEndsAt?: string
  sortPrice?: string | number
}

export interface CreateOffer {
  stockItemId: number
  status: number
  price: number
  startDate: string
  endDate: string
  productQuantity: number
}
