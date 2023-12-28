<template>
  <a-panel-section class="offer-preview-header-section">
    <a-title :title="offer.product.name" size="xx-large" />

    <a-title :title="offer.product.code" />

    <div class="offer-preview-header-section__information">
      <a-image
        :src="offer.product.image"
        :width="120"
        :height="120"
        :alt="$t('common.offer.list.item.imageAlt')"
        variant="rounded"
      />
      <div class="offer-preview-header-section__product-information">
        <a-title
          :title="$t('common.offer.list.item.product.name')"
          :subtitle="offer.product.name"
          variant="horizontal"
          append-colon
        />

        <a-title
          :title="$t('common.offer.list.item.product.category')"
          :subtitle="offer.product.productCategory.name"
          variant="horizontal"
          append-colon
        />

        <a-title
          :title="$t('common.offer.list.item.product.subcategory')"
          :subtitle="offer.product.productSubcategory.name"
          variant="horizontal"
          append-colon
        />

        <product-tag-list :product-tags="offer.product.productTags" />
      </div>

      <div class="offer-preview-header-section__order-information">
        <div class="offer-preview-header-section__order-price">
          <a-title :title="$t('common.offer.list.item.price')" variant="horizontal" append-colon />

          <a-currency :value="offer.price" size="small" />
        </div>

        <a-title
          :title="$t('common.offer.list.item.available')"
          :subtitle="offer.productQuantity"
          variant="horizontal"
          append-colon
        />

        <a-title
          :title="$t('common.offer.list.item.ends')"
          :subtitle="offer.endsAt"
          variant="horizontal"
          append-colon
        />

        <a-button :text="$t('global.addToCart')" size="x-large" @click="handleAddToCart" />
      </div>
    </div>
  </a-panel-section>
</template>

<script setup lang="ts">
import { useUserCartStore } from '@/stores/user/useUserCartStore'
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import { computed, type PropType } from 'vue'

const props = defineProps({
  offer: { type: Object as PropType<Offer>, required: true }
})

// Variables
const userCartStore = useUserCartStore()

// Computed
const isOfferInCart = computed(() => props.offer && userCartStore.isOfferInCart(props.offer))

// Methods
const handleAddToCart = () => {
  if (!props.offer) return
  if (isOfferInCart.value) userCartStore.removeCartItem(props.offer.id)
  else userCartStore.addToCart(props.offer)
}
</script>

<style scoped lang="scss">
.offer-preview-header-section {
  &__information {
    display: flex;
    gap: $global-spacing-50;

    width: 100%;
    margin-top: $global-spacing-70;

    white-space: nowrap;
  }

  &__product-information {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;
  }

  &__order-information {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;
    align-items: flex-end;

    margin-left: auto;
  }

  &__order-price {
    display: flex;
    gap: $global-spacing-20;
  }
}
</style>
