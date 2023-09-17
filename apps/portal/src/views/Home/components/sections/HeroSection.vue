<template>
  <div class="hero-section">
    <div class="hero-section__image" />

    <div class="hero-section__carousel">
      <carousel
        :wrap-around="true"
        :autoplay="3000"
        :mouse-drag="false"
        :touch-drag="false"
        :items-to-show="1"
      >
        <slide v-for="headerText in headerTextList" :key="headerText">
          <div class="hero-section__slide-item">
            <span class="hero-section__slide-text" v-text="headerText" />

            <a-line variant="triangle" />
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue
import { reactive, computed } from 'vue'

// Styles
import 'vue3-carousel/dist/carousel.css'

// i18n
import { useI18n } from 'vue-i18n'

// Components
import ALine from '@sharedAtoms/line/ALine.vue'
import { Carousel, Slide } from 'vue3-carousel'

// Inits
const { t } = useI18n()

const headerTextList = reactive([
  t('slogans.expandYourClientBase'),
  t('slogans.diversifyAndGrowClientele'),
  t('slogans.increaseYourMarketShare')
])

const imageUrlList = reactive(['src/assets/images/hero_1.jpg'])

// Computed
const imageUrl = computed(() => `url(${imageUrlList[0]})`)
</script>

<style scoped lang="scss">
.hero-section {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  height: 27vh;
  padding: $global-spacing-30 $global-spacing-40;

  background: var(--background-primary-gradient);

  &__image {
    width: 30%;
    height: 100%;

    background-image: v-bind(imageUrl);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  &__carousel {
    max-width: 1000px;
  }

  &__slide-text {
    font-size: $global-font-size-140;
    font-weight: $global-font-weight-30;
    color: $global-colors-grey-100;
  }

  &__slide-item {
    display: flex;
    flex-direction: column;
    text-align: left;
    white-space: nowrap;
  }
}
</style>
