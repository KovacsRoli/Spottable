<template>
  <section class="hero-section">
    <div class="flex h-full mt-16 md:mt-0">
      <div style="width: max(90vw, min(32rem, 100%))">
        <img :src="logoIcon" alt="Spottabel" class="logo" />
        <h1 class="title text-white font-bold">{{ t('hero.title') }}</h1>
        <p class="subtitle text-white">{{ t('hero.info') }}</p>
        <SPButton is-shadow />
      </div>
      <img
        src="../assets/goldenRetriever.svg"
        alt="Golden retriever"
        class="max-w-[56rem] w-[46vw] min-w-[8rem] h-fit self-center hidden md:block"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import logoIcon from '../assets/logo.svg'
import SPButton from './base/SPButton.vue'

const { t } = useI18n()
</script>

<style scoped>
.hero-section {
  background: url('../assets/background1.svg') no-repeat;
  background-size: cover;
  aspect-ratio: 1920/1181;
  width: 100vw;
  min-height: 600px;
  height: 100%;
  padding: 0 max(1rem, min(8rem, 8vw));
  padding-top: 300px;
  z-index: -1;
}

.logo {
  height: max(5rem, min(11rem, 12vw));
}

.title {
  font-size: max(2rem, min(5rem, 4vw));
  line-height: max(2.5rem, min(6.25rem, 5.5vw));
  margin-top: max(1rem, min(3rem, 2vw));
  margin-bottom: max(1rem, min(4rem, 3vw));
  max-width: max(41vw, min(32rem, 100%));
}
.subtitle {
  font-size: max(1rem, min(2.25rem, 2vw));
  line-height: max(1.5rem, min(3rem, 2.75vw));
  margin-bottom: max(1rem, min(4rem, 3vw));
  max-width: max(32vw, min(22rem, 100%));
}
</style>
