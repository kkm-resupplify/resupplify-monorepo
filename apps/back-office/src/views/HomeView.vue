<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <hello-world msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { computed } from "vue";

// Props
const props = defineProps({ initialWidth: { type: Number, default: 0 } });

// Computed
const calculateWidth = computed(() => {
  return props.initialWidth + 10;
});
</script>
