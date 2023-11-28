import { defineStore } from 'pinia'
import type {
  ProductCategory,
  ProductSubcategory,
  ProductUnit
} from '@sharedInterfaces/product/ProductInterface'

interface StaticProductDescriptorsStore {
  productCategories: ProductCategory[]
  productSubcategories: ProductSubcategory[]
  productUnits: ProductUnit[]
}

export const useStaticProductDescriptorsStore = defineStore({
  id: 'staticProductDescriptors',

  state: (): StaticProductDescriptorsStore => ({
    productCategories: [],
    productSubcategories: [],
    productUnits: []
  }),

  getters: {
    getProductCategories: (state) =>
      state.productCategories.map((item) => ({
        id: item.id,
        text: item.name
      })),
    getProductSubcategories: (state) =>
      state.productSubcategories.map((item) => ({
        categoryId: item.categoryId,
        id: item.id,
        text: item.name
      })),
    getProductUnits: (state) => state.productUnits
  },

  actions: {
    setProductCategories(productCategoriesd: ProductCategory[]) {
      this.productCategories = productCategoriesd
    },
    setProductSubcategories(productSubcategories: ProductSubcategory[]) {
      this.productSubcategories = productSubcategories
    },
    setProductUnits(productUnits: ProductUnit[]) {
      this.productUnits = productUnits
    }
  }
})
