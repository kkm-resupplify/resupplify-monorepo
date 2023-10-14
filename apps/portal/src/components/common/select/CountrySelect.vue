<template>
  <m-select class="country-select" :options="countries" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { i18n } from '@/translation/index'
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
</script>
