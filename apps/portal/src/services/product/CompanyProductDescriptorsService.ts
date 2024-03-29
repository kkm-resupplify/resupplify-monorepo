import type { ProductTagData, ProductTag } from '@sharedInterfaces/product/ProductTagInterface'
import BaseService from '../BaseService'

class CompanyProductDescriptorsService extends BaseService {
  static PRODUCT_TAGS_SUFFIX = 'productTag'

  async getProductTags() {
    return this.get({
      suffix: CompanyProductDescriptorsService.PRODUCT_TAGS_SUFFIX
    })
  }

  async addProductTag(productTagData: ProductTagData) {
    return this.post({
      suffix: CompanyProductDescriptorsService.PRODUCT_TAGS_SUFFIX,
      data: productTagData,
      notificationTitle: 'company.management.products.tags.notification.addProductTagSuccessTitle'
    })
  }

  async deleteProductTag(id: number) {
    return this.delete({
      suffix: `${CompanyProductDescriptorsService.PRODUCT_TAGS_SUFFIX}/${id}`,
      notificationTitle:
        'company.management.products.tags.notification.deleteProductTagSuccessTitle'
    })
  }

  async editProductTag(productTag: ProductTag) {
    return this.put({
      suffix: `${CompanyProductDescriptorsService.PRODUCT_TAGS_SUFFIX}/${productTag.id}`,
      data: productTag,
      notificationTitle: 'company.management.products.tags.notification.editProductTagSuccessTitle'
    })
  }
}

export default new CompanyProductDescriptorsService('company')
