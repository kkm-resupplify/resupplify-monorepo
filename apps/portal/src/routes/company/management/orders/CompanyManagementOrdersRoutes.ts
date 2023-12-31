import CompanyOrdersView from '@/views/Company/Management/CompanyOrdersView.vue'
import OrderSalesPanel from '@/components/core/company/management/orders/sales/OrderSalesPanel.vue'
import OrderPurchasesPanel from '@/components/core/company/management/orders/purchases/OrderPurchasesPanel.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'

class CompanyManagementOrdersRouteEnum extends BaseEnum {
  static readonly COMPANY_ORDERS_TILES: string = 'COMPANY_ORDERS_TILES'
  static readonly COMPANY_ORDERS_SALES: string = 'COMPANY_ORDERS_SALES'
  static readonly COMPANY_ORDERS_PURCHASES: string = 'COMPANY_ORDERS_PURCHASES'
}

const CompanyManagementOrdersRoutesRoutes: RouteRecordRaw[] = [
  {
    path: 'orders',
    name: CompanyManagementOrdersRouteEnum.COMPANY_ORDERS_TILES,
    component: CompanyOrdersView
  },
  {
    path: 'orders/sales',
    name: CompanyManagementOrdersRouteEnum.COMPANY_ORDERS_SALES,
    component: OrderSalesPanel
  },
  {
    path: 'orders/purchases',
    name: CompanyManagementOrdersRouteEnum.COMPANY_ORDERS_PURCHASES,
    component: OrderPurchasesPanel
  }
]

export default CompanyManagementOrdersRoutesRoutes
