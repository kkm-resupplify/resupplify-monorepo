<template>
  <div class="a-line">
    <div class="triangle"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
$height-of-line: 8px;

.a-line {
  position: relative;

  align-self: stretch;

  width: calc(100% - $height-of-line);
  height: $height-of-line;

  background: white;

  .triangle {
    position: absolute;
    right: -$height-of-line;

    width: 0;
    height: 0;
    
    border-color: transparent transparent transparent white;
    border-style: solid;
    border-width: 0 0 $height-of-line $height-of-line;
  }
}
</style>
