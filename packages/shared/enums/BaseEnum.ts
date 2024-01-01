export default class BaseEnum {
  static hasKey(enumObject: Record<string, any>, key: string): boolean {
    return Object.prototype.hasOwnProperty.call(enumObject, key)
  }

  static hasValue(enumObject: Record<string, any>, value: string): boolean {
    return Object.values(enumObject).includes(value)
  }

  static getFieldName(value: number | string): string | undefined {
    for (const key in this) {
      if ((this as any)[key as keyof typeof this] === value) {
        return key
      }
    }

    return undefined
  }

  static getAllFields(): string[] {
    return Object.getOwnPropertyNames(this).filter((key) => {
      const value = (this as any)[key]
      return typeof value !== 'function' && !['length', 'name', 'prototype'].includes(key)
    })
  }

  static getAllValues() {
    return Object.values(this).filter((value) => typeof value !== 'function' && value !== undefined)
  }
}
