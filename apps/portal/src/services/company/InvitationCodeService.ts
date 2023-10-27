import type { CompanyMembersData } from '@/interfaces/company/CompanyMembersInterface'
import BaseService from '../BaseService'
class InvitationCodeServiceDTO {
  invitationCode: string

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

    return data
  }
}

export default new CompanyMembersService('')
