import BaseService from '../BaseService'

class CompanyProductsService extends BaseService {
  async getCompanyProducts(params?: { page?: string; name?: string }) {
    return await this.get({
      config: { params }
    })
  }

  async deleteProduct(id: number) {
    return await this.delete({
      id: id,
      notificationTitle: 'company.management.products.editor.deleteSuccessTitle'
    })
  }
}

export default new CompanyProductsService('company/product')
