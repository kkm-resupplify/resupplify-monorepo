<template>
  <div :class="generateClasses">
    <label for="sex" v-html="$t('userDetails.sex')" class="m-select__label"></label>
    <select id="sex" name="sex" class="m-select__select">
      <option value="male" v-html="$t('userDetails.gender.male')" class="m-select__option"></option>
      <option value="female" v-html="$t('userDetails.gender.female')" class="m-select__option"></option>
      <option value="female" v-html="$t('userDetails.gender.preferNot')" class="m-select__option"></option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useField } from 'vee-validate'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'

// Variables
const baseClass = 'm-select'

// Composables
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [])
})
</script>

<style lang="scss" scoped>
.m-select {
  display: flex;

  gap: $global-spacing-40;

  &__select, &__option {
    color: black;
  }
}
</style>
