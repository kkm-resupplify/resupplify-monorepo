import CompanyOffersView from '@/views/Company/Management/CompanyOffersView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'

class CompanyOrdersRouteEnum extends BaseEnum {
  static readonly COMPANY_ORDER_TILES: string = 'COMPANY_ORDER_TILES'
  static readonly COMPANY_ORDER_LIST: string = 'COMPANY_ORDER_LIST'
  static readonly COMPANY_CUSTOMER_ORDER_LIST: string = 'COMPANY_CUSTOMER_ORDER_LIST'
}

const CompanyManagementOrderRoutes: RouteRecordRaw[] = [
  {
    path: 'orders',
    name: CompanyOrdersRouteEnum.COMPANY_ORDER_TILES,
    component: CompanyOffersView
  },
  {
    path: 'orders/list',
    name: CompanyOrdersRouteEnum.COMPANY_ORDED_LIST,
    component: CompanyOrderDashboardPanel
  },
  {
    path: 'orders/customer/list',
    name: CompanyOrdersRouteEnum.COMPANY_CUSTOMER_ORDER_LIST,
    component: CompanyCustomerOrderDashboardPanel
  }
]

export default CompanyManagementOrderRoutes
