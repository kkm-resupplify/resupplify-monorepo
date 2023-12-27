<template>
  <div :class="generateClasses">
    <div class="a-image-input__input-group">
      <label :for="name" class="a-image-input__label" v-text="label" />

      <input
        :id="name"
        :name="name"
        type="file"
        accept="image/*"
        class="a-image-input__input"
        :rules="rules"
        :disabled="disabled"
        v-on="validationListeners"
        @input="handleInputChange"
      />
    </div>

    <div v-if="preview" class="a-image-input__preview-group">
      <span v-text="$t('global.imagePreview')" />

      <a-image
        :src="preview"
        class="a-image-input__preview-group-image"
        :alt="$t('global.imagePreview')"
        :width="120"
        variant="rounded"
      />
    </div>

    <a-input-error-list :errors="errors" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, toRef, watch, watchEffect, onBeforeMount } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
import { useField } from 'vee-validate'

const props = defineProps({
  name: { type: String, required: true },
  label: String,
  value: [File, String],
  placeholder: String,
  size: { type: String, default: 'medium' },
  variant: { type: String, default: 'rounded' },
  rules: {
    type: [String, Object]
  },
  borderGradient: {
    type: String,
    default: 'info'
  },
  validate: {
    type: Boolean,
    default: true
  },
  validColor: {
    type: String,
    default: 'success'
  },
  invalidColor: {
    type: String,
    default: 'danger'
  },
  disabled: Boolean,
  previewSrc: String
})

// Emits
const emits = defineEmits(['input-change'])

// Variables
const baseClass = 'a-image-input'
const preview = ref<any>(null)
const name = toRef(props, 'name')
const { generateClassNames } = useClassComposable()
const {
  value: inputValue,
  errors,
  handleBlur,
  errorMessage,
  handleChange,
  meta,
  validate
} = useField(name, props.rules, {
  initialValue: props.value,
  validateOnValueUpdate: false
})

// Methods
const handleInputChange = () => {
  emits('input-change', inputValue.value)
}

const manualValidate = () => {
  if (meta.touched) {
    validate()
  }
}

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [props.size, props.variant])
})

const borderColor = computed(() => {
  if (props.disabled) return ''

  if (!props.validate) return `var(--${props.borderGradient}-gradient)`

  const { valid, touched, dirty } = meta

  if (!valid && touched) return `var(--${props.invalidColor}-gradient)`
  if ((dirty || touched) && valid) return `var(--${props.validColor}-gradient)`

  return `var(--${props.borderGradient}-gradient)`
})

const validationListeners = computed(() => {
  if (!errorMessage.value) {
    return {
      blur: handleBlur,
      change: handleChange,
      input: (e: any) => handleChange(e, false)
    }
  }

  return {
    blur: handleBlur,
    change: handleChange,
    input: handleChange
  }
})

// Watchers
watchEffect(() => {
  if (inputValue.value) {
    let reader = new FileReader()

    reader.onload = (event: any) => {
      preview.value = event.target.result
    }

    reader.readAsDataURL(inputValue.value as Blob)
  }
})

watch(
  () => props.value,
  (newValue) => {
    inputValue.value = newValue ?? ''
  }
)

// Hooks
onBeforeMount(() => {
  preview.value = props.previewSrc ?? ''
})

// Expose
defineExpose({ manualValidate })
</script>

<style lang="scss" scoped>
@import '../../styles/mixins/input-gradient';

@mixin size($padding, $font-size) {
  padding: $padding;
  font-size: $font-size;
}

@mixin border($border-width, $border-radius) {
  border: $border-width solid transparent;
  border-radius: $border-radius;
}

.a-image-input {
  $self: &;

  display: flex;
  flex-direction: column;

  &__input-group {
    display: flex;
    flex-direction: column;
  }

  &--medium {
    #{$self}__label {
      @include size(0 $global-spacing-20, $global-font-size-20);
    }

    #{$self}__input {
      @include size(
        $global-spacing-30 32px $global-spacing-30 $global-spacing-70,
        $text-input-font-size-md
      );
    }

    #{$self}__preview-group {
      @include size(0 $global-spacing-20, $global-font-size-20);
    }
  }

  &--sharp {
    #{$self}__input {
      @include border(2px, $global-border-radius-10);
    }
  }

  &--rounded {
    #{$self}__input {
      @include border(0.25em, 24px);
    }
  }

  @supports (mix-blend-mode: darken) {
    position: relative;
    mix-blend-mode: normal;

    &__label {
      position: relative;
      left: $global-spacing-70;
    }
  }

  &__label {
    color: var(--font-primary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  &__input {
    @include input-gradient(v-bind(borderColor));

    width: 100%;
    line-height: 1;
    color: var(--font-primary);

    &--prevent-input {
      caret-color: transparent;
    }

    &[type='file']::-webkit-file-upload-button {
      display: none;
    }
  }

  &__preview-group {
    position: relative;
    left: $global-spacing-70;
    display: flex;
    flex-direction: column;
  }

  &__preview-group-image {
    width: fit-content;
    max-height: 160px;
  }
}
</style>
