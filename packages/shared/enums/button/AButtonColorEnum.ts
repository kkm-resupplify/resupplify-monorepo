import BaseEnum from '../BaseEnum'

export default class AButtonColorEnum extends BaseEnum {
  static readonly PRIMARY: string = 'primary'
  static readonly SECONDARY: string = 'secondary'
  static readonly INFO: string = 'info'
  static readonly DANGER: string = 'danger'
  static readonly ACCENT: string = 'accent'

  static hasValue(value: any): boolean {
    return super.hasValue(this, value)
  }
}
