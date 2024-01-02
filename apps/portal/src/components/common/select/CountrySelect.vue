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
    rules="required"
    :value="value"
  />
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import { i18n } from '@/translation/index'
import { useStaticCompanyDescriptorsStore } from '@sharedStores/company/useStaticCompanyDescriptorsStore'
import StaticCompanyDescriptorsService from '@/services/company/StaticCompanyDescriptorsService'

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

// Variables
const staticCompanyDescriptionStore = useStaticCompanyDescriptorsStore()

// Computed
const countries = computed(() =>
  staticCompanyDescriptionStore.getCountries.map((country) => {
    const { id, code } = country

    return {
      //@ts-ignore
      text: (i18n.global.messages.value[i18n.global.locale.value ?? 'en-US'].country as any)[
        code.toLowerCase()
      ],
      id,
      iconPrepend: { name: `_${code}`, size: 'small' }
    }
  })
)

// Methods
const handleFetchCountries = async () => {
  await StaticCompanyDescriptorsService.getCountries()
}

// Hooks
onBeforeMount(() => {
  handleFetchCountries()
})
</script>
