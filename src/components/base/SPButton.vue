<template>
  <button class="btn rounded-full text-2xl font-semibold" :shadow="isShadow">
    {{ t('download') }}
  </button>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
withDefaults(defineProps<{ color?: string; textColor?: string; isShadow?: boolean }>(), {
  color: '#FF8001CC',
  textColor: '#FFFFFF',
  isShadow: false,
})
</script>

<style scoped>
.btn {
  background: v-bind(color);
  color: v-bind(textColor);
  padding: max(1rem, min(2rem, 1.5vw)) max(1rem, min(3rem, 2vw));
  font-size: max(1rem, min(1.5rem, 2vw));
  line-height: max(1.25rem, min(2rem, 3vw));
}

.btn[shadow='true'] {
  --tw-shadow: 0 10px 10px 0 #4487ff;
  --tw-shadow-colored: 0 10px 10px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>
