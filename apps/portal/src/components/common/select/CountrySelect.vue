<template>
  <m-select
    class="country-select"
    :options="countries"
    :name="name"
    :label="label"
    :placeholder="placeholder"
    :required="required"
    :disabled="disabled"
    :validate="validate"
    :rules="validationRules"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { i18n } from '@/translation/index'

const props = defineProps({
  name: { type: String, required: true },
  label: String,
  placeholder: { type: String, required: true },
  required: Boolean,
  disabled: Boolean,
  filter: Boolean,
  isLoading: Boolean,
  validate: { type: Boolean, default: true }
})

// Computed
const countries = computed(() => {
  const countryCodes = Object.keys(i18n.global.messages.value['en-US']['country'])

  const data = countryCodes.map((code: string) => {
    return {
      text: i18n.global.messages.value[i18n.global.locale.value ?? 'en-US'].country[code],
      iconPrepend: { name: `_${code}`, size: 'small' }
    }
  })

  return data
})

const validationRules = computed(() => {
  const countryNames = countries.value.map(({ text }: { text: string }) => text).join(',')
  return `required|one_of:${countryNames}`
})
</script>
