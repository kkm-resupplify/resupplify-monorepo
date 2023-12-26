<template>
  <div class="product-tag">
    <span class="product-tag__text" v-text="productTag.name" />

    <m-icon v-if="showRemove" icon="close" size="small" hoverable @click.stop="$emit('remove')" />
  </div>
</template>

<script setup lang="ts">
import type { ProductTag as ProductTagInterface } from '@sharedInterfaces/product/ProductTagInterface'
import { computed, type PropType } from 'vue'

const props = defineProps({
  productTag: { type: Object as PropType<ProductTagInterface>, required: true },
  fontSize: { type: String, default: '12px' },
  showRemove: Boolean
})

// Emits
defineEmits(['remove'])

// Computed
const colorStyle = computed(() => props.productTag.color)

const backgroundColorStyle = computed(() => `${props.productTag.color}10`)

const fontSizeStyle = computed(() => props.fontSize)
</script>

<style lang="scss" scoped>
.product-tag {
  display: flex;
  gap: $global-spacing-10;
  align-items: center;
  justify-content: center;

  width: fit-content;
  padding: $global-spacing-10 $global-spacing-30;

  font-size: v-bind(fontSizeStyle);

  background-color: v-bind(backgroundColorStyle);
  border: 1px solid v-bind(colorStyle);
  border-radius: $global-border-radius-30;

  &__text {
    color: v-bind(colorStyle);
  }
}
</style>
