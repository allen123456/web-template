<template>
  <el-container class="register-window">
    <el-header class="header">
      {{ $t('login.title2') }}
      <!-- $t 创建公司 -->
    </el-header>
    <el-main class="main">
      <el-form ref="formData" :data="formData">
        <el-row style="padding-bottom: 30px;">
          <el-form-item>
            <el-col class="title-desc"> {{ $t('login.title3') }}</el-col>
            <!-- $t 检测到您未在任何公司/组织任职，或您已经被所任职的公司锁定。您可以选择创建公司 -->
          </el-form-item>
        </el-row>
        <el-row class="phone">
          <el-form-item>
            <el-col class="center" :span="15">
              <el-input v-model="formData.name" :placeholder="$t('login.err10')"></el-input>
              <!-- $t 请填写公司/组织名称 -->
            </el-col>
          </el-form-item>
        </el-row>
        <el-row style="border-bottom: none;">
          <el-col class="left">
            <el-checkbox
              v-model="check"
              @change="
                () => {
                  check = true
                }
              "
              >{{ $t('login.err11') }}</el-checkbox
            >
            <!-- $t 设置为默认登录公司/组织 -->
          </el-col>
        </el-row>
        <el-row class="tip">
          <el-col :span="16" class="left" type="flex" justify="start">
            <zv-svg-icon v-show="errMsg !== ''" class="tan" icon-class="tan" />
            <span>{{ errMsg }}</span>
          </el-col>
        </el-row>
      </el-form>
    </el-main>
    <el-footer class="footer">
      <el-button class="login" @click="submitForm">{{ $t('login.button3') }}</el-button
      ><!-- $t 创建-->
      <el-row style="text-align: right;height:30px;line-height: 30px;color: #96b327;">
        <a href="javascript: void(0);" @click="changeLoginType('password')">{{
          $t('login.backLogin')
        }}</a>
        <!-- $t 返回登录页-->
      </el-row>
    </el-footer>
  </el-container>
</template>

<script>
import Mixins from './mixins'
export default {
  mixins: [Mixins],
  data() {
    return {
      check: true,
      formData: {
        name: '',
        appType: '2'
      },
      errMsg: '',
      config: {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json'
        }
      }
    }
  },
  methods: {
    submitForm() {
      if (this.formData.name === '') {
        this.errMsg = this.$t('login.err15') // $t  公司/组织名称不能为空
      } else {
        this.errMsg = ''
        this.$store.dispatch('createDefaultCompany', this.formData).then(res => {
          if (res.code === '0') {
            this.$message.success(this.$t('login.success2')) // $t  创建成功
            // 创建成功, 跳转到首页
            this.$router.push({ path: '/' })
          }
        })
      }
    }
  }
}
</script>

<style scoped></style>

<style lang="scss">
@import '../style/registerWindow.scss';
</style>

<style scoped>
.el-row {
  box-sizing: content-box;
}
.title-desc {
  line-height: 23px;
  height: 50px;
}
.main {
  margin-top: 23px;
}
</style>
