import { defineStore } from 'pinia'
import type { CartCompanyGroup, CartItem } from '@sharedInterfaces/cart/CartInterface'
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'

export const useUserCartStore = defineStore({
  id: 'userCart',

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
    },
    isOfferInCart:
      (state) =>
      (offer: Offer): boolean => {
        return state.cartItems.some((item: CartItem) => item.offer.id === offer.id)
      }
  },

  actions: {
    addToCart(offer: Offer) {
      this.cartItems.push({ offer, quantity: 1 })
    },

    removeCartItem(offerId: number) {
      const index = this.cartItems.findIndex((item: CartItem) => item.offer.id === offerId)

      if (index !== -1) {
        this.cartItems.splice(index, 1)
      }
    },

    clearCart() {
      this.cartItems = []
    },

    updateCartItemQuantity(offerId: number, quantity: number) {
      const index = this.cartItems.findIndex((item: CartItem) => item.offer.id === offerId)

      if (index !== -1) {
        this.cartItems[index].quantity = quantity
      }
    }
  },

  persist: true
})
