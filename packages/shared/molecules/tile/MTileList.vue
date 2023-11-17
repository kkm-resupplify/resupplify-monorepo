<template>
  <div :class="generateClasses">
    <slot>
      <m-tile
        v-for="(tile, index) in tiles"
        :key="index"
        :title="tile.title"
        :to="tile.to"
        :icon="tile.icon"
      />
    </slot>
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

defineProps({
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
  overflow-y: auto;
  display: grid;
  grid-auto-flow: row;
  grid-gap: $global-spacing-100;
  grid-template-columns: repeat(7, auto);
  align-self: self-start;

  max-width: 100%;
  max-height: 100%;
  padding: $global-spacing-20;
}
</style>
