<template>
  <a-panel-section class="payment-dashboard-header-section">
    <div class="payment-dashboard-header-section__wrapper">
      <a-title
        :title="$t('company.management.balance.dashboard.companyBalance')"
        :subtitle="formattedBalance"
        size="x-large"
      />

      <a-button
        :text="$t('global.manage')"
        size="x-large"
        class="payment-dashboard-header-section__manage"
      />
    </div>
  </a-panel-section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Variables
const balance = ref(999999)

// Computed
const formattedBalance = computed(() => {
  return `${balance.value}$`
})
</script>

<style lang="scss" scoped>
.payment-dashboard-header-section {
  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__manage {
    height: fit-content;
  }
}
</style>
