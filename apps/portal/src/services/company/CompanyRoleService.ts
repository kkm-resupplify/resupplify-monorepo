import BaseService from '../BaseService'

class CompanyRoleService extends BaseService {
  async getRoles() {
    const response = await this.get({})

    const { data } = response

    return data
  }
}

export default new CompanyRoleService('/company/roles')
