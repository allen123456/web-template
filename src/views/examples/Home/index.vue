<template>
  <div class="dashboard">
    <router-link to="/simpleLayout" class="dashboard__text"
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
  margin: 30px;
  &__text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
