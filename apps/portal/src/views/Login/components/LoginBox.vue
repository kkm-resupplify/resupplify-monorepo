<template>
  <div class="login-box">
    <login-box-left-section />
    <login-box-right-section />
  </div>
</template>

<script setup lang="ts">
import LoginBoxLeftSection from './sections/LoginBoxLeftSection.vue'
import LoginBoxRightSection from './sections/LoginBoxRightSection.vue'
</script>

<style scoped lang="scss">
.login-box {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  width: 852px;
  height: 644px;
}
</style>
