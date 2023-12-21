import BaseService from '../BaseService'
import type { OfferFiltersParams } from '@sharedInterfaces/offer/OfferInterface'

class CompanyOfferService extends BaseService {
  static STOCK_ITEMS_SUFFIX = 'stockItems'

  async getOffers(params?: OfferFiltersParams) {
    return await this.get({
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
