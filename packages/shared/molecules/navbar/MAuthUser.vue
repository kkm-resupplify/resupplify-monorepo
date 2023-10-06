<template>
  <div class="m-auth-user">
    <a-icon icon="supervised_user_circle" size="x-large" />
    <m-auth-user-menu />
  </div>
</template>
<script setup lang="ts">
import MAuthUserMenu from './MAuthUserMenu.vue'
</script>
<style scoped lang="scss">
.m-auth-user {
  // width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
