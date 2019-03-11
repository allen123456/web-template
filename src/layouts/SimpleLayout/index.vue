<template>
  <div class="simple-layout">
    <nav-bar :title="$route.meta.title">
      <template v-slot:left>
        <div class="simple-layout__btn" @click="goback">
          <i class="el-icon-arrow-left" />
          文字按钮
        </div>
      </template>
    </nav-bar>
    <router-view />
  </div>
</template>

<script>
import NavBar from '../NavBar'

export default {
  name: 'SimpleLayout',
  components: { NavBar },
  methods: {
    goback() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.simple-layout {
  &__btn {
    height: 44px;
    line-height: 44px;
    color: #fff;
    cursor: pointer;
    &:active {
      color: #e2e2e2;
    }
  }
}
</style>
