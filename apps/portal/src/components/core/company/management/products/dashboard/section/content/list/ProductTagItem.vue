<template>
  <span class="product-tag-item" v-text="name" />
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
    required: true
  }
})

// Variables
const textColor = computed(() => {
  return props.color
})
</script>
<style scoped lang="scss">
.product-tag-item {
  color: v-bind(textColor);
}
</style>
