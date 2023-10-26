import type { RouteRecordRaw } from 'vue-router'
import CompanyDashboardView from '@/views/Company/Management/CompanyDashboardView.vue'
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
  },
  {
    path: 'offers',
    name: CompanyProfileRouteEnum.COMPANY_OFFERS,
    component: CompanyDashboardView
  },
  {
    path: 'deals',
    name: CompanyProfileRouteEnum.COMPANY_DEALS,
    component: CompanyDashboardView
  },
  {
    path: 'products',
    name: CompanyProfileRouteEnum.COMPANY_PRODUCTS,
    component: CompanyDashboardView
  },
  {
    path: 'warehouses',
    name: CompanyProfileRouteEnum.COMPANY_WAREHOUSES,
    component: CompanyDashboardView
  },
  {
    path: 'members',
    name: CompanyProfileRouteEnum.COMPANY_MEMBERS,
    component: CompanyDashboardView
  },
  {
    path: 'settings',
    name: CompanyProfileRouteEnum.COMPANY_SETTINGS,
    component: CompanyDashboardView
  },
  {
    path: 'payments',
    name: CompanyProfileRouteEnum.COMPANY_PAYMENTS,
    component: CompanyDashboardView
  }
]

export default CompanyDashboardRoutes
