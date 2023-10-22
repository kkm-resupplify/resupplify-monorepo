<template>
  <div :class="generateClasses">
    <div class="m-tabs__navigation">
      <div class="m-tabs__tab-list">
        <m-tabs-item v-for="(tab, index) in tabs" :key="index" :tab="tab" />
      </div>

      <div class="m-tabs__append">
        <slot name="append" />
      </div>
    </div>

    <div clas="m-tabs__content">
      <component :is="currentTabComponent.component" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import type { MTabsItemData } from '@sharedInterfaces/MTabsInterface'
import MTabsItem from './MTabsItem.vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  tabs: {
    type: Array as PropType<MTabsItemData[]>,
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
  padding: $global-spacing-90;
  background: var(--secondary-1);
  gap: $global-spacing-40;

  &__navigation {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__tab-list {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
  }

  &__append {
    display: flex;
    flex: 1;
  }

  &__tab-content {
    display: flex;
  }
}
</style>
