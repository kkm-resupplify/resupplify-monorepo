import { defineStore } from 'pinia'

interface UserStoreDetailsData {
  firstName: string
  lastName: string
  phoneNumber: string
  birthDate: string
}

export const useUserStoreDetails = defineStore({
  id: 'userStore',

  state: (): UserStoreDetailsData => ({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    birthDate: ''
  }),

  getters: {
    getUserDetails: (state) => state
  },

  actions: {
    setUserDetails({ firstName, lastName, phoneNumber, birthDate }: UserStoreDetailsData) {
      this.firstName = firstName
      this.lastName = lastName
      this.phoneNumber = phoneNumber
      this.birthDate = birthDate
    }
  },

  persist: true
})
