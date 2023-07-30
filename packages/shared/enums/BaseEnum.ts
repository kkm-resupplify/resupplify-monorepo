export default class BaseEnum {
  static hasKey(enumObject: Record<string, any>, key: string): boolean {
    return Object.prototype.hasOwnProperty.call(enumObject, key)
  }

  static hasValue(enumObject: Record<string, any>, value: string): boolean {
    return Object.values(enumObject).includes(value)
  }
}
