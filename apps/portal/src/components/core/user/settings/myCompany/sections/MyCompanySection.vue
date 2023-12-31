<template>
  <div class="my-company-section">
    <div class="my-company-section__header">
      <a-title
        size="x-large"
        title="My company"
        subtitle="Settings and information related to the company you are a member of."
      />
    </div>

    <div v-if="userStore.getCompany" class="my-company-section__content">
      <company-data-block :company="userStore.getCompany" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user/useUserStore'
import CompanyDataBlock from '@/components/core/company/data/CompanyDataBlock.vue'

// Variables
const userStore = useUserStore()
</script>

<style lang="scss" scoped>
.my-company-section {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-50;
}
</style>
