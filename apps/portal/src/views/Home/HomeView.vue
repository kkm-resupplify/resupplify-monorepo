<template>
  <navigation-bar />
  <div>Hero</div>
  <partners-section />
  <div>Bestseller</div>
</template>

<script setup lang="ts">
// Vue
import { ref } from 'vue'

// Components
import NavigationBar from '@/components/navigation/NavigationBar.vue'
import PartnersSection from './components/PartnersSection.vue'
</script>
