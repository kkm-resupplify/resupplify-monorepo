import BaseEnum from '../BaseEnum'

export default class WarehouseStatusEnum extends BaseEnum {
  static readonly DISABLED: number = 0
  static readonly OK: number = 1
  static readonly PRODUCTS_BELOW_SAFE_QUANTITY: number = 2
  static readonly PRODUCTS_OUT_OF_STOCK: number = 3

  static hasValue(value: any): boolean {
    return super.hasValue(this, value)
  }
}
