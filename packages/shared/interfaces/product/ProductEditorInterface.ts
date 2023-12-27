export interface ProductTranslation {
  languageId: number
  name: string
  description: string
}

export interface ProductEditorFirstStepData {
  id: number | null
  status: number | null
  producer: string | null
  code: string | null
  productUnitId: number | null
  productCategoryId: number | null
  productSubcategoryId: number | null
  productTagIds: number[]
  image: File | null
  imagePreview?: string | null
}
