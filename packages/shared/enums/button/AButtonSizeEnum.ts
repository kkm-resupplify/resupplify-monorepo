import BaseEnum from '../BaseEnum'

export default class AButtonSizeEnum extends BaseEnum {
  static readonly SMALL: string = 'small'
  static readonly MEDIUM: string = 'medium'
  static readonly LARGE: string = 'large'

  static hasValue(value: any): boolean {
    return super.hasValue(this, value)
  }
}
