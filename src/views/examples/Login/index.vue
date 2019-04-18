<template>
  <div
    class="login"
    :style="{
      backgroundImage: 'url(' + require('@/assets/img/login/login-bg.jpg') + ')'
    }"
  >
    <login-layout justify-content="flex-end">
      <div class="login__wrapper">
        <div class="login__title">
          {{ hiddenForgetView ? '用户登录' : '找回密码' }}
        </div>

        <zv-tabs
          v-if="hiddenForgetView"
          v-model="activeName"
          @tab-click="handleClick"
        >
          <el-tab-pane label="用户登入" name="first">
            <account-password
              @handleForget="hiddenForgetView = !hiddenForgetView"
            />
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
import AccountPassword from './AccountPassword'
import ShortMessage from './ShortMessage'
export default {
  name: 'Login',
  components: { ShortMessage, AccountPassword, ZvTabs, LoginLayout },
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
  .login__wrapper {
    box-sizing: border-box;
    padding: 0 40px;
    width: 440px;
    height: 100%;
    background-color: #fff;
    .login__title {
      color: $base-font-color;
      font-size: 28px;
      margin: 80px 0 56px 0;
    }
  }
}
</style>
