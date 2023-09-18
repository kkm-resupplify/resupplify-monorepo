import { defineStore } from 'pinia'

interface GeneralNotificationStore {
  notifications: Array<string>
}

export const useGeneralNotificationStore = defineStore({
  id: 'generalNotification',

  state: (): GeneralNotificationStore => ({
    notifications: []
  }),

  getters: {
    getNotifications: (state) => state.notifications,
    getTopNotification: (state) => state.notifications[0]
  },

  actions: {
    addNotification(notification: string): void {
      this.notifications.push(notification)
    },

    clearNotifications(): void {
      this.notifications = []
    },

    displayNotification(notification: string, timeMs: number) {
      this.addNotification(`${notification}${this.notifications.length}`)

      setTimeout(() => {
        this.closeTopNotification()
      }, timeMs * this.notifications.length)
    },

    closeTopNotification() {
      this.notifications.splice(0, 1)
    }
  }
})
