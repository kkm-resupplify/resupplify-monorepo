<template>
  <div class="login-header">
    <h2 class="login-header--text">{{ headerText }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  headerText: string
}>()
</script>

<style scoped lang="scss">
.login-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  justify-content: center;
  height: 298px;

  &--text {
    align-self: stretch;
    font-family: Syne;
    font-size: 64px;
    font-weight: 400;
    font-style: normal;
    line-height: normal;
    color: var(--themes-light-background-primary-default, #f5f5f5);
  }
}
</style>
