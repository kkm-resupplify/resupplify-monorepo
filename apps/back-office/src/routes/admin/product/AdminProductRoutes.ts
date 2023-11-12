import AdminProductView from '@/views/Product/AdminProductView.vue'
import ProductVerifyPanel from '@/components/core/panel/product/ProductVerifyPanel.vue'
import ProductListPanel from '@/components/core/panel/product/ProductListPanel.vue'
import ProductCategoryListPanel from '@/components/core/panel/product/ProductCategoryListPanel.vue'
import ProductSubcategoryListPanel from '@/components/core/panel/product/ProductSubcategoryListPanel.vue'
import ProductUnitListPanel from '@/components/core/panel/product/ProductUnitListPanel.vue'
import BaseEnum from '@sharedEnums/BaseEnum'
import type { RouteRecordRaw } from 'vue-router'

class AdminProductRouteEnum extends BaseEnum {
  static readonly ADMIN_PRODUCT_TILES: string = 'ADMIN_PRODUCT_TILES'
  static readonly ADMIN_PRODUCT_VERIFY: string = 'ADMIN_PRODUCT_VERIFY'
  static readonly ADMIN_PRODUCT_LIST: string = 'ADMIN_PRODUCT_LIST'
  static readonly ADMIN_PRODUCT_CATEGORY: string = 'ADMIN_PRODUCT_CATEGORY'
  static readonly ADMIN_PRODUCT_SUBCATEGORY: string = 'ADMIN_PRODUCT_SUBCATEGORY'
  static readonly ADMIN_PRODUCT_UNIT: string = 'ADMIN_PRODUCT_UNIT'
}

const AdminProductRoutes: RouteRecordRaw[] = [
  {
    path: 'product',
    name: AdminProductRouteEnum.ADMIN_PRODUCT_TILES,
    component: AdminProductView
  },
  {
    path: 'product/verify',
    name: AdminProductRouteEnum.ADMIN_PRODUCT_VERIFY,
    component: ProductVerifyPanel
  },
  {
    path: 'product/list',
    name: AdminProductRouteEnum.ADMIN_PRODUCT_LIST,
    component: ProductListPanel
  },
  {
    path: 'product/category',
    name: AdminProductRouteEnum.ADMIN_PRODUCT_CATEGORY,
    component: ProductCategoryListPanel
  },
  {
    path: 'product/subcategory',
    name: AdminProductRouteEnum.ADMIN_PRODUCT_SUBCATEGORY,
    component: ProductSubcategoryListPanel
  },
  {
    path: 'product/unit',
    name: AdminProductRouteEnum.ADMIN_PRODUCT_UNIT,
    component: ProductUnitListPanel
  }
]

export default AdminProductRoutes
