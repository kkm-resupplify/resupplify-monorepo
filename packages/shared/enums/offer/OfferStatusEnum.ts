import BaseEnum from '../BaseEnum'

export default class OfferStatusEnum extends BaseEnum {
  static readonly DEACTIVATED: number = 0
  static readonly ACTIVATED: number = 1

  static hasValue(value: any): boolean {
    return super.hasValue(this, value)
  }
}
