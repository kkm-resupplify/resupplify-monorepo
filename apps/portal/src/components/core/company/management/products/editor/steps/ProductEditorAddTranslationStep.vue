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
            <o-form
              :initial-values="productEditorStore.productEditorTranslationStepData[language.id - 1]"
              :submit-callback="(v: any) => handleSaveTranslation(v, language.id)"
            >
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
                  <a-button :text="$t('global.save')" size="x-large" type="submit" />
                </div>
              </template>
            </o-form>
          </template>
        </a-expansion-panel>

        <a-button :text="$t('global.save')" size="x-large" @click="handleSaveProduct" />
      </div>
    </template>
  </m-stepper-step-content>
</template>
<script setup lang="ts">
import { useLanguageStore } from '@sharedStores/language/useLanguageStore'
import { useProductEditorStore } from '@stores/product/useProductEditorStore'

// Variables
const languagStore = useLanguageStore()
const productEditorStore = useProductEditorStore()

// Emits
const emits = defineEmits(['previous-step'])

// Methods
const handleSaveTranslation = (values: any, languageId: number) => {
  productEditorStore.saveProductTranslation({ ...values, languageId })
}

const handleSaveProduct = () => {
  console.log(productEditorStore.$state)
}
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
}
</style>
