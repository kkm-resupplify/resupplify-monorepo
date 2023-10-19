import type { RouteRecordRaw } from 'vue-router'

import CompanyDashboardView from '@/views/Company/Dashboard/CompanyDashboardView.vue'

const CompanyDashboardRoutes: RouteRecordRaw[] = [
  {
    path: 'dashboard',
    component: CompanyDashboardView
  }
]

export default CompanyDashboardRoutes
