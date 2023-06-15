<template>
  <div class="relative">
    <div class="curve"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.curve {
  background: url('../assets/background1.svg') no-repeat;
  background-size: cover;
  aspect-ratio: 1920/1181;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
