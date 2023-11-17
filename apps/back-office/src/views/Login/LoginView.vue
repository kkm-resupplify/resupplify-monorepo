<template>
  <div class="login-view">
    <a-general-notification />

    <div class="login-view__content">
      <login-hero-section />

      <login-form-section />
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginHeroSection from './components/sections/LoginHeroSection.vue'
import LoginFormSection from './components/sections/LoginFormSection.vue'
</script>

<style lang="scss" scoped>
.login-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;

  &__content {
    @include boxshadow-primary-2;

    display: flex;
    align-self: center;

    width: 800px;
    height: 600px;

    border-radius: $global-border-radius-10;
  }
}
</style>
