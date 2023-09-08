<template>
  <div class="product-card-stat-item">
    <a-icon :icon="icon" size="large" variant="outlined" />

    <span class="product-card-stat-item__value" v-text="numberFormatter(value)" />
  </div>
</template>

<script setup lang="ts">
// Composables
import { useShortNumberFormatComposable } from '@sharedComposables/numeric/useShortNumberFormatComposable'

// Components
import AIcon from '@sharedAtoms/icon/AIcon.vue'

// Props
defineProps({
  icon: {
    type: String,
    required: true
  },
  value: Number
})

// Inits
const numberFormatter = useShortNumberFormatComposable()
</script>

<style scoped lang="scss">
.product-card-stat-item {
  display: flex;
  align-items: center;

  &__value {
    display: flex;
    font-size: $global-font-size-40;
  }
}
</style>
