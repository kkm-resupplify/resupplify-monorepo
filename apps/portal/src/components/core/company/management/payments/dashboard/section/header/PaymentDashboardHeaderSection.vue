<template>
  <a-panel-section class="payment-dashboard-header-section">
    <div class="payment-dashboard-header-section__wrapper">
      <div class="payment-dashboard-header-section__header">
        <a-title
          :title="$t('company.management.balance.dashboard.companyBalance')"
          size="x-large"
        />

        <div class="payment-dashboard-header-section__balance">
          <a-title
            :title="$t('company.management.balance.dashboard.currentBalance')"
            size="large"
            append-colon
          />

          <a-skeleton v-if="isLoading" />

          <a-currency v-else :value="balance" value-size="large" />
        </div>
      </div>

      <div class="payment-dashboard-header-section__actions">
        <a-button
          :to="{ name: RouteNames.COMPANY_PAYMENTS_MANAGE_BALANCE }"
          :text="$t('global.manage')"
          size="x-large"
        />

        <a-button
          size="x-large"
          :text="$t('global.refresh')"
          :is-loading="isLoading"
          @click="handleFetchCompanyBalance"
        />
      </div>
    </div>
  </a-panel-section>
</template>

<script setup lang="ts">
import { RouteNames } from '@/routes'
import { ref, onBeforeMount } from 'vue'
import CompanyBalanceService from '@/services/company/CompanyBalanceService'

// Variables
const isLoading = ref(false)
const balance = ref(0)

// Methods
const handleFetchCompanyBalance = async () => {
  isLoading.value = true

  const { success, data } = await CompanyBalanceService.getCompanyBalance()

  if (success) balance.value = data.balance

  isLoading.value = false
}

// Hooks
onBeforeMount(async () => {
  await handleFetchCompanyBalance()
})
</script>

<style lang="scss" scoped>
.payment-dashboard-header-section {
  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__balance {
    display: flex;
    gap: $global-spacing-20;
  }

  &__actions {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-30;
    align-self: flex-end;
  }
}
</style>
