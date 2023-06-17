<template>
  <section class="card-section w-screen md:my-24">
    <div class="bg-[#563d9a] mx-auto p-6 flex rounded-2xl shadow-[0_3px_6px_#00000029]">
      <img :src="terrier" alt="terrier" class="image hidden md:block" />
      <div class="flex flex-col justify-between md:ml-6">
        <h1 class="title text-[#FFE530] font-bold mb-4">{{ t('about.whatIsIt') }}</h1>
        <p class="info text-white mb-2">{{ t('about.whatIsItInfo') }}</p>
        <SPButton color="#FFE12A" text-color="#FE6845" class="w-fit" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import terrier from '../assets/terrier.svg'
import SPButton from './base/SPButton.vue'

const { t } = useI18n()
</script>

<style scoped>
.card-section {
  padding: 0 max(1rem, min(8rem, 8vw));
}

.image {
  width: max(12rem, min(100%, 20vw));
}

.title {
  font-size: max(1rem, min(3rem, 2.5vw));
  line-height: max(1.5rem, min(4.5rem, 3.25vw));
}

.info {
  font-size: max(0.875rem, min(2.5rem, 2vw));
  line-height: max(1.375rem, min(3.75rem, 3vw));
}
</style>
