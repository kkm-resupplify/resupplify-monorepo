import BaseEnum from '../BaseEnum'

export default class CompanyStatusEnum extends BaseEnum {
  static readonly UNVERIFIED: number = 0
  static readonly VERIFIED: number = 1
  static readonly REJECTED: number = 2
}
