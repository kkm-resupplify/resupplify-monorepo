import type { RouteRecordRaw } from 'vue-router'
import CompanyDashboardRoutes from './dashboard/CompanyDashboardRoutes'
import CompanyProfileRoutes from './profile/CompanyProfileRoutes'
import BaseEnum from '@sharedEnums/BaseEnum'
import { MustHaveUserDetailsNavigationGuard } from '@/routes/navigationGuards'

class CompanyRouteEnum extends BaseEnum {
  static readonly COMPANY: string = 'COMPANY'
}

const CompanyRoutes: RouteRecordRaw[] = [
  {
    path: '/company',
    name: CompanyRouteEnum.COMPANY,
    children: [...CompanyDashboardRoutes, ...CompanyProfileRoutes],
    beforeEnter: () => {
      return MustHaveUserDetailsNavigationGuard.guard()
    }
  }
]

export default CompanyRoutes
