import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN' // element-ui lang
import enLocale from './en.json'
import zhLocale from './zh.json'
import enComponent from './component-en.json'
import zhComponent from './component-zh.json'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale,
    ...enComponent
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale,
    ...zhComponent
  }
}

const i18n = new VueI18n({
  // set locale
  // options: en or zh
  locale: Cookies.get('language') || 'zh',
  // set locale messages
  messages
})

export default i18n
