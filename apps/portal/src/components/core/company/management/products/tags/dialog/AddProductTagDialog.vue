<template>
  <m-dialog
    ref="dialogRef"
    :title="$t('company.management.navigation.products.tags.editor.addDialog.modalActivatorTitle')"
  >
    <template #activator>
      <a-button
        size="large"
        :text="$t('company.management.navigation.products.tags.editor.addDialog.activator')"
      />
    </template>

    <div class="add-product-tag-dialog__content">
      <o-form>
        <template #body>
          <div class="add-product-tag-dialog__form-body">
            <m-text-field
              name="name"
              input-type="text"
              rules="required"
              :label="$t('company.management.navigation.products.tags.editor.productTagLabel')"
              :placeholder="
                $t('company.management.navigation.products.tags.editor.productTagPlaceholder')
              "
            />

            <m-text-field
              name="language-name"
              input-type="text"
              rules="required"
              :label="
                $t('company.management.navigation.products.tags.editor.productTagLanguageLabel')
              "
              :placeholder="
                $t(
                  'company.management.navigation.products.tags.editor.productTagLanguagePlaceholder'
                )
              "
            />

            <m-text-field
              name="color"
              input-type="color"
              rules="required"
              :label="$t('company.management.navigation.products.tags.editor.productTagColorLabel')"
            />
          </div>
        </template>

        <template #footer>
          <div class="add-product-tag-dialog__form-buttons">
            <a-button :text="$t('global.cancel')" size="x-large" />

            <a-button button-type="submit" :text="$t('global.save')" size="x-large" />
          </div>
        </template>
      </o-form>
    </div>
  </m-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MDialog from '@sharedMolecules/dialog/MDialog.vue'

// Variables
const dialogRef = ref<null | InstanceType<typeof MDialog>>(null)

// Methods
const closeDialog = () => {
  dialogRef.value?.closeDialog()
}
</script>

<style lang="scss" scoped>
.add-product-tag-dialog {
  &__form-body {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-40;
    align-items: center;

    padding: $global-spacing-100;
  }

  &__form-buttons {
    display: flex;
    gap: $global-spacing-100;
    justify-content: center;
    width: 100%;
  }
}
</style>
