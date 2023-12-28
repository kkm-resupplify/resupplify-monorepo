<template>
  <div class="m-navigation-tabs-item">
    <a-icon v-if="tab.icon" :icon="tab.icon" :size="iconSize" />

    <a-link :text="tab.title" :link="tab.to" :size="textSize" />
  </div>
</template>

<script setup lang="ts">
import type { MNavigationTabsItemData } from '@sharedInterfaces/MNavigationTabsInterface'
import { type PropType } from 'vue'

defineProps({
  tab: {
    type: Object as PropType<MNavigationTabsItemData>,
    required: true
  },
  textSize: {
    type: String,
    default: 'large'
  },
  iconSize: {
    type: String,
    default: 'large'
  }
})
</script>

<style lang="scss" scoped>
.m-navigation-tabs-item {
  display: flex;
  gap: $global-spacing-30;
  align-items: center;
  width: 100%;
}
</style>
