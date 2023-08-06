<template>
  <div>
    <div class="test"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.test {
  min-width: 100px;
  min-height: 100px;
  background: #fff;

  @media (#{map-get($screen-breakpoints, 'sm-and-up')}) {
    background: red;
  }

  @media (#{map-get($screen-breakpoints, 'md-and-up')}) {
    background: green;
  }

  @media (#{map-get($screen-breakpoints, 'lg-and-up')}) {
    background: blue;
  }
}
</style>
