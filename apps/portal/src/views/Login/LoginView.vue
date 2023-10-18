<template>
  <basic-view-layout class="login-view">
    <template #body>
      <div class="login-view__content">
        <login-box-welcome-section />

        <login-box-form-section />
      </div>
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import LoginBoxWelcomeSection from './components/sections/LoginBoxWelcomeSection.vue'
import LoginBoxFormSection from './components/sections/LoginBoxFormSection.vue'
</script>

<style lang="scss" scoped>
@mixin boxshadow-primary-2 {
  box-shadow: #{$global-boxshadow-primary-2-x} #{$global-boxshadow-primary-2-y} #{$global-boxshadow-primary-2-blur}
    #{$global-boxshadow-primary-2-spread} #{$global-boxshadow-primary-2-color};
}

.login-view {
  &__content {
    @include respond-to('md-and-up') {
      flex-direction: row;
    }
    @include boxshadow-primary-2;

    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    align-items: center;
    align-self: center;
    justify-content: space-between;

    max-width: 952px;
    min-height: 644px;

    border-radius: $global-border-radius-10;
  }
}
</style>
