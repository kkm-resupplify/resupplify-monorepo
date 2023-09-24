import { defineStore } from 'pinia'

interface Notification {
  title: string
  duration?: number
  text?: string
  variant?: string
  icon?: string
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
    sendNotification({ title, duration, text, variant, icon }: Notification): void {
      this.notificationQueue.push({
        title,
        duration: duration,
        text,
        variant: variant ?? 'info',
        icon
      })
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

          this.currentTimeout = setTimeout(
            () => {
              this.currentNotification = null
            },
            notification.duration ? notification.duration + 100 : 3100
          )
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
