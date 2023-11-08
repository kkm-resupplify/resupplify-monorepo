import BaseEnum from '../BaseEnum'

export default class ProductVerificationStatusEnum extends BaseEnum {
  static readonly UNVERIFIED: number = 0
  static readonly VERIFIED: number = 1
  static readonly REJECTED: number = 2

  static hasValue(value: any): boolean {
    return super.hasValue(this, value)
  }
}
