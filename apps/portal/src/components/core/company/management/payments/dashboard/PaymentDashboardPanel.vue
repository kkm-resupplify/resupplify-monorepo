<template>
  <a-panel>
    <payment-dashboard-header-section />

    <payment-dashboard-content-section />
  </a-panel>
</template>

<script setup lang="ts">
import PaymentDashboardHeaderSection from '@/components/core/company/management/payments/dashboard/section/header/PaymentDashboardHeaderSection.vue'
import PaymentDashboardContentSection from '@/components/core/company/management/payments/dashboard/section/content/PaymentDashboardContentSection.vue'
</script>
