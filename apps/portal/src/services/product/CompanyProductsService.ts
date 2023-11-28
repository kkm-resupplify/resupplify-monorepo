import type { ProductTranslation } from '@sharedInterfaces/product/ProductEditorInterface'
import BaseService from '../BaseService'
import type { ProductEditorStoreState } from '@/stores/product/useProductEditorStore'

// DTO
class CreateProductDto {
  producer: string | null
  code: string | null
  productUnitId: number | null
  productSubcategoryId: number | null
  translations: ProductTranslation[]

  constructor(productEditorData: ProductEditorStoreState) {
    const { productEditorFirstStepData, productEditorTranslationStepData } = productEditorData
    const { producer, code, productUnitId, productSubcategoryId } = productEditorFirstStepData

    this.producer = producer
    this.code = code
    this.productUnitId = productUnitId
    this.productSubcategoryId = productSubcategoryId
    this.translations = productEditorTranslationStepData
  }
}
class CompanyProductsService extends BaseService {
  async getCompanyProducts(params?: { page?: string; name?: string }) {
    return await this.get({
      config: { params },
      suffix: 'product'
    })
  }

  async createProduct(productData: ProductEditorStoreState) {
    return this.post({
      data: new CreateProductDto(productData),
      notificationTitle: 'company.management.products.editor.notification.productCreatedTitle',
      notificationText: 'company.management.products.editor.notification.productCreatedText'
    })
  }
}

export default new CompanyProductsService('company/product')
