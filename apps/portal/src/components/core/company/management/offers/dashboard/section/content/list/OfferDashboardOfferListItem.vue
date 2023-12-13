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
                :type="activationType"
                :title="activationTypeTitle"
                :content="activationTypeContent"
              >
                <template #activator>
                  <span v-text="$t(`global.${activationType}`)" />
                </template>
              </o-confirm-dialog>

              <o-confirm-dialog
                type="delete"
                :title="
                  $t('company.management.balance.dashboard.offer.section.dialog.titleDeletion')
                "
                :content="
                  $t('company.management.balance.dashboard.offer.section.dialog.contentDeletion')
                "
              >
                <template #activator>
                  <span v-text="$t(`global.delete`)" />
                </template>
              </o-confirm-dialog>
            </div>
          </template>
        </a-dropdown>
      </a-list-item-wrapper>
    </template>

    <template #content>
      <div class="offer-dashboard-offer-list-item__content">
        <a-title
          :title="$t('company.management.balance.dashboard.offer.section.productCode')"
          :subtitle="offer.product.code"
          variant="horizontal"
          size="large"
          append-colon
        />

        <a-title
          :title="$t('company.management.balance.dashboard.offer.section.productDescription')"
          :subtitle="offer.product.description"
          variant="horizontal"
          size="large"
          append-colon
        />

        <a-title
          :title="$t('company.management.balance.dashboard.offer.section.productProducer')"
          :subtitle="offer.product.producer"
          variant="horizontal"
          size="large"
          append-colon
        />

        <div class="offer-dashboard-offer-list-item__content-tags">
          <a-title
            v-if="offer.product.productTags.length"
            :title="$t('company.management.balance.dashboard.offer.section.productTags')"
            size="large"
            append-colon
          />

          <product-tag-list :product-tags="offer.product.productTags" />
        </div>
      </div>
    </template>
  </a-expansion-panel>
</template>

<script setup lang="ts">
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import type { PropType } from 'vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ProductTagList from '@/components/common/product/ProductTagList.vue'

const props = defineProps({
  offer: {
    type: Object as PropType<Offer>,
    required: true
  }
})

// DTO
class ExpansionPanelSectionDto {
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
    new ExpansionPanelSectionDto('netPrice', `${props.offer.product.netPrice}$`),
    new ExpansionPanelSectionDto('unit', props.offer.product.productUnit.code),
    new ExpansionPanelSectionDto('supply', props.offer.product.supply),
    new ExpansionPanelSectionDto('quantity', props.offer.product.quantity)
  ]
})

const activationType = computed(() => (props.offer.status === 0 ? 'deactivate' : 'activate'))

const activationTypeTitle = computed(() =>
  props.offer.status === 0
    ? t('company.management.balance.dashboard.offer.section.dialog.titleDeactivation')
    : t('company.management.balance.dashboard.offer.section.dialog.titleActivation')
)

const activationTypeContent = computed(() =>
  props.offer.status === 0
    ? t('company.management.balance.dashboard.offer.section.dialog.contentDeactivation')
    : t('company.management.balance.dashboard.offer.section.dialog.contentActivation')
)
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

  &__content {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-40;
    white-space: nowrap;
  }

  &__content-tags {
    display: flex;
    gap: $global-spacing-40;
  }
}
</style>
