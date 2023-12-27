import { defineStore } from 'pinia'
import type {
  ProductEditorFirstStepData,
  ProductTranslation
} from '@sharedInterfaces/product/ProductEditorInterface'

export interface ProductEditorStoreState {
  editSuccess: boolean
  productEditorFirstStepData: ProductEditorFirstStepData
  productEditorTranslationStepData: ProductTranslation[]
}

export const useProductEditorStore = defineStore({
  id: 'productEditor',

  state: (): ProductEditorStoreState => ({
    editSuccess: false,
    productEditorFirstStepData: {
      id: null,
      status: null,
      producer: null,
      code: null,
      productUnitId: null,
      productCategoryId: null,
      productSubcategoryId: null,
      productTagIds: [],
      image: null,
      imagePreview: null
    },
    productEditorTranslationStepData: []
  }),

  getters: {
    getProductEditor: (state) => state,
    getProductCategoryId: (state) => state.productEditorFirstStepData.productCategoryId,
    getProductSubcategoryId: (state) => state.productEditorFirstStepData.productSubcategoryId,
    getProductTagIds: (state) => state.productEditorFirstStepData.productTagIds,
    isEditing: (state) => state.productEditorFirstStepData.id !== null
  },

  actions: {
    setProductEditorFirstStepData(productEditorFirstStepData: ProductEditorFirstStepData) {
      this.productEditorFirstStepData.id = productEditorFirstStepData.id
      this.productEditorFirstStepData.status = productEditorFirstStepData.status
      this.productEditorFirstStepData.producer = productEditorFirstStepData.producer
      this.productEditorFirstStepData.code = productEditorFirstStepData.code
      this.productEditorFirstStepData.productUnitId = productEditorFirstStepData.productUnitId
      this.productEditorFirstStepData.productCategoryId =
        productEditorFirstStepData.productCategoryId
      this.productEditorFirstStepData.productSubcategoryId =
        productEditorFirstStepData.productSubcategoryId
      this.productEditorFirstStepData.productTagIds = productEditorFirstStepData.productTagIds ?? []
      this.productEditorFirstStepData.image = productEditorFirstStepData.image
      this.productEditorFirstStepData.imagePreview = productEditorFirstStepData.imagePreview
    },

    saveProductTranslation(translationData: ProductTranslation) {
      const existingLanguageIndex = this.productEditorTranslationStepData.findIndex(
        (translation) => translation.languageId === translationData.languageId
      )

      if (existingLanguageIndex !== -1)
        this.productEditorTranslationStepData[existingLanguageIndex] = translationData
      else this.productEditorTranslationStepData.push(translationData)
    },

    setProductTranslations(translationData: ProductTranslation[]) {
      this.productEditorTranslationStepData = translationData
    },

    setEditedStatus(editSuccess: boolean) {
      this.editSuccess = editSuccess
    }
  }
})
