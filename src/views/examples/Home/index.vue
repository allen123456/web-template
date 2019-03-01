<template>
  <div class="dashboard-container">
    <router-link to="/simpleLayout" class="dashboard-text"
      >去详情页</router-link
    >
  </div>
</template>

<script>
export default {
  name: 'BaseLayout'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
