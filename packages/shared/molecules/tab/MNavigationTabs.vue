<template>
  <div :class="generateClasses">
    <div class="m-tabs__navigation">
      <m-navigation-tabs-item v-for="(tab, index) in tabs" :key="index" :tab="tab" />

      <div class="m-tabs__append">
        <slot name="append" />
      </div>
    </div>

    <div class="m-tabs__content">
      <component :is="currentTabComponent.component" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import type { MNavigationTabsItemData } from '@sharedInterfaces/MNavigationTabsInterface'
import MNavigationTabsItem from './MNavigationTabsItem.vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  tabs: {
    type: Array as PropType<MNavigationTabsItemData[]>,
    required: true
  }
})

// Variables
const baseClass = 'm-tabs'
const route = useRoute()
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})

const hash = computed(() => {
  return route.hash
})

const currentTabComponent = computed(() => {
  return props.tabs.find((tab) => tab.to === hash.value) ?? props.tabs[0]
})
</script>

<style scoped lang="scss">
.m-tabs {
  display: flex;
  min-height: 800px;
  padding: $global-spacing-40;

  &__navigation {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;

    padding: $global-spacing-30;

    background-color: var(--secondary-1);
    border-radius: $global-border-radius-10 0 0 $global-border-radius-10;
  }

  &__append {
    display: flex;
    flex: 1;
    padding: $global-spacing-30;
  }

  &__content {
    display: flex;
    flex: 1;

    padding: $global-spacing-30;

    background-color: var(--secondary-3);
    border-radius: 0 $global-border-radius-10 $global-border-radius-10 0 0;
  }
}
</style>
