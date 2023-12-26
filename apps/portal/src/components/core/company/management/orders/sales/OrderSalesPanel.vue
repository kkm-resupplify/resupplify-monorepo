<template>
  <a-panel>
    <order-sales-header-section />

    <order-sales-content-section />
  </a-panel>
</template>

<script setup lang="ts">
import OrderSalesContentSection from '@/components/core/company/management/orders/sales/content/OrderSalesContentSection.vue'
import OrderSalesHeaderSection from '@/components/core/company/management/orders/sales/header/OrderSalesHeaderSection.vue'
</script>
