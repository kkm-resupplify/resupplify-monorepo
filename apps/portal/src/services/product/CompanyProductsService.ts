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
  status: number | null
  image: File | null
  productTagsId: number[]

  constructor(productEditorData: ProductEditorStoreState) {
    const { productEditorFirstStepData, productEditorTranslationStepData } = productEditorData
    const { producer, code, productUnitId, productSubcategoryId, status, productTagIds, image } =
      productEditorFirstStepData

    this.producer = producer
    this.status = status
    this.productTagsId = productTagIds
    this.code = code
    this.image = image
    this.productUnitId = productUnitId
    this.productSubcategoryId = productSubcategoryId
    this.translations = productEditorTranslationStepData

    console.log(this)
  }
}

interface CreateProductDto {
  [key: string]: any
  producer: string | null
  code: string | null
  productUnitId: number | null
  productSubcategoryId: number | null
  translations: ProductTranslation[]
  status: number | null
  image: File | null
  productTagsId: number[]
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
      suffix: `${CompanyProductsService.COMPANY_PRODUCTS_SUFFIX}/${id}`,
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

  async createProduct(productEditorData: ProductEditorStoreState) {
    return this.post({
      suffix: CompanyProductsService.COMPANY_PRODUCTS_SUFFIX,
      data: convertToFormData(new CreateProductDto(productEditorData)),
      notificationTitle: 'company.management.products.editor.notification.productCreatedTitle',
      notificationText: 'company.management.products.editor.notification.productCreatedText'
    })
  }

  async editProduct(productData: ProductEditorStoreState) {
    return this.put({
      suffix: `${CompanyProductsService.COMPANY_PRODUCTS_SUFFIX}/${productData.productEditorFirstStepData.id}`,
      data: convertToFormData(new CreateProductDto(productData)),
      notificationTitle: 'company.management.products.editor.notification.productEditedTitle'
    })
  }
}

const convertToFormData = (storeData: any) => {
  const formData = new FormData()

  Object.keys(storeData).forEach((key) => {
    if (storeData[key] instanceof File) {
      formData.append(key, storeData[key])
    } else if (Array.isArray(storeData[key])) {
      storeData[key].forEach((item: any, index: any) => {
        if (typeof item === 'object' && item !== null) {
          for (const prop in item) {
            formData.append(`${key}[${index}][${prop}]`, String(item[prop]))
          }
        } else {
          formData.append(`${key}[${index}]`, String(item))
        }
      })
    } else {
      formData.append(key, String(storeData[key]))
    }
  })

  return formData
}

export default new CompanyProductsService('company')
