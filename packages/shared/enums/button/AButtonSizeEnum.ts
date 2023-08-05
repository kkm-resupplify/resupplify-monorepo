import BaseEnum from '../BaseEnum'

export default class AButtonSizeEnum extends BaseEnum {
  static readonly SMALL: string = 'small'
  static readonly MEDIUM: string = 'medium'
  static readonly LARGE: string = 'large'
  static readonly XLARGE: string = 'x-large'

  static hasValue(value: any): boolean {
    return super.hasValue(this, value)
  }
}
