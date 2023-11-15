import BaseService from '../BaseService'

class CompanyMemberService extends BaseService {
  async getCompanyMembers() {
    const response = await this.get({})

    return response
  }

  async deleteMember({ id }: { id: number }) {
    const response = await this.delete({ id })

    return response
  }
}

export default new CompanyMemberService('/company/companyMembers')
