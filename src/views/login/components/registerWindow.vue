<template>
  <el-container class="register-window">
    <el-header class="header">
      {{ $t('login.title1') }}
      <!-- $t 系统登录 -->
    </el-header>
    <el-main class="main">
      <el-form ref="formData" :data="formData">
        <el-row class="phone">
          <el-form-item prop="phone">
            <el-col class="center" :span="22">
              <el-input
                v-model="formData.phone"
                maxlength="11"
                @blur="validatePhone()"
                @focus="phoneError = true"
                :placeholder="$t('login.label1')"
              ></el-input
              ><!-- $t 手机号码 -->
            </el-col>
            <el-col class="right" :span="2">
              <i
                class="el-icon-error form-icon"
                :style="{ opacity: phoneError ? 1 : 0 }"
                @click="formData.phone = ''"
                style="margin-right: 5px;"
              />
            </el-col>
          </el-form-item>
        </el-row>
        <el-row class="code">
          <el-form-item prop="code">
            <el-col class="center" :span="16">
              <el-input
                v-model="formData.code"
                maxlength="6"
                @blur="testCode"
                @focus="codeError = true"
                :placeholder="$t('login.label2')"
              ></el-input
              ><!-- $t 验证码 -->
            </el-col>
            <el-col class="right" :span="8">
              <i
                class="el-icon-error form-icon"
                :style="{ opacity: codeError ? 1 : 0 }"
                @click="formData.code = ''"
                style="margin-right: 5px;"
              />
              <el-button
                @click="sendCode"
                :class="{ disableSendButton: disableSendButton }"
                :disabled="disableSendButton"
              >
                {{ $t('login.button1') }}
                <span v-show="count > 0"> ({{ count }}s)</span> </el-button
              ><!-- $t 发送验证码 -->
            </el-col>
          </el-form-item>
        </el-row>
        <el-row class="password">
          <el-form-item prop="password">
            <el-col class="center" :span="15">
              <el-input
                v-model="formData.password"
                maxlength="20"
                @blur="passwordError = false"
                @focus="passwordError = true"
                :type="iconClass1 === 'see2' ? 'password' : 'text'"
                :placeholder="$t('login.label3')"
                @input="testPassword"
              ></el-input
              ><!-- $t 创建密码 -->
            </el-col>
            <el-col :span="3" style="height: 50px;line-height: 50px;" class="eye">
              <i
                class="el-icon-error form-icon"
                :style="{ opacity: passwordError ? 1 : 0 }"
                @click="emptyStrength()"
                style="margin-right: 5px;"
              />
              <zv-svg-icon
                :icon-class="iconClass1"
                class-name="iconClass"
                @click.native="
                  iconClass1 === 'see2' ? (iconClass1 = 'see1') : (iconClass1 = 'see2')
                "
              />
            </el-col>
            <el-col class="right" :span="6">
              <zv-progress :strength="formData.strength"></zv-progress>
              {{ returnStrengthName(formData.strength) }}
            </el-col>
          </el-form-item>
        </el-row>
        <el-row class="confirmPassword">
          <el-form-item prop="confimPassword">
            <el-col class="center" :span="21">
              <el-input
                :type="iconClass2 === 'see2' ? 'password' : 'text'"
                maxlength="20"
                @blur="confirmPasswordError = false"
                @focus="confirmPasswordError = true"
                :placeholder="$t('login.label4')"
                v-model="formData.confirmPassword"
              ></el-input
              ><!-- $t 确认密码 -->
            </el-col>
            <el-col class="right" :span="3">
              <i
                class="el-icon-error form-icon"
                :style="{ opacity: confirmPasswordError ? 1 : 0 }"
                @click="formData.confirmPassword = ''"
                style="margin-right: 5px;"
              />
              <zv-svg-icon
                :icon-class="iconClass2"
                class-name="iconClass"
                @click.native="
                  iconClass2 === 'see2' ? (iconClass2 = 'see1') : (iconClass2 = 'see2')
                "
              />
            </el-col>
          </el-form-item>
        </el-row>
        <el-row class="tip">
          <el-col :span="24" class="left" type="flex" justify="start">
            <zv-svg-icon v-show="errMsg !== ''" class="tan" icon-class="tan" />
            <span>{{ errMsg }}</span>
          </el-col>
        </el-row>
      </el-form>
    </el-main>

    <el-footer class="footer">
      <el-button class="login" @click="register">{{ $t('login.button2') }}</el-button
      ><!-- $t 注册 -->
      <el-row class="terms">
        <el-col :span="17" class="left">
          <el-checkbox v-model="haveRead"> </el-checkbox>
          {{ $t('login.readAndAgreed') }}
          <a style="color: blue;" @click="agreementDialogShow = true"
            >《{{ $t('login.zoomlionAgreement') }}》</a
          ><!-- $t 我已阅读并同意  中联e管家软件许可及服务协议 -->
        </el-col>
        <el-col :span="7" class="right">
          {{ $t('login.tip2') }} ,
          <!-- $t 已有账号 -->
          <a href="javascript: void(0);" @click="changeLoginType('password')">{{
            $t('login.goLogin')
          }}</a
          ><!-- $t 直接登录 -->
        </el-col>
      </el-row>
    </el-footer>
    <!-- 修改手机号弹窗 -->
    <agreement-dialog
      v-if="agreementDialogShow"
      @closeDialog="agreementDialogShow = false"
    ></agreement-dialog>
  </el-container>
