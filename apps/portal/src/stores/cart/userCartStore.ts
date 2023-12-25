import { defineStore } from 'pinia'
import type { CartCompanyGroup, CartItem } from '@sharedInterfaces/cart/CartInterface'

export const useUserCartStore = defineStore('userCart', {
  state: () => ({
    cartItems: [] as CartItem[]
  }),

  getters: {
    cartItemCount: (state) => state.cartItems.length,
    cartCompanyGroups: (state): CartCompanyGroup[] => {
      const companyGroups: CartCompanyGroup[] = []

      state.cartItems.forEach((item: CartItem) => {
        const companyGroupIndex = companyGroups.findIndex(
          (group: CartCompanyGroup) => group.companyName === item.offer.company.name
        )

        if (companyGroupIndex === -1) {
          companyGroups.push({
            companyName: item.offer.company.name,
            cartItems: [item]
          })
        } else {
          companyGroups[companyGroupIndex].cartItems.push(item)
        }
      })

      return companyGroups
    }
  },

  actions: {
    addToCart(item: CartItem) {
      this.cartItems.push(item)
    },

    removeFromCart(offerId: number) {
      const index = this.cartItems.findIndex((item: CartItem) => item.offer.id === offerId)

      if (index !== -1) {
        this.cartItems.splice(index, 1)
      }
    },

    clearCart() {
      this.cartItems = []
    }
  }
})
