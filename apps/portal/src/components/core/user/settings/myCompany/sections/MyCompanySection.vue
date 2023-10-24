<template>
  <div class="my-company-section">
    <div class="my-company-section__header">My company header</div>
    <div class="my-company-section__content">My company content</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.my-company-section {
  display: flex;
  flex-direction: column;
  gap: $global-spacing-50;
}
</style>
