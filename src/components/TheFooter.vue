<template>
  <footer class="footer mt-12 md:mt-20 lg:mt-24 flex items-end max-h-[18rem]">
    <div
      class="w-full mb-2 sm:mb-4 md:mb-8 lg:mb-20 grid grid-cols-[repeat(3,_minmax(60px,_1fr))] md:grid-cols-[repeat(4,_minmax(120px,_1fr))]"
    >
      <div>
        <p class="info text-[#FFE530] font-bold mb-2">{{ t('footer.about') }}</p>
        <p class="info text-white">{{ t('footer.download') }}</p>
        <p class="info text-white">{{ t('footer.team') }}</p>
      </div>
      <div>
        <p class="info text-[#FFE530] font-bold mb-2">{{ t('footer.contact') }}</p>
        <p class="info text-white">{{ t('footer.email') }}</p>
      </div>
      <div>
        <p class="info text-white">{{ t('footer.terms') }}</p>
        <p class="info text-white">{{ t('footer.privacy') }}</p>
      </div>
      <SPButton color="white" text-color="#808080" class="hidden sm:block w-fit h-fit" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SPButton from './base/SPButton.vue'

const { t } = useI18n()
</script>

<style scoped>
.footer {
  background: url('../assets/backgroundFooter.svg') no-repeat;
  background-size: cover;
  aspect-ratio: 1920/427;
  width: 100vw;
  padding: 0 max(1rem, min(8rem, 8vw));
}

.info {
  font-size: max(0.875rem, min(2rem, 1.5vw));
  line-height: max(1.375rem, min(3rem, 2.25vw));
}
</style>
