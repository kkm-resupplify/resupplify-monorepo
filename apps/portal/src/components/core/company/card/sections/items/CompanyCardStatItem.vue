import AButton from '@sharedAtoms/button/AButton.vue';
<template>
  <div class="company-card-stat-item">
    <a-icon :icon="icon" size="large" outlined />

    {{ numberFormatter(value) }}
  </div>
</template>

<script setup lang="ts">
// Components
import AIcon from '@sharedAtoms/icon/AIcon.vue'

// Composables
import { useShortNumberFormatComposable } from '@sharedComposables/numeric/useShortNumberFormatComposable'

// Props
defineProps({
  icon: { type: String, required: true },
  value: { type: Number, required: true }
})

// Inits
const numberFormatter = useShortNumberFormatComposable()
</script>

<style scoped lang="scss">
.company-card-stat-item {
  display: flex;
  gap: $global-spacing-20;
  align-items: center;

  padding: $global-spacing-10;

  color: #ffffffde !important;

  & * {
    color: #ffffffde !important;
  }
}
</style>
