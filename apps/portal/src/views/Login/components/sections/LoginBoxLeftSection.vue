<template>
  <div class="login-box-left-section">
    <login-header header-text="Welcome back" />
  </div>
</template>

<script setup lang="ts">
import LoginHeader from '../LoginHeader.vue'
</script>

<style scoped lang="scss">
.login-box-left-section {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: $global-spacing-20;
  align-items: center;
  align-self: stretch;

  width: 386px;
  padding: 0 $global-spacing-70;

  background: var(
    --global-gradients-blue-primary,
    linear-gradient(90deg, #002e73 0%, #002e73 0.52%, #1d76fb 100%)
  );
  border-radius: $global-border-radius-20;
}
</style>
