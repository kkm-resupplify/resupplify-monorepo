import type { Warehouse } from '@interfaces/warehouse/WarehouseInterface'
import { useWarehouseProductStatus } from '@/composable/warehouse/useWarehouseProductStatus'
import WarehouseStatusEnum from '@sharedEnums/warehouse/WarehouseStatusEnum'

export function useWarehouseStatus() {
  return {
    warehouseStatus(warehouse: Warehouse) {
      const { products } = warehouse
      const { warehouseProductStatus } = useWarehouseProductStatus()

      if (
        products.some(
          (product) => warehouseProductStatus(product) === WarehouseStatusEnum.PRODUCTS_OUT_OF_STOCK
        )
      ) {
        return WarehouseStatusEnum.PRODUCTS_OUT_OF_STOCK
      }

      if (
        products.some(
          (product) =>
            warehouseProductStatus(product) === WarehouseStatusEnum.PRODUCTS_BELOW_SAFE_QUANTITY
        )
      ) {
        return WarehouseStatusEnum.PRODUCTS_BELOW_SAFE_QUANTITY
      }

      return WarehouseStatusEnum.OK
    }
  }
}
