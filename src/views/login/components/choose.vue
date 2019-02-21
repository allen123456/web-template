<template>
  <div class="login-panel">
    <div class="title">{{ $t('login.chooseCompany') }}</div>
    <div class="company-panel">
      <el-scrollbar class="company">
        <div
          class="company-item"
          :class="[{ active: active == x.id }, { disabled: x.isLocked == 'Y' }]"
          v-for="x in list"
          :key="x.id"
          @click="chooseCompany(x.id)"
        >
          {{ x.name }}
          <span v-if="x.isLocked == 'Y'">({{ $t('login.disabled') }})</span>
          <zv-svg-icon icon-class="yes" v-if="active == x.id" />
        </div>
      </el-scrollbar>
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
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      list: [],
      active: ''
    }
  },
  methods: {
    handleClick() {
      if (!this.active) {
        this.$message.info(this.$t('login.chooseCompanyPlz'))
        return
      }
      // 选择公司
      this.$store
        .dispatch('selectTenant', { tenantId: this.active, isFirstSelect: 'Y' })
        .then(() => {
          this.$router.push({ path: '/' })
        })
    },
    chooseCompany(value) {
      this.active = value
    },
    queryUserTenant() {
      // 查询租户
      this.$store.dispatch('queryUserTenant').then(data => {
        this.list = data.tenantDtoList
      })
    }
  },
  mounted() {
    this.queryUserTenant()
  }
}
</script>

<style lang="scss" scoped>
.title {
  color: #666666;
  margin-top: 29px;
  margin-bottom: 19px;
  width: 100%;
  text-align: center;
}
.company-panel {
  padding: 0 45px;
}
.company {
  height: 160px;
  &-item {
    width: 420px;
    height: 50px;
    // background-color: #f9f9f9;
    line-height: 50px;
    vertical-align: middle;
    padding: 0 11px;
    // margin: 0 auto;
    margin-bottom: 5px;
    font-size: $fontSizeDefault;
    &.active {
      background-color: #f6f7f1;
      border: solid 1px $themeBg;
      color: $themeBg;
      svg {
        float: right;
        margin-top: 15px;
      }
    }
    &.disabled {
      color: #ccc;
      pointer-events: none;
    }
  }
  /deep/ .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
.btn-login {
  padding: 0 45px;
  margin-top: 20px;
}
</style>
