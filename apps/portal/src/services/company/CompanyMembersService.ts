
import type { CompanyMember } from '@/interfaces/company/CompanyMemberInterface'
import BaseService from '../BaseService'
import { useCompanyRoleStore } from '@/stores/company/useCompanyRoleStore'

class CompanyMemberService extends BaseService {
  async getCompanyMembers() {
    const response = await this.get({
      suffix: 'user/company/users'
    })

    const { data } = response

    return data.users
  }

  async getRoles() {
    const response = await this.get({
      suffix: 'company/roles'
    })

    const { data } = response
    const companyRolesStore = useCompanyRoleStore()
    companyRolesStore.setCompanyRoles(data)

    return data
  }
}

export default new CompanyMemberService('')
