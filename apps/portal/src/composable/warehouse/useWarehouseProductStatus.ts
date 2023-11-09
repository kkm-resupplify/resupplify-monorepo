import type { WarehouseProduct } from '@interfaces/warehouse/WarehouseProductInterface'
import WarehouseProductStatusEnum from '@sharedEnums/warehouse/WarehouseProductStatusEnum'
import ProductStatusEnum from '@sharedEnums/product/ProductStatusEnum'
import ProductVerificationStatusEnum from '@sharedEnums/product/ProductVerificationStatusEnum'

const warehouseProductStatus = (warehouseProduct: WarehouseProduct) => {
  const { product } = warehouseProduct

  // Product is active and verified and active
  if (
    product.verificationStatus === ProductVerificationStatusEnum.VERIFIED &&
    product.status === ProductStatusEnum.ACTIVE &&
    warehouseProduct.status === WarehouseProductStatusEnum.ACTIVE
  ) {
    const ratio = warehouseProduct.quantity / warehouseProduct.safeQuantity

    if (ratio === 0) {
      return WarehouseProductStatusEnum.OUT_OF_STOCK
    }

    if (ratio < 1) {
      return WarehouseProductStatusEnum.BELOW_SAFE_QUANTITY
    }

    return WarehouseProductStatusEnum.ACTIVE
  }

  // Product is inactive, rejected or unverified
  return WarehouseProductStatusEnum.INACTIVE
}

const countProductsByStatus = (warehouseProducts: WarehouseProduct[], status: number) => {
  return warehouseProducts.filter(
    (warehouseProduct) => warehouseProductStatus(warehouseProduct) === status
  ).length
}

export function useWarehouseProductStatus() {
  return {
    warehouseProductStatus,
    countProductsByStatus
  }
}
