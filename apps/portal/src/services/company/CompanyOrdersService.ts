import BaseService from '../BaseService'

class CompanyOrdersService extends BaseService {
  static ORDER_SUFFIX = 'order'
  static SOLD_ORDERS_SUFFIX = 'companyOrders/seller'
  static BOUGHT_ORDERS_SUFFIX = 'companyOrders/buyer'

  async getSoldOrders() {
    return await this.get({
      suffix: CompanyOrdersService.SOLD_ORDERS_SUFFIX
    })
  }

  async getBoughtOrders() {
    return await this.get({
      suffix: CompanyOrdersService.BOUGHT_ORDERS_SUFFIX
    })
  }
}

export default new CompanyOrdersService('company')
