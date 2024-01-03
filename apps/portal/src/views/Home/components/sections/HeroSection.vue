<template>
  <a-panel-section class="hero-section">
    <a-image
      class="hero-section__image"
      src="/resupplify-logo.png"
      alt="logo"
      height="200px"
      variant="rounded"
      mask
    />

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

            <a-line color="white" />
          </div>
        </slide>
      </carousel>
    </div>
  </a-panel-section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

// Variables
const { t } = useI18n()
const imageUrl = ref(
  'https://media.discordapp.net/attachments/902260825203560518/1191912923266814093/grzegorzfloyd_Design_an_image_that_represents_the_dynamic_and_f_42f0b931-7113-4033-8071-c8cf3df86593.png?ex=65a72a69&is=6594b569&hm=cd56904837866642ee3bb979ea6ab2fd78b8fe51595dd53cab528bb275c3387d&=&format=webp&quality=lossless&width=676&height=676'
)

// Computed
const headerTextList = computed(() => [
  t('slogans.expandYourClientBase'),
  t('slogans.diversifyAndGrowClientele'),
  t('slogans.increaseYourMarketShare')
])
</script>

<style scoped lang="scss">
.hero-section {
  display: flex;
  flex: 1;
  flex-direction: row !important;
  align-items: center;
  justify-content: center;

  background: var(--primary-gradient);
  border-radius: $global-border-radius-20;

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
