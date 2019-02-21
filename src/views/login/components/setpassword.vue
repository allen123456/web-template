<template>
  <div class="login-panel">
    <div class="tab-login-option">
      <div class="tab-title">{{ $t('login.setPassword') }}</div>
      <div style="color: #999;">{{ $t('password') }}</div>
    </div>
    <div class="login-form" style="margin-top: 15px;">
      <div class="form-row">
        <input
          v-model.trim="model.password"
          :type="passwordType"
          :placeholder="$t('login.inputPassword')"
          class="form-input"
        />
        <password-strength class="strength" v-if="strength" :strength="strength" />
        <i class="el-icon-error form-icon" v-if="model.password" @click="clearName" />
      </div>
      <div class="form-row" style="margin-top: 10px;">
        <input
          v-model.trim="model.confirmPassword"
          :type="passwordType"
          :placeholder="$t('login.inputConfirmPassword')"
          class="form-input"
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
      <div class="password">
        <div
          style="float:left;color:#FE605E;"
          v-show="errMsg || (model.confirmPassword && model.password != model.confirmPassword)"
        >
          <zv-svg-icon icon-class="tan" style="font-size:14px;margin-right: 5px;" />
          <span>{{ errMsg ? errMsg : '两次密码不一致' }}</span>
        </div>
        <a>&nbsp;</a>
      </div>
      <div class="btn-login">
        <el-button
          type="primary"
          style="width: 100%;height: 50px;font-size:16px;"
          :loading="loading"
          @click.native="handleClick"
          >{{ $t('login.nextStep') }}</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import PasswordStrength from './pwd-strength'
import Mixins from './mixins'
import { regPasswordStrength } from '@/utils/validate'
import ZvSvgIcon from '../../../components/global/zv-svg/main'
export default {
  components: { ZvSvgIcon, PasswordStrength },
  mixins: [Mixins],
  data() {
    return {
      model: {
        password: '',
        confirmPassword: ''
      },
      loading: false,
      show: {
        password: false
      },
      strength: '', // 密码强度
      errMsg: '', // 错误信息
      jse: null
    }
  },
  computed: {
    passwordType() {
      // 密码明文
      return this.show.password ? 'text' : 'password'
    },
    phone() {
      return this.$store.state.user.phone
    }
  },
  methods: {
    clearName() {
      this.model.password = ''
      this.model.confirmPassword = ''
    },
    changePasswordType() {
      this.show.password = !this.show.password
    },
    handleClick() {
      if (!this.model.password) {
        this.$message.error(this.$t('login.inputPassword'))
        return
      }
      if (!this.model.confirmPassword) {
        this.$message.error(this.$t('login.inputConfirmPassword'))
        return
      }
      if (this.model.password !== this.model.confirmPassword) {
        this.$message.error(this.$t('login.passwordNotEqual'))
        return
      }

      this.$store.dispatch('getPublicKey', { username: this.phone }).then(data => {
        if (data.code === '0') {
          this.jse = new this.$jsEncrypt()
          this.jse.setPublicKey(data.publicKey)

          var onePassword = this.jse.encrypt(this.model.password)

          var twoPassword = this.jse.encrypt(this.model.confirmPassword)

          var params = {
            onePassword: onePassword,
            twoPassword: twoPassword
          }
          // 首次登录设置密码
          this.$store.dispatch('setPassword', params).then(() => {
            this.clearName()
            this.$alert(this.$t('login.setPasswordOk'), {
              callback: () => {
                this.$store.dispatch('LogOut')
                this.changeLoginType('password')
              }
            })
          })
        }
      })

      // var params = {
      //         onePassword: this.model.password,
      //         twoPassword: this.model.confirmPassword
      //       }
      //       // 首次登录设置密码
      //       this.$store.dispatch('setPassword', params).then(data => {
      //         this.clearName()
      //         this.$alert(this.$t('login.setPasswordOk'), {
      //           callback: () => {
      //             this.$store.dispatch('LogOut')
      //             this.changeLoginType('password')
      //           }
      //         })
      //       })
    }
  },
  watch: {
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
        this.$store.dispatch('getPublicKey', { username: this.phone }).then(data => {
          if (data.code === '0') {
            this.jse = new this.$jsEncrypt()
            this.jse.setPublicKey(data.publicKey)

            this.$store
              .dispatch('verifyPassword', { password: this.jse.encrypt(val), username: this.phone })
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
    }
    //   'model.password'(val) {
    //     if (val) {
    //       if (val.length < 8) {
    //         this.errMsg = this.$t('login.err14')
    //         return
    //       }
    //       if (!regPasswordStrength.test(val)) {
    //         this.errMsg = this.$t('login.err13')
    //         return
    //       }
    //       this.$store.dispatch('verifyPassword', { password: this.jse.encrypt(val), username: this.phone }).then(data => {
    //         if (data.code === '0') {
    //           this.strength = data.safetyLevel
    //           this.errMsg = ''
    //         } else {
    //           this.$notify.closeAll()
    //           if (data.subErrors && data.subErrors[0]) {
    //             this.errMsg = data.subErrors[0].message
    //           }
    //         }
    //       })
    //     } else {
    //       this.strength = ''
    //       this.errMsg = ''
    //     }
    //   },
    //   phone(val) {
    //     this.$store.dispatch('getPublicKey', { username: this.phone }).then(data => {
    //       if (data.code === '0') {
    //         this.jse = new this.$jsEncrypt()
    //         this.jse.setPublicKey(data.publicKey)
    //       }
    //     })
    //   }
  }
}
</script>
<style lang="scss" scoped>
@import '../login.scss';
</style>
