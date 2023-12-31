import BaseEnum from '@sharedEnums/BaseEnum'

export default class OrderStatusEnum extends BaseEnum {
  static readonly PLACED: number = 0
  static readonly PROCESSING: number = 1
  static readonly SHIPPED: number = 2
  static readonly INTRANSIT: number = 3
  static readonly COMPLETED: number = 4
  static readonly CANCELLED: number = 5
  static readonly REFUNDED: number = 6
  static readonly REJECTED: number = 7
  static readonly SUSPENDED: number = 8
  static readonly INACTIVE: number = 9
}
