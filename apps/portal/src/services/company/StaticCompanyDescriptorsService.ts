import { useStaticCompanyDescriptorsStore } from '@sharedStores/company/useStaticCompanyDescriptorsStore'
import BaseService from '../BaseService'

class StaticCompanyDescriptorsService extends BaseService {
  static COMPANY_CATEGORIES_SUFFIX = 'company/companyCategories'
  static COUNTRIES_SUFFIX = 'country'

  async getCategories() {
    const response = await this.get({
      suffix: StaticCompanyDescriptorsService.COMPANY_CATEGORIES_SUFFIX
    })

    if (response.success) {
      const { data } = response

      const companyDescriptorsStore = useStaticCompanyDescriptorsStore()
      companyDescriptorsStore.setCompanyCategories(data)
    }

    return response
  }

  async getCountries() {
    const response = await this.get({
      suffix: StaticCompanyDescriptorsService.COUNTRIES_SUFFIX
    })

    if (response.success) {
      const { data } = response

      const companyDescriptorsStore = useStaticCompanyDescriptorsStore()
      companyDescriptorsStore.setCountries(data)
    }

    return response
  }
}

export default new StaticCompanyDescriptorsService('')
