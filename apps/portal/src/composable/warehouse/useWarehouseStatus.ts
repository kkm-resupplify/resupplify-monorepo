import type { Warehouse } from '@interfaces/warehouse/WarehouseInterface'
import type { WarehouseProduct } from '@interfaces/warehouse/WarehouseProductInterface'
import { useWarehouseProductStatus } from '@/composable/warehouse/useWarehouseProductStatus'

export function useWarehouseStatus() {
  return {
    warehouseStatus(warehouse: Warehouse) {}
  }
}
