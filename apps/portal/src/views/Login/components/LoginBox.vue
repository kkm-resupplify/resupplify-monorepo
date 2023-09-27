<template>
  <div class="login-box">
    <login-box-welcome-section />
    <login-box-form-section />
  </div>
</template>

<script setup lang="ts">
import LoginBoxWelcomeSection from './sections/LoginBoxWelcomeSection.vue'
import LoginBoxFormSection from './sections/LoginBoxFormSection.vue'
</script>

<style scoped lang="scss">
$boxshadow-primary-2: #{$global-boxshadow-primary-2-x} #{$global-boxshadow-primary-2-y} #{$global-boxshadow-primary-2-blur}
  #{$global-boxshadow-primary-2-spread} #{$global-boxshadow-primary-2-color};

.login-box {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;

  max-width: 952px;
  min-height: 644px;

  background: var(--bg-primary, #fff);
  border-radius: $global-border-radius-10;
  box-shadow: $boxshadow-primary-2;

  @media (#{map-get($screen-breakpoints, 'md-and-up')}) {
    flex-direction: row;
  }
}
</style>
