import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AButton from '../AButton.vue'

describe('AButton - Integration', () => {
  const dataTest = {
    button: '[data-test="button"]'
  }
  // Computed
  it('has correct classes', async () => {
    const expected = 'a-button a-button--medium a-button--primary a-button--text-white'
    const wrapper = mount(AButton, {
      baseClass: 'a-button',
      props: { size: 'medium', text: 'BUTTON_TEXT', color: 'primary' }
    })

    const buttonEl = wrapper.find(dataTest.button)

    expect(buttonEl.classes().join(' ')).toStrictEqual(expected)
  })
})
