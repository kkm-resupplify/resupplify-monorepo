<template>
  <div>Halo halo</div>
  {{ $t('global.welcome') }}
  {{ userStore.email }}
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user/useUserStore'

const userStore = useUserStore()
</script>

<style scoped></style>
