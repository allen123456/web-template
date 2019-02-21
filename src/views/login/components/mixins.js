export default {
  methods: {
    changeLoginType(value) {
      // 改变登录方式
      this.$emit('on-change-login-type', value)
    }
  }
}
