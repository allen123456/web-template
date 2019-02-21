<template>
  <div class="login-panel">
    <div class="tab-login-option">
      <el-button-group>
        <el-button type="primary" @click="changeLoginType('password')">{{
          $t('login.loginTypePassword')
        }}</el-button>
        <el-button @click="changeLoginType('msg')">{{ $t('login.loginTypeMsg') }}</el-button>
      </el-button-group>
    </div>
    <div class="login-form">
      <div class="form-row">
        <!-- 手机号码 -->
        <input
          v-model.trim="model.username"
          autofocus="true"
          @keyup.13="handleLogin"
          maxlength="11"
          :placeholder="$t('login.mobile')"
          class="form-input"
        />
        <i class="el-icon-error form-icon" v-show="model.username" @click="clearName" />
      </div>
      <div class="form-row" style="margin-top: 10px;">
        <!-- 密码 -->
        <input
          v-model.trim="model.password"
          @keyup.13="handleLogin"
          :type="passwordType"
          :placeholder="$t('login.password')"
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

      <div style="margin-top: 10px;height: 30px;">
        <!-- <div style="float:left;color:#FE605E;" v-show="errMsg">
          <svg-icon icon-class="tan" style="font-size:14px;" />
          <span>{{ errMsg }}s</span>
        </div> -->
        <div style="float:right">
          <a @click="changeLoginType('forget')">{{ $t('login.forgetPassword') }}</a>
        </div>
      </div>
      <div class="btn-login" style="margin-top: 0;">
        <el-button
          type="primary"
          style="width: 100%;height: 50px;font-size:16px;"
          :loading="loading"
          @click.native="handleLogin"
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
import Mixins from './mixins'
import md5 from 'js-md5'
export default {
  mixins: [Mixins],
  data() {
    return {
      model: {
        username: process.env.NODE_ENV === 'development' ? '18570666862' : '',
        password: ''
      },
      show: {
        password: false
      },
      loading: false
    }
  },
  // created() {
  //   console.log(this.$base64)
  // },
  computed: {
    passwordType() {
      return this.show.password ? 'text' : 'password'
    }
  },

  methods: {
    clearName() {
      this.model.username = ''
    },
    changePasswordType() {
      // 密码明文
      this.show.password = !this.show.password
    },
    handleLogin() {
      // 登录
      if (!this.model.username) {
        this.$message.error(this.$t('login.inputMobile'))
        return
      }
      if (!this.model.password) {
        this.$message.error(this.$t('login.inputPassword'))
        return
      }
      this.loading = true
      const request = {
        username: this.model.username,
        password: md5(this.model.password).toUpperCase()
      }

      if (request.passwrod !== '') {
        this.$store
          .dispatch('Login', request)
          .then(data => {
            this.loading = false
            // Y 去选择租户 N 首页
            if (data.code === '0') {
              if (data.isMultiple === 'Y') {
                this.changeLoginType('choose')
              } else if (data.isMultiple === 'N') {
                this.$router.push({ path: '/' })
              } else {
                // 如果用户没有公司，需要新创建公司
                this.changeLoginType('createCompany')
              }
            }
          })
          .catch(() => {
            this.loading = false
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../login.scss';
::-ms-clear,
::-ms-reveal {
  display: none;
}
</style>
