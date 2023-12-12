<template>
  <a-panel-section class="payment-dashboard-content-section">
    <div class="payment-dashboard-content-section__header">
      <a-title
        class="payment-dashboard-content-section__header-title"
        :title="$t('company.management.balance.dashboard.transactionHistory')"
        size="large"
      />

      <o-form ref="form" :initial-values="initialFilterParams" :submit-callback="handleQuerySubmit">
        <template #body>
          <m-select
            name="type"
            :placeholder="$t('company.management.balance.dashboard.filter.typePlaceholder')"
            :options="typeFilterOptions"
            :validate="false"
            width="30%"
          />

          <div class="payment-dashboard-content-section__filter-controls">
            <a-button button-type="submit" :text="$t('global.search')" size="x-large" />

            <a-button :text="$t('global.reset')" size="x-large" @click="handleResetFilters" />
          </div>
        </template>
      </o-form>
    </div>

    <a-line />

    <template v-if="isLoading">implement-loader-here</template>

    <template v-else>
      <payment-dashboard-payment-list :payments="payments" />

      <o-pagination :pagination="paginationData" @page-changed="handleFetchTransactions" />
    </template>
  </a-panel-section>
</template>

<script setup lang="ts">
import PaymentDashboardPaymentList from '@/components/core/company/management/payments/dashboard/section/content/list/PaymentDashboardPaymentList.vue'
import { ref, computed, onBeforeMount } from 'vue'
import type { Payment } from '@sharedInterfaces/balance/CompanyBalanceInterface'
import PaymentTypeEnum from '@sharedEnums/payment/PaymentTypeEnum'
import { useI18n } from 'vue-i18n'
import { useQueryFilter } from '@sharedComposables/query/useQueryFilter'
import OForm from '@sharedOrganisms/form/OForm.vue'
import { useRoute } from 'vue-router'
import type { Pagination } from '@sharedInterfaces/config/PaginationInterface'

// Interfaces
interface TransactionHistoryFilterParams {
  page?: string
  type?: string
}

// Variables
const { t } = useI18n()
const isLoading = ref(false)
const form = ref<typeof OForm>()
const initialFilterParams = ref<TransactionHistoryFilterParams>()
const { setQueryParam } = useQueryFilter()
const route = useRoute()
const paginationData = ref<Pagination>()
const payments = ref<Payment[]>([
  {
    id: 1,
    amount: 189.82,
    currency: 'EURO',
    type: 1,
    status: 1,
    date: '16-03-2023',
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
    date: '16-03-2023',
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
    date: '16-03-2023',
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
    date: '16-03-2023',
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

// Computed
const typeFilterOptions = computed(() =>
  PaymentTypeEnum.getAllFields().map((typeName) => ({
    id: `${PaymentTypeEnum[typeName as keyof PaymentTypeEnum]}`,
    text: t(`payment.type.${typeName.toLowerCase()}`)
  }))
)

// Methods
const handleQuerySubmit = async (data: TransactionHistoryFilterParams) => {
  await setQueryParam(route, data)

  handleFetchTransactions()
}

const handleFetchTransactions = async () => {
  isLoading.value = true

  const {
    query: { page, type }
  } = route

  isLoading.value = false
}

const handleResetFilters = async () => {
  initialFilterParams.value = {
    type: undefined
  }

  form.value?.handleReset()

  await handleQuerySubmit({
    page: '1',
    type: undefined
  })
}

const setInitialFormValues = () => {
  initialFilterParams.value = {
    type: route.query.type ? route.query.type.toString() : undefined
  }
}

// Hooks
onBeforeMount(async () => {
  await handleFetchTransactions()

  setInitialFormValues()
})
</script>

<style lang="scss" scoped>
.payment-dashboard-content-section {
  display: flex;
  height: 100%;

  &__header {
    display: flex;
  }

  &__header-title {
    flex: 1;
  }

  &__filter-controls {
    display: flex;
    gap: $global-spacing-30;
  }

  :deep(.o-form) {
    gap: 0;
  }

  :deep(.o-form__body) {
    flex-direction: row;
    gap: $global-spacing-30;
    justify-content: flex-end;
  }
}
</style>
