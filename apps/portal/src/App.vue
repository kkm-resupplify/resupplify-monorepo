<template>
  <div class="main-view">
    <router-view />
  </div>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
// Background-color has to be set here, else flickering will occur when page is loaded / refreshed
.main-view {
  overflow: auto;
  flex: 1;
  background-color: var(--primary);
}
</style>
