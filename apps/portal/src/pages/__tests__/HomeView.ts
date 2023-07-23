import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeView from '../HomeView.vue'

describe('HomeView aa123', () => {
  it('renders properly xdd', () => {
    const wrapper = mount(HomeView)

    expect(wrapper.text()).toContain('global.welcome')
  })
})
