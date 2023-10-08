<template>
  <basic-view-layout>
    <template #body>
      <user-details-box />
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import UserDetailsBox from './components/UserDetailsBox.vue'
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
</script>
