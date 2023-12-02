import CompanyProductsView from '@/views/Company/Management/CompanyProductsView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'
import ProductDashboardPanel from '@/components/core/company/management/products/dashboard/ProductDashboardPanel.vue'
import ProductEditorPanel from '@/components/core/company/management/products/editor/ProductEditorPanel.vue'

class CompanyProductsRouteEnum extends BaseEnum {
  static readonly COMPANY_PRODUCT_TILES: string = 'COMPANY_PRODUCT_TILES'
  static readonly COMPANY_PRODUCT_LIST: string = 'COMPANY_PRODUCT_LIST'
  static readonly COMPANY_PRODUCT_EDITOR: string = 'COMPANY_PRODUCT_EDITOR'
}

const CompanyManagementProductRoutes: RouteRecordRaw[] = [
  {
    path: 'products',
    name: CompanyProductsRouteEnum.COMPANY_PRODUCT_TILES,
    component: CompanyProductsView
  },
  {
    path: 'products/list',
    name: CompanyProductsRouteEnum.COMPANY_PRODUCT_LIST,
    component: ProductDashboardPanel
  },
  {
    path: 'products/new',
    name: CompanyProductsRouteEnum.COMPANY_PRODUCT_EDITOR,
    component: ProductEditorPanel
  }
]

export default CompanyManagementProductRoutes
