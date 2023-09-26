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
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  placeholder: {
    type: String,
    default: 'Enter email'
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
</script>

<style scoped lang="scss">
.a-text-input {
  display: inline-flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: $global-spacing-30;
  align-items: flex-start;

  height: 64px;

  &--input {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    gap: $global-spacing-40;
    align-items: flex-start;
    justify-content: center;

    width: 312px;
    height: 40px;
    padding: $global-spacing-10;

    text-indent: $global-spacing-30;

    background-image: linear-gradient(
        $themes-light-background-secondary-1,
        $themes-light-background-secondary-1
      ),
      $global-gradients-gray-primary;
    background-clip: content-box, border-box;
    background-origin: border-box;
    border: $global-border-width-20 solid transparent;
    border-radius: $global-border-radius-10;

    &:focus {
      background-image: linear-gradient(
          $themes-light-background-secondary-1,
          $themes-light-background-secondary-1
        ),
        $global-gradients-blue-primary;
      outline: none;
    }
  }

  &--label {
    flex-shrink: 0;
    align-self: stretch;

    height: 22px;

    font-family: Poppins, sans-serif;
    font-size: $global-font-size-50;
    font-weight: $global-font-weight-30;
    font-style: normal;
    line-height: normal;
    color: $themes-light-text-primary;
  }
}
</style>
