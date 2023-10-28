import type { CompanyMember } from '@/interfaces/company/CompanyMemberInterface'
import BaseService from '../BaseService'
import { useCompanyRoleStore } from '@/stores/company/useCompanyRoleStore'
import type { CompanyRole } from '@/interfaces/company/CompanyRoleInterface'

class CompanyMemberService extends BaseService {
  async getCompanyMembers() {
    const response = await this.get({
      prefix: 'user',
      suffix: 'users'
    })

    return response
  }

  async getRoles() {
    const response = await this.get({
      suffix: 'roles'
    })

    const { data } = response

    return data
  }
}

export default new CompanyMemberService('company')
