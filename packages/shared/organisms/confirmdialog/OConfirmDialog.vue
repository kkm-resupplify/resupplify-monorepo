<template>
  <m-dialog :title="headerText">
    <template #activator>
      <a-button :text="text" />
    </template>

    <div class="o-confirm-dialog__body">
      <a-title :title="contentText" />

      <div class="o-confirm-dialog__buttons">
        <a-button :text="$t('global.cancel')" size="x-large" />

        <a-button
          :text="$t('global.confirm')"
          color="gradient-danger"
          size="x-large"
          @click="handleConfirm"
        />
      </div>
    </div>
  </m-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  itemName: {
    type: String,
    required: true
  },
  type: {
    validator(value: string) {
      return ['add', 'update', 'delete'].includes(value)
    }
  },
  text: {
    type: String,
    default: 'Title'
  }
})

// Variables
const { t } = useI18n()

// Computed
const headerText = computed(() => {
  if (props.type === 'add') return t('confirm.dialog.titleCreate')
  else if (props.type === 'update') return t('confirm.dialog.titleUpdate')
  else if (props.type === 'delete') return t('confirm.dialog.titleDelete')
  else return ''
})

const contentText = computed(() => {
  let translationKey
  if (props.type === 'add') translationKey = 'confirm.dialog.textCreate'
  else if (props.type === 'update') translationKey = 'confirm.dialog.textUpdate'
  else if (props.type === 'delete') translationKey = 'confirm.dialog.textDelete'
  else return ''

  return t(translationKey, { item: props.itemName })
})

// Emits
const emits = defineEmits(['confirmed'])

// Methods
const handleConfirm = () => {
  emits('confirmed')
}
</script>

<style scoped lang="scss">
.o-confirm-dialog {
  &__body {
    display: flex;
    flex-direction: column;
    gap: $global-spacing-100;
    align-items: center;
    justify-content: center;

    min-width: 300px;
    min-height: 200px;
  }

  &__buttons {
    display: flex;
    gap: $global-spacing-70;
  }
}
</style>
