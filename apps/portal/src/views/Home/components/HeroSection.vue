<template>
  <section class="hero-section">
    <div class="hero-section--wrapper">
      <div class="hero-section--image"></div>
      <header class="hero-section--header">
        <Carousel
          :wrap-around="true"
          :autoplay="3000"
          :mouse-drag="false"
          :touch-drag="false"
          :items-to-show="1"
          class="hero-section--carousel"
        >
          <Slide v-for="headerText in headerTextList" :key="headerText">
            <div class="hero-section--slide-items">
              <h1 class="hero-section--carousel-heading">{{ headerText }}</h1>
              <a-line />
            </div>
          </Slide>
        </Carousel>
      </header>
    </div>
  </section>
</template>

<script setup lang="ts">
//Vue
import { ref } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

// i18n
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

//Components
import ALine from '@sharedAtoms/line/ALine.vue'

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

  &--wrapper {
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: $global-spacing-30;
    align-items: center;
    justify-content: center;
  }

  &--image {
    width: 400px;
    height: 300px;
    background: linear-gradient(90deg, #003d98 0%, #3f8cff 70%);
  }

  &--carousel {
    max-width: 1000px;
  }

  &--carousel-heading {
    margin: 0;

    font-size: $global-font-size-140;
    font-weight: $global-font-weight-30;
    font-style: normal;
    line-height: normal;
    color: $global-colors-text-white;
  }

  &--slide-items {
    display: flex;
    flex-direction: column;
    text-align: left;
    white-space: nowrap;
  }
}
</style>
