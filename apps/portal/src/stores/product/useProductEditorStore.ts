import { defineStore } from 'pinia'
import type {
  ProductEditorFirstStepData,
  ProductTranslation
} from '@sharedInterfaces/product/ProductEditorInterface'

export interface ProductEditorStoreState {
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
    },

    saveProductTranslation(translationData: ProductTranslation) {
      const existingLanguageIndex = this.productEditorTranslationStepData.findIndex(
        (translation) => translation.languageId === translationData.languageId
      )

      if (existingLanguageIndex !== -1)
        this.productEditorTranslationStepData[existingLanguageIndex] = translationData
      else this.productEditorTranslationStepData.push(translationData)
    }
  }
})
