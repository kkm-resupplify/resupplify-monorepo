import { defineStore } from 'pinia'

interface ProductTranslation {
  languageId: number
  name: string
  description: string
}

interface ProductEditorStoreState {
  producer: string | null
  code: string | null
  productUnitId: number | null
  productSubcategoryId: number | null
  productTags: number[]
  translations: ProductTranslation[]
}

interface ProductEditorFirstStepData {
  producer: string
  code: string
  productUnitId: number
  productSubcategoryId: number
  productTags: number[]
}

export const useProductEditorStore = defineStore({
  id: 'productEditor',

  state: (): ProductEditorStoreState => ({
    producer: null,
    code: null,
    productUnitId: null,
    productSubcategoryId: null,
    productTags: [],
    translations: []
  }),

  getters: {
    getProductEditor: (state) => state
  },

  actions: {
    setProductEditorFirstStepData(productEditorFirstStepData: ProductEditorFirstStepData) {
      this.producer = productEditorFirstStepData.producer
      this.code = productEditorFirstStepData.code
      this.productUnitId = productEditorFirstStepData.productUnitId
      this.productSubcategoryId = productEditorFirstStepData.productSubcategoryId
      this.productTags = productEditorFirstStepData.productTags
    },

    addTranslation(productTranslation: ProductTranslation) {
      const didUpdate = this.updateTranslation(productTranslation)
      if (!didUpdate) this.translations.push(productTranslation)
    },

    updateTranslation(productTranslation: ProductTranslation) {
      const translation = this.translations.find(
        (oldProductTranslation) =>
          oldProductTranslation.languageId === productTranslation.languageId
      )

      if (translation) {
        Object.assign(translation, productTranslation)
        return true
      }

      return false
    }
  }
})
