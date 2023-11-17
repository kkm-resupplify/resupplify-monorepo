import CompanyProductsView from '@/views/Company/Management/CompanyProductsView.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'
import ProductDashboardPanel from '@/components/core/company/management/products/dashboard/section/ProductDashboardPanel.vue'
import ProductEditorPanel from '@/components/core/company/management/products/editor/ProductEditorPanel.vue'
import ProductPreviewPanel from '@/components/core/company/management/products/preview/ProductPreviewPanel.vue'
import ProductTagsPanel from '@/components/core/company/management/products/tags/ProductTagsPanel.vue'

class CompanyProductsRouteEnum extends BaseEnum {
  static readonly COMPANY_PRODUCT_TILES: string = 'COMPANY_PRODUCT_TILES'
  static readonly COMPANY_PRODUCT_LIST: string = 'COMPANY_PRODUCT_LIST'
  static readonly COMPANY_PRODUCT_EDITOR: string = 'COMPANY_PRODUCT_EDITOR'
  static readonly COMPANY_PRODUCT_PREVIEW: string = 'COMPANY_PRODUCT_PREVIEW'
  static readonly COMPANY_PRODUCT_TAGS: string = 'COMPANY_PRODUCT_TAGS'
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
  },
  {
    path: 'products/:id',
    name: CompanyProductsRouteEnum.COMPANY_PRODUCT_PREVIEW,
    component: ProductPreviewPanel
  },
  {
    path: 'products/tags',
    name: CompanyProductsRouteEnum.COMPANY_PRODUCT_TAGS,
    component: ProductTagsPanel
  }
]

export default CompanyManagementProductRoutes
