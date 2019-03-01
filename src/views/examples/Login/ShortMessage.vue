<template>
  <div class="short-message">
    <div class="input-wrapper">
      <zv-input
        label="手机号"
        placeholder="请输入您的手机号码"
        v-model="phoneNum"
      />
    </div>
    <div class="input-wrapper">
      <zv-input
        label="验证码"
        placeholder="请输入手机验证码"
        v-model="authCode"
      >
        <zv-button type="primary">发送验证码</zv-button>
      </zv-input>
    </div>
    <div class="btn-wrapper">
      <zv-button size="large" type="primary">
        {{ hiddenForgetView ? '登录' : '下一步' }}
      </zv-button>
    </div>
  </div>
</template>

<script>
import ZvInput from 'components/zv-input/index'
import ZvButton from 'components/zv-button/index'
export default {
  name: 'ShortMessage',
  components: { ZvButton, ZvInput },
  props: {
    /** 2019-03-01
     * @Author: 刘宇琳
     * @Desc: hiddenForgetView:true 短信登入， hiddenForgetView:false 找回密码
     */
    hiddenForgetView: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      phoneNum: '',
      authCode: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.short-message {
  .input-wrapper {
    margin-top: 16px;
  }
  .btn-wrapper {
    margin-top: 40px;
  }
}
</style>
