import BaseService from '../BaseService'

class CompanyProductsService extends BaseService {
  static COMPANY_PRODUCTS_SUFFIX = 'product'

  async getCompanyProducts(params?: { page?: string; name?: string }) {
    return await this.get({
      config: { params },
      suffix: CompanyProductsService.COMPANY_PRODUCTS_SUFFIX
    })
  }

  async deleteProduct(id: number) {
    return await this.delete({
      id,
      suffix: CompanyProductsService.COMPANY_PRODUCTS_SUFFIX,
      notificationTitle: 'company.management.product.editor.deleteSuccessTitle'
    })
   }
}

export default new CompanyProductsService('company')
