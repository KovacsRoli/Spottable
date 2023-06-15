<template>
  <header class="fixed top-0 left-0 w-screen py-6 px-4 md:px-8 bg-transparent flex justify-center">
    <nav
      class="flex text-white text-xl md:text-2xl xl:text-4xl w-full max-w-[1592px] items-center justify-end gap-x-12"
    >
      <p class="font-light">{{ $t('header.about') }}</p>
      <p class="font-light">{{ $t('header.team') }}</p>
      <p class="font-bold" @click="$i18n.locale = 'en'">EN</p>
      <p @click="$i18n.locale = 'ro'">RO</p>
      <img :src="facebookIcon" alt="Facebook icon" />
    </nav>
    <div class="curve"></div>
  </header>
</template>

<script setup lang="ts">
import facebookIcon from '../assets/facebook.svg'
</script>

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
