import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'

export interface Order {
  id: number
  seller: CompanyData
  buyer: CompanyData
  orderItems: OrderItem[]
  status: number
  createdAt: string
  updatedAt: string
}

export interface OrderItem {
  id: number
  offer: Offer
  quantity: number
}

export interface OrderFiltersParams {
  page?: string
  name?: string
  categoryId?: string | number
  subcategoryId?: string | number
  status?: string | number
}

export interface OrderItemShort {
  offerId: number
  orderQuantity: number
}
