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
const payments = ref<Payment[]>([
  {
    id: 1,
    amount: 189.82,
    currency: 'EURO',
    type: 1,
    status: 1,
    date: new Date(),
    sender: {
      name: 'Sender Company Inc.',
      email: 'sender-company@gmail.com',
      contactPerson: 'John Senderson'
    },
    receiver: {
      name: 'Receiver Company Inc.',
      email: 'receiver-company@gmail.com',
      contactPerson: 'Juliet Receiverson'
    }
  },
  {
    id: 2,
    amount: 212.02,
    currency: 'EURO',
    type: 2,
    status: 1,
    date: new Date(),
    sender: {
      name: 'Sender Company Inc.',
      email: 'sender-company@gmail.com',
      contactPerson: 'John Senderson'
    },
    receiver: {
      name: 'Receiver Company Inc.',
      email: 'receiver-company@gmail.com',
      contactPerson: 'Juliet Receiverson'
    }
  },
  {
    id: 3,
    amount: 583.58,
    currency: 'EURO',
    type: 3,
    status: 1,
    date: new Date(),
    sender: {
      name: 'Sender Company Inc.',
      email: 'sender-company@gmail.com',
      contactPerson: 'John Senderson'
    },
    receiver: {
      name: 'Receiver Company Inc.',
      email: 'receiver-company@gmail.com',
      contactPerson: 'Juliet Receiverson'
    }
  },
  {
    id: 4,
    amount: 483.3,
    currency: 'EURO',
    type: 4,
    status: 1,
    date: new Date(),
    sender: {
      name: 'Sender Company Inc.',
      email: 'sender-company@gmail.com',
      contactPerson: 'John Senderson'
    },
    receiver: {
      name: 'Receiver Company Inc.',
      email: 'receiver-company@gmail.com',
      contactPerson: 'Juliet Receiverson'
    }
  }
])
const isLoading = ref(false)
</script>
