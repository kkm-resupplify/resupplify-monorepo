<template>
  <div class="m-navigation-tabs-item">
    <a-icon v-if="tab.icon" :icon="tab.icon" size="xx-large" />

    <a-link :text="tab.title" :link="tab.to" size="large" />
  </div>
</template>

<script setup lang="ts">
import type { MNavigationTabsItemData } from '@sharedInterfaces/MNavigationTabsInterface'
import { type PropType } from 'vue'

defineProps({
  tab: {
    type: Object as PropType<MNavigationTabsItemData>,
    required: true
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
