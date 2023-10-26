import type { CompanyMembersData } from '@/interfaces/company/CompanyMembersInterface'
import BaseService from '../BaseService'
class CompanyMembersDataDTO {
  members: CompanyMembersData

  constructor(members: CompanyMembersData) {
    this.members = members
  }
}

class CompanyMembersService extends BaseService {
  async getCompanyMembers() {
    const response = await this.get({
      suffix: 'user/company/users'
    })
    return response
  }
}

export default new CompanyMembersService('')
