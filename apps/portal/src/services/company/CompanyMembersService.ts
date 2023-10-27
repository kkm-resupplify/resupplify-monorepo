import type { CompanyMembersData } from '@/interfaces/company/CompanyMembersInterface'
import BaseService from '../BaseService'
import { useCompanyMembersStore } from '@/stores/company/useCompanyMembersStore'
class CompanyMembersDataDTO {
  users: CompanyMembersData

  constructor(users: CompanyMembersData) {
    this.users = users
  }
}

class CompanyMembersService extends BaseService {
  async getCompanyMembers(): Promise<CompanyMembersData> {
    const response = await this.get({
      suffix: 'user/company/users'
    })

    const { data } = response
    
    const companyMembersStore = useCompanyMembersStore()
    companyMembersStore.setCompanyMembers(data)

    return data
  }
}

export default new CompanyMembersService('')
