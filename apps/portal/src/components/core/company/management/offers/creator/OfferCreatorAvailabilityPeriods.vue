<template>
  <div class="offer-creator-availability-periods">
    <div class="offer-creator-availability-periods__wrapper">
      <a-list>
        <a-list-item-wrapper v-for="(date, idx) in dates" :key="idx">
          <a-list-item-title-section
            :title="$t('global.dateStart')"
            :value="date.startsAt"
            :basis="50"
          />

          <a-list-item-title-section
            :title="$t('global.dateEnd')"
            :value="date.endsAt"
            :basis="50"
          />
        </a-list-item-wrapper>
      </a-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type { StockItemDate } from '@sharedInterfaces/stock/StockItemInterface'

defineProps({
  dates: Array as PropType<StockItemDate[]>
})
</script>

<style lang="scss" scoped>
.offer-creator-availability-periods {
  overflow: auto;
  display: flex;
  max-height: 100%;

  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
</style>
