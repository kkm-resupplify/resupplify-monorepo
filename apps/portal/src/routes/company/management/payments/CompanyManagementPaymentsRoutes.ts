import PaymentManageBalancePanel from '@/components/core/company/management/payments/balance/PaymentManageBalancePanel.vue'
import PaymentDashboardPanel from '@/components/core/company/management/payments/dashboard/PaymentDashboardPanel.vue'
import CompanyPaymentsView from '@/views/Company/Management/CompanyPaymentsView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'

class CompanyPaymentsRouteEnum extends BaseEnum {
  static readonly COMPANY_PAYMENTS_TILES: string = 'COMPANY_PAYMENTS_TILES'
  static readonly COMPANY_PAYMENTS_DASHBOARD: string = 'COMPANY_PAYMENTS_DASHBOARD'
  static readonly COMPANY_PAYMENTS_MANAGE_BALANCE: string = 'COMPANY_PAYMENTS_MANAGE_BALANCE'
}

const CompanyManagementPaymentsRoutes: RouteRecordRaw[] = [
  {
    path: 'payments',
    name: CompanyPaymentsRouteEnum.COMPANY_PAYMENTS_TILES,
    component: CompanyPaymentsView
  },
  {
    path: 'payments/dashboard',
    name: CompanyPaymentsRouteEnum.COMPANY_PAYMENTS_DASHBOARD,
    component: PaymentDashboardPanel
  },
  {
    path: 'payments/balance',
    name: CompanyPaymentsRouteEnum.COMPANY_PAYMENTS_MANAGE_BALANCE,
    component: PaymentManageBalancePanel
  }
]

export default CompanyManagementPaymentsRoutes
