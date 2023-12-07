import WarehouseProductStatusEnum from '@sharedEnums/warehouse/WarehouseProductStatusEnum'
import type { Product } from '@sharedInterfaces/product/ProductInterface'
import { useI18n } from 'vue-i18n'

const productStatus = (product: Product) => {
  const { status, verificationStatus } = product

  if (status === 1 && verificationStatus === 1) {
    return WarehouseProductStatusEnum.ACTIVE
  }

  return WarehouseProductStatusEnum.INACTIVE
}

const productStatusName = (product: Product) => {
  const { t } = useI18n()
  const { status } = product

  if (status === 1) {
    return t('global.active')
  }

  return t('global.inactive')
}

export function useProductStatus() {
  return {
    productStatus,
    productStatusName
  }
}
