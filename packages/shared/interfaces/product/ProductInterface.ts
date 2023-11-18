export interface Product {
  id: number
  name: string
  description: string
  producent: string
  code: string
  status: number
  verificationStatus: number
  companyId: number
  productUnit: ProductUnit
  productSubcategory: ProductSubcategory
  productCategory: ProductCategory
}

export interface ProductSubcategory {
  id: number
  name: string
  categoryId: number
}

export interface ProductCategory {
  id: number
  name: string
}

export interface ProductUnit {
  id: number
  code: string
}

export interface ProductTag {
  id: number
  name: string
  color: string
}
