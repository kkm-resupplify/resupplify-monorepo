import BaseService from '@/services/BaseService'

class CompanyPreviewService extends BaseService {
  async getCompanyInformation({ slug }: { slug: string }) {
    return await this.get({ slug })
  }
}

export default new CompanyPreviewService('/company')
