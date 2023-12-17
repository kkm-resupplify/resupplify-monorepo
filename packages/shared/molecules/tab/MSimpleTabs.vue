<template>
  <div :class="generateClasses">
    <div class="m-simple-tabs__navigation">
      <m-navigation-tabs-item
        v-for="(tab, index) in tabs"
        :key="index"
        :tab="tab"
        :text-size="textSize"
        :icon-size="iconSize"
      />
    </div>

    <a-line />

    <div class="m-simple-tabs__content">
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
  },
  textSize: {
    type: String,
    default: 'large'
  },
  iconSize: {
    type: String,
    default: 'large'
  },
  vertical: Boolean
})

// Variables
const baseClass = 'm-simple-tabs'
const route = useRoute()
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  const verticalClass = props.vertical ? 'horizontal' : ''

  return generateClassNames(baseClass, [verticalClass])
})

const hash = computed(() => {
  return route.hash
})

const currentTabComponent = computed(() => {
  return props.tabs.find((tab) => tab.to === hash.value) ?? props.tabs[0]
})
</script>

<style scoped lang="scss">
.m-simple-tabs {
  $self: &;

  display: flex;
  flex-direction: column;
  gap: $global-spacing-20;

  &__navigation {
    display: flex;
    gap: $global-spacing-30;
    justify-content: flex-end;
  }

  &__content {
    display: flex;
  }

  &--vertical {
    #{$self}__navigation {
      flex-direction: column;
    }
  }

  :deep(.m-navigation-tabs-item) {
    width: auto;
  }
}
</style>
