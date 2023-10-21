<template>
  <basic-view-layout class="login-view">
    <template #body>
      <div class="login-view__content">
        <login-hero-section />

        <login-form-section />
      </div>
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import LoginHeroSection from './components/sections/LoginHeroSection.vue'
import LoginFormSection from './components/sections/LoginFormSection.vue'
</script>

<style lang="scss" scoped>
.login-view {
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
