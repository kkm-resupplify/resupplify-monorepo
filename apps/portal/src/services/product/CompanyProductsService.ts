import BaseService from '../BaseService'

class CompanyProductsService extends BaseService {
  async getCompanyProducts(params?: { page?: string }) {
    return await this.get({
      config: { params },
      suffix: 'product'
    })
  }
}

export default new CompanyProductsService('company')
