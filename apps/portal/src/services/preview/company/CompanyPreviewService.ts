import BaseService from '@/services/BaseService'

class CompanyPreviewService extends BaseService {
  async getCompanyInformation(id: string | number) {
    return await this.get({ id })
  }

  async getCompanyOffers(id: string | number, params?: OfferFiltersParams) {
    return await this.get({
      suffix: `${CompanyPreviewService.COMPANY_PREVIEW_OFFERS}/${id}`,
      config: { params }
    })
  }
}

export default new CompanyPreviewService('/preview/company')
