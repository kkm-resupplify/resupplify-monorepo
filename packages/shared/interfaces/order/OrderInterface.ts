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
