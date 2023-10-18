<template>
  <basic-view-layout class="register-view">
    <template #body>
      <div class="register-view__box">
        <register-hero-section />

        <register-form-section />
      </div>
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import RegisterHeroSection from './components/sections/RegisterHeroSection.vue'
import RegisterFormSection from './components/sections/RegisterFormSection.vue'
</script>

<style lang="scss" scoped>
.register-view {
  &__box {
    display: flex;
    align-self: center;
    width: 800px;
    height: 600px;
  }
}
</style>
