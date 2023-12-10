<template>
  <a-panel-section class="payment-dashboard-content-section">
    <div>Filters</div>

    <payment-dashboard-payment-list />
  </a-panel-section>
</template>

<script setup lang="ts">
import PaymentDashboardPaymentList from './list/PaymentDashboardPaymentList.vue'
</script>

<style lang="scss" scoped>
.payment-dashboard-content-section {
  display: flex;
}
</style>
