<template></template>

<script setup lang="ts">
defineProps({
  itemName: {
    type: String,
    required: true
  },
  type: {
    type: String,
    validator: (value: string) => ['add', 'remove', 'delete'].includes(value)
  },
  text: {
    type: String,
    default: 'text'
  }
})
</script>

<style scoped lang="scss"></style>
