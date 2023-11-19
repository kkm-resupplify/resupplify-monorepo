<template>
  <template v-if="isLoading"> implement-loader-here </template>

  <a-panel v-else>
    <product-header-section />
  </a-panel>
</template>
<script setup lang="ts">
import ProductHeaderSection from './header/ProductHeaderSection.vue'
import { ref } from 'vue'

const isLoading = ref(false)
</script>
