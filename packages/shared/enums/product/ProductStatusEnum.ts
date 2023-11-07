import BaseEnum from '../BaseEnum'

export default class ProductStatusEnum extends BaseEnum {
  static readonly INACTIVE: number = 0
  static readonly ACTIVE: number = 1

  static hasValue(value: any): boolean {
    return super.hasValue(this, value)
  }
}
