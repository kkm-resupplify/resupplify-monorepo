<template>
  <div :class="generateClasses">
    <div class="m-tabs__tab-list">
      <m-tabs-item v-for="(tab, index) in tabs" :key="index" :tab="tab" />
    </div>

    <div class="m-tabs__button">
      <slot name="button" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import type { MTabsItemData } from '@sharedInterfaces/MTabsInterface'
import MTabsItem from './MTabsItem.vue'

const props = defineProps({
  tabs: {
    type: Array as PropType<MTabsItemData[]>,
    required: true
  }
})

// Variables
const baseClass = 'm-tabs'
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})
</script>

<style scoped lang="scss">
.m-tabs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: $global-spacing-100;

  background: var(--secondary-1);

  &__tab-list {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
  }

  &__button {
    align-self: flex-end;
  }
}
</style>
