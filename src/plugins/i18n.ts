import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import ro from '../locales/ro.json'

type MessageSchema = typeof en

const browserLocal = window.navigator.language.split('-')[0]?.toLowerCase()
const locale = ['en', 'ro'].includes(browserLocal) ? browserLocal : 'en'
const i18n = createI18n<[MessageSchema], 'en' | 'ro'>({
  legacy: false,
  locale,
  fallbackLocale: 'en',
  messages: {
    en,
    ro,
  },
})

export default i18n