</template>

<script>
/* eslint-disable */
import Mixins from './mixins'
import agreementDialog from './agreement-dialog.vue'
import ZvProgress from '@/components/zv-progress/index'
export default {
  mixins: [Mixins],
  components: {
    ZvProgress,
    agreementDialog
  },
  data() {
    // 校验手机号码格式
    const validatePhone = () => {
      this.phoneError = false
      if (!this.formData.phone) {
        this.isSend = false
        this.errMsg = this.$t('login.err1') // $t 请输入手机号
        return false
      } else {
        const tel = /^((0\d{2,3}-\d{7,8})|(1[0123456789]\d{9}))$/
        if (tel.test(this.formData.phone)) {
          // 格式正确才能发送验证码
          this.errMsg = ''
          // 获取公钥
          this.getPublickey()
          this.isSend = true
          return true
        } else {
          this.isSend = false
          this.errMsg = this.$t('login.err2') // $t 手机号格式不正确
          return false
        }
      }
    }
    const validatePass = value => {
      if (value === '') {
        this.errMsg = this.$t('login.inputPassword') // $t 请输入密码
        this.formData.strength = ''
        return false
      } else {
        this.lv = 0 // 密码强度等级
        if (this.formData.password.length >= 8 && value.length <= 20) {
          if (value.match(/[a-z]/g)) {
            this.lv++
          } // 含有小写字母
          if (value.match(/[A-Z]/g)) {
            this.lv++
          } // 含有大写字母
          if (value.match(/[0-9]/g)) {
            this.lv++
          } // 含有数字
          if (value.match(/[\-\_\,\!\|\~\`\(\)\#\$\%\^\&\*\{\}\:\;\"\L\<\>\?]/g)) {
            this.lv++
          } // 含有特殊字符
          if (this.lv >= 2) {
            // 满足其中两项时,查询密码强度
            return true
          } else {
            this.errMsg = this.$t('login.err5') // $t 密码应为8~20位，数字、字母、符号两种及以上组合
            return false
          }
        } else {
          this.errMsg = this.$t('login.err5') // $t 密码应为8~20位，数字、字母、符号两种及以上组合
          return false
        }
      }
    }
    return {
      haveRead: true, // 是否阅读条款
      isSend: false, // 是否可以发送验证码
      isSent: false, // 是否已发送验证码
      errMsg: '', // 错误提示
      validatePhone, // 手机格式校验
      validatePass, // 密码校验
      iconClass1: 'see2',
      iconClass2: 'see2',
      agreementDialogShow: false,
      phoneError: false,
      codeError: false,
      passwordError: false,
      confirmPasswordError: false,
      count: '', // 60秒计数
      timer1: null, // 验证码定时器
      disableSendButton: false, // 是否显示发送验证码按钮
      lv: 0, // 密码强度
      queryCode: '', // 短信收到的验证码
      formData: {
        phone: '', // 输入的手机号
        code: '', // 输入的验证码
        password: '', // 输入的密码
        confirmPassword: '', // 输入的确认密码
        strength: '', // 密码强度
        certifiCate: '' // 注册凭证
      },
      publicKey: ''
    }
  },
  destroyed() {
    // 清除定时器
    clearInterval(this.timer1)
  },
  methods: {
    // 创建倒计时
    countDown() {
      const TIME_COUNT = 60
      if (!this.timer1) {
        this.count = TIME_COUNT
        this.showBtn = false
        this.timer1 = setInterval(() => {
          if (this.count > 1 && this.count <= TIME_COUNT) {
            this.count = this.count - 1
          } else {
            this.count = ''
            this.emptyTimer()
          }
        }, 1000)
      }
    },
    getPublickey() {
      // 通过username查询公钥 设置秘钥
      this.$store.dispatch('getPublicKey', { username: this.formData.phone }).then(res => {
        if (res.code === '0') {
          this.publicKey = res.publicKey
        }
      })
    },
    // 校验手机号是否存在
    testPhone() {
      return new Promise((resolve, reject) => {
        this.$store.dispatch('checkPhoneExist', { phone: this.formData.phone }).then(res => {
          // 如果手机号不存在
          if (res.code === '0') {
            resolve(true)
          }
        })
      })
    },
    // 发送验证码
    sendCode() {
      // 如果手机号满足规则
      if (this.isSend) {
        this.testPhone().then(type => {
          this.disableSendButton = true
          const request = {
            phone: this.formData.phone,
            isEnterprisePhone: 'N'
          }
          // 发送验证码
          this.$store
            .dispatch('registerWinodw_sendVerificationCode', request)
            .then(res => {
              if (res.code === '0') {
                this.$message.success(this.$t('login.tip3')) // $t 验证码发送成功
                this.errMsg = ''
                // 是否已发送
                this.isSent = true
                // 创建倒计时定时器
                this.countDown()
              }
            })
            .catch(() => {
              this.emptyTimer()
            })
        })
      } else {
        this.isSend = false
        // 不符合规则报错
        this.errMsg = this.$t('login.err2') // $t 手机号格式不正确
      }
    },
    // 清空定时器
    emptyTimer() {
      clearInterval(this.timer1)
      this.timer1 = null
      this.disableSendButton = false
    },
    // 清空密码强度
    emptyStrength(val) {
      this.formData.password = ''
      this.formData.strength = ''
    },
    // 实时检测密码强度
    testPassword(value) {
      if (this.formData.phone) {
        if (value === '') {
          this.errMsg = this.$t('login.err5') // $t 密码应为8~20位，数字、字母、符号两种及以上组合
          this.formData.strength = ''
        } else {
          if (value.length >= 8 && value.length <= 20) {
            this.lv = 0 // 密码强度等级
            if (value.match(/[a-z]/g)) {
              this.lv++
            } // 含有小写字母
            if (value.match(/[A-Z]/g)) {
              this.lv++
            } // 含有大写字母
            if (value.match(/[0-9]/g)) {
              this.lv++
            } // 含有数字
            if (value.match(/[\-\_\,\!\|\~\`\(\)\#\$\%\^\&\*\{\}\:\;\"\L\<\>\?]/g)) {
              this.lv++
            } // 含有特殊字符
            if (this.lv >= 2) {
              // 满足其中两项时,查询密码强度
              const jse = new this.$jsEncrypt()
              jse.setPublicKey(this.publicKey)
              const request = {
                password: encodeURI(jse.encrypt(value)),
                username: this.formData.phone
              }

              this.$store.dispatch('registerWinodw_verifyPassword', request).then(res => {
                if (res.code === '0') {
                  this.formData.strength = res.safetyLevel
                  this.errMsg = ''
                }
              })
            } else {
              this.errMsg = this.$t('login.err5') // $t 密码应为8~20位，数字、字母、符号两种及以上组合
              return false
            }
          } else {
            this.errMsg = this.$t('login.err5') // $t 密码应为8~20位，数字、字母、符号两种及以上组合
            return false
          }
        }
      } else {
        this.errMsg = this.$t('login.err1') // $t 请输入手机号
      }
    },
    // 校验验证码是否匹配
    testCode() {
      this.codeError = false
      // 使用Promist替代手动retur， 避免拿不到return中的值, 也避免异步挂载
      return new Promise((resolve, reject) => {
        // 判断是否发送验证码
        if (this.isSent) {
          // 判断验证码是否输入验证码
          if (this.formData.code !== '') {
            // 请求接口，校验验证码是否正确
            const request = {
              code: this.formData.code,
              phone: this.formData.phone
            }
            resolve(
              this.$store.dispatch('registerWinodw_verificationCodeCheck', request).then(res => {
                if (res.code === '0') {
                  // 拿到凭证
                  this.formData.certifiCate = res.certifiCate
                  this.errMsg = ''
                  return true
                }
              })
            )
          } else {
            this.errMsg = this.$t('login.err7') // $t 请输入收到的验证码
            resolve(false)
          }
        } else {
          this.errMsg = this.$t('login.err8') // $t 请发送验证码
          resolve(false)
        }
      })
    },
    // 获取密码强度中文
    returnStrengthName(val) {
      if (val !== '') {
        if (val === 'L') {
          return this.$t('login.text1') // $t 弱
        } else if (val === 'M') {
          return this.$t('login.text2') // $t 中
        } else if (val === 'H') {
          return this.$t('login.text3') // $t 强
        }
      } else {
        return ''
      }
    },
    // 提交注册：满足所有验证后，提交表单
    register() {
      // 判断是否已经阅读条款
      if (this.haveRead) {
        // 校验手机号格式是否正确
        if (this.validatePhone()) {
          // 判断是否发送验证码
          if (this.isSent) {
            // 判断是否输入验证码
            if (this.formData.code) {
              // 校验收到的验证码是否与输入的验证码匹配
              if (this.formData.certifiCate) {
                // 校验密码强度是否符合规则
                if (this.validatePass(this.formData.password)) {
                  // 校验两次密码是否相同
                  if (this.formData.password === this.formData.confirmPassword) {
                    const jse = new this.$jsEncrypt()
                    jse.setPublicKey(this.publicKey)
                    // 防止用戶浏览器自动保存密码，不调用查询密码强度接口
                    if (this.formData.strength) {
                      // 通过username查询公钥 设置秘钥
                      const request = {
                        password: encodeURI(jse.encrypt(this.formData.password)), // 密码转成秘钥
                        username: this.formData.phone,
                        safetyLevel: this.formData.strength,
                        certifiCate: this.formData.certifiCate
                      }
                      this.$store.dispatch('userRegister', request).then(res => {
                        if (res.code === '0') {
                          this.$message.success(this.$t('login.success1')) // $t 注册成功
                          // 创建成功, 跳转到登录页面
                          this.changeLoginType('password')
                        }
                      })
                    } else {
                      const request = {
                        password: encodeURI(jse.encrypt(this.formData.password)),
                        username: this.formData.phone
                      }
                      this.$store.dispatch('registerWinodw_verifyPassword', request).then(res => {
                        if (res.code === '0') {
                          this.formData.strength = res.safetyLevel
                          this.errMsg = ''
                          // 通过username查询公钥 设置秘钥
                          const request = {
                            password: encodeURI(jse.encrypt(this.formData.password)), // 密码转成秘钥
                            username: this.formData.phone,
                            safetyLevel: this.formData.strength,
                            certifiCate: this.formData.certifiCate
                          }
                          this.$store.dispatch('userRegister', request).then(res => {
                            if (res.code === '0') {
                              this.$message.success(this.$t('login.success1')) // $t 注册成功
                              // 创建成功, 跳转到登录页面
                              this.changeLoginType('password')
                            }
                          })
                        }
                      })
                    }
                  } else {
                    this.errMsg = this.$t('login.err9') // $t 两次密码输入不一致
                    return false
                  }
                }
              } else {
                // 提示请输入验证码
                this.errMsg = this.$t('login.err6') // $t 验证码不匹配，请重新输入
                return false
              }
            } else {
              this.errMsg = this.$t('login.err7') // $t 请发送验证码
            }
          } else {
            // 提示请发送验证码
            this.errMsg = this.$t('login.err8') // $t 请发送验证码
            return false
          }
        }
      } else {
        this.errMsg = this.$t('login.agreeDeal') // $t 您必须同意重科云谷服务条款后，才能提交注册
        return false
      }
    }
  }
}
</script>
<style lang="scss">
@import '../style/registerWindow.scss';
</style>
