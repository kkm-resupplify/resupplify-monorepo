<template>
  <company-view-layout>
    <template #tiles>
      <m-tile
        v-for="(tile, index) in tiles"
        :key="index"
        :title="tile.title"
        :to="tile.to"
        :icon="tile.icon"
      />
    </template>
  </company-view-layout>
</template>

<script setup lang="ts">
import { RouteNames } from '@/routes/index'
import { computed } from 'vue'
import CompanyViewLayout from '@/layouts/view/CompanyViewLayout.vue'

// Computed
const tiles = computed(() => [
  {
    title: 'Active Members',
    icon: 'groups',
    to: { name: RouteNames.HOME }
  }
])
</script>
