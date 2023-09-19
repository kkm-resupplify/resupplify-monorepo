import { defineStore } from 'pinia'

interface Notification {
  text: string
  duration: number
}

interface GeneralNotificationStore {
  notificationQueue: Notification[]
  currentNotification: Notification | null
}

export const useGeneralNotificationStore = defineStore({
  id: 'generalNotification',

  state: (): GeneralNotificationStore => ({
    notificationQueue: [],
    currentNotification: null
  }),

  getters: {
    getNotifications: (state) => state.notificationQueue,
    getCurrentNotification: (state) => state.currentNotification
  },

  actions: {
    addNotification(notification: Notification): void {
      this.notificationQueue.push(notification)
    },

    clearNotifications(): void {
      this.notificationQueue = []
    },

    setCurrentNotification(notification: Notification) {
      this.currentNotification = notification
    },

    displayNextNotification() {
      if (!this.currentNotification) {
        const notification = this.notificationQueue.shift()

        if (notification) {
          this.setCurrentNotification(notification)

          setTimeout(() => {
            this.closeCurrentNotification()
          }, notification.duration)
        }
      }
    },

    closeCurrentNotification() {
      this.currentNotification = null
    },

    closeAllNotifications() {
      this.notificationQueue = []
    }
  }
})
