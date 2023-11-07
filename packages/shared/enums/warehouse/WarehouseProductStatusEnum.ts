import BaseEnum from '../BaseEnum'

export default class WarehouseProductStatusEnum extends BaseEnum {
  static readonly INACTIVE: number = 0
  static readonly ACTIVE: number = 1
  static readonly BELOW_SAFE_QUANTITY: number = 2
  static readonly OUT_OF_STOCK: number = 3

  static hasValue(value: any): boolean {
    return super.hasValue(this, value)
  }
}
