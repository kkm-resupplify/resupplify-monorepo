<template>
  <div class="company-card-list"></div>
</template>

<script setup lang="ts">
const props = defineProps({
  companies: {
    type: Object,
    required: true
  }
})
</script>

<style scoped lang="scss"></style>
