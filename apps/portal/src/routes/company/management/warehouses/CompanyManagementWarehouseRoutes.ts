import CompanyWarehousesView from '@/views/Company/Management/CompanyWarehousesView.vue'
import CompanyManagementWarehouseDashboardPanel from '@/components/core/company/management/warehouse/dashboard/CompanyManagementWarehouseDashboardPanel.vue'
import CompanyManagementWarehousEditorPanel from '@/components/core/company/management/warehouse/editor/CompanyManagementWarehousEditorPanel.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'

class CompanyWarehouseRouteEnum extends BaseEnum {
  static readonly COMPANY_WAREHOUSE_TILES: string = 'COMPANY_WAREHOUSE_TILES'
  static readonly COMPANY_WAREHOUSE_LIST: string = 'COMPANY_WAREHOUSE_LIST'
  static readonly COMPANY_WAREHOUSE_EDITOR: string = 'COMPANY_WAREHOUSE_EDITOR'
}

const CompanyManagementWarehouseRoutes: RouteRecordRaw[] = [
  {
    path: 'warehouses',
    name: CompanyWarehouseRouteEnum.COMPANY_WAREHOUSE_TILES,
    component: CompanyWarehousesView
  },
  {
    path: 'warehouses/list',
    name: CompanyWarehouseRouteEnum.COMPANY_WAREHOUSE_LIST,
    component: CompanyManagementWarehouseDashboardPanel
  },
  {
    path: 'warehouse/new',
    name: CompanyWarehouseRouteEnum.COMPANY_WAREHOUSE_EDITOR,
    component: CompanyManagementWarehousEditorPanel
  }
]

export default CompanyManagementWarehouseRoutes
