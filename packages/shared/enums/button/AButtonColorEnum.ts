import BaseEnum from '../BaseEnum'

export default class AButtonColorEnum extends BaseEnum {
  // Defaults
  static readonly PRIMARY: string = 'primary'
  static readonly SECONDARY: string = 'secondary'
  static readonly INFO: string = 'info'
  static readonly DANGER: string = 'danger'
  static readonly ACCENT: string = 'accent'
  static readonly WARNING: string = 'warning'

  // Gradients
  static readonly GRADIENT_PRIMARY: string = 'gradient-primary'
  static readonly GRADIENT_SECONDARY: string = 'gradient-secondary'
  static readonly GRADIENT_INFO: string = 'gradient-info'
  static readonly GRADIENT_DANGER: string = 'gradient-danger'
  static readonly GRADIENT_ACCENT: string = 'gradient-accent'
  static readonly GRADIENT_WARNING: string = 'gradient-warning'

  static hasValue(value: any): boolean {
    return super.hasValue(this, value)
  }
}
