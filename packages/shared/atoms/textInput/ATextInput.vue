import { ref } from 'vue';
<template>
  <div class="a-text-input">
    <label :for="props.inputId" class="a-text-input--label">{{ props.inputLabel }}</label>
    <div class="a-text-input--input-wrapper">
      <input
        :id="props.inputId"
        :type="props.inputType"
        :name="props.inputName"
        :placeholder="props.placeholder"
        class="a-text-input--input"
      />
      {{ emailText }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  placeholder: {
    type: String,
    default: 'Enter email'
  },
  inputValue: {
    type: String,
    default: ref('')
  },
  inputLabel: {
    type: String,
    default: 'Email'
  },
  inputType: {
    type: String,
    default: 'email'
  },
  inputName: {
    type: String,
    default: 'email'
  },
  inputId: {
    type: String,
    default: 'email'
  }
})

const emailText = ref('')
</script>

<style scoped lang="scss">
.a-text-input {
  display: inline-flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: $text-input-padding-sm;
  align-items: flex-start;

  height: 64px;

  &--input {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    gap: $text-input-padding-sm;
    align-items: flex-start;
    justify-content: center;

    width: 312px;
    height: 40px;
    padding: $text-input-padding-t;

    text-indent: $text-input-padding-sm;

    background-image: linear-gradient(
        $themes-light-background-secondary-1,
        $themes-light-background-secondary-1
      ),
      $text-input-gradient-gray;
    background-clip: content-box, border-box;
    background-origin: border-box;
    border: $text-input-border-width-sm solid transparent;
    border-radius: $text-input-border-radius-sm;

    &:focus {
      background-image: linear-gradient(
          $themes-light-background-secondary-1,
          $themes-light-background-secondary-1
        ),
        $text-input-gradient-blue;
      outline: none;
    }
  }

  &--label {
    flex-shrink: 0;
    align-self: stretch;

    height: 22px;

    font-family: Poppins, sans-serif;
    font-size: $text-input-font-size-lg;
    font-weight: $text-input-font-weight-regular;
    font-style: normal;
    line-height: normal;
    color: $themes-light-text-primary;
  }
}
</style>
