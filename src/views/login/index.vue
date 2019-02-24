<template>
  <div>
    <div
      class="login-bg"
      :style="{ backgroundImage: 'url(' + require('../../assets/img/login/login-bg.jpg') + ')' }"
    />
    <zl-login-password v-show="loginType === 'password'" @on-change-login-type="changeLoginType" />
    <zl-login-msg v-show="loginType === 'msg'" @on-change-login-type="changeLoginType" />
    <zl-login-forget v-show="loginType === 'forget'" @on-change-login-type="changeLoginType" />
    <zl-set-password v-show="loginType === 'set'" @on-change-login-type="changeLoginType" />
    <zl-choose v-if="loginType === 'choose'" @on-change-login-type="changeLoginType" />
    <register-window v-if="loginType === 'register'" @on-change-login-type="changeLoginType" />
    <create-company v-if="loginType === 'createCompany'" @on-change-login-type="changeLoginType" />
  </div>
</template>

<script>
import zlLoginPassword from './components/password'
import zlLoginForget from './components/forget'
import zlLoginMsg from './components/msg'
import zlSetPassword from './components/setpassword'
import zlChoose from './components/choose'
import RegisterWindow from './components/registerWindow'
import CreateCompany from './components/createCompany'
export default {
  components: {
    zlLoginPassword,
    zlLoginForget,
    zlLoginMsg,
    zlSetPassword,
    zlChoose,
    RegisterWindow,
    CreateCompany
  },
  computed: {
    loginType() {
      return this.$store.state.user.loginType
    }
  },
  methods: {
    changeLoginType(value) {
      if (value) {
        this.$store.commit('SET_LOGIN_TYPE', value)
      } else {
        this.$store.commit('SET_LOGIN_TYPE', 'password')
      }
    }
  },
  mounted() {
    window.document.title = '登录'
  }
}
</script>

<style lang="scss" scoped>
@import 'login.scss';
</style>
