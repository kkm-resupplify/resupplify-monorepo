import CompanyOrderDashboardPanel from '@/components/core/company/management/orders/companyOrders/dashboard/CompanyOrderDashboardPanel.vue'
import CustomerOrderDashboardPanel from '@/components/core/company/management/orders/customerOrders/dashboard/CustomerOrderDashboardPanel.vue'
import CompanyOrdersView from '@/views/Company/Management/CompanyOrdersView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'

class CompanyOrdersRouteEnum extends BaseEnum {
  static readonly COMPANY_ORDER_TILES: string = 'COMPANY_ORDER_TILES'
  static readonly COMPANY_ORDER_LIST: string = 'COMPANY_ORDER_LIST'
  static readonly CUSTOMER_ORDER_LIST: string = 'COMPANY_CUSTOMER_ORDER_LIST'
}

const CompanyManagementOrderRoutes: RouteRecordRaw[] = [
  {
    path: 'orders',
    name: CompanyOrdersRouteEnum.COMPANY_ORDER_TILES,
    component: CompanyOrdersView
  },
  {
    path: 'orders/list',
    name: CompanyOrdersRouteEnum.COMPANY_ORDER_LIST,
    component: CompanyOrderDashboardPanel
  },
  {
    path: 'orders/customer/list',
    name: CompanyOrdersRouteEnum.CUSTOMER_ORDER_LIST,
    component: CustomerOrderDashboardPanel
  }
]

export default CompanyManagementOrderRoutes
