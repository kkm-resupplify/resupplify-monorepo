import { defineStore } from 'pinia'
import type {
  ProductEditorFirstStepData,
  ProductTranslation
} from '@sharedInterfaces/product/ProductEditorInterface'

interface ProductEditorStoreState {
  productEditorFirstStepData: ProductEditorFirstStepData
  productEditorTranslationStepData: ProductTranslation[]
}

export const useProductEditorStore = defineStore({
  id: 'productEditor',

  state: (): ProductEditorStoreState => ({
    productEditorFirstStepData: {
      producer: null,
      code: null,
      productUnitId: null,
      productCategoryId: null,
      productSubcategoryId: null,
      productTags: []
    },
    productEditorTranslationStepData: []
  }),

  getters: {
    getProductEditor: (state) => state,
    getProductCategoryId: (state) => state.productEditorFirstStepData.productCategoryId,
    getProductSubcategoryId: (state) => state.productEditorFirstStepData.productSubcategoryId
  },

  actions: {
    setProductEditorFirstStepData(productEditorFirstStepData: ProductEditorFirstStepData) {
      this.productEditorFirstStepData.producer = productEditorFirstStepData.producer
      this.productEditorFirstStepData.code = productEditorFirstStepData.code
      this.productEditorFirstStepData.productUnitId = productEditorFirstStepData.productUnitId
      this.productEditorFirstStepData.productCategoryId =
        productEditorFirstStepData.productCategoryId
      this.productEditorFirstStepData.productSubcategoryId =
        productEditorFirstStepData.productSubcategoryId
      this.productEditorFirstStepData.productTags = productEditorFirstStepData.productTags ?? []
    }
  }
})
