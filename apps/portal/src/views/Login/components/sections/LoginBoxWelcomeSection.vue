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
  box-sizing: border-box;
  flex-direction: column;
  padding-inline: $global-spacing-40;
  align-self: stretch;
  margin-bottom: $global-spacing-70;
  background: var(--primary-gradient);
  border-radius: $global-border-radius-20 $global-border-radius-20 0 0;

  @media (#{map-get($screen-breakpoints, 'md-and-up')}) {
    width: 50%;
    margin-bottom: 0;
    text-align: left;
    border-radius: $global-border-radius-20 0 0 $global-border-radius-20;
    padding-left: $global-spacing-70;
  }
}
</style>
