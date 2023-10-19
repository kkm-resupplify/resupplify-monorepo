import type { RouteRecordRaw } from 'vue-router'

import CompanyDashboardRoutes from './dashboard/CompanyDashboardRoutes'
import CompanyProfileRoutes from './profile/CompanyProfileRoutes'

const CompanyRoutes: RouteRecordRaw[] = [
  {
    path: '/company',
    children: [...CompanyDashboardRoutes, ...CompanyProfileRoutes]
  }
]

export default CompanyRoutes
