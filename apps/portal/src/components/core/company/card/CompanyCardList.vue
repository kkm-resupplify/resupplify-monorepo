<template>
  <div class="company-card-list">
    <m-card-list :cardComponent="CompanyCard" :cards-data="companies" />
  </div>
</template>

<script setup lang="ts">
// Components
import MCardList from '@sharedMolecules/cards/MCardList.vue'
import CompanyCard from '@/components/core/company/card/CompanyCard.vue'

// Props
defineProps({
  companies: {
    type: Array<object>,
    required: true
  }
})
</script>
