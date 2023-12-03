<template>
  <m-stepper-step-content class="product-editor-add-translation-step">
    <template #body>
      <div class="product-editor-add-translation-step__panel-body">
        <a-expansion-panel v-for="language in languagStore.getLanguages" :key="language.id">
          <template #activator>
            <a-list-item-wrapper class="product-editor-add-translation-step__panel-body-activator">
              <span v-text="getLanguageName(language.code)" />
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

        <a-button size="x-large" :text="$t('global.back')" @click="handlePreviousStep" />

        <a-button
          :text="$t('global.save')"
          size="x-large"
          :disabled="disableSaveButton"
          @click="handleSaveProduct"
        />
      </div>
    </template>
  </m-stepper-step-content>
</template>
<script setup lang="ts">
import CompanyProductsService from '@/services/product/CompanyProductsService'
import { useLanguageStore } from '@sharedStores/language/useLanguageStore'
import { useProductEditorStore } from '@stores/product/useProductEditorStore'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
// Variables
const languagStore = useLanguageStore()
const productEditorStore = useProductEditorStore()
const { t } = useI18n()

// Emits
const emits = defineEmits(['previous-step', 'edited'])

// Computed
const disableSaveButton = computed(() => {
  return productEditorStore.productEditorTranslationStepData.length === 0
})

// Methods
const handleSaveTranslation = (values: any, languageId: number) => {
  productEditorStore.saveProductTranslation({ ...values, languageId })
}

const handleSaveProduct = async () => {
  if (productEditorStore.isEditing) {
    await CompanyProductsService.editProduct(productEditorStore.$state)
    emits('edited')
  } else {
    const { success } = await CompanyProductsService.createProduct(productEditorStore.$state)

    if (success) {
      emits('previous-step')
      productEditorStore.$reset()
    }
  }
}

const getLanguageName = (code: string) => t(`language.${code}`)

const handlePreviousStep = () => {
  emits('previous-step')
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
