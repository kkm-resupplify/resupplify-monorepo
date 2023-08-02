<template>
  <div>
    <a-button :text="$t('global.welcome')" size="small" />
    <a-button :text="$t('global.goodbye')" size="medium" />
    <a-button :text="$t('payments.payNow')" size="large" />
  </div>
</template>

<script setup lang="ts">
import AButton from '@sharedAtoms/button/AButton.vue'
</script>
