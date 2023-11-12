import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AdminProductView from '../AdminProductView.vue'
import { createTestingPinia } from '@pinia/testing'
import { useUserStore } from '@/stores/user/useUserStore'

describe('HomeView - Integration', () => {
  it('renders text properly', async () => {
    // const wrapper = mount(AdminProductView, {
    //   global: {
    //     plugins: [createTestingPinia()]
    //   }
    // })
    // const store = useUserStore()
    // store.email = 'test@pinia.com'
  })
})
