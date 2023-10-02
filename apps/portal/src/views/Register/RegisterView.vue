<template>
  <basic-view-layout class="register-view">
    <template #body>
      <div class="register-view__box">
        <register-left-section />

        <register-right-section />
      </div>
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import RegisterLeftSection from './components/sections/RegisterLeftSection.vue'
import RegisterRightSection from './components/sections/RegisterRightSection.vue'
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
