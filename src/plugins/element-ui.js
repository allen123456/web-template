import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/**
 * @date 2019/4/1
 * @author 肖景
 * @description 修改element-ui中的主题颜色
 */
// import 'element-ui/lib/theme-chalk/index.css'
import './element-variables.scss'
import i18n from '@/lang'

Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})
