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

  border-radius: 4px;
  background: var(--bg-primary, #fff);

  /* global-boxshadow/primary-2 */
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.44);
}
</style>
