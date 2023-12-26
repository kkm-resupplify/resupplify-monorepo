import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'

export interface Order {
  id: number
  company: CompanyData
  offers: OrderItem[]
  status: number
  createdAt: string
  updatedAt: string
}

export interface OrderItem {
  id: number
  offer: Offer
  quantity: number
}
