import type { CompanyMembersData } from '@/interfaces/company/CompanyMembersInterface'
import BaseService from '../BaseService'
class CompanyMembersDataDTO {
  users: CompanyMembersData

  constructor(users: CompanyMembersData) {
    this.users = users
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
