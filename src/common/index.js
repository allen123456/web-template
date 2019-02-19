import Navigator from './navigator.js'
import '@/icons'
import '@/utils/errorLog'
import '@/components'

// 通过 npm run mock 启用mock数据
if (process.env.NODE_ENV === 'mock') {
  require('./mock')
}

export default Vue => {
  Vue.$openRouter = Vue.prototype.$openRouter = Navigator.openRouter
}
