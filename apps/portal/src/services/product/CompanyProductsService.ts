import BaseService from '../BaseService'

interface AssignProductStatus {
  productIdList: Array<number>
  status: number
}

class CompanyProductsService extends BaseService {
  static COMPANY_PRODUCTS_SUFFIX = 'product'
  static COMPANY_PRODUCTS_MASS_ASSIGN_SUFFIX = 'productMassAssign'

  async getProducts(params?: { page?: string; name?: string }) {
    return await this.get({
      config: { params },
      suffix: CompanyProductsService.COMPANY_PRODUCTS_SUFFIX
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
}

export default new CompanyProductsService('company')
