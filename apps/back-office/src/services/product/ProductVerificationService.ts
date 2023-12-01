import ProductVerificationStatusEnum from '@sharedEnums/product/ProductVerificationStatusEnum'
import BaseService from '../BaseService'

interface VerifyProduct {
  productId: number
}

interface VerifyAllProducts {
  productIds: number[]
}

class ProductVerificationService extends BaseService {
  static VERIFY_PRODUCT_SUFFIX = 'verify'
  static REJECT_PRODUCT_SUFFIX = 'reject'
  static MASS_STATUS_UPDATE_SUFFIX = 'massStatusUpdate'

  async getAllProducts() {
    return this.get({})
  }

  async getUnverifiedProducts() {
    return this.get({ suffix: ProductVerificationService.VERIFY_PRODUCT_SUFFIX })
  }

  async verifyProduct({ productId }: VerifyProduct) {
    const response = await this.put({
      suffix: `${ProductVerificationService.VERIFY_PRODUCT_SUFFIX}/${productId}`,
      notificationTitle: 'product.verify.notification.verifyProductSuccessTitle'
    })

    return response
  }

  async rejectProduct({ productId }: VerifyProduct) {
    const response = await this.put({
      suffix: `${ProductVerificationService.REJECT_PRODUCT_SUFFIX}/${productId}`,
      notificationTitle: 'product.verify.notification.rejectProductSuccessTitle'
    })

    return response
  }

  async verifyAllProducts({ productIds }: VerifyAllProducts) {
    const response = await this.post({
      suffix: ProductVerificationService.MASS_STATUS_UPDATE_SUFFIX,
      data: { productIds, newStatus: ProductVerificationStatusEnum.VERIFIED },
      notificationTitle: 'product.verify.notification.verifyAllProductsSuccessTitle'
    })

    return response
  }

  async rejectAllProducts({ productIds }: VerifyAllProducts) {
    const response = await this.post({
      suffix: ProductVerificationService.MASS_STATUS_UPDATE_SUFFIX,
      data: { productIds, newStatus: ProductVerificationStatusEnum.REJECTED },
      notificationTitle: 'product.verify.notification.rejectAllProductsSuccessTitle'
    })

    return response
  }
}

export default new ProductVerificationService('product')
