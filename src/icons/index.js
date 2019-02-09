import Vue from 'vue'
import ZvSvgIcon from '@/components/zv-svg' // svg组件

// 全局注册
Vue.component('zv-svg-icon', ZvSvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
