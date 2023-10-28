import type { CompanyMember } from '@/interfaces/company/CompanyMemberInterface'
import BaseService from '../BaseService'
class CompanyMembersDataDTO {
  users: CompanyMember[]

  constructor(users: CompanyMember[]) {
    this.users = users
  }
}

class CompanyMembersService extends BaseService {
  async getCompanyMembers(): Promise<CompanyMember[]> {
    const response = await this.get({})

    const { data } = response

    return data.users
  }
}

export default new CompanyMembersService('user/company/users')
