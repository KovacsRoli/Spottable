<template>
  <div class="w-screen h-screen overflow-x-hidden scroll-smooth">
    <TheHeader ref="header" />
    <main class="flex flex-col gap-y-10 lg:gap-y-0">
      <HeroSection class="hero-section" />
      <CarouselSection />
      <HowItWorks />
      <SpotCard />
      <OurTeam />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import CarouselSection from './components/CarouselSection.vue'
import HowItWorks from './components/HowItWorks.vue'
import SpotCard from './components/SpotCard.vue'
import OurTeam from './components/OurTeam.vue'
import TheFooter from './components/TheFooter.vue'

const header = ref()
const headerHeight = ref('')
const observer = new ResizeObserver(calculateHeaderHeight)

function calculateHeaderHeight() {
  headerHeight.value = `${header.value?.getHeight()}px` ?? '0'
}

onMounted(() => {
  calculateHeaderHeight()
  observer.observe(document.body)
})

onUnmounted(() => {
  observer.unobserve(document.body)
  observer.disconnect()
})
</script>

<style scoped>
.hero-section {
  margin-top: calc(v-bind(headerHeight) * -1);
  padding-top: min(calc(v-bind(headerHeight) - 3vw), 80px);
}

@media screen and (min-width: 2200px) {
  .hero-section {
    margin-top: calc(v-bind(headerHeight) * -1);
    padding-top: 10vw;
  }
}
</style>
