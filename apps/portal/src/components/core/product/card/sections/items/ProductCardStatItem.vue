<template>
  <div class="product-card-stat-item">
    <a-icon :icon="icon" size="x-large" />

    <a-title
      class="product-card-stat-item__value"
      :title="numberFormatter(value)"
      size="x-normal"
    />
  </div>
</template>

<script setup lang="ts">
import { useShortNumberFormatComposable } from '@sharedComposables/numeric/useShortNumberFormatComposable'
import AIcon from '@sharedAtoms/icon/AIcon.vue'

defineProps({
  icon: {
    type: String,
    required: true
  },

  value: {
    type: Number,
    required: true
  }
})

// Variables
const numberFormatter = useShortNumberFormatComposable()
</script>

<style scoped lang="scss">
.product-card-stat-item {
  display: flex;
  align-items: center;

  &__value {
    display: flex;
    font-size: $global-font-size-40;

    :deep(.a-title__title) {
      color: $themes-light-text-primary;
    }
  }

  :deep(.a-icon) {
    color: $themes-light-text-primary;
  }
}
</style>
