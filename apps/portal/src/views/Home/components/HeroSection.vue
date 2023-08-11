<template>
  <section class="hero-section">
    <div class="hero-section--wrapper">
      <div class="hero-section--image"></div>
      <header class="hero-section--header">
        <Carousel :wrap-around="true" :autoplay="3000" :style="{ width: carouselWidth + 'px' }">
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
import ALine from '@sharedAtoms/line/ALine.vue'
import { ref, onMounted } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const headerTextList = ref([
  'Expand your client base',
  'Diversify and grow clientele',
  'Explore new client connections'
])

let carouselWidth = ref(0)

onMounted(() => {
  // Calculate the width based on the content inside the slides
  const slideItems = document.querySelectorAll('.hero-section--slide-items')
  let maxWidth = 0

  slideItems.forEach((item) => {
    const width = item.offsetWidth
    if (width > maxWidth) {
      maxWidth = width
    }
  })

  carouselWidth.value = maxWidth
})
</script>

<style scoped lang="scss">
.hero-section {
  display: flex;
  gap: $global-spacing-30;
  align-items: flex-start;
  align-self: stretch;

  padding: $global-spacing-30 $global-spacing-40;

  background: $global-gradients-blue-primary-1;

  &--wrapper {
    display: flex;
    flex: 1 0 0;
    gap: $global-spacing-30;
    align-items: center;
    justify-content: center;
  }

  &--image {
    width: 400px;
    height: 300px;
    background: linear-gradient(90deg, #003d98 0%, #3f8cff 70%);
  }

  &--header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    justify-content: center;
  }

  &--carousel-heading {
    margin: 0;
    
    font-family: $global-fonts-poppins;

    // problem with pull request in figma tokens so i temporarily added static value
    font-size: 64px;
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
