<template>
  <a-list>
    <payment-dashboard-payment-list-item
      v-for="payment in payments"
      :key="payment.id"
      :payment="payment"
    />
  </a-list>
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
