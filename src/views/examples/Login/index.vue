<template>
  <div
    class="login"
    :style="{
      backgroundImage: 'url(' + require('@/assets/img/login/login-bg.jpg') + ')'
    }"
  >
    <login-layout justify-content="flex-end">
      <div class="login-wrapper">
        <div class="login-title">
          {{ hiddenForgetView ? '用户登录' : '找回密码' }}
        </div>

        <zv-tabs
          v-if="hiddenForgetView"
          v-model="activeName"
          @tab-click="handleClick"
        >
          <el-tab-pane label="用户登入" name="first">
            <user-login @handleForget="hiddenForgetView = !hiddenForgetView" />
          </el-tab-pane>

          <el-tab-pane label="短信登录" name="second">
            <short-message :hiddenForgetView="hiddenForgetView" />
          </el-tab-pane>
        </zv-tabs>

        <short-message :hiddenForgetView="hiddenForgetView" v-else />
      </div>
    </login-layout>
  </div>
</template>

<script>
import LoginLayout from 'layouts/LoginLayout/index'
import ZvTabs from 'components/zv-tabs/index'
import UserLogin from './UserLogin'
import ShortMessage from './ShortMessage'
export default {
  name: 'Login',
  components: { ShortMessage, UserLogin, ZvTabs, LoginLayout },
  data() {
    return {
      activeName: 'first',
      hiddenForgetView: true
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  background-size: 100% 100%;
  .login-wrapper {
    box-sizing: border-box;
    padding: 0 40px;
    width: 440px;
    height: 100%;
    background-color: #fff;
    .login-title {
      color: $zv-212121;
      font-size: 28px;
      margin: 80px 0 56px 0;
    }
  }
}
</style>
