<template>
  <a-expansion-panel class="offer-dashboard-offer-list-item">
    <template #activator>
      <a-list-item-wrapper class="offer-dashboard-offer-list-item__activator">
        <a-title :title="offer.product.name" />

        <a-list-item-title-section
          v-for="(activatorSection, idx) in activatorSections"
          :key="idx"
          :title="activatorSection.title"
          :value="activatorSection.value"
        />

        <a-dropdown @click.stop>
          <template #activator>
            <div class="offer-dashboard-offer-list-item__dropdown-activator">
              <a-icon icon="more_vert" size="xx-large" hoverable />
            </div>
          </template>

          <template #content>
            <div class="offer-dashboard-offer-list-item__dropdown-content">
              <o-confirm-dialog
                :activator-name="$t(`global.${operationType}`)"
                activator-size="small"
                color="gradient-danger"
                :type="operationType"
                :title="
                  $t('company.management.balance.dashboard.offer.section.dialog.titleActivation')
                "
                :content="
                  $t('company.management.balance.dashboard.offer.section.dialog.contentActivation')
                "
              />

              <a-title :title="$t('global.delete')" />
            </div>
          </template>
        </a-dropdown>
      </a-list-item-wrapper>
    </template>

    <template #content>
      <div class="offer-dashboard-offer-list-item__content"></div>
    </template>
  </a-expansion-panel>
</template>

<script setup lang="ts">
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import type { PropType } from 'vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  offer: {
    type: Object as PropType<Offer>,
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
    return t(`company.management.balance.dashboard.offer.section.${key}`)
  }
}

// Variables
const { t } = useI18n()

// Computed
const activatorSections = computed(() => {
  return [
    new ActivatorSectionDto('netPrice', `${props.offer.product.netPrice}$`),
    new ActivatorSectionDto('unit', props.offer.product.productUnit.code),
    new ActivatorSectionDto('supply', props.offer.product.supply),
    new ActivatorSectionDto('quantity', props.offer.product.quantity)
  ]
})

const contentSectionsTitles = computed(() => {
  return [
    new ActivatorSectionDto('productCode', props.offer.product.code),
    new ActivatorSectionDto('productDescription', props.offer.product.description),
    new ActivatorSectionDto('productProducer', props.offer.product.producer)
  ]
})

const operationType = computed(() => (props.offer.status === 0 ? 'deactivate' : 'activate'))
</script>

<style scoped lang="scss">
.offer-dashboard-offer-list-item {
  &__dropdown-activator {
    display: flex;
    justify-content: flex-end;
    min-width: 120px;
  }

  &__dropdown-content {
    display: flex;
    flex-direction: column;

    :deep(button) {
      width: 100%;
    }
  }
}
</style>
