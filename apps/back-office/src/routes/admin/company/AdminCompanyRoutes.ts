import AdminCompanyView from '@/views/Company/AdminCompanyView.vue'
import CompanyVerifyPanel from '@/components/core/panel/company/verify/CompanyVerifyPanel.vue'
import CompanyAllPanel from '@/components/core/panel/company/all/CompanyAllPanel.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'

class AdminCompanyRoutesEnum extends BaseEnum {
  static readonly ADMIN_COMPANY_TILES: string = 'ADMIN_COMPANY_TILES'
  static readonly ADMIN_COMPANY_VERIFY: string = 'ADMIN_COMPANY_VERIFY'
  static readonly ADMIN_COMPANY_LIST: string = 'ADMIN_COMPANY_LIST'
}

const AdminCompanyRoutes: RouteRecordRaw[] = [
  {
    path: 'company',
    name: AdminCompanyRoutesEnum.ADMIN_COMPANY_TILES,
    component: AdminCompanyView
  },
  {
    path: 'company/verify',
    name: AdminCompanyRoutesEnum.ADMIN_COMPANY_VERIFY,
    component: CompanyVerifyPanel
  },
  {
    path: 'company/list',
    name: AdminCompanyRoutesEnum.ADMIN_COMPANY_LIST,
    component: CompanyAllPanel
  }
]

export default AdminCompanyRoutes
