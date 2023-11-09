<template>
  <m-dialog :title="titleText">
    <template #activator>
      <a-button :text="activatorName" :size="activatorSize" />
    </template>

    <div class="o-confirm-dialog__body">
      <span class="o-confirm-dialog__content" v-text="contentText" />

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
    type: String,
    validator(value: string) {
      return ['create', 'update', 'remove'].includes(value)
    },
    required: true
  },
  title: String,
  content: String,
  activatorName: {
    type: String,
    required: true
  },
  activatorSize: {
    type: String,
    default: 'large'
  }
})

// Variables
const { t } = useI18n()

// Computed
const suffix = computed(() => props.type.charAt(0).toUpperCase() + props.type.slice(1))

const titleText = computed(() => {
  return props.title || t(`confirm.dialog.title${suffix.value}`)
})

const contentText = computed(() => {
  return props.content || t(`confirm.dialog.text${suffix.value}`, { item: props.itemName })
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
    gap: 40px;
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
