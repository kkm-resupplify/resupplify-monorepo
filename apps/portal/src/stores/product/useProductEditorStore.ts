import { defineStore } from 'pinia'

interface ProductTranslation {
  languageId: number
  name: string
  description: string
}

interface ProductEditorFirstStepData {
  producer: string | null
  code: string | null
  productUnitId: number | null
  productSubcategoryId: number | null
  productTags: number[]
}

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
      productSubcategoryId: null,
      productTags: []
    },
    productEditorTranslationStepData: []
  }),

  getters: {
    getProductEditor: (state) => state
  },

  actions: {
    setProductEditorFirstStepData(productEditorFirstStepData: ProductEditorFirstStepData) {
      this.productEditorFirstStepData.producer = productEditorFirstStepData.producer
      this.productEditorFirstStepData.code = productEditorFirstStepData.code
      this.productEditorFirstStepData.productUnitId = productEditorFirstStepData.productUnitId
      this.productEditorFirstStepData.productSubcategoryId =
        productEditorFirstStepData.productSubcategoryId
      this.productEditorFirstStepData.productTags = productEditorFirstStepData.productTags
    }
  }
})
