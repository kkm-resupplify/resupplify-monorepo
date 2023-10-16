<template>
  <div :class="generateClasses">
    <div class="a-image-input__input-group">
      <label for="my-file" class="a-image-input__label">Select Image</label>

      <input
        id="my-file"
        type="file"
        accept="image/*"
        class="a-image-input__input"
        @change="previewImage"
      />
    </div>

    <div v-if="preview" class="a-image-input__preview-group">
      <span>Preview</span>
      <img :src="preview" class="a-image-input__preview-image" alt="image preview" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useClassComposable } from '@sharedComposables/class/useClassComposable'
const props = defineProps({
  size: { type: String, default: 'medium' },
  variant: { type: String, default: 'rounded' }
})
// Variable
const baseClass = 'a-image-input'
const preview = ref<any>(null)
const image = ref<any>(null)

// Composable
const { generateClassNames } = useClassComposable()

// Computed
const generateClasses = computed(() => {
  return generateClassNames(baseClass, [props.size, props.variant])
})

const borderColor = computed(() => {
  return 'var(--info-gradient)'
})

// Methods
const previewImage = (event: any) => {
  let input = event.target
  if (input.files) {
    let reader = new FileReader()
    reader.onload = (e) => {
      preview.value = e.target?.result
    }
    image.value = input.files[0]
    reader.readAsDataURL(input.files[0])
  }
}
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
    display: flex;
    flex-direction: column;
    position: relative;
    left: $global-spacing-70;
  }
}
</style>
