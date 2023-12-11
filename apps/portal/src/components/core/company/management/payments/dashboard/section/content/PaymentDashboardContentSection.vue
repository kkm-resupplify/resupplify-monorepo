<template>
  <a-panel-section class="payment-dashboard-content-section">
    <div>Filters</div>

    <a-line />

    <template v-if="isLoading">implement-loader-here</template>

    <payment-dashboard-payment-list v-else :payments="payments" />
  </a-panel-section>
</template>

<script setup lang="ts">
import PaymentDashboardPaymentList from '@/components/core/company/management/payments/dashboard/section/content/list/PaymentDashboardPaymentList.vue'
import { type PropType } from 'vue'
import type { Payment } from '@sharedInterfaces/balance/CompanyBalanceInterface'

defineProps({
  payments: {
    type: Array as PropType<Payment[]>,
    required: true
  },
  isLoading: Boolean
})
</script>

<style lang="scss" scoped>
.payment-dashboard-content-section {
  display: flex;
  height: 100%;
}
</style>
