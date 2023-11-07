import type { WarehouseProduct } from './WarehouseProductInterface'

export interface Warehouse {
  id: number
  name: string
  description: string
  products: WarehouseProduct[]
}
