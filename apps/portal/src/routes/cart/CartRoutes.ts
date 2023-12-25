import type { RouteRecordRaw } from 'vue-router'
import CartView from '@/views/Cart/CartView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'

class CartRouteEnum extends BaseEnum {
  static readonly CART: string = 'CART'
}

const routes: RouteRecordRaw[] = [
  {
    path: '/cart',
    name: CartRouteEnum.CART,
    component: CartView
  }
]

export default routes
