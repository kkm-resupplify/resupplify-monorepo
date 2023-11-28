export interface ProductTranslation {
  languageId: number
  name: string
  description: string
}

export interface ProductEditorFirstStepData {
  producer: string | null
  code: string | null
  productUnitId: number | null
  productCategoryId: number | null
  productSubcategoryId: number | null
  productTags: number[]
}
