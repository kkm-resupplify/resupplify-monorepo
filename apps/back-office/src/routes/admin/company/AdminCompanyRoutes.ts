import AdminCompanyView from '@/views/Company/AdminCompanyView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'

class AdminProductRoutesEnum extends BaseEnum {
  static readonly ADMIN_COMPANY_TILES: string = 'ADMIN_COMPANY_TILES'
}

const AdminCompanyRoutes: RouteRecordRaw[] = [
  {
    path: 'company',
    name: AdminProductRoutesEnum.ADMIN_COMPANY_TILES,
    component: AdminCompanyView
  }
]

export default AdminCompanyRoutes
