<template>
  <m-tile :to="productLink" class="product-list-item">
    <div class="product-list-item__body">
      <span class="product-list-item__name" v-text="product.name" />

      <div class="product-list-item__status">
        <span class="product-list-item__status-title">Status</span>

        <span v-text="status" />
      </div>

      <div class="product-list-item__tags">
        <span class="product-list-item__tags-title">Tags</span>

        <div class="product-list-item__tags-items">
            <span v-for="tag in tags" v-text="tag"/>
        </div>
      </div>
    </div>
  </m-tile>
</template>
<script setup lang="ts">
import type { Product } from '@/interface/product/ProductInterface'
import type { PropType } from 'vue'
import { computed } from 'vue'
import { RouteNames } from '@/routes'

const props = defineProps({
  product: { type: Object as PropType<Product>, required: true }
})

const status = computed(() => 'active')
const tags = computed(() => ['bread', 'water', 'whatever'])

const productLink = computed(() => {
  return {
    name: RouteNames.COMPANY_PRODUCT_PREVIEW,
    params: {
      id: props.product.id
    }
  }
})
</script>

<style scoped lang="scss">
.product-list-item {
  min-width: 600px;

  &__body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  &__name {
    font-size: $global-font-size-80;
  }

  &__status {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-20;
  }

  &__status-title {
    font-size: $global-font-size-60;
  }

  &__tags-items {
    display: flex;
    gap: $global-spacing-30;
  }
}
</style>
