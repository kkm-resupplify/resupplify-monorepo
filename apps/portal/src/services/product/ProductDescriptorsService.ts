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
}

export default new ProductService('')
