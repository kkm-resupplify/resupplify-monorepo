import CompanyStatusEnum from '@sharedEnums/company/CompanyStatusEnum'
import BaseService from '../BaseService'

interface VerifyCompany {
  companyId: number
}

interface VerifyAllCompanies {
  companyIds: number[]
}

class CompanyVerificationService extends BaseService {
  static VERIFY_COMPANY_SUFFIX = 'verify'
  static REJECT_COMPANY_SUFFIX = 'reject'
  static MASS_STATUS_UPDATE_SUFFIX = 'massStatusUpdate'

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

  async verifyAllCompanies({ companyIds }: VerifyAllCompanies) {
    const response = await this.post({
      suffix: CompanyVerificationService.MASS_STATUS_UPDATE_SUFFIX,
      data: { companyIds, newStatus: CompanyStatusEnum.VERIFIED },
      notificationTitle: 'company.verify.notification.verifyAllCompaniesSuccessTitle'
    })

    return response
  }

  async rejectAllCompanies({ companyIds }: VerifyAllCompanies) {
    const response = await this.post({
      suffix: CompanyVerificationService.MASS_STATUS_UPDATE_SUFFIX,
      data: { companyIds, newStatus: CompanyStatusEnum.REJECTED },
      notificationTitle: 'company.verify.notification.rejectAllCompaniesSuccessTitle'
    })

    return response
  }
}

export default new CompanyVerificationService('company')
