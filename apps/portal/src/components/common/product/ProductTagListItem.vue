<template>
  <span class="product-tag-list-item" v-text="name" />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#00ff00'
  }
})

// Computed
const colorStyle = computed(() => props.color)
const backgroundColorStyle = computed(() => `${props.color}10`)
</script>

<style lang="scss" scoped>
.product-tag-list-item {
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  padding: $global-spacing-10 $global-spacing-30;

  font-size: $global-font-size-30;
  color: v-bind(colorStyle);

  background-color: v-bind(backgroundColorStyle);
  border: 1px solid v-bind(colorStyle);
  border-radius: $global-border-radius-30;
}
</style>
