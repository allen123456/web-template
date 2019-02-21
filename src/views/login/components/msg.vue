<template>
  <div class="login-panel">
    <div class="tab-login-option">
      <el-button-group>
        <el-button @click="changeLoginType('password')">{{
          $t('login.loginTypePassword')
        }}</el-button>
        <el-button type="primary" @click="changeLoginType('msg')">{{
          $t('login.loginTypeMsg')
        }}</el-button>
      </el-button-group>
    </div>
    <div class="login-form">
      <div class="form-row">
        <!-- 手机号码 -->
        <input
          v-model.trim.number="model.mobile"
          type="number"
          maxlength="11"
          :placeholder="$t('login.mobile')"
          class="form-input"
        />
        <div class="i-class" v-show="!model.mobile" />
        <i class="el-icon-error form-icon i-class" v-show="model.mobile" @click="clearName" />
      </div>
      <div class="form-row" style="margin-top: 10px;">
        <!-- 验证码 -->
        <input
          v-model.trim="model.code"
          class="form-input"
          :placeholder="$t('login.validateCode')"
        />
        <span class="sendmsg" @click="sendmsg" :style="sendMsgStyle">{{ sendMsgTxt }}</span>
      </div>
      <div style="margin-top: 10px;height: 30px;">
        <div style="float:left;color:#FE605E;" v-show="errMsg">
          <zv-svg-icon icon-class="tan" style="font-size:14px;margin-right:5px;" />
          <span>{{ errMsg }}</span>
        </div>
      </div>
      <div class="btn-login" style="margin-top:0;">
        <el-button
          type="primary"
          style="width: 100%;height: 50px;font-size:16px;"
          :loading="loading"
          @click.native="handleMsg"
          >{{ $t('login.logIn') }}</el-button
        >
        <el-row class="password">
          <el-col class="left" :span="12">
            {{ $t('login.tip1') }}？
            <a href="javascript:void(0);" @click="changeLoginType('register')">{{
              $t('login.goRegister')
            }}</a>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
// import Cookies from 'js-cookie'
import Mixins from './mixins'
export default {
  mixins: [Mixins],
  data() {
    return {
      model: {
        mobile: '',
        code: ''
      },
      regMobile: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
      i: 60,
      loading: false,
      timer: null,
      errMsg: '',
      sendMsgAble: true
    }
  },
  computed: {
    sendMsgTxt() {
      // 倒计时
      var txt = this.$t('login.sendValidateCode')
      if (this.i === 60) {
        return txt
      }
      return `${txt}(${this.i}s)`
    },
    sendMsgStyle() {
      const style = {}
      if (this.i < 60) {
        style.color = '#ccc'
      }
      return style
    }
  },
  methods: {
    sendmsg() {
      if (!this.sendMsgAble) {
        return
      }

      this.sendMsgAble = false

      if (this.i < 60) {
        return
      }

      var b = this.regMobile.test(this.model.mobile)
      if (!b) {
        this.errMsg = this.$t('login.errMobile')
        return
      }

      this.$store
        .dispatch('getMsgCode', { mobile: this.model.mobile })
        .then(data => {
          if (data.code === '0') {
            this.setTimer()
          } else {
            this.clearTimer()
          }
        })
        .catch(() => {
          this.clearTimer()
        })
      // 发送短信
    },
    handleMsg() {
      if (!this.model.mobile || !this.regMobile.test(this.model.mobile)) {
        this.errMsg = this.$t('login.errMobile')
        return
      }
      if (!this.model.code) {
        this.errMsg = this.$t('login.inputValidateCode')
        return
      }
      var params = {
        phone: this.model.mobile,
        code: this.model.code
      }
      // 短信登录
      this.$store.dispatch('loginByCode', params).then(data => {
        if (data.code === '0') {
          if (data.isSetPassWord === 'N') {
            this.$store.commit('SET_PHONE', this.model.mobile)
            this.changeLoginType('set')
          } else if (data.isMultiple === 'N') {
            this.$router.push({ path: '/' })
          } else {
            // 如果用户没有公司，需要新创建公司
            this.changeLoginType('createCompany')
          }
        }

        this.clearTimer()
      })
    },
    clearName() {
      this.model.mobile = ''
    },
    setTimer() {
      // 设置定时
      this.i--
      this.timer = setInterval(() => {
        this.i--
        if (this.i <= 0) {
          this.clearTimer()
        }
      }, 1000)
    },
    clearTimer() {
      // 清除定时
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.i = 60
      this.sendMsgAble = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../login.scss';
</style>
