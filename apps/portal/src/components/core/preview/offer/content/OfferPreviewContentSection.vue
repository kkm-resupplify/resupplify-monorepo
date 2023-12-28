<template>offer-preview-content-section</template>

<script setup lang="ts">
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'
import type { PropType } from 'vue'

defineProps({
  productDetails: String,
  company: Object as PropType<CompanyData>
})
</script>
