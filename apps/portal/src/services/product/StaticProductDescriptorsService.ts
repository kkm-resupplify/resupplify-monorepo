import BaseService from '../BaseService'
import { useStaticProductDescriptorsStore } from '@/stores/product/useStaticProductDescriptorsStore'

class StaticProductDescriptorsService extends BaseService {
  async getCategories() {
    const response = await this.get({
      suffix: 'productCategory'
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
      suffix: 'productSubcategory'
    })

    if (response.success) {
      const { data } = response

      const productDescriptorsStore = useStaticProductDescriptorsStore()
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

      const productDescriptorsStore = useStaticProductDescriptorsStore()
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

      const productDescriptorsStore = useStaticProductDescriptorsStore()
      productDescriptorsStore.setProductTags(data)
    }

    return response
  }
}

export default new StaticProductDescriptorsService('')
