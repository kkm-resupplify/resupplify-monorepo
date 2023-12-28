import { useStaticCompanyDescriptorsStore } from '@sharedStores/company/useStaticCompanyDescriptorsStore'
import BaseService from '../BaseService'

class StaticCompanyDescriptorsService extends BaseService {
  static COMPANY_CATEGORIES = 'companyCategories'

  async getCategories() {
    const response = await this.get({
      suffix: StaticCompanyDescriptorsService.COMPANY_CATEGORIES
    })

    if (response.success) {
      const { data } = response

      const companyDescriptorsStore = useStaticCompanyDescriptorsStore()
      companyDescriptorsStore.setCompanyCategories(data)
    }

    return response
  }
}

export default new StaticCompanyDescriptorsService('company')
