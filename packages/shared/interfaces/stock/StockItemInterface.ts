import type { Product } from '@sharedInterfaces/product/ProductInterface'

export interface StockItem {
  id: number
  product: Product
  warehouseName: string
  warehouseQuantity: number
  datesActive: StockItemDate[]
}

export interface StockItemDate {
  startsAt: string
  endsAt: string
}
