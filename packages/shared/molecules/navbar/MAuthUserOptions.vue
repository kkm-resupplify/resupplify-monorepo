<template>
  <div class="m-auth-user-options">
    <a-link link="/user/id" :text="$t('auth.user.account')" size="medium" />
    <a-link link="/user/id/settings" :text="$t('auth.user.settings')" size="medium" />
    <a-link link="/user/id/companies" :text="$t('auth.user.companies')" size="medium" />
    <a-button :text="$t('auth.user.logout')" size="medium" />
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.m-auth-user-options {
  display: flex;
  flex-direction: column;
}
</style>
