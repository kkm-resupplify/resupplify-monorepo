import AdminDashboardView from '@/views/Dashboard/AdminDashboardView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'

class AdminDashboardRouteEnum extends BaseEnum {
  static readonly ADMIN_DASHBOARD: string = 'ADMIN_DASHBOARD'
}

const AdminCompanyRoutes: RouteRecordRaw[] = [
  {
    path: 'dashboard',
    name: AdminDashboardRouteEnum.ADMIN_DASHBOARD,
    component: AdminDashboardView
  }
]

export default AdminCompanyRoutes
