import BaseService from '../BaseService'
import type { OrderItemShort } from '@sharedInterfaces/order/OrderInterface'

class OrderService extends BaseService {
  async placeOrder(cartItems: OrderItemShort[]) {
    return await this.post({
      data: { order: cartItems },
      notificationTitle: 'Order placed successfully',
      notificationText: 'Your order has been placed and it awaits action from the buyer company.'
    })
  }
}

export default new OrderService('/company/order')
