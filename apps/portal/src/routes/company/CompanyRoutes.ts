import type { RouteRecordRaw } from 'vue-router'
import CompanyDashboardRoutes from './dashboard/CompanyDashboardRoutes'
import CompanyProfileRoutes from './profile/CompanyProfileRoutes'
import CompanyRegisterRoutes from './register/CompanyRegisterRoutes'
import BaseEnum from '@sharedEnums/BaseEnum'

class CompanyRouteEnum extends BaseEnum {
  static readonly COMPANY: string = 'COMPANY'
}

const CompanyRoutes: RouteRecordRaw[] = [
  {
    path: '/company',
    name: CompanyRouteEnum.COMPANY,
    children: [...CompanyDashboardRoutes, ...CompanyProfileRoutes, ...CompanyRegisterRoutes]
  }
]

export default CompanyRoutes
