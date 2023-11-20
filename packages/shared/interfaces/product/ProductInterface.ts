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
  productTags: ProductTags[]
}

export interface ProductSubcategory {
  id: number
  name: string
}

export interface ProductCategory {
  id: number
  name: string
}

export interface ProductTags {
  id: number
  name: string
  color: string
}
