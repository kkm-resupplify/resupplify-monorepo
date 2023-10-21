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
      const noUserDetails = MustHaveUserDetailsNavigationGuard.guard()

      if (noUserDetails) return noUserDetails
    }
  }
]

export default CompanyRoutes
