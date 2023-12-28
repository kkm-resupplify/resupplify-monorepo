<template>
  <a-list>
    <companies-list-item v-for="company in companies" :key="company.id" :company="company" />
  </a-list>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import CompaniesListItem from './CompaniesListItem.vue'
import type { CompanyData } from '@sharedInterfaces/company/CompanyInterface'

defineProps({
  companies: Array as PropType<CompanyData[]>
})
</script>
