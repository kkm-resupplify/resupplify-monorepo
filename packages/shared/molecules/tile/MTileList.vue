<template>
  <div :class="generateClasses">
    <m-tile
      v-for="(tile, index) in tiles"
      :key="index"
      :title="tile.title"
      :to="tile.to"
      :icon="tile.icon"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
interface Route {
  name: string
}

interface Tile {
  title: string
  icon: string
  to: string | Route
}

const props = defineProps({
  tiles: { type: Array as PropType<Tile[]>, required: true }
})

// Variables
const baseClass = 'm-tile-list'
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})
</script>

<style lang="scss" scoped>
.m-tile-list {
  display: flex;
}
</style>
