<template>
  <basic-view-layout>
    <template #body>
      <user-details-form />
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import UserDetailsForm from './components/UserDetailsForm.vue'
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
</script>
