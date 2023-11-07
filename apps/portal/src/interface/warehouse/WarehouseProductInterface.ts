export interface WarehouseProduct {
  id: number
  product: SimpleProduct
  status: number
  quantity: number
  safeQuantity: number
}

export interface SimpleProduct {
  name: string
  status: number
  verificationStatus: number
  code: string
}
