<template>
  <div class="login-account-password">
    <div class="login-account-password__input">
      <zv-input
        label="用户名称"
        placeholder="请输入您的账号"
        v-model="username"
      />
    </div>

    <div class="login-account-password__input">
      <zv-input
        label="登录密码"
        placeholder="请输入您的登录密码"
        v-model="password"
        :type="showPassword ? 'text' : 'password'"
        :icon="showPassword ? 'see1' : 'see2'"
        @clickIcon="showPassword = !showPassword"
      />
    </div>

    <div class="login-account-password__forget">
      <zv-button type="text" @click.native="forgetPassword">忘记密码</zv-button>
    </div>

    <div
      class="login-account-password__agreement"
      @click="agreement = !agreement"
    >
      <i
        :class="[agreement ? 'icon-color' : '', 'el-icon-circle-check-outline']"
      />
      同意"
      <span @click.stop="goUserNotes">
        用户使用协议
      </span>
      "
    </div>

    <div class="login-account-password__btn">
      <zv-button size="large" type="primary">
        登录
      </zv-button>
    </div>
  </div>
</template>

<script>
import ZvInput from 'components/zv-input/index'
import ZvButton from 'components/zv-button/index'
export default {
  name: 'AccountPassword',
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
.login-account-password {
  &__input {
    margin-top: 16px;
  }
  &__agreement {
    @include containerH44();
    cursor: pointer;
    .icon-color {
      color: $base-color;
    }
    span {
      color: $base-font-color;
      border-bottom: 1px solid $sub-font-color;
    }
  }
  &__forget {
    @include containerH44();
    @include flex($justifyContent: flex-end);
  }
  &__btn {
    margin-top: 40px;
  }
}
</style>
