<template>
  <a-panel-section>
    <a-title
      :title="$t('company.management.offer.dashboard.companyOffers')"
      :subtitle="$t('company.management.offer.dashboard.companyOffersDescription')"
      size="x-large"
    />

    <m-alert
      v-if="isCompanyNotVerified"
      variant="danger"
      :text="$t('company.management.offer.dashboard.companyOffersNotVisible')"
    />
  </a-panel-section>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user/useUserStore'
import { computed } from 'vue'

// Variables
const userStore = useUserStore()

// Computed
const isCompanyNotVerified = computed(() => {
  return userStore.getCompany?.status === 0
})
</script>
