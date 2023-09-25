import { configure, defineRule } from 'vee-validate'
import { localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'
import pl from '@vee-validate/i18n/dist/locale/pl.json'
import * as AllRules from '@vee-validate/rules'

export default {
  install: () => {
    Object.keys(AllRules).forEach((rule) => {
      defineRule(rule, AllRules[rule])
    })

    configure({
      generateMessage: localize({
        en,
        pl
      })
    })
  }
}
