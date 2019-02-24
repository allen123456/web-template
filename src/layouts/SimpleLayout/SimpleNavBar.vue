<template>
  <div class="nav-bar">
    <div class="left-btn" @click="goback">
      <i class="el-icon-arrow-left" />
      文字按钮
    </div>
    <div class="title">{{ $route.meta.title }}</div>
  </div>
</template>

<script>
export default {
  name: 'SimpleNavBar',
  methods: {
    goback() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  box-sizing: border-box;
  height: 44px;
  background-color: $base-url;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .left-btn {
    height: 44px;
    line-height: 44px;
    font-size: $fontSize12;
    color: #fff;
    cursor: pointer;
    position: absolute;
    left: 16px;
    top: 0;
    &:active {
      color: #e2e2e2;
    }
  }
  .title {
    font-size: $fontSize12;
    color: #fff;
  }
}
</style>
