<template>
  <header ref="header" class="header w-full bg-transparent flex justify-center">
    <nav class="flex text-white w-full items-end justify-end gap-x-4 md:gap-x-8 xl:gap-x-11">
      <a href="#about" class="font-light cursor-pointer">{{ t('header.about') }}</a>
      <a href="#team" class="font-light cursor-pointer">{{ t('header.team') }}</a>
      <p class="cursor-pointer" :class="{ 'font-bold': locale === 'en' }" @click="locale = 'en'">EN</p>
      <p class="cursor-pointer" :class="{ 'font-bold': locale === 'ro' }" @click="locale = 'ro'">RO</p>
      <img :src="facebookIcon" alt="Facebook icon" class="facebook cursor-pointer" />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import facebookIcon from '../assets/facebook.svg'

const { t, locale } = useI18n()

const header = ref<HTMLHeadElement | null>(null)

defineExpose({
  getHeight: () => header.value?.clientHeight,
})
</script>

<style scoped>
.header {
  padding: max(1rem, min(1.75rem, 2vw)) max(1rem, min(4.5rem, 5vw));
  font-size: max(1rem, min(2.25rem, 3vw));
}

.facebook {
  height: max(2rem, min(4.5rem, 6vw));
}
</style>
