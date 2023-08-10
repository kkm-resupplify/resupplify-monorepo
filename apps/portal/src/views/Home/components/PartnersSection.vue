<template>
  <div class="partners-section">
    <div>Header</div>
    <company-card-list :companies="companies" />
  </div>
</template>

<script setup lang="ts">
// Components
import CompanyCardList from '@/components/core/company/card/CompanyCardList.vue'

const companies = {}
</script>

<style scoped lang="scss">
.partners-section {
  padding: $global-spacing-30 $global-spacing-40;
  background-color: $global-colors-white;
}
</style>
