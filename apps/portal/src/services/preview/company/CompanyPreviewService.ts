import BaseService from '@/services/BaseService'

class CompanyPreviewService extends BaseService {
  async getCompanyInformation(id: string | number) {
    return await this.get({ id })
  }
}

export default new CompanyPreviewService('/company')
