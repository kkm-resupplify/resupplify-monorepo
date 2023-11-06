import type { Product } from '@interfaces/product/ProductInterface'

export interface Warehouse {
  id: number
  name: string
  description: string
  products: Product[]
}
