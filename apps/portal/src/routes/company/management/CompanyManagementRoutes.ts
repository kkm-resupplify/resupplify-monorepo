import type { RouteRecordRaw } from 'vue-router'
import CompanyDashboardView from '@/views/Company/Management/CompanyDashboardView.vue'
import CompanyDealsView from '@/views/Company/Management/CompanyDealsView.vue'
import CompanyMembersView from '@/views/Company/Management/CompanyMembersView.vue'
import CompanyOffersView from '@/views/Company/Management/CompanyOffersView.vue'
import CompanyPaymentsView from '@/views/Company/Management/CompanyPaymentsView.vue'
import CompanyProductsView from '@/views/Company/Management/CompanyProductsView.vue'
import CompanySettingsView from '@/views/Company/Management/CompanySettingsView.vue'
import CompanyWarehousesView from '@/views/Company/Management/CompanyWarehousesView.vue'
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
    path: '/company/dashboard',
    name: CompanyProfileRouteEnum.COMPANY_DASHBOARD,
    component: CompanyDashboardView
  },
  {
    path: '/company/offers',
    name: CompanyProfileRouteEnum.COMPANY_OFFERS,
    component: CompanyOffersView
  },
  {
    path: '/company/deals',
    name: CompanyProfileRouteEnum.COMPANY_DEALS,
    component: CompanyDealsView
  },
  {
    path: '/company/products',
    name: CompanyProfileRouteEnum.COMPANY_PRODUCTS,
    component: CompanyProductsView
  },
  {
    path: '/company/warehouses',
    name: CompanyProfileRouteEnum.COMPANY_WAREHOUSES,
    component: CompanyWarehousesView
  },
  {
    path: '/company/members',
    name: CompanyProfileRouteEnum.COMPANY_MEMBERS,
    component: CompanyMembersView
  },
  {
    path: '/company/settings',
    name: CompanyProfileRouteEnum.COMPANY_SETTINGS,
    component: CompanySettingsView
  },
  {
    path: '/company/payments',
    name: CompanyProfileRouteEnum.COMPANY_PAYMENTS,
    component: CompanyPaymentsView
  }
]

export default CompanyDashboardRoutes
