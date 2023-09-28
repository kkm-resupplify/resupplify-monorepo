<template>
  <div class="register-left-section">
    <div class="register-left-section__form"></div>
    <a-text-field
      :label="$t('auth.form.emailAddress')"
      :placeholder="$t('auth.form.emailAddressPlaceholder')"
    />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.register-left-section {
  display: flex;

  width: 50%;
  padding: $global-spacing-50;

  background: var(--secondary-1);
  border-radius: 0 $global-border-radius-20 $global-border-radius-20 0;
}
</style>
