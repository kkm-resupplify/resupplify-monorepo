<template>
  <m-stepper-step-content class="test-form">
    <template #body>
      <v-form>
        <m-text-field
          name="email"
          input-type="email"
          :label="$t('auth.form.emailAddress')"
          :placeholder="$t('auth.form.emailAddressPlaceholder')"
          autocomplete="username"
          rules="required|email"
        />

        <m-text-field
          name="password"
          input-type="password"
          :label="$t('auth.form.password')"
          :placeholder="$t('auth.form.passwordPlaceholder')"
          autocomplete="new-password"
          rules="required|min:8|max:32"
          append-icon-on="visibility"
          append-icon-off="visibility_off"
        />

        <m-text-area name="description" label="Description" rules="required|min:8|max:32" />
      </v-form>
    </template>

    <template #footer>
      <div class="m-stepper__footer">
        <a-button text="Back" @click="handlePreviousStep" />

        <a-button text="Next step" @click="handleNextStep" />
      </div>
    </template>
  </m-stepper-step-content>
</template>

<script setup lang="ts">
const emits = defineEmits(['next-step', 'previous-step'])

const handleNextStep = () => {
  emits('next-step')
}

const handlePreviousStep = () => {
  emits('previous-step')
}
</script>
