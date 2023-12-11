<template>
  <div class="payment-manage-balance-panel">
    <div class="payment-manage-balance-panel__header">
      <a-title
        :title="$t('company.management.navigation.payments.manageBalance.title')"
        size="x-large"
      />

      <a-title
        :title="$t('company.management.navigation.payments.manageBalance.currentBalance')"
        :subtitle="formattedBalance"
        variant="horizontal"
        class="payment-manage-balance-panel__current-balance"
        size="large"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const balance = ref(1410)

const formattedBalance = computed(() => {
  return `: $${balance.value}`
})
</script>

<style scoped lang="scss">
.payment-manage-balance-panel {
  padding: $global-spacing-100;

  &__header {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-70;
  }

  &__current-balance {
    white-space: nowrap;
  }
}
</style>
