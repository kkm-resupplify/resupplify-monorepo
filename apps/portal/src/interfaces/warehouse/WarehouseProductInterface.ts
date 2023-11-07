export interface WarehouseProductInterface {
  id: number
  code: string
  name: string
  quantity: number
  safeQuantity: number
  status: WarehouseProductStatus
}

export enum WarehouseProductStatus {
  Unverified,
  Verified,
  Rejected
}
