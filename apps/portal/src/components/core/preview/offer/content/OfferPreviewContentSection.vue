<template>
  <a-panel-section>
    <a-title
      :title="$t('company.management.offer.preview.productDetails')"
      :subtitle="productDetails"
    />
  </a-panel-section>
</template>

<script setup lang="ts">
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'
import type { PropType } from 'vue'

const props = defineProps({
  productDetails: String,
  company: Object as PropType<CompanyData>
})

console.log(props.productDetails)
</script>
