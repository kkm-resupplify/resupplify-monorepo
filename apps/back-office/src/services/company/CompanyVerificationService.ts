import BaseService from '../BaseService'

interface VerifyCompany {
  companyId: number
}

class CompanyVerificationService extends BaseService {
  static VERIFY_COMPANY_SUFFIX = 'verify'
  static REJECT_COMPANY_SUFFIX = 'reject'

  async getUnverifiedCompanies() {
    return this.get({ suffix: CompanyVerificationService.VERIFY_COMPANY_SUFFIX })
  }

  async verifyCompany({ companyId }: VerifyCompany) {
    const response = await this.put({
      suffix: `${CompanyVerificationService.VERIFY_COMPANY_SUFFIX}/${companyId}`,
      notificationTitle: 'company.verify.notification.verifyCompanySuccessTitle'
    })

    return response
  }

  async rejectCompany({ companyId }: VerifyCompany) {
    const response = await this.put({
      suffix: `${CompanyVerificationService.REJECT_COMPANY_SUFFIX}/${companyId}`,
      notificationTitle: 'company.verify.notification.rejectCompanySuccessTitle'
    })

    return response
  }
}

export default new CompanyVerificationService('company')
