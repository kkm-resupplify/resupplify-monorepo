import BaseService from '../BaseService'

class UserPreferencesService extends BaseService {
  async changeUserLanguage(languageId: number) {
    return await this.post({
      data: { languageId },
      notificationTitle: 'settings.preferences.notification.updateSuccess'
    })
  }
}

export default new UserPreferencesService('/user/language')
