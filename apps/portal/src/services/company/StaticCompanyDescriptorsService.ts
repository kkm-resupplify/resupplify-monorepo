import { useStaticCompanyDescriptorsStore } from '@sharedStores/company/useStaticCompanyDescriptorsStore'
import BaseService from '../BaseService'

class StatisCompanyDescriptorsService extends BaseService {
  static COMPANY_CATEGORIES = 'companyCategories'

  async getCategories() {
    const response = await this.get({
      suffix: StatisCompanyDescriptorsService.COMPANY_CATEGORIES
    })

    if (response.success) {
      const { data } = response

      const companyDescriptorsStore = useStaticCompanyDescriptorsStore()
      companyDescriptorsStore.setCompanyCategories(data)
    }

    return response
  }
}

export default new StatisCompanyDescriptorsService('company')
