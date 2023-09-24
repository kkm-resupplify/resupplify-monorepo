<template>
  <basic-view-layout class="test-view">
    <template #body>
      <a-button text="testApi" @click="testApi" />
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import AButton from '@sharedAtoms/button/AButton.vue'
import AuthService from '@/services/auth/AuthService'

// Methods
const testApi = () => {
  const email = 'Test'
  const password = 'Password'

  const response = AuthService.login({ email, password })
}
</script>

<style lang="scss" scoped>
.test-view {
  display: flex;
}
</style>
