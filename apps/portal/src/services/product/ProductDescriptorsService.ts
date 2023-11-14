import BaseService from '../BaseService'
import { useProductDescriptorsStore } from '@/stores/product/useProductDescriptorsStore'

class ProductService extends BaseService {
  async getCategories() {
    const response = await this.get({
      suffix: 'productCategory'
    })

    if (response.success) {
      const { data } = response

      const productDescriptorsStore = useProductDescriptorsStore()
      productDescriptorsStore.setProductCategories(data)
    }

    return response
  }

  async getSubcategories() {
    const response = await this.get({
      suffix: 'productSubcategory'
    })

    if (response.success) {
      const { data } = response

      const productDescriptorsStore = useProductDescriptorsStore()
      productDescriptorsStore.setProductSubcategories(data)
    }

    return response
  }

  async getUnits() {
    const response = await this.get({
      suffix: 'productUnits'
    })

    if (response.success) {
      const { data } = response

      const productDescriptorsStore = useProductDescriptorsStore()
      productDescriptorsStore.setProductUnits(data)
    }

    return response
  }

  async getTags() {
    const response = await this.get({
      suffix: 'productTags'
    })

    if (response.success) {
      const { data } = response

      const productDescriptorsStore = useProductDescriptorsStore()
      productDescriptorsStore.setProductTags(data)
    }

    return response
  }
}

export default new ProductService('')
