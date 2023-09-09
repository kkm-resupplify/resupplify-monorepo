<template>
  <div class="hero-section">
    <div class="hero-section__wrapper">
      <div class="hero-section__image" />

      <div class="hero-section__header">
        <Carousel
          :wrap-around="true"
          :autoplay="3000"
          :mouse-drag="false"
          :touch-drag="false"
          :items-to-show="1"
          class="hero-section__carousel"
        >
          <Slide v-for="headerText in headerTextList" :key="headerText">
            <div class="hero-section__slide-items">
              <h1 class="hero-section__carousel-heading" v-text="headerText" />

              <a-line />
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//Vue
import { ref } from 'vue'

// Styles
import 'vue3-carousel/dist/carousel.css'

// i18n
import { useI18n } from 'vue-i18n'

//Components
import ALine from '@sharedAtoms/line/ALine.vue'
import { Carousel, Slide } from 'vue3-carousel'

// Inits
const { t } = useI18n()

const headerTextList = ref([
  t('slogans.expandYourClientBase'),
  t('slogans.diversifyAndGrowClientele'),
  t('slogans.increaseYourMarketShare')
])
</script>

<style scoped lang="scss">
.hero-section {
  display: flex;
  gap: $global-spacing-30;
  align-items: flex-start;
  align-self: stretch;

  padding: $global-spacing-30 15%;

  background: $global-gradients-blue-primary-1;

  &__wrapper {
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: $global-spacing-30;
    align-items: center;
    justify-content: center;
  }

  &__image {
    width: 400px;
    height: 300px;
    background: linear-gradient(90deg, #003d98 0%, #3f8cff 70%);
  }

  &__carousel {
    max-width: 1000px;
  }

  &__carousel-heading {
    margin: 0;

    font-size: $global-font-size-140;
    font-weight: $global-font-weight-30;
    font-style: normal;
    line-height: normal;
    color: $global-colors-text-white;
  }

  &__slide-items {
    display: flex;
    flex-direction: column;
    text-align: left;
    white-space: nowrap;
  }
}
</style>
