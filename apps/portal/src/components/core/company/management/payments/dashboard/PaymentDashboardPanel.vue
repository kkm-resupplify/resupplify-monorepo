<template>
  <a-panel>
    <payment-dashboard-header-section />

    <payment-dashboard-content-section :payments="payments" :is-loading="isLoading" />
  </a-panel>
</template>

<script setup lang="ts">
import PaymentDashboardHeaderSection from '@/components/core/company/management/payments/dashboard/section/header/PaymentDashboardHeaderSection.vue'
import PaymentDashboardContentSection from '@/components/core/company/management/payments/dashboard/section/content/PaymentDashboardContentSection.vue'
import { ref } from 'vue'
import type { Payment } from '@sharedInterfaces/balance/CompanyBalanceInterface'

// Variables
const payments = ref<Payment[]>([])
const isLoading = ref(false)
</script>
