<template>
  <div>Halo halo</div>
  {{ t('global.welcome') }}
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped></style>
