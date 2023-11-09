<template>
  <m-dialog :title="headerText">
    <template #activator>
      <a-button text="button" />
    </template>

    <div class="o-confirm-dialog__body">
      <a-title title="Do you want to sth?" />

      <div class="o-confirm-dialog__buttons">
        <a-button text="Cancel" size="x-large" />

        <a-button text="Do it" color="gradient-danger" size="x-large" />
      </div>
    </div>
  </m-dialog>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const headerText = computed(() => {
  if (props.type === 'add') return 'Add confirmation'
  else if (props.type === 'remove') return 'Remove confirmation'
  else if (props.type === 'delete') return 'Delete confirmation'
  else return ''
})

const props = defineProps({
  itemName: {
    type: String,
    required: true
  },
  type: {
    validator(value: string) {
      return ['add', 'remove', 'delete'].includes(value)
    }
  },
  text: {
    type: String,
    default: 'Title'
  }
})
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
