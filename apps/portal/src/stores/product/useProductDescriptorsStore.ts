import type {
  ProductCategory,
  ProductSubcategory,
  ProductTag,
  ProductUnit
} from '@/interface/product/ProductInterface'
import { defineStore } from 'pinia'

interface ProductDescriptorsState {
  productCategories: ProductCategory[]
  productSubcategories: ProductSubcategory[]
  productUnits: ProductUnit[]
  productTags: ProductTag[]
}

export const useProductDescriptorsStore = defineStore({
  id: 'productDescriptors',

  state: (): ProductDescriptorsState => ({
    productCategories: [],
    productSubcategories: [],
    productUnits: [],
    productTags: []
  }),

  getters: {
    getProductCategories: (state) => state.productCategories,
    getProductSubcategories: (state) => state.productSubcategories,
    getProductUnits: (state) => state.productUnits,
    getProductTags: (state) => state.productTags
  },

  actions: {
    setProductCategories(productCategories: ProductCategory[]) {
      this.productCategories = productCategories
    },
    setProductSubcategories(productSubcategories: ProductSubcategory[]) {
      this.productSubcategories = productSubcategories
    },
    setProductUnits(productUnits: ProductUnit[]) {
      this.productUnits = productUnits
    },
    setProductTags(productTags: ProductTag[]) {
      this.productTags = productTags
    }
  },

  persist: true
})
