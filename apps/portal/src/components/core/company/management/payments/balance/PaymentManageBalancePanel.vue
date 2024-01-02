<template>
  <a-panel class="payment-manage-balance-panel">
    <a-panel-section>
      <div class="payment-manage-balance-panel__header">
        <a-title :title="$t('company.management.balance.manage.title')" size="x-large" />

        <a-loader v-if="isLoading" />

        <a-currency
          v-else
          :title="$t('company.management.balance.manage.currentBalance')"
          :value="balance"
          size="large"
        />
      </div>

      <o-form :submit-callback="handleFormSubmit" class="payment-manage-balance-panel__form">
        <template #body>
          <div class="payment-manage-balance-panel__form-content">
            <m-select
              name="type"
              rules="required"
              :label="$t('company.management.balance.manage.operationTypeLabel')"
              :placeholder="$t('company.management.balance.manage.operationTypePlaceholder')"
              :options="operationTypes"
              @input-change="handleSelectOperationTypeChange"
            />

            <m-text-field
              name="amount"
              input-type="number"
              rules="required"
              :label="$t('company.management.balance.manage.amountLabel')"
              :placeholder="$t('company.management.balance.manage.amountPlaceholder')"
              :options="operationTypes"
            />
          </div>
        </template>

        <template #footer>
          <a-button
            button-type="submit"
            :text="submitButtonText"
            size="x-large"
            style="width: 100%"
            :disabled="isLoading"
          />
        </template>
      </o-form>
    </a-panel-section>
  </a-panel>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeMount } from 'vue'
import { useI18n } from 'vue-i18n'
import CompanyBalanceService from '@/services/company/CompanyBalanceService'
import PaymentTypeEnum from '@sharedEnums/payment/PaymentTypeEnum'

// Interfaces
interface FormData {
  type: string
  amount: string
}

// Variables
const isLoading = ref(false)
const balance = ref(0)
const { t } = useI18n()
const selectedOperationTypeId = ref<number | null>(null)

// Computed
const operationTypes = computed(() => [
  { id: PaymentTypeEnum.WITHDRAWAL, text: t('company.management.balance.manage.withdraw') },
  { id: PaymentTypeEnum.DEPOSIT, text: t('company.management.balance.manage.deposit') }
])

const submitButtonText = computed(() => {
  if (selectedOperationTypeId.value === PaymentTypeEnum.DEPOSIT)
    return t('company.management.balance.manage.deposit')

  if (selectedOperationTypeId.value === PaymentTypeEnum.WITHDRAWAL)
    return t('company.management.balance.manage.withdraw')

  return t('company.management.balance.manage.selectOperationType')
})

// Methods
const handleSelectOperationTypeChange = (id: number) => {
  selectedOperationTypeId.value = id
}

const handleFormSubmit = async (data: FormData) => {
  isLoading.value = true

  if (selectedOperationTypeId.value === PaymentTypeEnum.WITHDRAWAL) {
    const { success } = await CompanyBalanceService.withdrawBalance(data.amount)

    if (success) await handleFetchBalance()
  }

  if (selectedOperationTypeId.value === PaymentTypeEnum.DEPOSIT) {
    const { success } = await CompanyBalanceService.depositBalance(data.amount)

    if (success) await handleFetchBalance()
  }

  isLoading.value = false
}

const handleFetchBalance = async () => {
  isLoading.value = true

  const { success, data } = await CompanyBalanceService.getCompanyBalance()

  if (success) balance.value = data.balance

  isLoading.value = false
}

// Hooks
onBeforeMount(async () => {
  await handleFetchBalance()
})
</script>

<style scoped lang="scss">
.payment-manage-balance-panel {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-100;
  padding: $global-spacing-100;

  &__header {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-40;
    max-width: 400px;
  }

  &__current-balance {
    white-space: nowrap;
  }

  &__form {
    max-width: 400px;
    max-height: 190px;
  }

  &__form-content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-60;
  }
}
</style>
