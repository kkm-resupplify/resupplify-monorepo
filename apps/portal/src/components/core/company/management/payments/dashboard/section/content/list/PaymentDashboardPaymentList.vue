<template>
  <div class="payment-dashboard-payment-list">
    <payment-dashboard-payment-list-item />
  </div>
</template>

<script setup lang="ts">
import PaymentDashboardPaymentListItem from '@/components/core/company/management/payments/dashboard/section/content/list/PaymentDashboardPaymentListItem.vue'
</script>

<style lang="scss" scoped>
.payment-dashboard-payment-list {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-40;
}
</style>
