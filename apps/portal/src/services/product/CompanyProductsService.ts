import BaseService from '../BaseService'

class CompanyProductsService extends BaseService {
  async getProducts() {
    const response = await this.get({
      suffix: 'product'
    })

    if (response.success) {
      const { data } = response

      const companyProductsStore = useCompanyProductsStore()
      companyProductsStore.setProducts(data)
    }

    return response
  }
}

export default new CompanyProductsService('company')
