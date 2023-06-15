import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ro from './locales/ro.json'

type MessageSchema = typeof en

console.log(window.navigator)
const i18n = createI18n<[MessageSchema], 'en' | 'ro'>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'ro',
  messages: {
    en,
    ro,
  },
})

const app = createApp(App)
app.use(i18n).mount('#app')
