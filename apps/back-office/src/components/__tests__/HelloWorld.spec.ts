import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld asd', () => {
  it('renders properly asdsdadasd', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })

    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
