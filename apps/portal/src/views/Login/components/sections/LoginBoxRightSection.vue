<template>
  <div class="login-box-right-section">
    <a-text-input
      v-for="field in formFields"
      :id="field.id"
      :type="field.type"
      :name="field.name"
      :label="field.label"
      :placeholder="field.placeholder"
    />
    <a-button text="Log in" size="x-large" />
    <a-link link="/password/reset" text="Forgot password?" size="xl"/>
    <div class="login-box-right-section--sign-up">
      <p>Don't have an account?</p>
      <a-link link="/register" text="Sign up" size="xl"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import ATextInput from '@sharedAtoms/textInput/ATextInput.vue'
import AButton from '@sharedAtoms/button/AButton.vue'
import ALink from '@sharedAtoms/link/ALink.vue'
const formFields = [
  {
    id: 'email',
    type: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'Enter your email'
  },
  {
    id: 'password',
    type: 'password',
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password'
  },
  {
    id: 'password-conf',
    type: 'password',
    name: 'password-conf',
    label: 'Password confirmation',
    placeholder: 'Repeat your password'
  }
]
</script>

<style scoped lang="scss">
.login-box-right-section {
  display: flex;
  padding: 0 76px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: $global-spacing-100;
  flex: 1 0 0;
  align-self: stretch;
  &--sign-up {
    display: flex;
    align-items: center;
    gap: $global-spacing-20;
  }
}
</style>
