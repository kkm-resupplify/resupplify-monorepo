<template>
  <div class="company-management-panel">
    <slot name="header" />

    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.company-management-panel {
  display: flex;
  flex-direction: column;
  max-height: 800px;
  padding: $global-spacing-40 $global-spacing-50;
}
</style>
