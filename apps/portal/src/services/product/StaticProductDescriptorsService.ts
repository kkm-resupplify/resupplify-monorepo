import BaseService from '../BaseService'
import { useStaticProductDescriptorsStore } from '@sharedStores/product/useStaticProductDescriptorsStore'

class StaticProductDescriptorsService extends BaseService {
  static PRODUCT_CATEGORY_SUFFIX = 'productCategory'
  static PRODUCT_SUBCATEGORY_SUFFIX = 'productSubcategory'
  static PRODUCT_UNIT_SUFFIX = 'productUnit'

  async getCategories() {
    const response = await this.get({
      suffix: StaticProductDescriptorsService.PRODUCT_CATEGORY_SUFFIX
    })

    if (response.success) {
      const { data } = response

      const productDescriptorsStore = useStaticProductDescriptorsStore()
      productDescriptorsStore.setProductCategories(data)
    }

    return response
  }

  async getSubcategories() {
    const response = await this.get({
      suffix: StaticProductDescriptorsService.PRODUCT_SUBCATEGORY_SUFFIX
    })

    if (response.success) {
      const { data } = response

      const productDescriptorsStore = useStaticProductDescriptorsStore()
      productDescriptorsStore.setProductSubcategories(data)
    }

    return response
  }

  async getProductUnits() {
    const response = await this.get({
      suffix: StaticProductDescriptorsService.PRODUCT_UNIT_SUFFIX
    })

    if (response.success) {
      const { data } = response

      const productDescriptorsStore = useStaticProductDescriptorsStore()
      productDescriptorsStore.setProductUnits(data)
    }

    return response
  }
}

export default new StaticProductDescriptorsService('')
