import AdminProductView from '@/views/Product/AdminProductView.vue'
import ProductVerifyPanel from '@/components/core/panel/product/verify/ProductVerifyPanel.vue'
import ProductAllPanel from '@/components/core/panel/product/all/ProductAllPanel.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'

class AdminProductRouteEnum extends BaseEnum {
  static readonly ADMIN_PRODUCT_TILES: string = 'ADMIN_PRODUCT_TILES'
  static readonly ADMIN_PRODUCT_VERIFY: string = 'ADMIN_PRODUCT_VERIFY'
  static readonly ADMIN_PRODUCT_LIST: string = 'ADMIN_PRODUCT_LIST'
}

const AdminProductRoutes: RouteRecordRaw[] = [
  {
    path: 'product',
    name: AdminProductRouteEnum.ADMIN_PRODUCT_TILES,
    component: AdminProductView
  },
  {
    path: 'product/verify',
    name: AdminProductRouteEnum.ADMIN_PRODUCT_VERIFY,
    component: ProductVerifyPanel
  },
  {
    path: 'product/list',
    name: AdminProductRouteEnum.ADMIN_PRODUCT_LIST,
    component: ProductAllPanel
  }
]

export default AdminProductRoutes
