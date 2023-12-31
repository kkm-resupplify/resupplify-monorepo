import BaseService from '../BaseService'
import type { OrderFiltersParams } from '@sharedInterfaces/order/OrderInterface'

class CompanyOrdersService extends BaseService {
  static ORDER_SUFFIX = 'order'
  static SOLD_ORDERS_SUFFIX = 'companyOrders/seller'
  static BOUGHT_ORDERS_SUFFIX = 'companyOrders/buyer'

  async getSoldOrders(params?: OrderFiltersParams) {
    return await this.get({
      suffix: CompanyOrdersService.SOLD_ORDERS_SUFFIX,
      config: { params }
    })
  }

  async getBoughtOrders(params?: OrderFiltersParams) {
    return await this.get({
      suffix: CompanyOrdersService.BOUGHT_ORDERS_SUFFIX,
      config: { params }
    })
  }
}

export default new CompanyOrdersService('company')
