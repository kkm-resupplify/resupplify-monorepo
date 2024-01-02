<template>
  <div class="company-card-list">
    <m-card-list :card-component="CompanyCard" :cards-data="companies" />
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type { FeaturedCompany } from '@sharedInterfaces/company/CompanyInterface'
import MCardList from '@sharedMolecules/cards/MCardList.vue'
import CompanyCard from '@/components/core/company/card/CompanyCard.vue'

defineProps({
  companies: {
    type: Array as PropType<FeaturedCompany[]>,
    required: true
  }
})
</script>
