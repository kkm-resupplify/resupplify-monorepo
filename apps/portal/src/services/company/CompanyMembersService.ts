import type { CompanyMember } from '@/interfaces/company/CompanyMemberInterface'
import BaseService from '../BaseService'

class CompanyMembersService extends BaseService {
  async getCompanyMembers() {
    const response = await this.get({
      suffix: "user/company/users"
    })

    const { data } = response

    return data.users
  }

  async getRoles() {
    const response = await this.get({
      suffix: "company/roles"
    })

    const { data } = response

    return data
  }
}

export default new CompanyMembersService('')
