import BaseService from '../BaseService'
import type { OfferFiltersParams } from '@sharedInterfaces/offer/OfferInterface'

class CompanyOfferService extends BaseService {
  static STOCK_ITEMS_SUFFIX = 'stockItems'
  static COMPANY_OFFERS_SUFFIX = 'companyOffers'

  async getOffers(params?: OfferFiltersParams) {
    return await this.get({
      config: { params }
    })
  }

  async getCompanyOffers(params?: OfferFiltersParams) {
    return await this.get({
      suffix: CompanyOfferService.COMPANY_OFFERS_SUFFIX,
      config: { params }
    })
  }

  async getStockItems() {
    return await this.get({
      suffix: CompanyOfferService.STOCK_ITEMS_SUFFIX
    })
  }

  async createOffer() {}
}

export default new CompanyOfferService('company/productOffer')
