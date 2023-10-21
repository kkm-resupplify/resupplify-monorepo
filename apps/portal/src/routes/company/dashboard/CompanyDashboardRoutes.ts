import type { RouteRecordRaw } from 'vue-router'
import CompanyDashboardView from '@/views/Company/Dashboard/CompanyDashboardView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import { MustBeAuthenticated } from '@/routes/navigationGuards'

class CompanyProfileRouteEnum extends BaseEnum {
  static readonly COMPANY_DASHBOARD: string = 'COMPANY_DASHBOARD'
}

const CompanyDashboardRoutes: RouteRecordRaw[] = [
  {
    path: 'dashboard',
    name: CompanyProfileRouteEnum.COMPANY_DASHBOARD,
    component: CompanyDashboardView,
    beforeEnter: () => {
      return MustBeAuthenticated.guard()
    }
  }
]

export default CompanyDashboardRoutes
