import BaseEnum from '@sharedEnums/BaseEnum'
interface Language {
  id: number
  key: string
}

export default class UserLanguageEnum extends BaseEnum {
  static readonly ENGLISH: Language = { id: 1, key: 'en-US' }
  static readonly POLISH: Language = { id: 2, key: 'pl-PL' }

  static getLanguageById(id: number): Language {
    return this.getAllValues().find((value) => value.id === id)
  }
}
