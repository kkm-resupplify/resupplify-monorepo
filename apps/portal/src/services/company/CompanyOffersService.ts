import BaseService from '../BaseService'
import type { OfferFiltersParams, CreateOffer } from '@sharedInterfaces/offer/OfferInterface'

class CompanyOfferService extends BaseService {
  static STOCK_ITEMS_SUFFIX = 'stockItems'
  static COMPANY_OFFERS_SUFFIX = 'companyOffers'
  static DEACTIVATE_OFFER_SUFFIX = 'deactivateOffer'
  static ACTIVATE_OFFER_SUFFIX = 'activateOffer'

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

  async createOffer(offerData: CreateOffer) {
    return await this.post({
      data: offerData,
      notificationTitle: 'company.management.offer.creator.notification.createOfferSuccessTitle'
    })
  }

  async deactivateOffer(id: number) {
    return await this.get({
      suffix: `${CompanyOfferService.DEACTIVATE_OFFER_SUFFIX}/${id}`,
      notificationTitle: 'company.management.offer.creator.notification.offerWithdrawalSuccessTitle'
    })
  }

  async activateOffer(id: number) {
    return await this.put({
      suffix: `${CompanyOfferService.ACTIVATE_OFFER_SUFFIX}/${id}`,
      notificationTitle: 'company.management.offer.creator.notification.offerActivationSuccessTitle'
    })
  }
}

export default new CompanyOfferService('company/productOffer')
