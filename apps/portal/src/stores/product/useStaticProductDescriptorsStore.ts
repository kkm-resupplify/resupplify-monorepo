import type {
  ProductCategory,
  ProductSubcategory,
  ProductTag,
  ProductUnit
} from '@sharedInterfaces/product/ProductInterface'
import { defineStore } from 'pinia'

interface StaticProductDescriptorsState {
  productCategories: ProductCategory[]
  productSubcategories: ProductSubcategory[]
  productUnits: ProductUnit[]
  productTags: ProductTag[]
}

export const useStaticProductDescriptorsStore = defineStore({
  id: 'staticProductDescriptors',

  state: (): StaticProductDescriptorsState => ({
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
        (subcat) => subcat.category_id === categoryId
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
