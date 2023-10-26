import type { RouteRecordRaw } from 'vue-router'
import CompanyDashboardRoutes from './dashboard/CompanyDashboardRoutes'
import CompanyProfileRoutes from './profile/CompanyProfileRoutes'
import BaseEnum from '@sharedEnums/BaseEnum'
import CompanyDashboardView from '@/views/Company/Dashboard/CompanyDashboardView.vue'
class CompanyRouteEnum extends BaseEnum {
  static readonly COMPANY: string = 'COMPANY'
}

const CompanyRoutes: RouteRecordRaw[] = [
  {
    path: '/company',
    name: CompanyRouteEnum.COMPANY,
    component: CompanyDashboardView,
    children: [...CompanyDashboardRoutes, ...CompanyProfileRoutes]
  }
]

export default CompanyRoutes
