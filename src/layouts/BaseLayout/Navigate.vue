<template>
  <div class="navigate">
    <nav-bar>
      <template v-slot:left>
        <div class="navigate-left">
          <div>logo</div>
          <div>首页</div>
          <div>
            <el-dropdown>
              <span class="el-dropdown-link">
                下拉菜单
                <i class="el-icon-arrow-down el-icon--right"></i>
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
                下拉菜单
                <i class="el-icon-arrow-down el-icon--right"></i>
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
      </template>
      <template v-slot:right>
        <div class="navigate-right">登录人所属角色</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../NavBar'
export default {
  name: 'Navigate',
  components: { NavBar }
}
</script>

<style lang="scss" scoped>
.navigate {
  .navigate-left {
    display: flex;
    align-items: center;
    div {
      width: 80px;
      color: #fff;
      text-align: center;
      height: 44px;
      line-height: 44px;
      font-size: $base-font-size;
    }
  }
  .navigate-right {
    height: 44px;
    line-height: 44px;
  }
}
</style>
