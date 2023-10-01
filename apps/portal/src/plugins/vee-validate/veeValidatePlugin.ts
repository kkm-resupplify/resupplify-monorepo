import { configure, defineRule } from 'vee-validate'
import { localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'
import pl from '@vee-validate/i18n/dist/locale/pl.json'
import * as AllRules from '@vee-validate/rules'

export default {
  install: () => {
    Object.keys(AllRules as { [key: string]: any }).forEach((rule: string) => {
      defineRule(rule, (AllRules as { [key: string]: any })[rule])
    })

    configure({
      generateMessage: localize({
        'en-US': en,
        'pl-PL': pl
      }),
      validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
      validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
      validateOnInput: true, // controls if `input` events should trigger validation with `handleChange` handler
      validateOnModelUpdate: true // controls if `update:modelValue` events should trigger validation with `handleChange` handler
    })
  }
}
