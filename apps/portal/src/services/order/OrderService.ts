import BaseService from '../BaseService'
import type { OrderItemShort } from '@sharedInterfaces/order/OrderInterface'

class OrderService extends BaseService {
  async placeOrder(cartItems: OrderItemShort[]) {
    return await this.post({
      data: { order: cartItems },
      notificationTitle: 'company.management.order.placeOrderSuccessTitle',
      notificationText: 'company.management.order.placeOrderSuccessText',
      notificationDuration: 5000
    })
  }
}

export default new OrderService('/company/order')
