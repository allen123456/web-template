<template>
  <div class="login-panel">
    <div class="login-form">
      <div class="steps">
        <div data-v-3f1ff088="" class="el-steps el-steps--horizontal">
          <div
            data-v-3f1ff088=""
            class="el-step is-horizontal is-center"
            style="flex-basis: 33.3333%;margin-right: 0px;"
          >
            <div
              class="el-step__head is-success"
              style="text-align:  left;position:  relative;left: 10px;"
            >
              <div class="el-step__line" style="margin-right: 0px;left:10%;">
                <i class="el-step__line-inner" :style="stepLineStyle" />
              </div>
              <div class="el-step__icon is-text">
                <i class="el-step__icon-inner is-status el-icon-check" />
              </div>
            </div>
            <div class="el-step__main">
              <div class="el-step__title is-success" style="text-align:  left;">
                {{ $t('login.validateMobile') }}
              </div>
              <div class="el-step__description is-success" />
            </div>
          </div>
          <div
            data-v-3f1ff088=""
            class="el-step is-horizontal is-center"
            style="flex-basis: 33.3333%; margin-right: 0px;"
          >
            <div
              class="el-step__head"
              :class="[{ 'is-process': active < 2 }, { 'is-success': active >= 2 }]"
            >
              <div class="el-step__line" style="margin-right: 0px;right:-80%;">
                <i class="el-step__line-inner" :style="stepLineStyle2" />
              </div>
              <div class="el-step__icon is-text">
                <div v-if="active < 3" class="el-step__icon-inner">2</div>
                <i v-else class="el-step__icon-inner is-status el-icon-check" />
              </div>
            </div>
            <div class="el-step__main">
              <div
                class="el-step__title"
                :class="[{ 'is-process': active < 2 }, { 'is-success': active >= 2 }]"
              >
                {{ $t('login.validateCode') }}
              </div>
              <div
                class="el-step__description"
                :class="[{ 'is-process': active < 2 }, { 'is-success': active >= 2 }]"
              />
            </div>
          </div>
          <div
            data-v-3f1ff088=""
            class="el-step is-horizontal is-center"
            style="flex-basis: 33.3333%; max-width: 33.3333%;"
          >
            <div
              class="el-step__head"
              :class="[{ 'is-process': active < 3 }, { 'is-success': active >= 3 }]"
              style="text-align:  right;position:  relative;right: 10px;"
            >
              <div class="el-step__line">
                <i class="el-step__line-inner" />
              </div>
              <div class="el-step__icon is-text">
                <div v-if="active < 4" class="el-step__icon-inner">3</div>
                <i v-else class="el-step__icon-inner is-status el-icon-check" />
              </div>
            </div>
            <div class="el-step__main">
              <div
                class="el-step__title"
                :class="[{ 'is-process': active < 3 }, { 'is-success': active >= 3 }]"
                style="text-align:  right;"
              >
                {{ $t('login.changePassword') }}
              </div>
              <div
                class="el-step__description"
                :class="[{ 'is-process': active < 3 }, { 'is-success': active >= 3 }]"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="form-row" v-show="active == 1" style="margin-top:15px;">
        <input
          v-model.trim="model.phone"
          class="form-input"
          maxlength="11"
          :placeholder="$t('login.mobile')"
        />
        <i class="el-icon-error form-icon" v-if="model.phone" @click="clearName" />
      </div>
      <div class="form-row" v-show="active == 2" style="margin-top:15px;">
        <!-- <span class="form-title">手机号码</span> -->
        <input v-model.trim="model.phone" class="form-input" readonly />
        <i class="el-icon-circle-check form-icon form-icon-check" />
      </div>
      <div class="form-row" v-show="active == 2">
        <!-- <span class="form-title">验证码</span> -->
        <input
          v-model.trim="model.code"
          class="form-input"
          :placeholder="$t('login.validateCode')"
        />
        <span :class="{ timer: i < 60, sendmsg: i >= 60 }" @click="sendmsg">{{ sendMsgTxt }}</span>
      </div>
      <div style="color: #999;text-align:center;position:relative;top:2px;" v-show="active == 3">
        {{ $t('password') }}
      </div>
      <div class="form-row" v-show="active == 3" style="margin-top:0px;">
        <!-- <span class="form-title" style="width: 100px;">请输入密码</span> -->
        <input
          v-model.trim="model.password"
          :type="passwordType"
          class="form-input"
          :placeholder="$t('login.inputPassword')"
        />
        <password-strength class="strength" v-if="strength" :strength="strength" />
        <i class="el-icon-error form-icon" v-if="model.password" @click="clearName" />
      </div>
      <div class="form-row" v-show="active == 3">
        <!-- <span class="form-title" style="width: 100px;">请再次输入密码</span> -->
        <input
          v-model.trim="model.confirmPassword"
          :type="passwordType"
          class="form-input"
          :placeholder="$t('login.inputConfirmPassword')"
        />
        <zv-svg-icon
          icon-class="see2"
          v-if="model.password && !show.password"
          class-name="iconClass"
          @click.native="changePasswordType"
        />
        <zv-svg-icon
          icon-class="see1"
          v-if="model.password && show.password"
          class-name="iconClass"
          @click.native="changePasswordType"
        />
      </div>
      <div class="password" style="margin-bottom:8px;">
        <div style="float:left;color:#FE605E;" v-show="errMsg">
          <zv-svg-icon icon-class="tan" style="font-size:14px;margin-right: 5px;" />
          <span>{{ errMsg }}</span>
        </div>
      </div>

      <div class="btn-login" :style="btnLoginStyle">
        <el-button
          type="primary"
          style="width: 100%;height: 50px;font-size:16px;"
          :loading="loading"
          @click.native="handleMsg"
          >{{ btnName }}</el-button
        >
      </div>
      <div class="to-login">
        {{ $t('login.hasMobile') }}，
        <a @click="toLogin">{{ $t('login.toLogin') }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import Mixins from './mixins'
import PasswordStrength from './pwd-strength'
import { regPasswordStrength } from '@/utils/validate'
export default {
  components: { PasswordStrength },
  mixins: [Mixins],
  data() {
    return {
      model: {
        phone: '',
        code: '',
        certifiCate: '',
        newPassWord: '',
        password: '',
        confirmPassword: ''
      },
      loading: false,
      active: 1,
      regMobile: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
      errMsg: '', // 显示错误
      strength: '', // 显示密码强度
      i: 60,
      show: {
        password: false
      },
      sendMsgAble: true
    }
  },
  computed: {
    btnLoginStyle() {
      // margin-top:75px;
      const style = {}
      if (this.active === 1) {
        style.marginTop = '80px'
        return style
      }
      return style
    },
    btnName() {
      if (this.active === 3) {
        return this.$t('login.submit')
      }
      return this.$t('login.nextStep')
    },
    stepLineStyle() {
      const style = {}
      if (this.active >= 2) {
        style.transitionDelay = '0ms'
        style.borderWidth = '1px'
        style.width = '100%'
      }
      return style
    },
    stepLineStyle2() {
      const style = {}
      if (this.active === 3) {
        style.transitionDelay = '0ms'
        style.borderWidth = '1px'
        style.width = '100%'
      }
      return style
    },
    sendMsgTxt() {
      // 倒计时
      var txt = this.$t('login.sendValidateCode')
      if (this.i === 60) {
        return txt
      }
      return `(${this.i}s)`
    },
    passwordType() {
      // 密码明文
      return this.show.password ? 'text' : 'password'
    }
  },
  methods: {
    clearName() {
      if (this.active === 1) {
        this.model.phone = ''
      }
      if (this.active === 3) {
        this.model.password = ''
        this.model.confirmPassword = ''
      }
    },
    changePasswordType() {
      this.show.password = !this.show.password
    },
    handleMsg() {
      // 1.验证手机号是否存在
      // 2.发送短信 增写验证码
      // 3.修改密码
      if (this.active === 1) {
        var b = this.regMobile.test(this.model.phone)
        if (!b) {
          this.errMsg = this.$t('login.errMobile')
          return
        }
        this.$store.dispatch('validatePhone', { phone: this.model.phone }).then(data => {
          if (data.code === '0') {
            this.active = 2
          }
        })
        // this.$store.dispatch('getMsgCode', { mobile: this.model.phone }).then(data => {
        //   this.active = 2
        // })
      }
      if (this.active === 2) {
        if (!this.model.code) {
          this.errMsg = this.$t('login.inputValidateCode')
          return
        }
        this.$store.dispatch('verificationCodeCheck', this.model).then(data => {
          this.model.certifiCate = data.certifiCate
          this.active = 3
        })
      }
      if (this.active === 3) {
        if (!this.model.password) {
          this.errMsg = this.$t('login.inputPassword')
          return
        }
        if (!this.model.confirmPassword) {
          this.errMsg = this.$t('login.inputConfirmPassword')
          return
        }
        if (this.model.password !== this.model.confirmPassword) {
          this.errMsg = this.$t('login.passwordNotEqual')
          return
        }

        this.$store.dispatch('getPublicKey', { username: this.model.phone }).then(data => {
          if (data.code === '0') {
            const jse = new this.$jsEncrypt()
            jse.setPublicKey(data.publicKey)
            this.model.newPassWord = jse.encrypt(this.model.password)
            // this.model.passwod = jse.encrypt(this.model.passwod)
            // this.model.confirmPassword = jse.encrypt(this.model.confirmPassword)
            this.$store.dispatch('forgetPassword', this.model).then(() => {
              this.$alert(this.$t('login.setPasswordOk'), {
                callback: () => {
                  this.changeLoginType('password')
                }
              })
            })
          }
        })
      }
    },
    toLogin() {
      // 马上登录
      this.active = 1
      this.changeLoginType('password')
    },
    sendmsg() {
      if (!this.sendMsgAble) {
        return
      }

      this.sendMsgAble = false

      this.$store
        .dispatch('getMsgCode', { mobile: this.model.phone })
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
  },
  watch: {
    // 'model.password'(val) {
    //   if (val) {
    //     // 验证密码强度
    //     this.$store.dispatch('verifyPassword', { password: val, username: this.model.phone }).then(data => {
    //       if (data.code === '0') {
    //         this.strength = data.safetyLevel
    //         this.errMsg = ''
    //       } else {
    //         this.$notify.closeAll()
    //         if (data.subErrors && data.subErrors[0]) {
    //           this.errMsg = data.subErrors[0].message
    //         }
    //       }
    //     })
    //   } else {
    //     this.strength = ''
    //     this.errMsg = ''
    //   }
    // },
    'model.password'(val) {
      if (val) {
        if (val.length < 8 || val.length > 20) {
          this.errMsg = this.$t('login.err14')
          return
        }
        if (!regPasswordStrength.test(val)) {
          this.errMsg = this.$t('login.err13')
          return
        }
        this.$store.dispatch('getPublicKey', { username: this.model.phone }).then(data => {
          if (data.code === '0') {
            this.jse = new this.$jsEncrypt()
            this.jse.setPublicKey(data.publicKey)

            this.$store
              .dispatch('verifyPassword', {
                password: this.jse.encrypt(val),
                username: this.model.phone
              })
              .then(data => {
                if (data.code === '0') {
                  this.strength = data.safetyLevel
                  this.errMsg = ''
                } else {
                  this.$notify.closeAll()
                  if (data.subErrors && data.subErrors[0]) {
                    this.errMsg = data.subErrors[0].message
                  }
                }
              })
          } else {
            this.$notify.closeAll()
            if (data.subErrors && data.subErrors[0]) {
              this.errMsg = data.subErrors[0].message
            }
          }
        })
      } else {
        this.strength = ''
        this.errMsg = ''
      }
    },
    'model.confirmPassword'(val) {
      if (val) {
        // 验证两次密码是否相等
        if (this.model.password !== val) {
          this.errMsg = this.$t('login.passwordNotEqual')
        } else {
          this.errMsg = ''
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../login.scss';
.login-panel {
  /deep/ .el-step__head.is-success {
    color: $themeBg;
    border-color: $themeBg;
  }
  /deep/ .el-step__title.is-success {
    color: $themeBg;
    border-color: $themeBg;
  }
}
</style>
