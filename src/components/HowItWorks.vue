<template>
  <section id="about" class="work-section relative">
    <h1 class="text-[#FF6752] font-bold text-end text-2xl pt-11 px-4 mb-4 title">{{ t('about.title') }}</h1>
    <img :src="path" alt="path" class="path-image hidden md:block" />
    <div class="wrapper flex flex-col gap-4">
      <div
        v-for="({ image, title, info }, index) in content"
        :key="index"
        class="content-item items-start md:absolute flex md:pr-8"
      >
        <img :src="image" alt="image" class="image" />
        <div>
          <h3 class="title text-[#707070] font-bold">{{ t(title) }}</h3>
          <p class="info text-[#707070]">{{ t(info) }}</p>
        </div>
      </div>
    </div>
    <img :src="circle" alt="circle" class="circle-image absolute bottom-0 hidden md:block" />
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import path from '../assets/path.svg'
import search from '../assets/search.svg'
import dog from '../assets/dog.svg'
import person from '../assets/person.svg'
import circle from '../assets/circle.svg'

const { t } = useI18n()

const content = [
  { image: search, title: 'about.check', info: 'about.checkInfo' },
  { image: dog, title: 'about.profile', info: 'about.profileInfo' },
  { image: person, title: 'about.found', info: 'about.foundInfo' },
]
</script>

<style scoped>
.work-section {
  background: url('../assets/background3.svg') no-repeat;
  background-size: cover;
  aspect-ratio: 1920/2198;
  width: 100vw;
}

.wrapper {
  padding: 0 max(1rem, min(8rem, 8vw));
}

.title {
  font-size: max(1.5rem, min(5rem, 4vw));
  line-height: max(2.5rem, min(6.25rem, 5.5vw));
  padding: max(2.75rem, min(14rem, 12vw)) max(1rem, min(8rem, 8vw)) 0 max(1rem, min(8rem, 8vw));
  margin-bottom: max(2rem, min(8rem, 10vw));
}

.path-image {
  width: max(12rem, min(100%, 40vw));
  padding: 0 max(0.5rem, min(2rem, 2vw));
}

.circle-image {
  width: max(8rem, min(100%, 15vw));
}

.content-item:nth-child(1) {
  top: max(10rem, min(22rem, 20vw));
  left: max(10rem, min(60rem, 24vw));
}

.content-item:nth-child(2) {
  top: max(25rem, min(100rem, 52vw));
  left: max(20rem, min(100rem, 40vw));
}

.content-item:nth-child(3) {
  top: max(40rem, min(200rem, 85vw));
  left: max(10rem, min(60rem, 24vw));
}

.content-item .image {
  width: max(4rem, min(100%, 16vw));
  margin-right: max(1rem, min(4rem, 4vw));
}

.content-item .title {
  font-size: max(1rem, min(3rem, 2.5vw));
  line-height: max(1.5rem, min(4.5rem, 3.25vw));
  padding: 0;
  /* margin-bottom: 0; */
  margin-bottom: max(0.25rem, min(4rem, 2vw));
}

.content-item .info {
  font-size: max(0.875rem, min(2.5rem, 2vw));
  line-height: max(1.375rem, min(3.75rem, 3vw));
}
</style>
