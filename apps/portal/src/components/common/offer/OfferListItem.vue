<template>
  <a-list-item-wrapper class="offer-list-item">
    <a-image
      :src="offer.product.logoSrc"
      :width="120"
      :height="120"
      :alt="$t('common.offer.list.item.imageAlt')"
      variant="rounded"
    />

    <div class="offer-list-item__information">
      <div class="offer-list-item__product-information">
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

      <div class="offer-list-item__order-information">
        <div class="offer-list-item__order-price">
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

        <a-button :text="$t('global.addToCart')" size="x-large" />
      </div>
    </div>
  </a-list-item-wrapper>
</template>

<script setup lang="ts">
import type { Offer } from '@sharedInterfaces/offer/OfferInterface'
import ProductTagList from '@/components/common/product/ProductTagList.vue'
import type { PropType } from 'vue'

defineProps({
  offer: {
    type: Object as PropType<Offer>,
    required: true
  }
})
</script>

<style scoped lang="scss">
.offer-list-item {
  &__information {
    display: flex;
    justify-content: space-between;
    width: 100%;
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
  }

  &__order-price {
    display: flex;
    gap: $global-spacing-20;
  }
}
</style>