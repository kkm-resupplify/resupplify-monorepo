<template>
  <basic-view-layout>
    <template #body>
      <login-box />
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import LoginBox from './components/LoginBox.vue'
</script>

<style scoped></style>
