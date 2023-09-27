<template>
  <div class="login-box-welcome-section">
    <login-header header-text="Welcome back" />
  </div>
</template>

<script setup lang="ts">
import LoginHeader from '../LoginHeader.vue'
</script>

<style scoped lang="scss">
.login-box-welcome-section {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-20;
  align-items: center;
  align-self: stretch;

  margin-bottom: $global-spacing-70;
  padding-inline: $global-spacing-70;

  text-align: center;

  background: var(
    --global-gradients-blue-primary,
    linear-gradient(90deg, #002e73 0%, #002e73 0.52%, #1d76fb 100%)
  );
  border-radius: $global-border-radius-20 $global-border-radius-20 0 0;

  @media (#{map-get($screen-breakpoints, 'md-and-up')}) {
    max-width: 386px;
    margin-bottom: 0;
    text-align: left;
    border-radius: $global-border-radius-20 0 0 $global-border-radius-20;
  }
}
</style>
