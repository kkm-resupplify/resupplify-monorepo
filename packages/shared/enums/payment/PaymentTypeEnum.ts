import BaseEnum from '../BaseEnum'

export default class PaymentTypeEnum extends BaseEnum {
  static readonly WITHDRAWAL: number = 1
  static readonly DEPOSIT: number = 2
  static readonly SALE: number = 3
  static readonly PURCHASE: number = 4
}
