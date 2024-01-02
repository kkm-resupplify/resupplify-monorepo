import type { RouteRecordRaw } from 'vue-router'
import CompanyDealsView from '@/views/Company/Management/CompanyDealsView.vue'
import CompanyOffersView from '@/views/Company/Management/CompanyOffersView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import CompanyManagementMembersRoutes from './members/CompanyManagementMembersRoutes'
import CompanyManagementWarehouseRoutes from './warehouses/CompanyManagementWarehouseRoutes'
import CompanyManagementProductRoutes from './products/CompanyManagementProductRoutes'
import CompanyManagementOffersRoutes from './offers/CompanyManagementOffersRoutes'
import CompanyManagementPaymentsRoutes from './payments/CompanyManagementPaymentsRoutes'
import CompanyManagementOrdersRoutes from './orders/CompanyManagementOrdersRoutes'

class CompanyProfileRouteEnum extends BaseEnum {
  static readonly COMPANY_DASHBOARD: string = 'COMPANY_DASHBOARD'
  static readonly COMPANY_OFFERS: string = 'COMPANY_OFFERS'
  static readonly COMPANY_DEALS: string = 'COMPANY_DEALS'
  static readonly COMPANY_SETTINGS: string = 'COMPANY_SETTINGS'
  static readonly COMPANY_PAYMENTS: string = 'COMPANY_PAYMENTS'
}

const CompanyManagementRoutes: RouteRecordRaw[] = [
  ...CompanyManagementProductRoutes,
  ...CompanyManagementMembersRoutes,
  ...CompanyManagementWarehouseRoutes,
  ...CompanyManagementOffersRoutes,
  ...CompanyManagementPaymentsRoutes,
  ...CompanyManagementOrdersRoutes,
  {
    path: '/company/offers',
    name: CompanyProfileRouteEnum.COMPANY_OFFERS,
    component: CompanyOffersView
  },
  {
    path: '/company/deals',
    name: CompanyProfileRouteEnum.COMPANY_DEALS,
    component: CompanyDealsView
  }
]

export default CompanyManagementRoutes
