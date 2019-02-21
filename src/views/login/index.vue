<template>
  <div>
    <div
      class="login-bg"
      :style="{ backgroundImage: 'url(' + require('../../assets/img/login/login-bg.jpg') + ')' }"
    />
    <!-- <div class="nav">
      <svg-icon class-name="small-logo" icon-class="small-logo" />
    </div> -->
    <zl-login-password v-show="loginType == 'password'" @on-change-login-type="changeLoginType" />
    <zl-login-msg v-show="loginType == 'msg'" @on-change-login-type="changeLoginType" />
    <zl-login-forget v-show="loginType == 'forget'" @on-change-login-type="changeLoginType" />
    <zl-set-password v-show="loginType == 'set'" @on-change-login-type="changeLoginType" />
    <zl-choose v-if="loginType == 'choose'" @on-change-login-type="changeLoginType" />
    <register-window
      v-if="loginType == 'register'"
      @on-change-login-type="changeLoginType"
    ></register-window>
    <create-company
      v-if="loginType == 'createCompany'"
      @on-change-login-type="changeLoginType"
    ></create-company>
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
// import { getSessionId } from '@/utils/auth'
// import Cookies from 'js-cookie'
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
  data() {
    return {
      // loginType: 'password'
    }
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
        // this.loginType = value
      } else {
        // this.loginType = 'password'
        this.$store.commit('SET_LOGIN_TYPE', 'password')
      }
    }
  },
  mounted() {
    window.document.title = '登录'
    // if (getSessionId() && Cookies.get('zl-company')) {
    //   // this.loginType = 'choose'
    //   this.$router.push('/')
    // } else if (getSessionId() && !Cookies.get('zl-company')) {
    //   this.loginType = 'choose'
    // } else {
    //   this.loginType = 'password'
    // }
  }
}
</script>

<style lang="scss" scoped>
@import 'login.scss';
</style>
