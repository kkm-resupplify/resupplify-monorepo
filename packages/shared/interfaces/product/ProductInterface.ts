export interface Product {
  id: number
  name: string
  description: string
  producent: string
  code: string
  status: number
  verificationStatus: number
  companyId: number
  productUnitId: number
  productSubcategory: ProductSubcategory
  productCategory: ProductCategory
}

export interface ProductSubcategory {
  id: number
  name: string
  category_id: number
}

export interface ProductCategory {
  id: number
  name: string
}

export interface ProductUnit {
  id: number
  name: string
}

export interface ProductTag {
  id: number
  name: string
  differentLanguageName: string
  color: string
}
