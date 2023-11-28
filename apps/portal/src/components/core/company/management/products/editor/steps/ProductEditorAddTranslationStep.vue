<template>
  <m-stepper-step-content class="product-editor-add-translation-step">
    <template #body>
      <div class="product-editor-add-translation-step__panel-body">
        <a-expansion-panel v-for="language in languagStore.getLanguages" :key="language.id">
          <template #activator>
            <a-list-item-wrapper class="product-editor-add-translation-step__panel-body-activator">
              {{ language.code }}
            </a-list-item-wrapper>
          </template>

          <template #content>
            <o-form>
              <template #body>
                <div class="product-editor-add-translation-step__form-body">
                  <m-text-field
                    name="name"
                    input-type="text"
                    :label="$t('company.management.products.editor.productNameLabel')"
                    :placeholder="$t('company.management.products.editor.productNamePlaceholder')"
                  />

                  <m-text-area
                    name="description"
                    rules="required|min:16|max:255"
                    :label="$t('company.management.products.editor.productDescriptionLabel')"
                    :placeholder="
                      $t('company.management.products.editor.productDescriptionPlaceholder')
                    "
                  />
                </div>
              </template>

              <template #footer>
                <div class="product-editor-add-translation-step__buttons">
                  <a-button :text="$t('global.save')" size="x-large" @click="handleSubmit" />
                </div>
              </template>
            </o-form>
          </template>
        </a-expansion-panel>
      </div>
    </template>
  </m-stepper-step-content>
</template>
<script setup lang="ts">
import { useLanguageStore } from '@sharedStores/language/useLanguageStore'

// Variables
const languagStore = useLanguageStore()

// Emits
const emits = defineEmits(['previous-step'])

// Methods
const handlePreviousStep = () => {
  emits('previous-step')
}

const handleSubmit = () => {}
</script>
<style scoped lang="scss">
.product-editor-add-translation-step {
  min-width: 600px;

  &__panel-body {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: $global-spacing-40;
  }

  &__panel-body-activator {
    background-color: var(--primary);
  }

  &__form-body {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-50;
    min-width: 500px;
  }

  // &__buttons {
  //   display: flex;
  //   gap: $global-spacing-100;
  //   justify-content: center;
  //   width: 100%;
  // }
}
</style>
