<template>
  <div class="company-card-list">
    <m-card-list :cardComponent="CompanyCard" :cards="[{}, {}]" />
  </div>
</template>

<script setup lang="ts">
import MCardList from '@sharedMolecules/cards/MCardList.vue'
import CompanyCard from '@/components/core/company/card/CompanyCard.vue'

const props = defineProps({
  companies: {
    type: Object,
    required: true
  }
})
</script>

<!-- <style scoped lang="scss"></style> -->
