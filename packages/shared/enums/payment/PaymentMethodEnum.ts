import BaseEnum from '../BaseEnum'

export default class PaymentMethodEnum extends BaseEnum {
  static readonly BALANCE: number = 1
  static readonly CREDIT_CARD: number = 2
  static readonly BANK_TRANSFER: number = 3
}
