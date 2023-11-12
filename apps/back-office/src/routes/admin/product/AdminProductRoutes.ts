import AdminProductView from '@/views/Product/AdminProductView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'

class AdminProductRouteEnum extends BaseEnum {
  static readonly ADMIN_COMPANY_PRODUCT_TILES: string = 'ADMIN_COMPANY_PRODUCT_TILES'
}

const AdminProductRoutes: RouteRecordRaw[] = [
  {
    path: 'product',
    name: AdminProductRouteEnum.ADMIN_COMPANY_PRODUCT_TILES,
    component: AdminProductView
  }
]

export default AdminProductRoutes
