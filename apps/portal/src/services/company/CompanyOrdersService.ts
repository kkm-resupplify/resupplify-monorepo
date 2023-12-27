import BaseService from '../BaseService'

class CompanyOrdersService extends BaseService {
  static ORDER_SUFFIX = 'order'
  static SELLER_ORDERS_SUFFIX = 'companyOrders/seller'
  static BUYER_ORDERS_SUFFIX = 'companyOrders/buyer'

  async getSellerOrders() {
    return await this.get({
      suffix: CompanyOrdersService.SELLER_ORDERS_SUFFIX
    })
  }

  async getBuyerOrders() {
    return await this.get({
      suffix: CompanyOrdersService.BUYER_ORDERS_SUFFIX
    })
  }
}

export default new CompanyOrdersService('company')
