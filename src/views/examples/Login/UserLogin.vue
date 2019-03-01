<template>
  <div class="user-login">
    <div class="input-wrapper">
      <zv-input
        label="用户名称"
        placeholder="请输入您的账号"
        v-model="username"
      />
    </div>
    <div class="input-wrapper">
      <zv-input
        label="登录密码"
        placeholder="请输入您的登录密码"
        v-model="password"
        :type="showPassword ? 'text' : 'password'"
        :icon="showPassword ? 'see1' : 'see2'"
        @clickIcon="clickIcon"
      />
    </div>
    <div class="forget-password">
      <zv-button type="text" @click.native="forgetPassword">忘记密码</zv-button>
    </div>
    <div class="agreement" @click="agreement = !agreement">
      <i
        :class="[agreement ? 'icon-color' : '', 'el-icon-circle-check-outline']"
      ></i>
      同意"
      <span @click.stop="goUserNotes">
        用户使用协议
      </span>
      "
    </div>
    <router-link class="btn-wrapper" to="/baseLayout">
      <zv-button size="large" type="primary">
        登录
      </zv-button>
    </router-link>
  </div>
</template>

<script>
import ZvInput from 'components/zv-input/index'
import ZvButton from 'components/zv-button/index'
export default {
  name: 'UserLogin',
  components: { ZvButton, ZvInput },
  data() {
    return {
      username: '',
      password: '',
      showPassword: false,
      agreement: true
    }
  },
  methods: {
    clickIcon() {
      this.showPassword = !this.showPassword
    },
    forgetPassword() {
      this.$emit('handleForget')
    },
    goUserNotes() {}
  }
}
</script>

<style scoped lang="scss">
.user-login {
  .input-wrapper {
    margin-top: 16px;
  }
  .agreement {
    @include containerH44();
    cursor: pointer;
    .icon-color {
      color: $base-color;
    }
    span {
      color: $zv-212121;
      border-bottom: 1px solid $zv-8b8b8b;
    }
  }
  .forget-password {
    @include containerH44();
    @include flex($justifyContent: flex-end);
  }
  .btn-wrapper {
    margin-top: 40px;
  }
}
</style>
