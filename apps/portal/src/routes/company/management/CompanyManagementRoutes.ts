import type { RouteRecordRaw } from 'vue-router'
import CompanyDashboardView from '@/views/Company/Dashboard/CompanyDashboardView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'

class CompanyProfileRouteEnum extends BaseEnum {
  static readonly COMPANY_DASHBOARD: string = 'COMPANY_DASHBOARD'
  static readonly COMPANY_OFFERS: string = 'COMPANY_OFFERS'
  static readonly COMPANY_DEALS: string = 'COMPANY_DEALS'
  static readonly COMPANY_PRODUCTS: string = 'COMPANY_PRODUCTS'
  static readonly COMPANY_WAREHOUSES: string = 'COMPANY_WAREHOUSES'
  static readonly COMPANY_MEMBERS: string = 'COMPANY_MEMBERS'
  static readonly COMPANY_SETTINGS: string = 'COMPANY_SETTINGS'
  static readonly COMPANY_PAYMENTS: string = 'COMPANY_PAYMENTS'
}

const CompanyDashboardRoutes: RouteRecordRaw[] = [
  {
    path: 'dashboard',
    name: CompanyProfileRouteEnum.COMPANY_DASHBOARD,
    component: CompanyDashboardView
  }
]

export default CompanyDashboardRoutes
