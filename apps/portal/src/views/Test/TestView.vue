<template>
  <basic-view-layout class="test-view">
    <template #body>
      <a-button text="testApi" @click="testApi" />

      <a-button text="test2" @click="testHeaders" />
    </template>
  </basic-view-layout>
</template>

<script setup lang="ts">
import BasicViewLayout from '@/layouts/view/BasicViewLayout.vue'
import AButton from '@sharedAtoms/button/AButton.vue'
import AuthService from '@/services/auth/AuthService'

// Methods
const testApi = () => {
  const email = 'email@gmail.com'
  const password = 'password'

  const response = AuthService.login({ email, password })
}

const testHeaders = () => {
  const response = AuthService.get({ id: 1 })
}
</script>

<style lang="scss" scoped>
.test-view {
  display: flex;
}
</style>
