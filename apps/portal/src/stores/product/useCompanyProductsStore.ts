import type { Product } from '@sharedInterfaces/product/ProductInterface'
import { defineStore } from 'pinia'

interface CompanyProductsState {
  products: Product[]
}

export const useCompanyProductsStore = defineStore({
  id: 'companyProducts',

  state: (): CompanyProductsState => ({
    products: []
  }),

  getters: {
    getProducts: (state) => state.products
  },

  actions: {
    setProducts(products: Product[]) {
      this.products = products
    }
  },

  persist: true
})
