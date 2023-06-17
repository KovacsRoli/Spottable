<template>
  <section class="carousel-section">
    <div class="h-full flex items-center justify-center">
      <Carousel :autoplay="4000" wrap-around class="carousel">
        <Slide v-for="(image, index) in images" :key="index">
          <div class="carousel-item">
            <img :src="image" alt="image" class="max-h-full min-h-[75%]" />
          </div>
        </Slide>

        <template #addons="{ slidesCount }">
          <Navigation v-if="slidesCount > 1" />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const images = [
  'https://picsum.photos/200/300',
  'https://picsum.photos/600/1000',
  'https://picsum.photos/600/300',
  'https://picsum.photos/800/1200',
  'https://picsum.photos/1200/300',
]
</script>

<style scoped>
.carousel-section {
  background: url('../assets/background2.svg') no-repeat;
  background-size: cover;
  aspect-ratio: 1920/1818;
  width: 100vw;
}

.carousel {
  height: min(calc(100% - 32px), calc(100vh - 48px));
  width: calc(100vw - max(1rem, min(8rem, 8vw)));
}

.carousel-item {
  width: calc(100vw - 32px);
  height: min(100%, calc(100vh - 48px));
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}
:deep(.carousel__viewport) {
  height: 100%;
}
:deep(.carousel__track) {
  height: 100%;
}
:deep(.carousel__slide) {
  height: 100%;
}
</style>
