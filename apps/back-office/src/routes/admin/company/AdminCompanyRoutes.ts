import AdminCompanyView from '@/views/Company/AdminCompanyView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'

class AdminProductRoutesEnum extends BaseEnum {
  static readonly ADMIN_DASHBOARD: string = 'ADMIN_DASHBOARD'
  static readonly ADMIN_COMPANY_TILES: string = 'ADMIN_COMPANY_TILES'
  static readonly ADMIN_COMPANY_PRODUCT_TILES: string = 'ADMIN_COMPANY_PRODUCT_TILES'
  static readonly ADMIN_LOCALE_TILES: string = 'ADMIN_LOCALE_TILES'
}

const AdminCompanyRoutes: RouteRecordRaw[] = [
  {
    path: 'company',
    name: AdminProductRoutesEnum.ADMIN_COMPANY_TILES,
    component: AdminCompanyView
  }
]

export default AdminCompanyRoutes
