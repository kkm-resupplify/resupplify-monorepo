<template>
  <div class="m-auth-user-menu">
    <a-link link="/user/id" :text="$t('auth.user.account')" size="medium" />
    <a-link link="/user/id/settings" :text="$t('auth.user.settings')" size="medium" />
    <a-link link="/user/id/companies" :text="$t('auth.user.companies')" size="medium" />
    <a-button :text="$t('auth.user.logout')" size="medium" class="m-auth-user-menu__logout" />
    <div class="m-auth-user-menu__triangle"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
@mixin boxshadow-primary-2 {
  box-shadow: #{$global-boxshadow-primary-2-x} #{$global-boxshadow-primary-2-y} #{$global-boxshadow-primary-2-blur}
    #{$global-boxshadow-primary-2-spread} #{$global-boxshadow-primary-2-color};
}

.m-auth-user-menu {
  @include boxshadow-primary-2;

  position: absolute;
  z-index: 9999;
  top: 68px;
  right: $global-spacing-70;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 200px;
  padding: $global-spacing-100 $global-spacing-40;

  background: var(--primary);
  border-radius: $global-border-radius-30;

  &__logout {
    margin-top: $global-spacing-60;
  }
}
</style>
