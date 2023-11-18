import { defineStore } from 'pinia'
import type {
  ProductCategory,
  ProductSubcategory,
  ProductTag,
  ProductUnit
} from '@sharedInterfaces/product/ProductInterface'

interface StaticProductDescriptorsStore {
  productCategories: ProductCategory[]
  productSubcategories: ProductSubcategory[]
  productUnits: ProductUnit[]
  productTags: ProductTag[]
}

export const useStaticProductDescriptorsStore = defineStore({
  id: 'staticProductDescriptors',

  state: (): StaticProductDescriptorsStore => ({
    productCategories: [],
    productSubcategories: [],
    productUnits: [],
    productTags: []
  }),

  getters: {
    getProductCategories: (state) => state.productCategories,
    getProductSubcategories: (state) => state.productSubcategories,
    getProductUnits: (state) => state.productUnits,
    getProductTags: (state) => state.productTags,
    getCategoryAndSubcategories: (state) => (categoryId: number) => {
      const category = state.productCategories.find((cat) => cat.id === categoryId)

      const subcategories = state.productSubcategories.filter(
        (subcat) => subcat.categoryId === categoryId
      )

      return { category, subcategories }
    }
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
