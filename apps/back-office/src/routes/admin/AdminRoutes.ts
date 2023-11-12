import type { RouteRecordRaw } from 'vue-router'
import BaseEnum from '@sharedEnums/BaseEnum'
import BasicViewLayoutVue from '@/layouts/view/BasicViewLayout.vue'
import AdminDashboardRoutes from '@/routes/admin/dashboard/AdminDashboardRoutes'
import AdminProductRoutes from '@/routes/admin/product/AdminProductRoutes'
import AdminCompanyRoutes from '@/routes/admin/company/AdminCompanyRoutes'
import AdminLocaleRoutes from '@/routes/admin/locale/AdminLocaleRoutes'

class AdminRouteEnum extends BaseEnum {
  static readonly HOME: string = 'HOME'
  static readonly ADMIN_DASHBOARD: string = 'ADMIN_DASHBOARD'
}

const AdminRoutes: RouteRecordRaw[] = [
  {
    path: '/admin',
    name: AdminRouteEnum.HOME,
    component: BasicViewLayoutVue,
    children: [
      ...AdminDashboardRoutes,
      ...AdminCompanyRoutes,
      ...AdminProductRoutes,
      ...AdminLocaleRoutes
    ],
    redirect: {
      name: AdminRouteEnum.ADMIN_DASHBOARD
    }
  }
]

export default AdminRoutes
