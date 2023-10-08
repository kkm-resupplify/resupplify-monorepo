<template>
  <div class="test-form">
    <v-form>
      <m-text-field
        name="email"
        input-type="email"
        :label="$t('auth.form.emailAddress')"
        :placeholder="$t('auth.form.emailAddressPlaceholder')"
        autocomplete="username"
        rules="required|email"
      />

      <div class="m-stepper__footer">
        <a-button text="Back" @click="handlePreviousStep" />

        <a-button text="Next step" @click="handleNextStep" />
      </div>
    </v-form>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['next-step', 'previous-step'])

const handleNextStep = () => {
  console.log('testform2 next')
  emits('next-step')
}

const handlePreviousStep = () => {
  console.log('testform2 prev')
  emits('previous-step')
}
</script>
