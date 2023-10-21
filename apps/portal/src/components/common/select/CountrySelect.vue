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
    :value="value"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { i18n } from '@/translation/index'

defineProps({
  name: { type: String, required: true },
  value: [String, Number],
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
  const countryCodes = Object.keys(i18n.global.messages.value['en-US']['country']).map((key: any) =>
    key.toLowerCase()
  )

  const data = countryCodes.map((code: any, index: number) => {
    return {
      text: (i18n.global.messages.value[i18n.global.locale.value ?? 'en-US'].country as any)[code],
      id: index,
      iconPrepend: { name: `_${code}`, size: 'small' }
    }
  })

  return data
})

const validationRules = computed(() => {
  const countryIds = countries.value.map(({ id }: { id: string | number }) => id).join(',')
  return `required|one_of:${countryIds}`
})
</script>
