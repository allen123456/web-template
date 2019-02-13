<template>
  <div class="zv-tab-bar">
    <van-tabbar v-model="active" active-color="#aace39">
      <van-tabbar-item info="3">
        <span>自定义</span>
        <zv-svg-icon slot="icon" icon-class="drag" />
      </van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import ZvSvgIcon from '../zv-svg/index'
export default {
  name: 'ZvTabBar',
  components: { ZvSvgIcon },
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss">
.zv-tab-bar {
  .van-tabbar-item__text {
    font-size: 10px;
  }
}
</style>
