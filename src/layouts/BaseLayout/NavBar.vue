<template>
  <div class="navbar">
    <div class="left">
      <div>
        logo
      </div>
      <div>
        首页
      </div>
      <div>
        <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div>
        <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="right">
      登录人所属角色
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 44px;
  overflow: hidden;
  background-color: $base-url;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  color: #fff;
  font-size: $fontSize12;
  .left {
    display: flex;
    align-items: center;
    div {
      width: 80px;
      color: #fff;
      font-size: $fontSize12;
      text-align: center;
    }
  }
  .right {
    float: right;
  }
}
</style>
