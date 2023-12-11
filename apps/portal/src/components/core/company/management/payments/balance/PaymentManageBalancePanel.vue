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

    <div class="payment-manage-balance-panel__content">
      <m-select
        name="type"
        rules="required"
        :label="$t('company.management.navigation.payments.manageBalance.operationTypeLabel')"
        :placeholder="
          $t('company.management.navigation.payments.manageBalance.operationTypePlaceholder')
        "
        :options="operationTypes"
      />

      <m-text-field
        name="amount"
        input-type="number"
        rules="required"
        :label="$t('company.management.navigation.payments.manageBalance.amountLabel')"
        :placeholder="$t('company.management.navigation.payments.manageBalance.amountPlaceholder')"
        :options="operationTypes"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

// Variables
const balance = ref(1410)
const { t } = useI18n()

const operationTypes = ref([
  { id: 0, text: t('company.management.navigation.payments.manageBalance.deposit') },
  { id: 1, text: t('company.management.navigation.payments.manageBalance.withdraw') }
])

// Computed
const formattedBalance = computed(() => {
  return `: $${balance.value}`
})
</script>

<style scoped lang="scss">
.payment-manage-balance-panel {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-100;
  padding: $global-spacing-100;

  &__header {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-40;
  }

  &__current-balance {
    white-space: nowrap;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-60;
  }
}
</style>
