import BaseService from '../BaseService'

class UserPreferencesService extends BaseService {
  async saveUserLanguage(languageId: number) {
    await this.post({
      data: { languageId },
      notificationTitle: 'settings.preferences.notification.updateSuccess'
    })
  }
}

export default new UserPreferencesService('/user/language')
