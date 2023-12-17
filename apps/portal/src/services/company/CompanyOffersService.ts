import BaseService from '../BaseService'
import type { OfferFiltersParams } from '@sharedInterfaces/offer/OfferInterface'

class CompanyOfferService extends BaseService {
  async getOffers(params?: OfferFiltersParams) {
    return await this.get({
      config: { params }
    })
  }
}

export default new CompanyOfferService('company/productOffer')
