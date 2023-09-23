import { defineStore } from 'pinia'
// TODO:
// - send notification w/ variant
// - smart body overwrite

interface Notification {
  title: string
  text?: string
  duration: number
  variant?: string
}

interface GeneralNotificationStore {
  notificationQueue: Notification[]
  currentNotification: Notification | null
  currentTimeout: any
}

export const useGeneralNotificationStore = defineStore({
  id: 'generalNotification',

  state: (): GeneralNotificationStore => ({
    notificationQueue: [],
    currentNotification: null,
    currentTimeout: null
  }),

  getters: {
    getNotifications: (state) => state.notificationQueue,
    getCurrentNotification: (state) => state.currentNotification
  },

  actions: {
    addNotification(notification: Notification): void {
      if (!notification.variant) notification.variant = 'default'

      this.notificationQueue.push(notification)
    },

    clearNotifications(): void {
      this.notificationQueue = []
    },

    setCurrentNotification(notification: Notification): void {
      this.currentNotification = notification
    },

    displayNextNotification(): void {
      if (!this.currentNotification) {
        const notification = this.notificationQueue.shift()

        if (notification) {
          this.setCurrentNotification(notification)

          this.currentTimeout = setTimeout(() => {
            this.currentNotification = null
          }, notification.duration + 100)
        }
      }
    },

    closeCurrentNotification(): void {
      clearTimeout(this.currentTimeout)
      this.currentNotification = null
    },

    closeAllNotifications(): void {
      this.notificationQueue = []
      this.closeCurrentNotification()
    }
  }
})
