<template>
  <basic-view-layout>
    <template #body>
      <user-details-form />
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
  import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import UserDetailsForm from './components/sections/UserDetailsForm.vue';
</script>
