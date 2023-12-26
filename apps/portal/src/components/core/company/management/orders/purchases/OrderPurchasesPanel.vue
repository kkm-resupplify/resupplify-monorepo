<template>
  <a-panel>
    <order-purchases-header-section />

    <order-purchases-content-section />
  </a-panel>
</template>

<script setup lang="ts">
import OrderPurchasesContentSection from '@/components/core/company/management/orders/purchases/content/OrderPurchasesContentSection.vue'
import OrderPurchasesHeaderSection from '@/components/core/company/management/orders/purchases/header/OrderPurchasesHeaderSection.vue'
</script>
