import BaseService from '../BaseService'

interface VerifyCompany {
  companyId: number
}

class CompanyVerificationService extends BaseService {
  static VERIFY_COMPANY_SUFFIX = 'login'

  async getUnverifiedCompanies() {
    return this.get({})
  }

  async verifyCompany({ companyId }: VerifyCompany) {
    const response = await this.put({
      id: companyId,
      notificationTitle: 'company.verify.notification.verifyCompanySuccessTitle'
    })

    return response
  }

  async rejectCompany({ companyId }: VerifyCompany) {
    const response = await this.put({
      id: companyId,
      notificationTitle: 'company.verify.notification.rejectCompanySuccessTitle'
    })

    return response
  }
}

export default new CompanyVerificationService('company/verify')
