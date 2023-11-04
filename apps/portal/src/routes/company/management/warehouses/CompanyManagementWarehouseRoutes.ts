import CompanyWarehousesView from '@/views/Company/Management/CompanyWarehousesView.vue'
import WarehouseDashboardPanel from '@/components/core/company/management/warehouse/dashboard/WarehouseDashboardPanel.vue'
import WarehouseEditorPanel from '@/components/core/company/management/warehouse/editor/WarehouseEditorPanel.vue'
import WarehousePreviewPanel from '@/components/core/company/management/warehouse/preview/WarehousePreviewPanel.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'

class CompanyWarehouseRouteEnum extends BaseEnum {
  static readonly COMPANY_WAREHOUSE_TILES: string = 'COMPANY_WAREHOUSE_TILES'
  static readonly COMPANY_WAREHOUSE_LIST: string = 'COMPANY_WAREHOUSE_LIST'
  static readonly COMPANY_WAREHOUSE_EDITOR: string = 'COMPANY_WAREHOUSE_EDITOR'
  static readonly COMPANY_WAREHOUSE_PREVIEW: string = 'COMPANY_WAREHOUSE_PREVIEW'
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
    component: WarehouseDashboardPanel
  },
  {
    path: 'warehouses/new',
    name: CompanyWarehouseRouteEnum.COMPANY_WAREHOUSE_EDITOR,
    component: WarehouseEditorPanel
  },
  {
    path: 'warehouse/:id',
    name: CompanyWarehouseRouteEnum.COMPANY_WAREHOUSE_PREVIEW,
    component: WarehousePreviewPanel
  }
]

export default CompanyManagementWarehouseRoutes
