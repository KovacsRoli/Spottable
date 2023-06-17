<template>
  <section id="team" class="team-section w-screen flex flex-col items-center">
    <h1 class="title text-[#FF6752] font-bold">{{ t('team.title') }}</h1>
    <p class="info text-[#707070]">{{ t('team.info') }}</p>
    <div class="flex flex-col md:grid md:grid-cols-[repeat(3,_minmax(120px,_1fr))] gap-12 w-full">
      <div
        v-for="({ image, name, occupation }, index) in images"
        :key="index"
        class="w-full flex flex-col items-center"
        :class="{ 'col-start-2': index === images.length - 1 }"
      >
        <img :src="image" alt="image" class="w-full max-w-[20rem] max-h-[20rem] rounded-full object-cover my-auto" />
        <h3 class="name text-[#563D9A] font-bold mt-6">{{ name }}</h3>
        <p class="text-[#563D9A]">{{ occupation }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import sergiuBalaban from '../assets/sergiuBalaban.jpg'
import naomiCosta from '../assets/naomiCosta.jpeg'
import martaIuga from '../assets/martaIuga.jpeg'
import alexIlies from '../assets/alexIlies.jpg'
import raresTamas from '../assets/raresTamas.jpeg'
import danuVlej from '../assets/danuVlej.jpeg'
import doruCojocaru from '../assets/doruCojocaru.jpeg'

const { t } = useI18n()

const images = [
  { image: sergiuBalaban, name: 'Sergiu Balaban', occupation: 'Founder / Fullstack Developer' },
  { image: naomiCosta, name: 'Naomi Balaban', occupation: 'Marketing Research' },
  { image: martaIuga, name: 'Marta Iuga', occupation: 'UX && UI Designer' },
  { image: alexIlies, name: 'Alexandru Ilies', occupation: 'IOS Developer' },
  { image: raresTamas, name: 'Rares Tamas', occupation: 'IOS Developer' },
  { image: danuVlej, name: 'Danu Vlej', occupation: 'IOS Developer' },
  { image: doruCojocaru, name: 'Doru Cojocaru', occupation: 'IOS Developer' },
]
</script>

<style scoped>
.team-section {
  padding: 0 max(1rem, min(8rem, 8vw));
}

.title {
  font-size: max(2rem, min(5rem, 4vw));
  line-height: max(2.5rem, min(6.25rem, 5.5vw));
  margin-bottom: max(1rem, min(4rem, 3vw));
}

.info {
  font-size: max(0.875rem, min(2.5rem, 2vw));
  line-height: max(1.375rem, min(3.75rem, 3vw));
  margin-bottom: max(1rem, min(3rem, 2vw));
}

.name {
  font-size: max(1rem, min(2.5rem, 2vw));
  line-height: max(1.5rem, min(4rem, 3vw));
}

.occupation {
  font-size: max(0.875rem, min(2rem, 1.5vw));
  line-height: max(1.375rem, min(3rem, 2.25vw));
}
</style>
