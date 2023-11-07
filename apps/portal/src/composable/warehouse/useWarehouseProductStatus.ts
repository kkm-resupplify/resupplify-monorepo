import type { WarehouseProduct } from '@interfaces/warehouse/WarehouseProductInterface'

export function useWarehouseProductStatus() {
  return {
    warehouseProductStatus(warehouseProduct: WarehouseProduct) {}
  }
}
