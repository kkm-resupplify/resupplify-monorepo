import BaseService from '@/services/BaseService'
import type { OfferFiltersParams } from '@sharedInterfaces/offer/OfferInterface'

class CompanyPreviewService extends BaseService {
  static COMPANY_PREVIEW_OFFERS = 'productOffer/company'

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
