<template>
  <a-expansion-panel class="payment-dashboard-payment-list-item">
    <template #activator>
      <a-list-item-wrapper class="payment-dashboard-payment-list-item__activator">
        <m-icon :icon="paymentIcon" size="xx-large" :color="paymentIconColor" />

        <a-list-item-title-section
          v-for="(activatorSection, idx) in activatorSections"
          :key="idx"
          :title="activatorSection.title"
          :value="activatorSection.value"
        />
      </a-list-item-wrapper>
    </template>

    <template #content>
      <div class="payment-dashboard-payment-list-item__content">
        <div v-if="payment.receiver" class="payment-dashboard-payment-list-item__content-column">
          <a-title v-if="payment.receiver" :title="$t('payment.receiver')" variant="horizontal" />

          <div class="payment-dashboard-payment-list-item__content-column-item-data">
            <a-title
              v-for="(item, idx) in receiverEntityData"
              :key="idx"
              :title="item.title"
              :subtitle="item.subtitle"
              variant="horizontal"
              append-colon
            />
          </div>
        </div>

        <div v-if="payment.sender" class="payment-dashboard-payment-list-item__content-column">
          <a-title :title="$t('payment.receiver')" variant="horizontal" />

          <div class="payment-dashboard-payment-list-item__content-column-item-data">
            <a-title
              v-for="(item, idx) in senderEntityData"
              :key="idx"
              :title="item.title"
              :subtitle="item.subtitle"
              variant="horizontal"
              append-colon
            />
          </div>
        </div>
      </div>
    </template>
  </a-expansion-panel>
</template>

<script setup lang="ts">
import { type PropType, computed } from 'vue'
import type { Payment } from '@sharedInterfaces/balance/CompanyBalanceInterface'
import { useI18n } from 'vue-i18n'
import PaymentTypeEnum from '@sharedEnums/payment/PaymentTypeEnum'

const props = defineProps({
  payment: {
    type: Object as PropType<Payment>,
    required: true
  }
})

// DTO
class ActivatorSectionDto {
  title: string
  value: string | number

  constructor(title: string, value: string | number) {
    this.title = this.getTranslationValue(title)
    this.value = value
  }

  getTranslationValue(key: string): string {
    return t(`company.management.balance.dashboard.payment.section.${key}`)
  }
}

// Variables
const { t } = useI18n()

// Computed
const activatorSections = computed(() => {
  return [
    new ActivatorSectionDto('type', getTransactionType(props.payment.type)),
    new ActivatorSectionDto('amount', `${props.payment.amount}€`),
    new ActivatorSectionDto('date', props.payment.date)
  ]
})

const getTransactionType = (key: number) => {
  return t(`payment.type.${PaymentTypeEnum.getFieldName(key)?.toLowerCase()}`)
}

const paymentIcon = computed(() => {
  return [PaymentTypeEnum.PURCHASE, PaymentTypeEnum.WITHDRAWAL].includes(props.payment.type)
    ? 'trending_down'
    : 'trending_up'
})

const paymentIconColor = computed(() => {
  switch (props.payment.type) {
    case PaymentTypeEnum.WITHDRAWAL:
      return 'info'
    case PaymentTypeEnum.DEPOSIT:
      return 'disabled'
    case PaymentTypeEnum.SALE:
      return 'success'
    case PaymentTypeEnum.PURCHASE:
      return 'danger'
    default:
      return 'info'
  }
})

const receiverEntityData = computed(() => [
  {
    title: t('company.management.balance.dashboard.list.item.receiver.name'),
    subtitle: props.payment.receiver.name
  },
  {
    title: t('company.management.balance.dashboard.list.item.receiver.email'),
    subtitle: props.payment.receiver.email
  },
  {
    title: t('company.management.balance.dashboard.list.item.receiver.phone'),
    subtitle: props.payment.receiver.phoneNumber
  },
  {
    title: t('company.management.balance.dashboard.list.item.receiver.contactPerson'),
    subtitle: props.payment.receiver.contactPerson
  },
  {
    title: t('company.management.balance.dashboard.list.item.receiver.address'),
    subtitle: props.payment.receiver.address
  }
])

const senderEntityData = computed(() => [
  {
    title: t('company.management.balance.dashboard.list.item.sender.name'),
    subtitle: props.payment.receiver.name
  },
  {
    title: t('company.management.balance.dashboard.list.item.sender.email'),
    subtitle: props.payment.receiver.email
  },
  {
    title: t('company.management.balance.dashboard.list.item.sender.phone'),
    subtitle: props.payment.receiver.phoneNumber
  },
  {
    title: t('company.management.balance.dashboard.list.item.sender.contactPerson'),
    subtitle: props.payment.receiver.contactPerson
  },
  {
    title: t('company.management.balance.dashboard.list.item.sender.address'),
    subtitle: props.payment.receiver.address
  }
])
</script>

<style lang="scss" scoped>
.payment-dashboard-payment-list-item {
  &__activator {
    justify-content: space-between;
    max-height: 60px;
  }

  &__content {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }

  &__content-column {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: $global-spacing-20;
  }

  &__content-column-item-data {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;
  }
}
</style>
