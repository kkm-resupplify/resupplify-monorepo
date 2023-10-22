<template>
  <div class="m-tabs-item">
    <a-icon v-if="tab.icon" :icon="tab.icon" size="xx-large" />

    <a-link :text="tab.title" :link="tab.to" size="large" />
  </div>
</template>

<script setup lang="ts">
import type { MTabsItemData } from '@sharedInterfaces/MTabsInterface'
import { type PropType } from 'vue'

defineProps({
  tab: {
    type: Object as PropType<MTabsItemData>,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.m-tabs-item {
  display: flex;
  gap: $global-spacing-30;
  align-items: center;
  width: 100%;
}
</style>
