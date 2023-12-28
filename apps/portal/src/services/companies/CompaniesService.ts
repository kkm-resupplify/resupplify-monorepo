import type { CompaniesFiltersParams } from '@sharedInterfaces/companies/CompaniesInterface'
import BaseService from '../BaseService'

class CompaniesService extends BaseService {
  async getCompanies(params?: CompaniesFiltersParams) {
    return await this.get({
      config: { params }
    })
  }
}

export default new CompaniesService('/preview/company')
