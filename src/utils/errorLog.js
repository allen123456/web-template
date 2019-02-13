import Vue from 'vue'

if (process.env.NODE_ENV === 'production') {
  Vue.config.errorHandler = function(err, vm, info) {
    // Don't ask me why I use Vue.nextTick, it just a hack.
    // detail see https://forum.vuejs.org/t/dispatch-in-vue-config-errorhandler-has-some-problem/23500
    let {
      message, // 异常信息
      name, // 异常名称
      stack // 异常堆栈信息
    } = err
    // vm 为抛出异常的Vue实例
    // info 为 Vue 特定的错误信息，比如错误所在的生命周期钩子
    Vue.nextTick(() => {
      const errInfo = `${message}${name}${stack}`
      console.error(errInfo)
      console.error(vm)
      console.error(info)
    })
  }
}
