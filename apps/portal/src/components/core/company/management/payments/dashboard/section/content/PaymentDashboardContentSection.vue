<template>
  <a-panel-section class="payment-dashboard-content-section" overflow>
    <div class="payment-dashboard-content-section__header">
      <a-title
        class="payment-dashboard-content-section__header-title"
        :title="$t('company.management.balance.dashboard.transactionHistory')"
        size="large"
      />

      <o-form
        ref="form"
        :initial-values="initialFilterParams"
        :submit-callback="handleQuerySubmit"
        class="payment-dashboard-content-section__filter-form"
      >
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

    <a-skeleton v-if="isLoading" />

    <template v-else>
      <payment-dashboard-payment-list v-if="showList" :payments="payments" />

      <a-list-no-results
        v-else
        :text="$t(`company.management.balance.dashboard.list.${noResultsTranslationKey}`)"
      />
    </template>

    <o-pagination :pagination="paginationData" @page-changed="handleFetchTransactions" />
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
import CompanyBalanceService from '@/services/company/CompanyBalanceService'

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
const payments = ref<Payment[]>([])

// Computed
const typeFilterOptions = computed(() =>
  PaymentTypeEnum.getAllFields().map((typeName) => ({
    id: `${PaymentTypeEnum[typeName as keyof PaymentTypeEnum]}`,
    text: t(`payment.type.${typeName.toLowerCase()}`)
  }))
)

const showList = computed(() => {
  return payments.value.length > 0
})

const filtersUsed = computed(() => {
  const {
    query: { page, type }
  } = route

  return !!(page !== '1' || type)
})

const noResultsTranslationKey = computed(() => {
  return payments.value.length === 0 && filtersUsed.value
    ? 'noTransactionsMatchingFilter'
    : 'noTransactions'
})

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

  const { success, data, pagination } = await CompanyBalanceService.getCompanyTransactions({
    page: page as string,
    type: type as string
  })

  if (success) {
    payments.value = data
    paginationData.value = pagination
  }

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
  setInitialFormValues()

  await handleFetchTransactions()
})
</script>

<style lang="scss" scoped>
.payment-dashboard-content-section {
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

  &__filter-form {
    :deep(.o-form__body) {
      flex-direction: row;
      gap: $global-spacing-30;
      justify-content: flex-end;
    }
  }
}
</style>
