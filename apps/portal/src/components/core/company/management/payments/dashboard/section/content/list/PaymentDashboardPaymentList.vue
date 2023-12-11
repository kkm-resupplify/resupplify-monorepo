<template>
  <div class="payment-dashboard-payment-list">
    <payment-dashboard-payment-list-item
      v-for="payment in payments"
      :key="payment.id"
      :payment="payment"
    />
  </div>
</template>

<script setup lang="ts">
import PaymentDashboardPaymentListItem from '@/components/core/company/management/payments/dashboard/section/content/list/PaymentDashboardPaymentListItem.vue'
import type { PropType } from 'vue'
import type { Payment } from '@sharedInterfaces/balance/CompanyBalanceInterface'

defineProps({
  payments: {
    type: Array as PropType<Payment[]>
  }
})
</script>

<style lang="scss" scoped>
.payment-dashboard-payment-list {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: $global-spacing-40;

  height: 100%;
}
</style>
