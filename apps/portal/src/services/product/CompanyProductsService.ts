import type { ProductTranslation } from '@sharedInterfaces/product/ProductEditorInterface'
import BaseService from '../BaseService'
import type { ProductEditorStoreState } from '@/stores/product/useProductEditorStore'

interface AssignProductStatus {
  productIdList: Array<number>
  status: number
}

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
  static COMPANY_PRODUCTS_SUFFIX = 'product'
  static COMPANY_PRODUCT_STATS_SUFFIX = 'product/stats'
  static COMPANY_PRODUCTS_MASS_ASSIGN_SUFFIX = 'productMassAssign'

  async getProducts(params?: {
    page?: string
    name?: string
    categoryId?: string
    subcategoryId?: string
    status: string
    verificationStatus: string
  }) {
    return await this.get({
      config: { params },
      suffix: CompanyProductsService.COMPANY_PRODUCTS_SUFFIX
    })
  }

  async getProductStats() {
    return await this.get({
      suffix: CompanyProductsService.COMPANY_PRODUCT_STATS_SUFFIX
    })
  }

  async deleteProduct(id: number) {
    return await this.delete({
      id: id,
      suffix: CompanyProductsService.COMPANY_PRODUCTS_SUFFIX,
      notificationTitle: 'company.management.products.editor.deleteSuccessTitle'
    })
  }

  async setProductsStatus(data: AssignProductStatus) {
    return await this.post({
      data: data,
      suffix: CompanyProductsService.COMPANY_PRODUCTS_MASS_ASSIGN_SUFFIX,
      notificationTitle: 'company.management.products.editor.assignStatusSuccessTitle'
    })
  }

  async createProduct(productData: ProductEditorStoreState) {
    return this.post({
      suffix: CompanyProductsService.COMPANY_PRODUCTS_SUFFIX,
      data: new CreateProductDto(productData),
      notificationTitle: 'company.management.products.editor.notification.productCreatedTitle',
      notificationText: 'company.management.products.editor.notification.productCreatedText'
    })
  }

  async editProduct(productData: ProductEditorStoreState) {
    return this.put({
      suffix: `${CompanyProductsService.COMPANY_PRODUCTS_SUFFIX}/${productData.productEditorFirstStepData.id}`,
      data: new CreateProductDto(productData),
      notificationTitle: 'company.management.products.editor.notification.productEditedTitle'
    })
  }
}

export default new CompanyProductsService('company')
